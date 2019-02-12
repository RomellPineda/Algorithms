// My tree maker

function Tree(data) {
    if (data < Number.POSITIVE_INFINITY) {
        this.data = data;
        this.left = null;
        this.right = null;
    } else {
        console.log('only accepting numbers right now');
    }
}

Tree.prototype.insert = function (d) {
    if (d < Number.POSITIVE_INFINITY) {
        if (d <= this.data) {
            if (this.left == null) {
                this.left == new Tree(d);
            } else {
                this.left.insert(d);
            }
        } else {
            if (this.right == null) {
                this.right == new Tree(d);
            } else {
                this.right.insert(d);
            }
        }
    } else {
        return 'just numbers, pal'
    }
}

Tree.prototype.contains = function (n) {
    if (n < Number.POSITIVE_INFINITY) {
        if (n === this.data) {
            return true;
        } else if (n < this.data) {
            console.log('I will look to the left');
        } else {
            console.log('I will look to the right');
        }
    } else {
        return 'this data structure only contains numbers';
    }
}