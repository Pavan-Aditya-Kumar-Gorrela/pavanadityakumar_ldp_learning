import { getUsers, getUserById, createUser, deleteUser , updateUser, patchUser} from './userApi';



getUsers().then((users) => {
    console.log(users);
  });

getUserById(1).then((user) => {
    console.log(user);
  });

createUser("Pavan","pavan@example.com").then((user) => {
    console.log(user);
  });

deleteUser(2).then(() => {
    console.log("User deleted successfully");
  }).catch((error) => {
    console.error(error);
  });

updateUser(3, "Bob Updated", "bobupdated@example.com").then((user) => {
    console.log(user);
  });

patchUser(3, { name: "Bob Patched" }).then((user) => {
    console.log(user);
  });

function API() {
    return (
        <>
            <h1>API DEMO</h1>
        </>
    );
}

export default API;