import axios from "axios";

const getUsers = async () => {
    const res = await axios.get("/users");
    return res.data;
}

export default getUsers;