// Staque Maker

function Stack() {
    var top = null;
    console.log('Stacked!');

    var Node = function (data) {
        this.data = data;
        this.next = null;
    }

    this.push = function (data) {
        var fresh = new Node(data);
        if (top === null) {
            top = fresh;
        } else {
            fresh.next = top;
            top = fresh;
        }
    }

    this.pop = function () {
        if (top === null) {
            // return null;
            return 'Go home, you drunk!';
        }
        var current = top;
        if (top.next === null) {
            top = null;
            // return current.data;
            return {'popped':current.data};
        }
        top = top.next;
        current.next = null;
        // return current.data;
        return {'popped':current.data};
    }

    this.show = function () {
        if (top === null) {
            return 'stack empty!';
        }
        var staque = 'S';
        var current = top;
        while (current) {
            staque = staque.concat('[', current.data, ']');
            current = current.next;
        }
        return staque;
    }
}
// verified!
var waffle = new Stack(); waffle.push(5); waffle.push('banana'); waffle.push(99); waffle.push('pineapple'); waffle.pop(); waffle.show();

