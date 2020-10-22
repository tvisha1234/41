class Umbrella
{
	constructor(x,y, w, h)
	{
		var options={
			isStatic:true
			}
		this.x=x;
        this.y=y;
        this.w = w;
        this.h = h;
        this.image = loadImage("images/walking_1.png");
		this.body=Bodies.rect(this.x, this.y, this.w, this.h, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			imageMode(CENTER)
			strokeWeight(3);
			fill("blue")
			image(this.image,0,0,this.w, this.h);
			pop()
			
	}

}