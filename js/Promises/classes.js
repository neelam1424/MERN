class Rectangle{
    constructor(width,height,color){
        this.width=width;
        this.height=height;
        this.color=color;
       // console.log(this.width,this.height)
    }
    area(){
        const area=this.width*this.height;
        return area;
    }

    paint(){
        console.log(`The rectangle is painted with ${this.color} color`);
    }
    
}


const Rec=new Rectangle(4,5,"Red");

const area= Rec.area();
console.log(area);
const paint=Rec.paint();