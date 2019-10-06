class Stack{
    constructor(){
        this.items=[];
    }

    push(element){
        this.items.push(element);
    }

    pop(){
        if(this.items.length==0){
            return "Underflow";
        }
        return this.items.pop();
    }

    peek(){
        this.items[this.items.length-1];
    }

    isEmpty(){
        return this.items.length==0;
    }
    reverse(){
        return this.items.reverse();
    }
    printStack(){
        let conc=""
        this.items.map(item=>{
            conc+=item+" ";
        })
        console.log(conc);
    }
}

module.exports=Stack;