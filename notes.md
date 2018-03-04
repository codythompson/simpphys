# basic algo

- calculate velocity of movable objects in active area
  - while bodies have mass, this simple physics system does not take
    mass into consideration when calculating velocities.
- find all colliding pairs (graph?)
  - grid/tilemap
    - adjacent blocks combine to form larger rectangles
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

#### not implemented

#### methods

add

subtract

multiply

divide

misc other vector ops

#### implemented

#### Props

number x

number y

Float32Array array

#### Methods

primitive toValue - returns a Float32Array containing x and y

string toString

---

### Motion

#### Props

Vector accel

Vector vel

---

### Body


#### Props

mass

position

lastPosition

shape

motion

---

## collision response

### Level

## shapes

### AARectangle

### Tile

### AARectangleRay

## data structures

### TileMap???

### Quad Tree (later stage)

for efficiently searching for shapes