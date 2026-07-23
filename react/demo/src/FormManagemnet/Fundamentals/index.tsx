export default function Index(){
    function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        console.log("Form Submitted");
        e.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter your name" />
            <button type="submit">Submit</button>
        </form>
    );
} 