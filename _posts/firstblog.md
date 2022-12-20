---
date: '18 Aug, 2021'
title: Implement Collision Detection - Pygame
tagline: 'Topics: Pygame Collision'
preview: >-
  In this tutorial, we will go over a variety of different ways to implement
  collision detection in your pygame application. 
image: >-
  https://wiki.batocera.org/lib/exe/fetch.php?tok=f9ee51&media=https%3A%2F%2Fraw.githubusercontent.com%2Ffabricecaruso%2Fes-theme-carbon%2Fmaster%2Fart%2Fconsoles%2Fpygame.png
---

# Guide

### Step 1: Basic Game Setup

```python
import pygame
import random

# initialize pygame objects
pygame.init()

# define the colours
white = (255, 255, 255)
red = (255, 0, 0)
green = (0, 255, 0)
blue = (0, 0, 255)
black = (0, 0, 0)

# set the Dimensions
width = 650
height = 700

# size of a block
pixel = 64

# create screen
screen = pygame.display.set_mode((width, height))

# set window title
pygame.display.set_caption("Collision Detection")

# load game icon image
gameIcon = pygame.image.load("rectangleBlock.png")

# set window icon
pygame.display.set_icon(gameIcon)

# load back ground image
backgroundImg = pygame.image.load("wallBackground.jpg")

```
#### Basic Game Setup - Overview
```This is the basic simple code need to create a window screen, window title, load images/icon, and create pre-defined variables that we will use to make our game a bit more readable. The pixel variable is the size of the block image i.e 64 pixels.```

---

#### Step 2: Game Input

```python
# load the image
playerImage = pygame.image.load("player.png")

# set the position
playerXPosition = (width/2) - (pixel/2)

# So that the player will be at height of 20 above the base
playerYPosition = height - pixel - 10	

# set initially 0
playerXPositionChange = 0

# function for setting the image at particular coordinates
def player(x, y):
    # paste image on screen object
    screen.blit(playerImage, (x, y))

# load the image
blockImage = pygame.image.load("rectangleBlock.png")

# set the random position
blockXPosition = random.randint(0, (width - pixel))

blockYPosition = 0 - pixel

# set the speed of
# the block
blockXPositionChange = 0
blockYPositionChange = 2

# function for setting the image at particular coordinates
def block(x, y):
    # paste image on screen object
    screen.blit(blockImage,(x, y))

```

#### Player Setup - Overview

```Here we are displaying the player and the block at their respective X and Y positions. The block’s X position is random in each round.Note: Wherever the pixel word is used, it is used to subtract 64 pixels from the given position so that the full image is shown E.g: The block if shown is at width position, then it will be drawn starting from that point and hence it will be shown out of the screen. Hence we are subtracting 64 pixels to be viewing the image full. Now, First, we check if the block passes through the player’s horizontal line. We will set the range such that the block’s base horizontal line should match the player’s horizontal line. In the above image, block 2 and 3 having their baseline out of range of player P’s top and bottom surface line. Hence, they are not in the collision range. Block 1’s baseline is in the range of the player P’s top and bottom. Hence we further see that the block comes in the range of the player’s vertical range or not. Here, we check the range of player’s left and right side surface dimensions with the blocks left and right surfaces. Here, the blocks 2 and 3 when coming down, will collide the player, and hence the range of 2 and 3 block’s range are between player’s X and player’s Y position. Hence, this concept is to used to detect the collision.```

---

#### Step 3: Collision Detection

```python
# define a function for
# collision detection
def crash():
    # take a global variable
    global blockYPosition

    # check conditions
    if playerYPosition < (blockYPosition + pixel):

      if ((playerXPosition > blockXPosition
        and playerXPosition < (blockXPosition + pixel))
        or ((playerXPosition + pixel) > blockXPosition
        and (playerXPosition + pixel) < (blockXPosition + pixel))):

        blockYPosition = height + 1000

```

#### Collision Detection - Overview

