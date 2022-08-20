class Elements {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.collection = [];
  }
          enqueue(element, priority) {
            const queue = new Elements(element, priority);

            let contain = false;

            for (let i = 0; i < this.collection.length; i++) {
              if (this.collection[i].priority < queue.priority) {
                this.collection.splice(i, 0, queue);
                contain = true;

                break;
              }
            }

            if (!contain) {
              this.collection.push(queue);
    }
  }

  dequeue() {
    return this.collection.shift();
  }

  peek() {
    return this.collection[0];
  }
  rear() {
    return this.collection[this.collection.length - 1];
  }

  get isEmpty() {
    return this.collection.length === 0;
  }

  get print() {
    return console.log(this.collection);
  }
}

const pQ = new PriorityQueue();

pQ.enqueue('john', 3);
pQ.enqueue('mike', 2);
pQ.enqueue('log', 1);

pQ.dequeue();

console.log('front of the array', pQ.peek());
console.log('last element', pQ.rear());
pQ.print;
