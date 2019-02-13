// My bst maker

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
      if (d <= this.data && this.left) {
        this.left.insert(d);
      } else if (d < this.data) {
        this.left = new Tree(d);
      } else if (d > this.data && this.right) {
        this.right.insert(d);
      } else if (d > this.data) {
        this.right = new Tree(d);
      }
    } else {
      return 'just numbers, pal'
    }
  }
  
  Tree.prototype.contains = function (n) {
    if (n < Number.POSITIVE_INFINITY) {
      if (n === this.data) {
        return this;
      } else if (n < this.data && this.left) {
        return this.left.contains(n);
      } else if (n > this.data && this.right) {
        return this.right.contains(n);
      }
      return null;
    } else {
      return 'whaaaat!';
    }
  }