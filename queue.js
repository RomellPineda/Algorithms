// Queue Maker

function Queue() {
    var head = null;
    var tail = null;
    console.log('Queue up!');

    var Node = function (data) {
        this.data = data;
        this.next = null;
    }

    this.queue = function (data) {
        var fresh = new Node(data);
        if (head === null && tail === null) {
            head = fresh;
            tail = fresh;
        } else {
            tail.next = fresh;
            tail = tail.next;
        }
    }

    this.dequeue = function () {
        if (head === null) {
            return 'Go home, you drunk!';
        }
        var current = head;
        if (current.next === null) {
            head = null;
            tail = null;
            return {'dequeued':current.data};
        }
        head = head.next;
        current.next = null;
        return {'dequeued':current.data};
    }

    this.show = function () {
        if (head === null && tail === null) {
            return 'queue empty!';
        }
        var q = 'h';
        var current = head;
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

