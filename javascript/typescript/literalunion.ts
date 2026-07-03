type Direction = "North" | "South" | "East" | "West";

function move(direction: Direction) {
  console.log(`Moving ${direction}`);
}

move("North");
// move("North-East"); // works in JS but not in TS