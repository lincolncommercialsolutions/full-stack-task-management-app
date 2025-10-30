#include <ncurses.h>
#include <cstdlib>
#include <ctime>
#include <vector>
#include <array>
#include <chrono>
#include <algorithm>
#include <random>

class BlockPuzzleGame {
private:
    static constexpr int BOARD_WIDTH = 10;
    static constexpr int BOARD_HEIGHT = 20;
    static constexpr int PREVIEW_SIZE = 4;
    
    struct Position {
        int x, y;
        Position(int x = 0, int y = 0) : x(x), y(y) {}
        Position operator+(const Position& other) const {
            return Position(x + other.x, y + other.y);
        }
    };
    
    struct TetrominoShape {
        std::array<std::array<bool, 4>, 4> pattern;
        int color;
        Position spawn_pos;
    };
    
    // Game state
    std::array<std::array<int, BOARD_WIDTH>, BOARD_HEIGHT> board;
    std::vector<TetrominoShape> shapes;
    int current_shape_idx;
    int next_shape_idx;
    int held_shape_idx;
    Position current_pos;
    int current_rotation;
    bool can_hold;
    
    // Game metrics
    int score;
    int level;
    int lines_cleared;
    int fall_timer;
    int fall_speed;
    bool game_over;
    bool paused;
    
    // Input handling
    int last_key;
    std::chrono::steady_clock::time_point last_fall;
    
    // Random number generation
    std::mt19937 rng;
    std::uniform_int_distribution<int> shape_dist;
    
public:
    BlockPuzzleGame() : rng(std::time(nullptr)), shape_dist(0, 6) {
        initializeShapes();
        resetGame();
    }
    
    void initializeShapes() {
        shapes.resize(7);
        
        // I-piece (cyan)
        shapes[0].pattern = {{
            {{false, false, false, false}},
            {{true,  true,  true,  true }},
            {{false, false, false, false}},
            {{false, false, false, false}}
        }};
        shapes[0].color = 1;
        shapes[0].spawn_pos = Position(3, 0);
        
        // O-piece (yellow)
        shapes[1].pattern = {{
            {{false, false, false, false}},
            {{false, true,  true,  false}},
            {{false, true,  true,  false}},
            {{false, false, false, false}}
        }};
        shapes[1].color = 2;
        shapes[1].spawn_pos = Position(4, 0);
        
        // T-piece (purple)
        shapes[2].pattern = {{
            {{false, false, false, false}},
            {{false, true,  false, false}},
            {{true,  true,  true,  false}},
            {{false, false, false, false}}
        }};
        shapes[2].color = 3;
        shapes[2].spawn_pos = Position(3, 0);
        
        // S-piece (green)
        shapes[3].pattern = {{
            {{false, false, false, false}},
            {{false, true,  true,  false}},
            {{true,  true,  false, false}},
            {{false, false, false, false}}
        }};
        shapes[3].color = 4;
        shapes[3].spawn_pos = Position(3, 0);
        
        // Z-piece (red)
        shapes[4].pattern = {{
            {{false, false, false, false}},
            {{true,  true,  false, false}},
            {{false, true,  true,  false}},
            {{false, false, false, false}}
        }};
        shapes[4].color = 5;
        shapes[4].spawn_pos = Position(3, 0);
        
        // J-piece (blue)
        shapes[5].pattern = {{
            {{false, false, false, false}},
            {{true,  false, false, false}},
            {{true,  true,  true,  false}},
            {{false, false, false, false}}
        }};
        shapes[5].color = 6;
        shapes[5].spawn_pos = Position(3, 0);
        
        // L-piece (orange)
        shapes[6].pattern = {{
            {{false, false, false, false}},
            {{false, false, true,  false}},
            {{true,  true,  true,  false}},
            {{false, false, false, false}}
        }};
        shapes[6].color = 7;
        shapes[6].spawn_pos = Position(3, 0);
    }
    
    void resetGame() {
        // Clear board
        for (auto& row : board) {
            row.fill(0);
        }
        
        // Reset game state
        score = 0;
        level = 1;
        lines_cleared = 0;
        fall_timer = 0;
        fall_speed = 50;
        game_over = false;
        paused = false;
        can_hold = true;
        held_shape_idx = -1;
        
        // Initialize pieces
        current_shape_idx = shape_dist(rng);
        next_shape_idx = shape_dist(rng);
        spawnNewPiece();
        
        last_fall = std::chrono::steady_clock::now();
    }
    
