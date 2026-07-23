// export default function Index() {
//     return(
//         <>
//             <form>
//                 <input type ="email" required/>
//                 <button type="submit">Submit</button>
//             </form>
//         </>
//     )
// }

import { useState } from "react";

export default function Index() {

    const [form, setForm] = useState({
        name: "",
        email: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!form.name || !form.email) {
            setErrors({
                name: !form.name ? "Name is required" : "",
                email: !form.email ? "Email is required" : "",
            });
            return;
        }
        alert("Form submitted successfully");
    }

        return(
            <form onSubmit = {handleSubmit}>
                <input type = "text" name = "name" value = {form.name} onChange={(e)=>{setForm({...form, name: e.target.value}); setErrors({...errors,name:""})} }/>
                <p style={{color:'red'
                    }}>
                    {errors.name}
                </p>
                <input type = "email" name = "email" value = {form.email} onChange={(e)=>{setForm({...form, email: e.target.value}); setErrors({...errors,email:""})} } />
                <p style={{color:'red'
                    }}>
                    {errors.email}
                </p>
                <button type="submit">Submit</button>
            </form>
        )
    }
