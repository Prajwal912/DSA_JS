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
    if(currentSize>0){
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


function display(){
    console.log(queue)
}

enqueue(78);
enqueue(73);
enqueue(74);
dequeue();
dequeue();
dequeue();
dequeue();





display();