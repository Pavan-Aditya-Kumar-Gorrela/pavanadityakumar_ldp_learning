import { useEffect } from "react"

export default function Index() {
    // const xhr = new XMLHttpRequest();
    // xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
    // xhr.onload = () => {
    //     if (xhr.status === 200) {
    //         const users = JSON.parse(xhr.responseText);
    //         console.log(users);
    //     } else {
    //         console.error("Error fetching users");
    //     }
    // };
    // xhr.send();

    // const result = fetch("https://jsonplaceholder.typicode.com/users").then(
    //     (response) => {
    //         if (response.ok) {
    //             return response.json();
    //         } else {
    //             throw new Error("Error fetching users");
    //         }
    //     }
    // );

    // console.log(result);

    const fetchUsers = async () =>{
        try{
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                if(!response.ok){
                    throw new Error("Error fetching users");
                }
                const data = await response.json();
                console.log(data);
            } catch (error) {
                console.error(error);
            }
    }

    useEffect(() => {
        fetchUsers();
    },[])

    return(
        <h1>Check the console for the output of the fetch API</h1>
    )
}