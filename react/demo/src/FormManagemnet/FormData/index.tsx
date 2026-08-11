export default function Index() {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formdata = new FormData(e.currentTarget);
        const data = Object.fromEntries(formdata.entries());
        console.log(data);
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <input name="firstName" defaultValue="John" type="text" />
                <input name="email" defaultValue="john@example.com" type="email" />
                <button type="submit" >Submit</button>
            </form>
        </>
    )
}