const student = {

    study() {
        console.log(`${this.name} is studying.`);
    }
}

student.name = "Aditya";
student.study();

const keyName = 'favouritefood';
const profile = 'user_';

const user = {
    name: 'Aditya',
    [keyName]: 'Biriyani',
    [`${profile}status`]: 'active'
};
// console.log(user);


const test = {
    user,
    profile,
};

test.user = "Tony Stark";
test.profile = "Iron Man";
// console.log(test);