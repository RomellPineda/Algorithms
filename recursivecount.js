// One of my first recursions
// rFib and countDown don't really count
// Yes, I know it's primative but it's cool

function rcount(n, plus = 1) {
    if (plus === (n + 1)) {
        return;
    }
    console.log(plus);
    plus++;
    return rcount(n, plus);
}