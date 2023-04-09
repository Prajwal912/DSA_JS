let queue = [];
let currentSize = queue.length;
let maxSize = 5;

function enqueue(x){
if(currentSize>=maxSize){
    console.log("queue is full")
}else{
    queue[currentSize]=x;
    currentSize++;
}
}
function dequeue(){
    if(!isEmpty()){
      for(let i=0; i<queue.length; i++){
        // console.log(queue[i+1])
        queue[i] = queue[i+1]
      }
      currentSize--;
      queue.length = currentSize
    }else{
        console.log("queue is cleared");
    }
}

function front(){
    if(!isEmpty()){
        console.log("first value is",queue[0])
      }else{
          console.log("queue is cleared");
      }
}


function rear(){
    if(!isEmpty()){
        console.log("last value is",queue[currentSize-1])
      }else{
          console.log("queue is cleared");
      }
}

function isEmpty(){
    if(currentSize<= 0){
        return true;
    }else{
        return false;
    }
}


function display(){
    console.log(queue)
}

enqueue(78);
enqueue(73);
enqueue(74);
enqueue(4);
enqueue(7);
enqueue(34);
enqueue(14);

dequeue();
dequeue();
dequeue();




front()
rear()
display();