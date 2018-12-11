// SLList Maker

function SLList() {
    var head = null;
    console.log('sllist up!');

    var Node = function (data) {
        this.data = data;
        this.next = null;
    }

    this.push = function (data) {
        var fresh = new Node(data);
        if (head === null) {
            head = fresh;
        } else {
            var current = head;
            while (current.next) {
                current = current.next;
            }
            current.next = fresh;
        }
    }

    this.pop = function () {
        if (head === null) {
            // return null;
            return 'Go home, you drunk!';
        }
        var current = head;
        if (current.next === null) {
            head = null;
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

    this.show = function () {
        if (head === null) {
            // return null;
            return 'sllist empty!';
        }
        var sllist = 'h';
        var current = head;
        while (current) {
            sllist = sllist.concat('-', current.data);
            current = current.next;
        }
        return sllist;
    }

    this.addFront = function (data) {
        var fresh = new Node(data);
        if (head === null) {
            head = fresh;
        } else {
            fresh.next = head;
            head = fresh;
        }
    }

    this.isEmpty = function () {
        if (head === null) {
            return true;
        } else {
            return false;
        }
    }

    this.isPalindrome = function () {
        if (head === null) {
            return null;
        }
        var staq = new Stack();
        var runner = head;
        var walker = head;
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
