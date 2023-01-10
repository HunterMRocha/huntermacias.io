---
date: '2023-01-04T11:20:08.758Z'
title: Asteroids in PyGame
tagline: >-
  Tutorial coming soon! Below you will find information regarding its each
  tutorials release
preview: >-
  Follow along step-by-step as we build a space shooter asteroids game. Some of
  the things you'll learn how to do: Player Controls (keyboard), Handling
  Collisions, Sprite Animations, Sound and Music, Ending the game (and
  restarting)
image: 'https://media.giphy.com/media/DyMkDYUxIwPVnPOrsb/giphy-downsized-large.gif'
---

# Asteroids Tutorial Part 1: Player Sprite and Controlss
>> Code Release Date: Jan 4th, 2023
>> Video Release Date: Jan 4th, 2023

>> [Download Starter Code](https://github.com/HunterMRocha/asteroids.git "download")

---

![Demo-Version-1](http://kidscancode.org/img/shmup_sample.gif "download")

### Step 1: Minor Changes to Skeleton Code
##### Go ahead and make the following changes to the skeleton code
```python
WIDTH = 480
HEIGHT = 680
FPS = 60

pygame.display.set_caption("Asteroids")
```
---
### Step 2: Creating a Basic Player
```python
class Player(pygame.sprite.Sprite):
  def __init__(self):
    pygame.sprite.Sprite.__init__(self)
    self.image = pygame.Surface(40,40) # basic rectangle (for now)
    self.image.fill(GREEN)
    self.rect = self.image.get_rect() # create rect property
    self.rect.centerx = WIDTH / 2 # center x position on screen
    self.rect.bottom = HEIGHT - 10 # 10 pixels up from the bottom
    self.speedx = 0 # initial speed

  def update(self): 
    self.speedx = 0
    keys = pygame.key.get_pressed() # returns a list of all keys actively pressed
    if keys[pygame.K_LEFT]: 
      self.speedx = -5
    if keys[pygame.K_RIGHT]:
      self.speedx = 5

    self.rect.x += self.speedx


# end of Player class

all_sprites = pygame.sprite.Group()
player = Player()
all_sprites.add(player) 


# Game Loop
while running:
  ...

 
```
#### Example Output
![output-ex-tut1-1](https://media.giphy.com/media/rcoz6HyxW2gNroe0ko/giphy.gif)
---

### Step 3: Check Wall Collision
```python
  # Player update() changes  
    def update(self): 
      self.speedx = 0
      keys = pygame.key.get_pressed() # returns a list of all keys actively pressed
      if keys[pygame.K_LEFT]: 
        self.speedx = -5
      if keys[pygame.K_RIGHT]:
        self.speedx = 5

      self.rect.x += self.speedx

      # this code will prevent our player from going through the left and right wall
      if self.rect.right > WIDTH:
        self.rect.right = WIDTH
      if self.rect.left < 0:
        self.rect.left < 0:
``` 
---

# Asteroids Tutorial Part 2: Enemy Sprites
>> Code Release Date: Jan 4th, 2023
>> Video Release Date: Jan 4th, 2023

### Step 1: Adding Mob Class - aka enemy 

```python
class Mob(pygame.sprite.Sprite):
  def __init__(self):
    pygame.sprite.Sprite().__init__(self)
    self.image = pygame.Surface((30, 40))
    self.image.fill(RED)
    self.rect = self.image.get_rect()
```

### Step 2: Spawning Mob
> goal: spawn mob at random locations at the top of our screen
> example: spawn mob within (50, WIDTH-50) for x & (-500, -50) for y

```python
# add randrange libary
from random import randrange

class Mob(pygame.sprite.Sprite):
  def __init__(self):
    pygame.sprite.Sprite().__init__(self)
    self.image = pygame.Surface((30, 40))
    self.image.fill(RED)
    self.rect = self.image.get_rect()

    self.rect.x = randrange(50, WIDTH - self.rect.width) # set x
    self.rect.y = randrange(-100, -40) # set y 
    self.speedy = randrange(1, 8) # some slow some fast

  # mob update method
  def update(self):
    # move down screen
    self.rect.y += self.speedy

    # if mob goes off bottom of screen then reset position
    if self.rect.top > HEIGHT + 10:
      self.rect.x = randrange(50, WIDTH - self.rect.width) # set x
      self.rect.y = randrange(-100, -40) # set y 
      self.speedy = randrange(1, 8) # some slow some fast
# out of class

all_sprites = pygame.sprite.Group()

# create a mobs group (easy to check collision/remove sprites when they're in groups)
mobs = pygame.sprite.Group()

# create 8 mobs
for i in range(8):
  m = Mob()
  all_sprites.add(m) # add mob to all sprites group
  mobs.add(m) # add mob to mobs group
```
#### Example Output
![output-ex-tut1-2](https://media.giphy.com/media/jvVwT4swGxkSS4ijcO/giphy.gif)

#### We can easily add some horizontal movement by adding the following snippets:
```python
class Mob(pygame.sprite.Sprite):
  def __init__(self):
    self.speedx = randrange(-3, 3)

  def update(self):
    # move rect.x by x speed
    self.rect.x += self.speedx

    # check if mobs go off the side of the screen then respawn aswell
    offscreen = (self.rect.top > HEIGHT + 10 or self.rect.left -25 or self.rect.right > WIDTH + 20)
    if offscreen:
      self.rect.x = randrange(50, WIDTH - self.rect.width) # set x
      self.rect.y = randrange(-100, -40) # set y 
      self.speedy = randrange(1, 8) # some slow some fast

```
---

# Asteroids Tutorial Part 3: Collisions (and Bullets!)

##### Step 1: Mob / Player Collision 
>
> We need to look at the rectangle of the mob and our player
> If they overlap then we have a collision
> goal: end game if we collide with a mob
>

```python

while running: 
  # keep loop running at the right speed
  clock.tick(FPS)
  # Process input (events)
  for event in pygame.event.get():
    # check for closing window
    if event.type == pygame.QUIT:
      running = False

  # Update
  all_sprites.update()

  # check to see if mob hit the player
  # use: pygame.sprite.spritecollide(sprite, sprite_group, kill_sprite) -> returns list
  # this line will tell us if player hit one of the mobs inside mobs
  # kill_sprite essentially means don't remove the mob when they hit the player
  # TLDR: returns a list of the mobs we hit
  hits = pygame.sprite.spritecollide(player, mobs, False)
  if hits:
    # game over
    running = False

```

>
> test your code and when a mob collides with our player the game should end
> In the future we will handle collision differently - so the game doesn't end
>

##### Step 2: Adding Bullets + Shooting 

```python
class Bullet(pygame.sprite.Sprite):
  def __init__(self, x, y):
    pygame.sprite.Sprite.__init__(self)
    self.image = pygame.Surface((10, 20))
    self.image.fill(WHITE)
    self.rect = self.image.get_rect()
    self.rect.bottom = y
    self.rect.centerx = x
    self.speedy = -10

  def update(self):
    self.rect.y += self.speedy
    # kill if it moves off the top of the screen
    # .kill() is a command that kills a sprite and removes it from all of its groups
    if self.rect.bottom < 0:
      self.kill()

# out of class
all_sprites = pygame.sprite.Group()
mobs = pygame.sprite.Group()
bullets = pygame.sprite.Group()


while running: 
  # keep loop running at the right speed
  clock.tick(FPS)
  # Process input (events)
  for event in pygame.event.get():
    # check for closing window
    if event.type == pygame.QUIT:
      running = False
    # checking for key press event
    elif event.type == pygame.KEYDOWN:
      # check space key
      if event.key == pygame.K_SPACE: 
        # now we need to create a shoot() inside of our player
        player.shoot()


class Player(pygame.sprite.Sprite):
  def __init__(self):
  def update(self):

  def shoot(self):  
    # create bullet object
    bullet = Bullet(self.rect.centerx, self.rect.top)
    # add bullet to all sprites
    all_sprites.add(bullet)

    # add bullet to a bullet group (that we now need to create)
    bullets.add(bullet)
```

![Example Output](https://media.giphy.com/media/F3dd7aDnsygUszIK3L/giphy.gif)

### Step 3: Mob / Bullet Collision

```python
while running: 
  # keep loop running at the right speed
  clock.tick(FPS)
  # Process input (events)
  for event in pygame.event.get():
    # check for closing window
    if event.type == pygame.QUIT:
      running = False
    # checking for key press event
    elif event.type == pygame.KEYDOWN:
      # check space key
      if event.key == pygame.K_SPACE: 
        # now we need to create a shoot() inside of our player
        player.shoot()

  # Update 
  all_sprites.udpate()

  # check to see if a bullet hit a mob
  # remove both upon collision
  hits = pygame.sprites.groupcollide(bullets, mobs, True, True)

  # loop through hits and respawn the same number of new mobs
  # example: kill 3 mobs = 3 mobs respawned
  for hit in hits:
    m = Mob()
    all_sprites.add(m)
    mobs.add(m)

```
>>
>> Example Output
>>

![Shooting-Respawning-Enemies](https://media.giphy.com/media/aD8SnD00Z7miIjQZjb/giphy.gif)

---


# Asteroids Tutorial Part 4: Adding Graphics

>> [Download Assets](https://github.com/HunterMRocha/asteroids.git "download")
>> Feel free to use any of your own assets

```python
import pygame
import random
from os import path

img_dir = path.join(path.dirname(__file__), 'img')

class Player(pygame.sprite.Sprite):
  def __init__(self):
    pygame.sprite.Sprite.__init__(self)

    # change green rect to image and resize image
    self.image = pygame.transform.scale(player_img, (50, 38))

    # removes the black background of image
    self.image.set_colorkey(BLACK)

    self.rect = self.iamge.get_rect()
    self.rect.centerx = WIDTH / 2
    self.rect.bottom = HEIGHT - 10
    self.speedx = 0

class Mob(pygame.sprite.Sprite):
   def __init__(self):
    pygame.sprite.Sprite.__init__(self)

    # change mob from just a rectangle to an actual image
    self.image = meteor_img
    self.image.set_colorkey(BLACK)

class Bullet(pygame.sprite.Sprite):
  def __init__(self, x, y):
    pygame.sprite.Sprite.__init__(self)
    
    # change bullets from rectangle to an actual image
    self.image = bullet_img
    self.image.set_colorkey(BLACK)

# load all game graphics
background = pygame.image.load(path.join(img_dir, "starfield.png")).convert()
background_rect = background.get_rect()
player_img = pygame.image.load(path.join(img_dir, "playerShip1_orange.png")).convert()
meteor_img = pygame.image.load(path.join(img_dir, "meteorBrown_med1.png")).convert()
bullet_img = pygame.image.load(path.join(img_dir, "LaserRed16.png")).convert()

all_sprites = pygame.sprite.Group()
mobs = pygame.sprite.Group()

...

while True: 
  ...

  # Draw / Render 
  screen.fill(BLACK)
  screen.blit(background, background_rect)

```

![Example Output](https://media.giphy.com/media/jHbFU11D1Vpnlio1Tz/giphy.gif)

# Asteroids Tutorial Part 5: Pixel Perfect Collisions - Masks

### Step 1: Improving our Collision

>>![mask-explanation](https://media.giphy.com/media/4jVnZaBGjpRwChuqVl/giphy.gif)

>>
>> When we use rectangles to check for collision, we are checking all the pixels
>> that fall within the rectangles Bounding Box.
>>  
>> However if we can set up a way to only check collision on the actual image, then
>> we can create a more accurate implementation for collision. 
>>
>> To achieve this we are going to create a circle over our image to figure out 
>> how many pixels we need to ~ check for collision
>>
>> As you can see from the image, if we want to build a game with an accurate
>> collision implementation then we're going to want to use masks as opposed to rectangles
>>

```python
class Player(pygame.sprite.Sprite):
  def __init__(self):
    pygame.sprite.Sprite.__init__(self)

    # change green rect to image and resize image
    self.image = pygame.transform.scale(player_img, (50, 38))

    # removes the black background of image
    self.image.set_colorkey(BLACK)

    self.rect = self.iamge.get_rect()
    
    # create a radius 
    self.radius = 25

    # comment this line after you find a good radius size
    pygame.draw.circle(self.image, RED, self.rect.center.self.radius)

    self.rect.centerx = WIDTH / 2

    self.rect.bottom = HEIGHT - 10
    self.speedx = 0


class Mob(pygame.sprite.Sprite):
  def __init__(self):
    pygame.sprite.Sprite.__init__(self)

    # change mob from just a rectangle to an actual image
    self.image = meteor_img
    self.image.set_colorkey(BLACK)

    self.radius = int(self.rect.width * .87  / 2)
    
    # comment out this line after you find a good radius size
    pygame.draw.circle(self.image, RED, self.rect.center, self.radius)

```

![Example Output](https://media.giphy.com/media/567huSdfANOrbntaGA/giphy.gif)

```python
while running: 
  # keep loop running at the right speed
  clock.tick(FPS)
  # Process input (events)
  for event in pygame.event.get():
    # check for closing window
    if event.type == pygame.QUIT:
      running = False
    # checking for key press event
    elif event.type == pygame.KEYDOWN:
      # check space key
      if event.key == pygame.K_SPACE: 
        # now we need to create a shoot() inside of our player
        player.shoot()

  # Update 
  all_sprites.udpate()

  # check to see if a bullet hit a mob
  # remove both upon collision
  # pygame.sprite.collide_cirlce -> specify type of collision we want to check
  hits = pygame.sprites.groupcollide(bullets, mobs, True, True, pygame.sprite.collide_circle)

 ...

```

# Asteroids Tutorial Part 6: Sprite Animation

>> We want to be able to animate our mob.
>> Right now they look pretty boring, so the first thing we are
>> going to do is rotate them
>> Similiar to the .transform.scale(), we can use .transform.rotate()

```python
class Mob(pygame.sprite.Sprite):
  def __init__(self):
    pygame.sprite.Sprite.__init__(self)

    # change 'image' to 'image_orig'
    self.image_orig  = meteor_img
    self.image_orig.set_colorkey(BLACK)

    # image is now going to be a copy of our original
    # this is need since every time we rotate an image we lose 
    # a bit of information. So, this is our workaround
    self.image = self.image_orig.copy()

    self.radius = int(self.rect.width * .87  / 2)

    # starting rotation - in degrees
    self.rot = 0
    self.rot_speed = randrange(-8, 8)

    # number of 'milliseconds' since last update
    self.last_update = pygame.time.get_ticks()

  # create a rotate method
  def rotate(self):
    # current number of ticks
    curr_time = pygame.time.get_ticks()

    # rotate every 50 ticks
    if curr_time - self.last_update > 50: 
      self.last_update = curr_time 

      # calculate how much we need to rotate within 1-360
      self.rot = (self.rot + self.rot_speed) % 360

      self.image = pygame.transform.rotate(self.iamge_orig, self.rot)


  def update(self):
    self.rotate()
    ...

```

![Example Output](https://media.giphy.com/media/rZqbm6tgMHog6vL9JP/giphy.gif)

>> Now we have our asteroids and their rotating decently
>> However since the images are in rectangles and when rectangles rotate
>> it isn't an ideal rotation we end up running into slight imperfections
>> 
>> To demonstrate further here is an additional graphic of the problem we 
>> are going to tackle next

# Asteroids Tutorial Part 7: Score Display


```python
# ./main.py 

# find font from computer
# pygame will search your computer and look for closest match to arial 
font_name = pygame.font.match_font('arial')

# function used to update text on the screen every frame
def draw_text(surf, text, size, x, y):
    # create a font
    font = pygame.font.Font(font_name, size)

    # create a surface for the text to be put on
    text_surface = font.render(text, True, WHITE)
    text_rect = text_surface.get_rect()
    text.rect.midtop = (x, y)

    # put text_surface on screen at the text_rect location
    surf.blit(text_surface, text_rect)
    
    

for i in range(8):
    m = Mob()
    all_sprites.add(m)
    mobs.add(m)

# create a score variable
score = 0

    # inside game loop
    # then we want to increase our score when one of our bullets hits a mob
    for hit in hits:
        # calculate score based on size of metour
        score += 50 - hit.radius 
        m = Mob()
        all_sprites.add(m)
        mobs.add(m)



    screen.fill(BLACK)
    screen.blit(background, background_rect)
    all_sprites.draw(screen)

    # draw text on screen 
    draw_text(screen, str(score), 18, WIDTH / 2, 10) 

```

![Example Score](https://media.giphy.com/media/rZqbm6tgMHog6vL9JP/giphy.gif)

>> The goal of this section is simple. We want to display the score on the screen

# Asteroids Tutorial Part 8: Sound and Music

>> https://www.bfxr.net


```python
# save image from img folder
img_dir = path.join(path.dirname(__file__), "img")

# save sound from snd folder (use whatever folder you put your sound file in"
snd_dir = path.join(path.dirname(__file__), "snd")

pygame.init()
# init your sound mixer (NEED THIS)
pygame.mixer.init()


class Player(pygame.sprite.Sprite):
    def __init__(self):
    def update(self):
    
    def shoot(self):
        bullet = Bullet(self.rect.centerx, self.rect.top)
        all_sprites.add(bullet)
        bullets.add(bullet)

        # play shoot sound inside shoot method
        shoot_sound.play()

# Load all game graphics 
...
...
...

# Load all game sounds
shoot_sound = pygame.mixer.Sound(path.join(snd_dir, 'pew.wav')
expl_sounds = []
for snd in ['expl3.wav', 'expl6.wav']:
    expl_sounds.append(pygame.mixer.Sound(path.join(snd_dir, snd)))

# continuously play background music
pygame.mixer.music.load(path.join(snd_dir, "backgroundMusic.ogg")
# set background music volume
pygame.mixer.set_volume(0.4)

# play background music right before game loop
pygame.mixer.music.play(loops=-1)


    # inside game loop
    for hit in hits:
        # calculate score based on size of metour
        score += 50 - hit.radius 
        # play a random sound from our explosion list
        random.choice(expl_sounds).play()
        m = Mob()
        all_sprites.add(m)
        mobs.add(m)


```

# Asteroids Tutorial Part 9: Shields

```python

# create a function to spawn a new mob
def new_mob(): 
    m = Mob()
    all_sprites.add(m)
    mobs.add(m)

# create a funciton to draw our players shield
def draw_shield_bar(surf, x, y, pct):
    if pct < 0: 
        pct = 0
    BAR_LEN = 100
    BAR_HEIGHT = 10
    fill = (pct / 100) * BAR_LEN
    outline_rect = pygame.Rect(x, y, BAR_LEN, BAR_HEIGHT)
    fill_rect = pygame.Rect(x, y, fill, BAR_HEIGHT)
    pygame.draw.rect(surf, GREEN fill_rect)
    pygame.draw.rect(surf, WHITE, outline_rect, 2) 



class Player(pygame.sprite.Sprite):
    def __init__(self):
        # create a shield value 
        self.shield = 100

    def update(self):
    def shoot(self):




    # inside game loop
    for hit in hits:
        # calculate score based on size of metour
        score += 50 - hit.radius 
        # play a random sound from our explosion list
        random.choice(expl_sounds).play()
        # m = Mob()
        # all_sprites.add(m)
        # mobs.add(m)

        # since we are destorying the metours we need a way to spawn more
        # so we can put the three lines above in a function and call the function
        # everytime we need to spawn more mobs
        new_mob()



    # check if mob hits a player
    # change False -> True will destroy the metour when 
    hits = pygame.sprite.spritecollide(player, mobs, True, pygame.sprite.collide_circle)

    # change if statment to for loop so we can check every single hit
    for hit in hits: 
        # do damage on player
        player.shied -= hit.radius * 2
        new_mob()
        if player.shield <= 0:
            running = False 

     # Draw / render
     # call draw shield function
     draw_shield_bar(screen, 5, 5, player.sheild)


```

# Asteroids Tutorial Part 10: Explosions

>> Let's create a shoot delay for our player 
>> once we do this we will setup autofire

```python

class Player(pygame.sprite.Sprite): 
class Mob(pygame.sprite.Sprite):
class Bullet(pygame.sprite.Sprite): 

# create a class for our explosions
class Explosion(pygame.sprite.Sprite): 
    def __init__(self): 
        pygame.sprite.Sprite.__init__(self)
        self.size = size
        self.image = explosion_anim[self.size][0]
        self.rect = self.image.get_rect()
        self.rect.center = center
        self.frame = 0 
        self.last_update = pygame.time.get_ticks()
        self.frame_rate = 50

    def update(self):
        now = pygame.time.get_ticks()
        if now - self.last_update > self.frame_rate: 
            self.last_update = now
            self.frame += 1
            if self.frame == len(explosion_anim[self.size]): 
                self.kill()
            else:
                center = self.rect.center
                self.image = explosion_anim[self.size][self.frame]
                self.rect = self.image.rect()
                self.rect.center = center


img_dir = path.join(path.dirname(__file__), "img")
snd_dir = path.join(path.dirname(__file__), "snd")


# load explosions - small explosions & big explosions
explosion_anim = {}
# add two pairs to our dictionary. lg will store the large explosions, sm will store the small explosions
explosion_anim['lg'] = []
explosion_anim['sm'] = []
for i in range(8): 
    # get all file names
    filename = 'regularExplosions{}.png'.formart(i)

    # load img and make black transparent
    img = pygame.image.load(path.join(img_dir, filename)).convert()
    img.set_color_key(BLACK)

    # scale images and add to dictionary 
    img_lg = pygame.transform.scale(img, (75, 75))
    explosion_anim['lg'].append(img_lg)
    img_sm = pygame.transform.scale(img, (32, 32))
    explosion_anim['sm'].append(img_sm)



class Player(pygame.sprite.Sprite):
  def __init__(self):
     # lets add a few more properties to our player 
     # 250 millisecond delay between shots
     self.shoot_delay = 250

     # get the time from the last bullet we shot
     self.last_shot = pygame.time.get_ticks()

  def update(self): 
    ...
        if keys[pygame.K_LEFT]: 
            self.speedx = -5
        if keys[pygame.K_RIGHT]:
            self.speedx = 5
         # now let's check to see if we are triggering the spacebar
        if keys[pygame.K_SPACE]:
            self.shoot()

    def shoot(self):  
        # limit to 1 bullet every 0.25seconds
        if now - self.last_shot > self.shoot_delay:
            self.last_shot = now
            bullet = Bullet(self.rect.centerx, self.rect.top)
            all_sprites.add(bullet)
            bullets.add(bullet)




    # inside game loop
   
    # check if a bullet hit a mob
    for hit in hits: 
        score += 50
        random.choice(expl_sounds).play()

        # create an explosion everytime we hit a metour
        expl = Explosion(hit.rect.center, 'lg')
        all_sprites.add(expl)

    # check if a mob hit the player
    for hit in hits: 
        player.shied -= hit.radius * 2
        # create an explosion everytime we hit a metour
        expl = Explosion(hit.rect.center, 'sm')
        all_sprites.add(expl)
        new_mob()
        if player.shield <= 0:
            running = False 


     # Draw / render
     # call draw shield function
     draw_shield_bar(screen, 5, 5, player.sheild)

   

 
    # since we are checking if we're shooting in our update method we can
    # remove it from the end loop
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
      # elif event.type == pygame.KEYDOWN:
          # if event.key == pygame.K_SPACE: 
              # player.shoot()
    
```

# Asteroids Tutorial Part 11: Player Lives

# Asteroids Tutorial 12: Powerups

# Asteroids Tutorial 13: Powerups (part 2)

# Asteroids Tutorial 14: Game Over Screen
