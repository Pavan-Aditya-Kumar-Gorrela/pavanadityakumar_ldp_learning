const user = {
    name : 'Aditya',
};


const zipCode = (user && user.zipCode) ? user.zipCode : undefined;
console.log(zipCode);

const cgpa = user?.cgpa;
const firstHobby = user.hobbies?.[0];
user.study?.();
console.log(cgpa,   firstHobby);