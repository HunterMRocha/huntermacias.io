---
date: '2023-01-04T08:04:11.634Z'
title: Working with Sprites
tagline: smooth game movement
preview: >-
  This is part of this tutorial series, “Game Development with Pygame” we will
  be going over sprites in PyGame. In addition to this we will cover player
  movement and wall collision.
image: 'https://i.ytimg.com/vi/7QX8y6R9Hi8/maxresdefault.jpg'
---
# What is a sprite?
---
>>
>>A sprite is a computer graphics term for any object on the screen that can move around. 
>>When you play games, all the objects you see are sprites. 
>>Sprites can be animated, controlled by the player, and can even interact with each other.
>>
>>In the code snipped below we we create two variables:
>>clock - which will be used to set our games FPS (Frames Per Second)
>>all_sprites - which will be used to contain all sprites
>>


```python
 clock = pygame.time.Clock()
 all_sprites = pygame.sprite.Group()
```

>>
>>Now we can take advantage of the sprite group by adding the following in our loop:
>>

```python
# .update() is built-in to pygame sprites
all_sprites.update() 

# draw / render
screen.fill(BLACK) 
all_sprites.draw(screen)
```

>>
>>Now let's make sure we add every sprite to the all_sprites group.
>>We do this so that we can run the update() and draw() methods 
>>on every sprite within the sprite group
>>

# Creating a sprite
---
>>
>>Now we’re ready to make our first sprite. In Pygame, sprites are objects. 
>>If you haven’t worked with objects in Python before, no worries.
>>Objects are just a convenient way of grouping data and code into a single entity. 
>>It may be a little confusing at first, but Pygame sprites are a good way to practice with objects.
>>
>>Now, we start by defining our player class:
>>

```python
class Player(pygame.sprite.Sprite):
```

>>
>>class tells python we’re defining a new object
>>This new object will have all the features and qualities that represent our player 
>>We're also inheriting pygame.sprite.Sprite
>>
>>The first bit of code we need in a class is the __init__() method.
>>The __init__() defines what code runs when an object of that type is created. 
>>
>>Note: There are two properties that every Pygame sprite must have: 
>>- image
>>- rect
>>

```python
class Player(pygame.sprite.Sprite):
    def __init__(self):
        # running the pygame sprite init method
        pygame.sprite.Sprite.__init__(self)
        # class attributes
        self.w, self.h = (50, 50)
        self.image = pygame.Surface((self.w, self.h))
        self.image.fill(GREEN)
        self.rect = self.image.get_rect()
```

>>
>>The first line, pygame.sprite.Sprite.__init__(self) is required by Pygame.
>>It runs the built-in Sprite classes initializer. 
>>Next, we define an image - by creating a simple 50x50 green square.
>>Later we’ll learn how to make the sprite’s image be something 
>>fancier, like a character or spaceship.
>>
>>Next, we must define the sprite’s rect, which is short for “rectangle”. 
>>Rectangles are used everywhere in Pygame applications.
>>This is largely to be able to keep track of an object’s coordinates. 
>>The get_rect() command just creates a rectangle based on the images values
>>
>>We can use the rect to put the sprite wherever we want it on the screen. 
>>
>>Let’s start by placing the sprites position in the center of the screen.
>>To do this we must change the value of our players rect.center property.
>>

```python
class Player(pygame.sprite.Sprite):
    def __init__(self):
        pygame.sprite.Sprite.__init__(self)
        self.image = pygame.Surface((50, 50))
        self.image.fill(GREEN)
        self.rect = self.image.get_rect()
        # set rect.center to be center of screen
        self.rect.center = (SCREENWIDTH / 2, SCREENHEIGHT / 2)
```

>>
>>Now that we’ve defined our Player sprite, we need to create a “spawn” 
>>To do this we just need to make an instance of the Player class. 
>>We also need to make sure we add the sprite to the all_sprites group:
>>

```python
# group containing all sprites
all_sprites = pygame.sprite.Group()

# create instance of Player 
# player is now of type object
player = Player()

# add player to sprite group
all_sprites.add(player)
 
```

