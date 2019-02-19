// easy array maker

function makeArrayN(length) {
    const arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.round(Math.random() * 100));
    }
    return arr;
}