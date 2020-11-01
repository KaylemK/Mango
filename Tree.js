class Tree{
constructor(x,y,width,height){
var options={
isStatic:true
}
this.body=Bodies.rectangle(x,y,10,10,options);
this.width=width;
this.height=height;
this.image=loadImage("tree.png");
World .add(world,this.body);
}
display(){
var pos = this.body.position;
pos.x = 500;
pos.y = 400;

push ();
translate(pos.x,pos.y);
imageMode(CENTER);
image(this.image,0,0);
pop ();




    
}








    












}