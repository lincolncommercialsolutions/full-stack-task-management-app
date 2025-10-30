# Terminal Block Game

A modern terminal-based falling blocks puzzle game written in C++. Features smooth gameplay, progressive difficulty, and clean graphics using ncurses.

## Features

- **Smooth Terminal Graphics**: Clean block rendering with color support
- **Progressive Difficulty**: Game speed increases with level progression
- **Enhanced Scoring**: Points awarded for lines cleared and soft drops
- **Level System**: Automatic level advancement every 10 lines
- **Next Piece Preview**: See what's coming next
- **Hold Piece**: Hold a piece for strategic play
- **Ghost Piece**: Preview where your piece will land
- **Improved Controls**: Responsive input handling

## Controls

| Key | Action |
|-----|--------|
| `←` / `A` | Move left |
| `→` / `D` | Move right |
| `↓` / `S` | Soft drop (faster fall) |
| `↑` / `W` | Rotate clockwise |
| `Space` | Hard drop (instant) |
| `C` | Hold piece |
| `Q` | Quit game |
| `P` | Pause/Resume |

## Requirements

- Linux/Unix terminal with ncurses support
- C++17 compatible compiler (GCC 7+ or Clang 5+)
- ncurses development library

### Install Dependencies

**Ubuntu/Debian:**
```bash
sudo apt-get install libncurses5-dev libncurses-dev
```

**Fedora/RedHat:**
```bash
sudo dnf install ncurses-devel
```

**Arch Linux:**
```bash
sudo pacman -S ncurses
```

## Building

```bash
make
```

Or manually:
```bash
g++ -std=c++17 -O3 -o tetris main.cpp -lncurses
```

## Running

```bash
./tetris
```

## Gameplay

The objective is to fill horizontal lines with blocks to clear them and score points. As you clear lines, the game level increases and pieces fall faster. The game ends when pieces reach the top of the playing field.

**Scoring:**
- Single line: 100 × level
- Double lines: 300 × level  
- Triple lines: 500 × level
- Tetris (4 lines): 800 × level
- Soft drop: 1 point per cell
- Hard drop: 2 points per cell

## Development

This project uses modern C++ practices with clean, readable code structure. The game engine is modular and extensible for future enhancements.
