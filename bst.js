// My tree maker

function Tree(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

Tree.prototype.insert = function(d) {
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
}