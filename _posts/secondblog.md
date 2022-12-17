---
date: 2020-7-9
title: Python OpenCV – Dense Optical Flow
tagline: 'Prerequisites - Python OpenCV, Grayscaling'
preview: >-
  Optical flow is the motion of objects between the consecutive frames of the
  sequence, caused by the relative motion between the camera and the object. It
  can be of two types-Sparse Optical flow and Dense Optical flow.
image: 'https://i.stack.imgur.com/MVRdq.png'
---

## Dense Optical flow

**Dense Optical flow computes the optical flow vector for every pixel of the frame which may be responsible for its slow speed but leading to a better accurate result. It can be used for detecting motion in the videos, video segmentation, learning structure from motion. There can be various kinds of implementations of dense optical flow. The example below will follow the Farneback method along with OpenCV.**

## Franeback Method

**The first step is that the method approximates the windows of image frames by a quadratic polynomial with the help of the polynomial expansion transform. Next, by observing how the polynomial transforms under the state of motion. i.e. to estimate displacement fields. Dense optical flow is computed, after a series of refinements.**

---

## Links

Source [Dense Optical Flow](https://www.geeksforgeeks.org/python-opencv-dense-optical-flow/?ref=lbp).

## Images

![An old rock in the desert](https://i.stack.imgur.com/MVRdq.png)
