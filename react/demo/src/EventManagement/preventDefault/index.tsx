export default function Index(){
    return(
        <div>
            <a href = 'https://google.com'
                onClick = {(e)=>{
                    e.preventDefault();
                    console.log("Default Prevented");
                }}
            >Google</a>
        </div>
    )
}