    void spawnNewPiece() {
        current_shape_idx = next_shape_idx;
        next_shape_idx = shape_dist(rng);
        current_pos = shapes[current_shape_idx].spawn_pos;
        current_rotation = 0;
        can_hold = true;
        
        if (isCollision(current_pos, current_rotation)) {
            game_over = true;
        }
    }
    
    std::array<std::array<bool, 4>, 4> getRotatedShape(int shape_idx, int rotation) const {
        auto pattern = shapes[shape_idx].pattern;
        
        for (int r = 0; r < rotation % 4; ++r) {
            std::array<std::array<bool, 4>, 4> rotated;
            for (int i = 0; i < 4; ++i) {
                for (int j = 0; j < 4; ++j) {
                    rotated[j][3-i] = pattern[i][j];
                }
            }
            pattern = rotated;
        }
        
        return pattern;
    }
    
    bool isCollision(Position pos, int rotation) const {
        auto pattern = getRotatedShape(current_shape_idx, rotation);
        
        for (int i = 0; i < 4; ++i) {
            for (int j = 0; j < 4; ++j) {
                if (pattern[i][j]) {
                    int board_x = pos.x + j;
                    int board_y = pos.y + i;
                    
                    if (board_x < 0 || board_x >= BOARD_WIDTH ||
                        board_y < 0 || board_y >= BOARD_HEIGHT ||
                        board[board_y][board_x] != 0) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
    
    void placePiece() {
        auto pattern = getRotatedShape(current_shape_idx, current_rotation);
        int color = shapes[current_shape_idx].color;
        
        for (int i = 0; i < 4; ++i) {
            for (int j = 0; j < 4; ++j) {
                if (pattern[i][j]) {
                    int board_x = current_pos.x + j;
                    int board_y = current_pos.y + i;
                    if (board_y >= 0 && board_y < BOARD_HEIGHT &&
                        board_x >= 0 && board_x < BOARD_WIDTH) {
                        board[board_y][board_x] = color;
                    }
                }
            }
        }
        
        clearLines();
        spawnNewPiece();
    }
    
    void clearLines() {
        std::vector<int> full_lines;
        
        for (int y = 0; y < BOARD_HEIGHT; ++y) {
            bool full = true;
            for (int x = 0; x < BOARD_WIDTH; ++x) {
                if (board[y][x] == 0) {
                    full = false;
                    break;
                }
            }
            if (full) {
                full_lines.push_back(y);
            }
        }
        
        if (!full_lines.empty()) {
            // Remove full lines from bottom to top
            for (auto it = full_lines.rbegin(); it != full_lines.rend(); ++it) {
                for (int y = *it; y > 0; --y) {
                    board[y] = board[y-1];
                }
                board[0].fill(0);
            }
            
            // Update score and level
            int cleared = full_lines.size();
            lines_cleared += cleared;
            
            int line_points[] = {0, 100, 300, 500, 800};
            score += line_points[std::min(cleared, 4)] * level;
            
            // Level up every 10 lines
            int new_level = (lines_cleared / 10) + 1;
            if (new_level > level) {
                level = new_level;
                fall_speed = std::max(5, 50 - (level - 1) * 3);
            }
        }
    }
    
    Position getGhostPosition() const {
        Position ghost_pos = current_pos;
        while (!isCollision(Position(ghost_pos.x, ghost_pos.y + 1), current_rotation)) {
            ghost_pos.y++;
        }
        return ghost_pos;
    }
    
    bool moveLeft() {
        Position new_pos(current_pos.x - 1, current_pos.y);
        if (!isCollision(new_pos, current_rotation)) {
            current_pos = new_pos;
            return true;
        }
        return false;
    }
    
    bool moveRight() {
        Position new_pos(current_pos.x + 1, current_pos.y);
        if (!isCollision(new_pos, current_rotation)) {
            current_pos = new_pos;
            return true;
        }
        return false;
    }
    
    bool moveDown() {
        Position new_pos(current_pos.x, current_pos.y + 1);
        if (!isCollision(new_pos, current_rotation)) {
            current_pos = new_pos;
            score += 1; // Soft drop bonus
            return true;
        }
        return false;
    }
    
    void hardDrop() {
        while (moveDown()) {
            score += 1; // Hard drop bonus
        }
        placePiece();
    }
    
    bool rotate() {
        int new_rotation = (current_rotation + 1) % 4;
        
        // Try basic rotation
        if (!isCollision(current_pos, new_rotation)) {
            current_rotation = new_rotation;
            return true;
        }
        
        // Try wall kicks
        std::vector<Position> kick_offsets = {
            Position(-1, 0), Position(1, 0), Position(0, -1),
            Position(-1, -1), Position(1, -1)
        };
        
        for (const auto& offset : kick_offsets) {
            Position test_pos = current_pos + offset;
            if (!isCollision(test_pos, new_rotation)) {
                current_pos = test_pos;
                current_rotation = new_rotation;
                return true;
            }
        }
        
        return false;
    }
    
    void holdPiece() {
        if (!can_hold) return;
        
        if (held_shape_idx == -1) {
            held_shape_idx = current_shape_idx;
            spawnNewPiece();
        } else {
            std::swap(current_shape_idx, held_shape_idx);
            current_pos = shapes[current_shape_idx].spawn_pos;
            current_rotation = 0;
        }
        
        can_hold = false;
    }
    
    void update() {
        if (game_over || paused) return;
        
        auto now = std::chrono::steady_clock::now();
        auto elapsed = std::chrono::duration_cast<std::chrono::milliseconds>(now - last_fall).count();
        
        if (elapsed >= fall_speed) {
            if (!moveDown()) {
                placePiece();
            }
            last_fall = now;
        }
    }
    
    void handleInput(int key) {
        if (game_over) {
            if (key == 'r' || key == 'R') {
                resetGame();
            }
            return;
        }
        
        switch (key) {
            case KEY_LEFT:
            case 'a':
            case 'A':
                moveLeft();
                break;
            case KEY_RIGHT:
            case 'd':
            case 'D':
                moveRight();
                break;
            case KEY_DOWN:
            case 's':
            case 'S':
                moveDown();
                break;
            case KEY_UP:
            case 'w':
            case 'W':
                rotate();
                break;
            case ' ':
                hardDrop();
                break;
            case 'c':
            case 'C':
                holdPiece();
                break;
            case 'p':
            case 'P':
                paused = !paused;
                break;
            case 'q':
            case 'Q':
                game_over = true;
                break;
            case 'r':
            case 'R':
                resetGame();
                break;
        }
    }
    
    void draw() {
        clear();
        
        // Draw border
        for (int x = 0; x <= BOARD_WIDTH + 1; ++x) {
            mvaddch(0, x * 2, '#');
            mvaddch(BOARD_HEIGHT + 1, x * 2, '#');
        }
        for (int y = 0; y <= BOARD_HEIGHT + 1; ++y) {
            mvaddch(y, 0, '#');
            mvaddch(y, (BOARD_WIDTH + 1) * 2, '#');
        }
        
        // Draw board
        for (int y = 0; y < BOARD_HEIGHT; ++y) {
            for (int x = 0; x < BOARD_WIDTH; ++x) {
                int color = board[y][x];
                if (color > 0) {
                    attron(COLOR_PAIR(color));
                    mvaddstr(y + 1, (x + 1) * 2, "██");
                    attroff(COLOR_PAIR(color));
                }
            }
        }
        
        // Draw ghost piece
        if (!game_over && !paused) {
            Position ghost_pos = getGhostPosition();
            auto pattern = getRotatedShape(current_shape_idx, current_rotation);
            
            attron(COLOR_PAIR(8)); // Gray color for ghost
            for (int i = 0; i < 4; ++i) {
                for (int j = 0; j < 4; ++j) {
                    if (pattern[i][j]) {
                        int x = ghost_pos.x + j;
                        int y = ghost_pos.y + i;
                        if (x >= 0 && x < BOARD_WIDTH && y >= 0 && y < BOARD_HEIGHT &&
                            board[y][x] == 0) {
                            mvaddstr(y + 1, (x + 1) * 2, "░░");
                        }
                    }
                }
            }
            attroff(COLOR_PAIR(8));
        }
        
        // Draw current piece
        if (!game_over && !paused) {
            auto pattern = getRotatedShape(current_shape_idx, current_rotation);
            int color = shapes[current_shape_idx].color;
            
            attron(COLOR_PAIR(color));
            for (int i = 0; i < 4; ++i) {
                for (int j = 0; j < 4; ++j) {
                    if (pattern[i][j]) {
                        int x = current_pos.x + j;
                        int y = current_pos.y + i;
                        if (x >= 0 && x < BOARD_WIDTH && y >= 0 && y < BOARD_HEIGHT) {
                            mvaddstr(y + 1, (x + 1) * 2, "██");
                        }
                    }
                }
            }
            attroff(COLOR_PAIR(color));
        }
        
        // Draw UI
        int ui_start = (BOARD_WIDTH + 3) * 2;
        mvprintw(1, ui_start, "Score: %d", score);
        mvprintw(2, ui_start, "Level: %d", level);
        mvprintw(3, ui_start, "Lines: %d", lines_cleared);
        
        // Draw next piece
        mvprintw(5, ui_start, "Next:");
        auto next_pattern = shapes[next_shape_idx].pattern;
        int next_color = shapes[next_shape_idx].color;
        attron(COLOR_PAIR(next_color));
        for (int i = 0; i < 4; ++i) {
            for (int j = 0; j < 4; ++j) {
                if (next_pattern[i][j]) {
                    mvaddstr(6 + i, ui_start + j * 2, "██");
                }
            }
        }
        attroff(COLOR_PAIR(next_color));
        
        // Draw held piece
        if (held_shape_idx >= 0) {
            mvprintw(11, ui_start, "Hold:");
            auto held_pattern = shapes[held_shape_idx].pattern;
            int held_color = shapes[held_shape_idx].color;
            if (can_hold) {
                attron(COLOR_PAIR(held_color));
            } else {
                attron(COLOR_PAIR(8)); // Gray when can't hold
            }
            for (int i = 0; i < 4; ++i) {
                for (int j = 0; j < 4; ++j) {
                    if (held_pattern[i][j]) {
                        mvaddstr(12 + i, ui_start + j * 2, "██");
                    }
                }
            }
            if (can_hold) {
                attroff(COLOR_PAIR(held_color));
            } else {
                attroff(COLOR_PAIR(8));
            }
        }
        
        // Draw controls
        mvprintw(17, ui_start, "Controls:");
        mvprintw(18, ui_start, "A/D: Move");
        mvprintw(19, ui_start, "W: Rotate");
        mvprintw(20, ui_start, "S: Soft drop");
        mvprintw(21, ui_start, "Space: Hard drop");
        mvprintw(22, ui_start, "C: Hold");
        mvprintw(23, ui_start, "P: Pause");
        mvprintw(24, ui_start, "Q: Quit");
        mvprintw(25, ui_start, "R: Restart");
        
        if (paused) {
            mvprintw(BOARD_HEIGHT/2, 4, "PAUSED - Press P to continue");
        }
        
        if (game_over) {
            mvprintw(BOARD_HEIGHT/2, 4, "GAME OVER - Press R to restart");
        }
        
        refresh();
    }
    
    bool isGameOver() const {
        return game_over && last_key == 'q';
    }
    
    void run() {
        initscr();
        cbreak();
        noecho();
        keypad(stdscr, TRUE);
        nodelay(stdscr, TRUE);
        curs_set(0);
        
        // Initialize colors
        if (has_colors()) {
            start_color();
            init_pair(1, COLOR_CYAN, COLOR_BLACK);
            init_pair(2, COLOR_YELLOW, COLOR_BLACK);
            init_pair(3, COLOR_MAGENTA, COLOR_BLACK);
            init_pair(4, COLOR_GREEN, COLOR_BLACK);
            init_pair(5, COLOR_RED, COLOR_BLACK);
            init_pair(6, COLOR_BLUE, COLOR_BLACK);
            init_pair(7, COLOR_WHITE, COLOR_BLACK);
            init_pair(8, COLOR_BLACK, COLOR_BLACK);
        }
        
        while (!isGameOver()) {
            int key = getch();
            if (key != ERR) {
                last_key = key;
                handleInput(key);
            }
            
            update();
            draw();
            
            napms(16); // ~60 FPS
        }
        
        endwin();
    }
};

int main() {
    BlockPuzzleGame game;
    game.run();
    return 0;
}