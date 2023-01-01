---
date: '2023-01-20T07:23:58.898Z'
title: What is enumerate() in Python? Enumeration Example
tagline: Difficulty - Medium
preview: >-
  In this article you will learn all that you need to get started using enumerate() in python  
image: >-
  https://mathspp.com/images/9/f/a/5/b/9fa5b68df6f689ad11703552e3d767e69f1763f3-thumbnail.png
---


### What you will learn in this article: 

> When you'd want to use enumerate

> enumerate() syntax and input arguments

> different ways to invoke enumerate() using built-in iterables

> how to invoke enumerate() using a custom iterable

> how to use enumerate() in a for loop



--- 

## When Should You Use Enumerate?
##### Let's take a look at an example below:

```python
names = ["Wednesday", "Enid", "Rowan", "Bianca"]

```

##### We want to create a list of tuples, where each tuple item contains a student ID number and student name like this:

```python
[(0, 'Wednesday'), (1, 'Enid'), (2, 'Rowan'), (3, 'Bianca')]

```

##### Here's how we can create the student ID and name list of tuples using enumerate():


```python
list(enumerate(names))

```


## How to invoke enumerate() and convert the output to a list, tuple, or dictionary
##### We can convert the output of enumeration into a list, tuple, or dictionary by calling the corresponding constructor of that type.

```python
list(enumerate(names))
tuple(enumerate(names))
dict(enumerate(names))
```

--- 


## How to use enumerate() in a for loop
##### In our applications, we might want to use the output from enumerate for further processing, like getting the student ID and name and then using that value to access another data structure. The most common way to utilize enumerate() is through a for loop.

```python
names = ["Wednesday", "Enid", "Rowan", "Bianca"]
for student_id, name in enumerate(names):
    print("student_id = {}\tstudent name = {}".format(student_id, name))
```
##### Output 
``` terminal
student_id = 0 student name = Wednesday
student_id = 1 student name = Enid
student_id = 2 student name = Rowan
student_id = 3 student name = Bianca
```

##### enumerate() returns a tuple for each iterable item. The first value in the tuple is the count value which we store in the student_id for loop variable. The second value in the tuple is the list item which we store in the name for loop variable.

___

## Wrapping Up

##### In this article, we learnt about the enumerate method and when to use it. We looked at an example where it is useful to have index values along with iterable items together, enumerate input arguments, how to invoke it using lists, dictionaries, custom objects, and how to use it in a for loop.

I hope it helped you in your Python coding and I wish you all the very best in your Python learning journey.

___ 

## Table of Contents

1. What you will learn in this article: 
2. When Should You Use Enumerate?
3. How to invoke enumerate() and convert the output to a list, tuple, or dictionary
4. How to use enumerate() in a for loop
5. Wrapping Up

---

## Links

Source: [Using Enumerate](https://www.freecodecamp.org/news/what-is-enumerate-in-python/).

## Images

![ENUMERATE](https://mathspp.com/images/9/f/a/5/b/9fa5b68df6f689ad11703552e3d767e69f1763f3-thumbnail.png)
