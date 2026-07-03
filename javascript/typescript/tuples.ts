const role = [2, "admin"];
console.log(role);

role.push(30);
console.log(role);

role[1] = 10;
console.log(role);

const profile :[number,string] = [1,"admin"];
// const profile: readonly [number, string] = [1, "admin"];
console.log(profile);

profile.pop();
profile.push(11);
console.log(profile);



// profile.push(true); //ERROR!!
// console.log(profile);

// profile[1] = 20; //ERROR!!
// console.log(profile);


