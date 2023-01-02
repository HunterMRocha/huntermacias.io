---
date: '1 Jan, 2023'
title: Pixel Perfect Collision - Pygame Masks
tagline: 'Topics: Pygame Mask Collision'
preview: >-
  A tutorial on how to use masks in pygame. It can be used for more advanced collisions or filling surfaces/giving them outlines. 
image: >-
  https://i.ytimg.com/vi/WfqXcyF0_b0/maxresdefault.jpg
---

# Guide

### Step 1: Basic Game Setup

```python
# /main.py
# import required libraries
import pygame, sys
from pygame.locals import QUIT


# pygame setup
pygame.init()   # activate pygame libary
screen_size = (500, 500)    # tuple for screen size
screen = pygame.display.set_mode(screen_size)   # set screen size
pygame.display.set_caption('Pixel Perfect Collision Detection') # set screen title 

```
---

### Step 2: Create a basic Player Class
```python 
# /main.py
# inherit sprite class
class Player(pygame.sprite.Sprite):
	def __init__(self):
		super().__init__()
		self.image = pygame.Surface((40, 40))
		self.image.fill('red')
		self.rect = self.image.get_rect(center = (300, 300))
```
---

### Step 2: Create a basic Obstacle Class
```python 
# /main.py
# inherit sprite class
class Obstacle(pygame.sprite.Sprite):
	def __init__(self):
		super().__init__()
		self.image = pygame.image.load("alpha.png").convert_alpha()
		self.image = pygame.transform.scale(self.image, (170, 170))
		self.rect = self.image.get_rect(center=(400,400))
```
---

#### Step 3: Creating your game loop

```python 
# /main.py
while True:
    # setting your screen background color
	screen.fill('white')

	# event for loop
	for event in pygame.event.get():
		if event.type == QUIT:
			pygame.quit()
			sys.exit()

	# update window graphics
	pygame.display.update()
```
---

#### Step 4: Updating your player and object animation

```python 
# /main.py
while True:
	screen.fill('white')
	
    # call built-in sprite draw method
    obstacle.draw(screen)
    player.draw(screen)

    # call player update method
    player.update() 
    
	# event for loop
	for event in pygame.event.get():
		if event.type == QUIT:
			pygame.quit()
			sys.exit()

	# update window graphics
	pygame.display.update()
```
---


#### Step 5: Changing plaer color on collision - using rectangles

```python 
# /main.py
while True:
	screen.fill('white')

	# updating and drawing
	obstacle.draw(screen)
	player.update() 
	player.draw(screen)

	# check rectangle collision     sprite         group   Remove?
	if pygame.sprite.spritecollide(player.sprite, obstacle, False):
		player.sprite.image.fill('green')
	else:
		player.sprite.image.fill('red')

	# event for loop
	for event in pygame.event.get():
		if event.type == QUIT:
			pygame.quit()
			sys.exit()

	# update window graphics
	pygame.display.update()
```
---

#### Step 6: Changing player color on collision - with masks

```python 
# /main.py
while True:
	screen.fill('white')

	# updating and drawing
	obstacle.draw(screen)
	player.update() 
	player.draw(screen)

	# .spritecollide(sprite, sprite_group, remove_bool, sprite_mask) 
	if pygame.sprite.spritecollide(player.sprite, obstacle, False, pygame.sprite.collide_mask):
		player.sprite.image.fill('green')
	else:
		player.sprite.image.fill('red')

	# event for loop
	for event in pygame.event.get():
		if event.type == QUIT:
			pygame.quit()
			sys.exit()

	# update window graphics
	pygame.display.update()
```
---

#### Step 7: Improving performance - check rectangle collision first

```python 
# /main.py
while True:
	screen.fill('white')

	# updating and drawing
	obstacle.draw(screen)
	player.update() 
	player.draw(screen)

	# .spritecollide(sprite, sprite_group, remove_bool, sprite_mask) 
	if pygame.sprite.spritecollide(player.sprite, obstacle, False):
		# collision with masks
		if pygame.sprite.spritecollide(player.sprite, obstacle, False,pygame.sprite.collide_mask):
			player.sprite.image.fill('green')
	else:
		player.sprite.image.fill('red')

	# event for loop
	for event in pygame.event.get():
		if event.type == QUIT:
			pygame.quit()
			sys.exit()

	# update window graphics
	pygame.display.update()
```
---

#### Note:

```It's important to check for rectangle collision first and then check mask collision because of performance. When you use masks in pygame to check collision it is an expensive task for the computer to perform. Therefore instead of always checking mask collision we are only going to check mask collision if we register a rectangle collision. This is going to improve our overall game performace greatly since rectangle collision checks do not cost as much processing power to perform```

---

## Table of Contents

1. Basic Game Setup
2. Create a basic Player Class
3. Create a basic Ovstacle Class
4. Updating your player and object animation
5. Changing plaer color on collision - using rectangles
6. Changing player color on collision - with masks
7. Improving Performance

---

## Links

source: [Pygame Mask Collision Detection](https://www.geeksforgeeks.org/collision-detection-in-pygame/).

![Pixel Perfect Detection](https://i.ytimg.com/vi/WfqXcyF0_b0/maxresdefault.jpg)
