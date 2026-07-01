var NewMap = new Map();
NewMap.set('name', 'John'); 
NewMap.set('id', 2345796);
NewMap.set('interest', ['js', 'ruby', 'python']);
// console.log(NewMap.get('name'));
// console.log(NewMap.get('id'));
// console.log(NewMap.get('interest'));


NewMap.set('name', 'Aditya');
NewMap.set('id', 2345797);
// console.log(NewMap.get('name'));
// console.log(NewMap.get('id'));

console.log(NewMap.size);
console.log(NewMap.has('name'));
console.log(NewMap.keys());
console.log(NewMap.values());
for (let [key, value] of NewMap) {
    console.log(`${key}: ${value}`);
}