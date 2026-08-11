import { useParams } from "react-router-dom";
export default function Orders() {
    const { id } = useParams();
    return <h1>Order {id}</h1>;
}