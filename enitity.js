'use strict'
var canvas = document.getElementById('canvas')
  canvas.width = 200
  canvas.height = 200
  canvas.length = 200
console.log("yoloswagmuffin")



class Entity{
    contructor (pos, vel, acc, color, body) {
        this.pos = pos;
        this.vel = vel;
        this.acc = acc;
        this.color = color;
        this.body = body;
    }

    update(){
    }

    move(){
      this.x += this.vx
      this.y += this.vy

      this.vx += this.ax
      this.vy += this.ay
    }

    get x(){return this.pos[0]}
    get y(){return this.pos[0]}
    set x(value){ this.pos[0] = value }
    set y(value){ this.pos[0] = value }

    get vx(){return this.vel[0]}
    get vy(){return this.vel[0]}
    set vx(value){this.vel[0] = value}
    set vy(value){this.vel[0] = value}

    get ax(){return this.acc[0]}
    get ay(){return this.acc[0]}
    set ax(value){this.acc[0] = value}
    set ay(value){this.acc[0] = value}
}

class Frog extends Entity{
    constructor() {
      super([25, 25], [2, 2], [1, 1], 'black', new Path.Circle({
        center = [25,25],
        fillStyle = "#000000",
        radius = 10,
      }));
    }
}

class Platform extends Entity{
    constructor() {
      super();
    }
}

class PowerUp extends Entity{
    constructor() {
      super();
    }
}

new Frog()
