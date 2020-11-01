class Boy{
    constructor(x,y,width,height){
    var options={
    isStatic:true
    }
    this.body=Bodies.rectangle(x,y,10,10,options);
    this.width=10;
    this.height=10;
    this.image=loadImage("boy.png");
    World .add(world,this.body);
    }
    display(){
    var pos = this.body.position;
    pos.x = 200;
    pos.y = 630;
    
    push ();
    translate(pos.x,pos.y);
    imageMode(CENTER);
    image(this.image,0,0,240,280);
    
    pop ();
    }

}