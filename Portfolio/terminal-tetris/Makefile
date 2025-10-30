CXX = g++
CXXFLAGS = -std=c++17 -Wall -Wextra -O3 -march=native
LDFLAGS = -lncurses
TARGET = tetris
SOURCES = main.cpp
OBJECTS = $(SOURCES:.cpp=.o)

.PHONY: all clean debug release install uninstall

all: $(TARGET)

$(TARGET): $(OBJECTS)
	$(CXX) $(OBJECTS) -o $(TARGET) $(LDFLAGS)

%.o: %.cpp
	$(CXX) $(CXXFLAGS) -c $< -o $@

debug: CXXFLAGS = -std=c++17 -Wall -Wextra -g -DDEBUG
debug: $(TARGET)

release: CXXFLAGS = -std=c++17 -O3 -DNDEBUG -march=native
release: $(TARGET)

clean:
	rm -f $(OBJECTS) $(TARGET)

install: $(TARGET)
	cp $(TARGET) /usr/local/bin/

uninstall:
	rm -f /usr/local/bin/$(TARGET)

run: $(TARGET)
	./$(TARGET)
