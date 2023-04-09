class Stack{
    item=[];
    currentSize;
    maxSize;
    constructor(size){
    this.maxSize = size;
    this.currentSize = this.item.length;
    }

    push(newVal){
        if(this.currentSize>=this.maxSize){
            
        }else{
            this.item[this.currentSize]= newVal;
            this.currentSize++;
        }
    }
    pop(){
        if(this.currentSize>0){

            this.currentSize--;
            this.item.length=this.currentSize;
        }else{
            console.log("stack is empty")
        }
    }
    display(){
        console.log(this.item);
    }

}
  st1 = new Stack();
st1.push(20)
st1.push(30)
st1.push(40)
st1.push(50)
st1.push(00)
st1.push(60)
st1.push(80)
st1.pop()
st1.pop()
st1.pop()
st1.pop()
st1.pop()
st1.pop()
st1.pop()
st1.pop()


st1.display()