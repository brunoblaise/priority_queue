# priority_queue



**Summary**: learning priority queue is important because it is used in many algorithms for example Dijkstra’s Shortest Path Algorithm uses a priority queue.


> Introduction

> Prerequisites

> Implementation

> Uses cases


**Introduction**

The priority queue is a data structure that follows the FIFO principle meaning First in First out, but it has a different approach than the normal queue. But how are they different Priority queue uses priority meaning any element with the highest priority will be the first and first removed even if it may be the last inserted the gif will explain it well. 


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/u2lwnwp2ismvaoc842s9.gif)


**Prerequisites**

- Know the javascript and how to implement a queue in js if not follow the [link](https://dev.to/brunoblaise/best-way-to-implement-a-queue-in-javascript-28o2)

**Implementation**

It's time to code we have a solid foundation of what priority queue now we are going to see the full code and then break it into pieces to understand it.



![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/55jp7ncqdkbvmmikbo8q.png)


Time to understand.

```
class Elements {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}

```

We created a class and named it elements after we created a constructor but why are we doing this, the reason is simple the class we created is the store of the element and its priority we will see it well as we go 

```
class PriorityQueue {
  constructor() {
    this.collection = [];
  }

```
Now we are creating the class named PriorityQueue, we are starting to talk we created in the constructor, and in the constructor we created any array named collection, going forward.

```
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
```

I want you to be attentive because many things are going on first we will break it into pieces

```
 enqueue(element, priority) {
    const queue = new Elements(element, priority);

    let contain = false;
```

the method enqueue is the same as in the normal queue now what we did is that we initialized the elements class and stored it in the queue variable and the contain variable is equal to false we will see why we are using it.

```
 for (let i = 0; i < this.collection.length; i++) {
      if (this.collection[i].priority < queue.priority) {
        this.collection.splice(i, 0, queue);
        contain = true;

        break;
      }
    }
```
We are creating a for loop and then doing a normal thing but instead is where the magic happens so you see the if statement takes a look at it every well we are checking if the collection priority is less than the queue variable remembers the one we created storing the class elements. If you don't understand the splice method take a look at the video 

{% youtube https://www.youtube.com/watch?v=t1qDSAUclzI %}

After we changed contain and made it true we break the loop.

```
  if (!contain) {
      this.collection.push(queue);
    }
```
Still in the method enqueue outside the loop we check if contain is true if it is we push in the collection. Moving on.

```
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
```
What we are doing is pretty simple we dequeue and we are using the shift method which is used to remove the first element in the array.
At this stage, everything is simple and understandable.

```
const pQ = new PriorityQueue();

pQ.enqueue('john', 3);
pQ.enqueue('mike', 1);
pQ.enqueue('log', 2);

pQ.dequeue();

console.log('front of the array', pQ.peek());
console.log('last element', pQ.rear());
pQ.print;

```

In the end, I think in the code everything is simple and very easy to understand and digest. If you made it this far you are the next big thing just focus and keep calm if any problem I am delighted to help but before we close off let's look at the terminal.


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/upwokpn2fps8v5s2h7d8.png)

Full code

```
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

```
