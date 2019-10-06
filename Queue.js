class Queue{
    constructor(){
        this.items=[];
    }

    enqueue(element){
        this.items.push(element);
    }
    dequeue(){
        if(!this.isEmpty()){
            return this.items.shift();
        }
        else{
            return "underflow";
        }
    }
    isEmpty(){
        return this.items.length==0;
    }   
}


module.exports=Queue;