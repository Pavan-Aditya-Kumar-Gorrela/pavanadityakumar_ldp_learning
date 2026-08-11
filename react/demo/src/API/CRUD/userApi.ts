import { users } from "./database";

export const getUsers =() =>{
    return new Promise<typeof users>((resolve) =>{
        setTimeout(() => {
            resolve(users);
        }, 1000);
    })
}

export const getUserById = (id : number) =>{
    return new Promise<typeof users[0]>((resolve,reject)=>{
        setTimeout(() => {
            const user = users.find((user) => user.id === id);
            if(user){
                resolve(user);
            }else{
                reject(`User with id ${id} not found`);
            }
        }, 1000);
    })
}


export const createUser = (name:string,email:string) =>{
    return new Promise<typeof users[0]>((resolve) =>{
        setTimeout(() => {
            const newUser= {
                id : users.length + 1,
                name,
                email
            }
            users.push(newUser);
            resolve(newUser);
        }, 1000);
    })
}

export const deleteUser = (id:number) =>{
    return new Promise<void>((resolve,reject) =>{
        setTimeout(() => {
            const index = users.findIndex((user) => user.id === id);
            if(index !== -1){
                users.splice(index,1);
                resolve();
            }else{
                reject(`User with id ${id} not found`);
            }
        }, 1000);
    })
}


export function updateUser(
    id: number,
    name: string,
    email: string
) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = users.find(
                user => user.id === id
            );
        if (!user) {
            reject("User not found");
            return;
        }
            user.name = name;
            user.email = email;
            resolve(user);
    }, 1000);
});
}


export function patchUser(
    id: number,
    payload: Partial<{
        name: string;
        email: string;
    }>
) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = users.find(
                u => u.id === id
            );
            if (!user) {
                reject("User not found");
                return;
            }
            Object.assign(user, payload);
            resolve(user);
        }, 1000);
    });

}