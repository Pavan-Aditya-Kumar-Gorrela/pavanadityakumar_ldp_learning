interface Employee {
    id:number;
    name:string;
    role:string;
    department:string;
    experience:number;
    location:string;
    avatar: string;
}

const employees : Employee[] = [
    {
        id: 1,
        name: "John Doe",
        role: "Software Engineer",
        department: "Engineering",
        experience: 5,
        location: "New York",
        avatar: "👤"
    },
    {
        id: 2,
        name: "Jane Smith",
        role: "Product Manager",
        department: "Product",
        experience: 8,
        location: "San Francisco",
        avatar: "👤"
    },

    {
        id: 3,
        name: "Bob Johnson",
        role: "Designer",
        department: "Design",
        experience: 6,
        location: "Los Angeles",
        avatar: "👤"
    }
]


export default employees;