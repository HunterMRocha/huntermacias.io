---
date: '2022-12-14T05:41:17.425Z'
title: 'Breadth First Search Visual Animation'
tagline: '#BFS #pygame #animations'
preview: >-
  To help data structure students in Computer Science classes understand the Breadth First Search Graph Algorithm I have done a youtube video that shows a visual animation. Many have asked how do you code this animation. So I have a incremental set of code files that show how to animate a visualization of BFS as it steps through and discovers every node in a graph.'
image: >-
  https://cdn.hackr.io/uploads/posts/large/159101265776BtXmWWLS.png
---

# Repl Code Repo
[Repl Demo](https://replit.com/@hunter-macias/Graph-Animation-Code-Step-by-Step#main.py)

### File Directory 
> python files
>> main.py 
>>
>> add_edges.py
>>
>> circles.py
>>
>> full_anim.py
>>
>> graph_data.py
>>

***main.py***
```python 

import circles
import add_edges
import full_anim

prompt = '''
  circles: 1  - basic drawing skills in pygame
  add edges: 2 - adding graph edges to drawing
  full animation: 3 - adding full animation
  NOTE: user repl STOP button to quit animation
  ? '''
  
choice = input(prompt)

if choice == '1': 
  circles.run()
elif choice == '2': 
  add_edges.run()
elif choice == '3': 
  full_anim.run()

print("run again and type 1, 2, or 3 only")
```

**add_edges.py**
```python
# now collect edges into dict, and draw them
import pygame
from graph_data import graph

# constants
display_width = 800
display_height = 600
radius = 30

# colors
white = (255,255,255) # discovered state
blue = (50,50,160) # completed state fill

def run():
  global screen, edges # tog share with other methods

  build_edges()
  pygame.init()

  screen = pygame.display.set_mode((display_width, display_height))
  clock = pygame.time.Clock()

  screen.fill((0,0,0,))

  for n1,n2 in edges:
    pygame.draw.line(screen, white, graph[n1][0], graph[n2][0],2)

  for xy, _ in graph: # draw cicle at each node center
    circle_fill(xy, white, blue, 25, 2)

  pygame.display.update()

  while 1:  # wait for stop
    clock.tick(60)

def circle_fill(xy, line_color, fill_color, radius, thickness):
  global screen
  # draw grey circle and then a smaller black to get 2 pixel circle
  pygame.draw.circle(screen, line_color, xy, radius)
  pygame.draw.circle(screen, fill_color, xy, radius - thickness)
  
def edge_id(n1,n2): # normalize id for either order
  # (1,2) and (2,1) become (1,2)
  return tuple(sorted((n1,n2))) 

def build_edges():
  global edges
  edges = {}
  for n1, (_, adjacents) in enumerate(graph):
    for n2 in adjacents:
      eid = edge_id(n1,n2)
      if eid not in edges:
        edges[eid] = (n1,n2)
```

**circles.py**
```python
import pygame
from graph_data import graph

# constants 
display_width = 800
display_height = 600
radius = 30 # node size

def run():
  pygame.init()

  screen = pygame.display.set_mode((display_width, display_height))
  clock = pygame.time.Clock()

  screen.fill((0,0,0)) # param is color tuple

  # loop to draw cicle at each node center
  for centerxy, _ in graph:
    pygame.draw.circle(screen, # draw need buffer
      (255,255,200), # color of circle
      centerxy, radius) # default is filled circle
    pygame.draw.circle(screen, 
      (0,150,150), centerxy, radius-4)

  pygame.display.update() # copy screen to display

# wait for stop, for repl.it
  while 1:  
    clock.tick(60) 
    pygame.display.update()
    # DONT DO THIS LOOP NORMALY!
    # you usually will check for user events 
    # like window close with code like this

    # for event in pygame.event.get():
    # 	if event.type == pygame.QUIT:
    # 		sys.exit()
```


**full_anim.py**
```python
# now add color state of each node and edge
# change color states in breadth first search (BFS)
import pygame
from graph_data import graph

# constants
display_width = 800
display_height = 600
radius = 30
speed = 5 # frames per sec

grey = (100, 100, 100)  # undiscovered node or edge
white = (255, 255, 255)  # discovered edge or node outline
yellow = (200, 200, 0)  # current node fill
red = (200,0,0) # discovered node fill
black = (0, 0, 0)  # undiscovered node fill
blue = (50,50,160) # completed node fill and completed edge

# Graph element parts:
#  [0] : xy 
#  [1] : adjacent node indexes
#  [2] : node edge color 
#  [3] : node fill color

def run():
    global screen, edges, clock

    # add start colors to graph
    for element in graph:
      element.extend([grey, black])

    build_edges()
    pygame.init()
    clock = pygame.time.Clock()

    screen = pygame.display.set_mode((display_width, display_height))

    draw_graph() # initial
    update()
    pygame.time.delay(2000) # wait 2 sec to start
    # BFS algorith loop
    queue = [0] # start a node, queue of one node
    while len(queue) > 0:
        n1 = queue.pop(0) # dequeue node
        current = graph[n1]   
        current[2] = white  # current color for node
        current[3] = yellow
        for n2 in current[1]:
            if graph[n2][3] == black and n2 not in queue:  # undiscoverd
                queue.append(n2) # enqueue node
                # discovered n2, color n2 and edge n1,n2
                graph[n2][2] = white
                graph[n2][3] = red
                edges[edge_id(n1,n2)][1] = white
                update()
        # mark current as compete
        current[3] = blue
        update()

    while 1:  # wait for stop
        pygame.time.wait(5000) # 5 sec wait

# normalize id for either order
def edge_id(n1, n2): return tuple(sorted((n1, n2)))  

def build_edges():
    global edges
    edges = {} # edgeid: [(n1,n2), color]
    for n1, (_, adjacents, _, _) in enumerate(graph):
        for n2 in adjacents:
            eid = edge_id(n1, n2)
            if eid not in edges:
                edges[eid] = [(n1, n2), grey]

def draw_graph():
    global graph, screen, edges

    screen.fill((0, 0, 0,))

    for e in edges.values(): # draw edges
        (n1, n2), color = e
        pygame.draw.line(screen, color, graph[n1][0], graph[n2][0], 2)

    for xy, _, lcolor, fcolor in graph: # draw nodes
        circle_fill(xy, lcolor, fcolor, 25, 2)

def update():
  global clock
  draw_graph()
  pygame.display.update()
  clock.tick(speed)

def circle_fill(xy, line_color, fill_color, radius, thickness):
    global screen
    pygame.draw.circle(screen, line_color, xy, radius)
    pygame.draw.circle(screen, fill_color, xy, radius - thickness)

```

**graph_data.py**
```python
graph = [ 
  # view repl for graph data 
  # challenge: randomly create data to create an animated visualization
]
```

```text
note: if repl run button doesn't trigger window then run 'python main.py' in the shell and you should be fine
```