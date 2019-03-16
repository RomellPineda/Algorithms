// Queue Maker

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        console.log('Queue up!');
    }

    queue(data) {
        var fresh = new Node(data);
        if (this.head === null && this.tail === null) {
            this.head = fresh;
            this.tail = fresh;
        } else {
            this.tail.next = fresh;
            this.tail = this.tail.next;
        }
    }

    dequeue() {
        if (this.head === null) {
            return 'Go home, you drunk!';
        }
        var current = this.head;
        if (current.next === null) {
            this.head = null;
            this.tail = null;
            return { 'dequeued': current.data };
        }
        this.head = this.head.next;
        current.next = null;
        return { 'dequeued': current.data };
    }

    show() {
        if (this.head === null && this.tail === null) {
            return 'queue empty!';
        }
        var q = 'h';
        var current = this.head;
        while (current) {
            q = q.concat('-', current.data);
            current = current.next;
        }
        q = q.concat('-', 'tail');
        return q;
    }
}
// verified!
var waffle = new Queue(); waffle.queue(5); waffle.queue('banana'); waffle.queue(99); waffle.queue('pineapple'); waffle.dequeue(); waffle.show();