>>
>>Now run your program, you’ll see the green square. 
>>Try changing the rect value to something else to change the rect placement
>>
![sprite-on-screen](https://kidscancode.org/blog/img/sprite_example_1.png)


# Sprite movement

>>
>> Remember, in the game loop, we have the all_sprites.update(). 
>> This means that for every sprite in the group, 
>> Pygame will look for an update() function and run it. 
>> So to get our sprite to move, we just need to define its update rules:
>>

```python
class Player(pygame.sprite.Sprite):
    def __init__(self):
        pygame.sprite.Sprite.__init__(self)
        self.image = pygame.Surface((50, 50))
        self.image.fill(GREEN)
        self.rect = self.image.get_rect()
        self.rect.center = (WIDTH / 2, HEIGHT / 2)

    # create an update method that changes rect.x by 5 every Frame or method call
    def update(self):
        self.rect.x += 5
```

>>
>>This means every time frame, we increase the sprite's x-coordinate by 5 pixels. 
>>Go ahead and run it and watch the sprite run off the screen
>>

![sprite-moving-off-screen](https://kidscancode.org/blog/img/sprite_example_2.gif)

>>
>>Let’s fix that by making the sprite wrap around
>>Whenever it reaches the right side of the screen, we will move it to the left side. 
>>We can do this easily by using one of the convenient “handles” on the sprite’s rect:
>>

![rect-coordinates](https://kidscancode.org/blog/img/rect_handles.png)

>>
>>So if the left edge of the rect goes off the screen, we’ll set the right edge to 0:
>>

```python
class Player(pygame.sprite.Sprite):
    def __init__(self):
        pygame.sprite.Sprite.__init__(self)
        self.image = pygame.Surface((50, 50))
        self.image.fill(GREEN)
        self.rect = self.image.get_rect()
        self.rect.center = (WIDTH / 2, HEIGHT / 2)

    def update(self):
        self.rect.x += 5
        # if the left side of rect passes screen 
        # then teleport to right side
        if self.rect.left > WIDTH:
            self.rect.right = 0

```

>>
>>And now we can see the sprite will appear to wrap around the screen:
>>

![rect-wall-teleport](https://kidscancode.org/blog/img/sprite_example_3.gif)

>> 
>>That will do it for this lesson. Go ahead and experiment
>>Notice that anything you put in the update() method will execute every frame. 
>>Below I've listed out a few challenges you can try on your own 
>>- make sprite move up and down
>>- make sprite bounce off the wall
>>- change the color of the sprite everytime you pass a wall
>>
>>In the next tutorial, we’ll show you how to use art for your sprite
>>Instead of using a plain square we will use an animated character.
>>
---

## Table of Contents
>
>1. What is a sprite?
>2. Creating a sprite
>3. Sprite movement
>
---

## 🤝 Contributing

>Become a content creator! Get in contact with me about posting your material at huntermacias20@gmail.com
>
>Feel free to check [blog page](https:huntermacias.io/blog) to create free account for more access to panda bit content.

## Become a Sponsor!!


>Sponsorship Includes
>> Access to discord server
>>
>> Instagram story and post
>>
>> YouTube Promo - 30 seconds
>>
>> Access to over 50 Github Repo projects
>>
>> Custom Ad on Site
>
>
>View home page for sponsorship benefits
>
>>Sponsor Now ❤️ ❤️ [Click Me Please](https://checkout.stripe.com/c/pay/ppage_1MLodEGKJO6noGmdULANectI#fidkdWxOYHwnPyd1blppbHNgWjA0SENLPEBCTk9KM2tqQmhhVjw8Rm5QQGFUVDI1a3RJXUhdSVJLU2ZKUmdINjx0f25%2Ff2htMmB0Uk5ucTUxNjduPElDa31uMlJhVVZQQ1VmSXxkN2hEPWdzNTVtUk9wQGdXdScpJ2hsYXYnP34nYnBsYSc%2FJzRjN2M0Y2dnKDIyMjwoMTVnYyhkNzE0KGc0MzUzPGFkYT01NjJmYGAyMycpJ2hwbGEnPycyYGZkYTZkNSg8NWBhKDFmZDIoPDMxYCgzNTQwNjQxNWc3YT1gNjxgZjYnKSd2bGEnPydkZjxkNmZhPShhPDdnKDFgYGYoZD1mNCg9ZjYxZzw2PGM0PWcyPTM0ZDEneCknZ2BxZHYnP15YKSdpZHxqcHFRfHVgJz8ndmxrYmlgWmxxYGgnKSd3YGNgd3dgd0p3bGJsayc%2FJ21xcXV2PyoqbXBrcWB3aGRmbGR2K2xqJyknaWpmZGlgJz9rcGlpeCUl) 

