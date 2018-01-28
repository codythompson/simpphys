# basic algo

- calculate velocity of movable objects in active area
- find all colliding pairs (graph?)
  - create movement bounding rectangles and quadrangle "rays" 
  - broadphase collision detection with bounding rectangles
  - narrowphase collision detection with quadrangle "rays"
- collision response with all colliding pairs (graph?)
  - binary search to find collision point
  - (later in dev) apply remaining velocity of heaviest, still colliding body, and repeat 

# classes

## physics

---

### Vector

#### Props

number x

number y

Float32Array array

#### Methods

primitive toValue - returns a Float32Array containing x and y

string toString

---

### Body

#### Props

mass

acceleration

force

velocity

position

shape(s?)

---

## shapes

### Rectangle

### Triangle

### Quadrangle

## data structures

### Quad Tree (later stage)

for efficiently searching for shapes