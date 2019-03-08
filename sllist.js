// SLList Maker

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class SLList {
    constructor() {
        this.head = null;
        console.log('sllist up!');
    }

    push(data) {
        var fresh = new Node(data);
        if (this.head === null) {
            this.head = fresh;
        } else {
            var current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = fresh;
        }
    }

    pop() {
        if (this.head === null) {
            // return null;
            return 'Go home, you drunk!';
        }
        var current = this.head;
        if (current.next === null) {
            this.head = null;
            // return current.data;
            return { 'popped': current.data };
        }
        while (current.next.next) {
            current = current.next;
        }
        var gotcha = current.next;
        current.next = null;
        // return gotcha.data;
        return { 'popped': gotcha.data };
    }

    show() {
        if (this.head === null) {
            // return null;
            return 'sllist empty!';
        }
        var sllist = 'h';
        var current = this.head;
        while (current) {
            sllist = sllist.concat('-', current.data);
            current = current.next;
        }
        return sllist;
    }

    addFront(data) {
        var fresh = new Node(data);
        if (this.head === null) {
            this.head = fresh;
        } else {
            fresh.next = this.head;
            this.head = fresh;
        }
    }

    isEmpty() {
        if (this.head === null) {
            return true;
        } else {
            return false;
        }
    }

    isPalindrome() {
        if (this.head === null) {
            return null;
        }
        var staq = new Stack();
        var runner = this.head;
        var walker = this.head;
        while (runner) {
            staq.push(runner.data);
            runner = runner.next;
        }
        while (walker) {
            if (walker.data != staq.pop()) {
                return 'nope not a palindrome';
            }
            walker = walker.next;
        }
        return 'ya looks like a palindrome to me';
    }
}
// verified!
var waffle = new SLList(); waffle.push(5); waffle.push('banana'); waffle.push(99); waffle.push('pineapple'); waffle.pop(); waffle.addFront('Jenny'); waffle.show();