```The crash function defines the collision condition. In the first IF condition, we check the horizontal collision. Here, if the player’s Y position is less than blocks Y position, i.e the block is passed away from the player’s horizontal range, then the next condition is to be checked is horizontal. Pixel is added to blockYPosition because its Y position is at top of the block and the bottom or base of the block is a block’s top position + its pixel size(image size).The second IF condition checks the vertical collision. If the block is passing from the horizontal range then only check for vertical, so that the block’s collision is detected in all its four sides. Now, if the players X position is greater then block’s X position, i.e block is at left w.r.t player. Here, if the block’s starting position is less than player starting position and block’s end position(block Y position + pixel) is greater than player starting position, this means that the block will overlap the player’s starting position and hence collide. This is shown in the above vertical collision image for block 2. Similarly, the second range is given that if the blocks start position is less than the player’s end position and blocks end position is greater than the player’s end position. This is shown for the same image for block 3. The image clearly explains the view of the collision. Hence, if a collision happens, we will move the block to below the screen i.e at 1000+ distance below so that it would be invisible and the new block will not appear.```

---

#### Step 3: Game Loop

```python
running = True

while running:
  # set the image on screen object
  screen.blit(backgroundImg, (0, 0))

  # loop through all events
  for event in pygame.event.get():  
    # check the quit condition
    if event.type == pygame.QUIT:
        # quit the game
        pygame.quit()

    # movement key control of player
    if event.type == pygame.KEYDOWN:
        if event.key == pygame.K_RIGHT:
            playerXPositionChange = 3
        if event.key == pygame.K_LEFT:
            playerXPositionChange = -3

    if event.type == pygame.KEYUP:
        if event.key == pygame.K_RIGHT or pygame.K_LEFT:
            playerXPositionChange = 0

```

#### Game Loop - Overview 
```
This is the gaming loop where the movement of the player is controlled. and the game is started. 
```

---

#### Step 5: Movement + Boundary Check

```python
while running: # ...cont
    # Boundaries to the Player if it comes at right end, stay at right end and does not exceed
    if playerXPosition >= (width - pixel):
        playerXPosition = (width - pixel)

    # if it comes at left end, stay at left end and does not exceed
    if playerXPosition <= 0:
        playerXPosition = 0


    # Multiple Blocks Movement after each other
    # and condition used because of game over function
    if (blockYPosition >= height - 0 and
        blockYPosition <= (height + 200)):

    blockYPosition = 0 - pixel

    # randomly assign value in range
    blockXPosition = random.randint(0, (width - pixel))


    # movement of Player
    playerXPosition += playerXPositionChange
    
    # movement of Block
    blockYPosition += blockYPositionChange
    
    # player Function Call
    player(playerXPosition, playerYPosition)
    
    # block Function Call
    block(blockXPosition, blockYPosition)
    
    # crash function call
    crash()
    
    # update screen
    pygame.display.update()
```

#### Movement + Boundary Check Overview

```These are the boundaries to the player so that when the player moves to its rightmost or leftmost position on the screen, it should not go further and bounce back. When the block without colliding goes away from the player, then we need to let him come again from the top. Hence we provide a condition that if the block’s Y position is below the height of the screen and below height+200(as above 1000+, the block appears when the block has collided), then move it again at the top. At the last, the movement of the player and the block is given and the screen is refreshed```

---

## Table of Contents

1. Basic Game Setup
2. Player Setup 
3. Collision Detection
4. Game Loop
5. Movement + Boundary Check

---

## Links

source: [Pygame Collision Detection](https://www.geeksforgeeks.org/collision-detection-in-pygame/).

![Collision Detection](https://wiki.batocera.org/lib/exe/fetch.php?tok=f9ee51&media=https%3A%2F%2Fraw.githubusercontent.com%2Ffabricecaruso%2Fes-theme-carbon%2Fmaster%2Fart%2Fconsoles%2Fpygame.png)
