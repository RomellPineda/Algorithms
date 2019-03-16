// Staque Maker

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
        console.log('Stacked!');
    }

    push(data) {
        var fresh = new Node(data);
        if (this.top === null) {
            this.top = fresh;
        } else {
            fresh.next = this.top;
            this.top = fresh;
        }
    }

    pop() {
        if (this.top === null) {
            // return null;
            return 'Go home, you drunk!';
        }
        var current = this.top;
        if (this.top.next === null) {
            this.top = null;
            // return current.data;
            return { 'popped': current.data };
        }
        this.top = this.top.next;
        current.next = null;
        // return current.data;
        return { 'popped': current.data };
    }

    show() {
        if (this.top === null) {
            return 'stack empty!';
        }
        var staque = 'S';
        var current = this.top;
        while (current) {
            staque = staque.concat('[', current.data, ']');
            current = current.next;
        }
        return staque;
    }
}
// verified!
var waffle = new Stack(); waffle.push(5); waffle.push('banana'); waffle.push(99); waffle.push('pineapple'); waffle.pop(); waffle.show();

