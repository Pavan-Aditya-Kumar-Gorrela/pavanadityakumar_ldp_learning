type User = {
    id : number;
    name: string;
    email: string;
    isAdmin: boolean;
    phoneNumber?: string;
}

const userProfile : User ={
    id: 1,
    name: "Aditya",
    email: "pavanadityakumar@example.com",
    isAdmin: false
}

console.log(userProfile);
console.log(userProfile.phoneNumber); //undefined