class Snow{
    constructor(x,y,width,height){
        this.image = loadImage("snow4.webp");
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,width,height);
        World.add(world,this.body);
    }

    display(){
      push();
      imageMode(CENTER);
      image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
      pop();

    }
}