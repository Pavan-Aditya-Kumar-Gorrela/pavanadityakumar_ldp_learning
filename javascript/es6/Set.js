var sets = new Set();
sets.add('a');
sets.add('b');
sets.add('a');
for (let element of sets) {
 console.log(element);
}


console.log(sets.has('a'));
console.log(sets.size);