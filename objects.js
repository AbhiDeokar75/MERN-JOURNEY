const counter = {
    count : 0,
    increment : function() {
        this.count += 1;
    },
    decrement : function() {
        this.count -= 1;
    }
}

console.log(counter.count);
counter.increment();
counter.increment();
counter.increment();
console.log(counter.count);
counter.decrement();
console.log(counter.count);
counter.decrement();
console.log(counter.count);
