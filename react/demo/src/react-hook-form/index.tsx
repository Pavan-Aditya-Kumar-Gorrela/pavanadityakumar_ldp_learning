import { useForm, useFieldArray, type FieldErrors } from "react-hook-form";
// import { useEffect } from "react";
import { DevTool } from "@hookform/devtools";

type FormTypes ={
    username: string;
    email: string;
    channel: string;
    social:{
        twitter: string;
        facebook: string;
    },
    phoneNumbers: string[];
    skills:{
        skill: string;
    }[];
    age: number;
    dob:Date;
};

let renderCount = 0;
export const Index =() =>{

    const form = useForm<FormTypes>({
        defaultValues: async () =>{
            const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
            const data = await response.json();
            return {
                username: "",
                email: "",
                channel: "",
                social:{
                    twitter: "",
                    facebook: ""
                },
                phoneNumbers: ["", ""],
                skills: [{ skill: "" }],
                age: 0,
                dob: new Date()
                // username: "user",
                // email: "data.email",
                // channel: ""
            }
        }
 } );
    const { register, control, handleSubmit, formState , watch, getValues, setValue,reset} = form;
    const { errors, touchedFields, dirtyFields, isDirty, isSubmitting, isSubmitted, isSubmitSuccessful, submitCount
     } = formState;
    const { fields, append, remove } = useFieldArray({
        name: "skills",
        control
    })
    console.log({isSubmitting, isSubmitted, isSubmitSuccessful, submitCount});
    // console.log({ touchedFields, dirtyFields, isDirty });
    const onSubmit =(data: FormTypes) =>{
        console.log("Form submitted", data);
    };
    const onError =(errors: FieldErrors<FormTypes>) =>{
        console.log("Form errors", errors);
    }

    // useEffect"=>
    //     const subscription = watch((value)=>{
    //         console.log(value);
    //     })

    //     return () => subscription.unsubscribe();
    // },[watch])

    
    // const watchContent = watch();
    renderCount++;
    return(
    <div>
        <h1>Form ({renderCount/2})</h1>
        {/* <h2>Watched Value: {JSON.stringify(watchContent)}</h2> */}
        <form onSubmit={handleSubmit(onSubmit,onError)} noValidate>
            <div className="form-control">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" {...register("username", { required: 
                    {
                        value: true,
                        message: "Username is required"} 
                })} />
                {errors.username && <p className="error">{errors.username.message}</p>}
            </div>

            <div className="form-control">
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" {...register("email", { pattern: 
                    {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Please enter a valid email address"
                    },
                    validate: {
                        notAdmin: (val) =>{
                            return val!== "admin@zemosolabs.com" || "Enter a different email address";
                        },

                        notBlackListed: (val) => {
                            return !val.endsWith("gmail.com") || "Please use company domain email address";
                        }
                    } 
                    })} />
                {errors.email && <p className="error">{errors.email.message}</p>}
            </div>
            
            <div className="form-control">
                <label htmlFor="channel">Channel</label>
                <input type="text" id="channel" {...register("channel", { required: 
                    {
                        value: true,
                        message: "Channel is required"} 
                    })} />
                {errors.channel && <p className="error">{errors.channel.message}</p>}
            </div>

            <div className="form-control">
                <label htmlFor="twitter">Twitter</label>
                <input type="text" id="twitter" {...register("social.twitter"),{
                    disabled: watch("social.facebook") === "",
                    required: watch("social.facebook") !== "" ? "Twitter is required" : false
                
                }} />
            </div>

            <div className="form-control">
                <label htmlFor="facebook">Facebook</label>
                <input type="text" id="facebook" {...register("social.facebook")} />
            </div>

            
            
            <div className="form-control">
                <label htmlFor="primaryPhone">Primary Phone</label>
                <input type="text" id="primaryPhone" {...register("phoneNumbers.0")} />
            </div>

            <div className="form-control">
                <label htmlFor="secondaryPhone">Secondary Phone</label>
                <input type="text" id="secondaryPhone" {...register("phoneNumbers.1")} />
            </div>

            <div>
                <label>List of Skills</label>
                <div>
                    {fields.map((field,idx) => {
                        return <div className="form-control" key={field.id}>
                            <input type="text" {...register(`skills.${idx}.skill` as const)} />
                            { idx > 0 && (
                             <button type="button" onClick={() => remove(idx)}>
                            Remove Skill
                        </button>
                    )}
                        </div>
                    
                    })}
                <button type="button" onClick={() => append({ skill: "" })}>
                    Add Skill
                </button>
                </div>
            </div>


            <div className="form-control">
                <label htmlFor="age">Age</label>
                <input type="number" id="age" {...register("age", { 
                    valueAsNumber: true,
                    required: 
                    {
                        value: true,
                        message: "age is required"} 
                    })} />
                {errors.age && <p className="error">{errors.age.message}</p>}
            </div>

            <div className="form-control">
                <label htmlFor="dob">Date of Birth</label>
                <input type="date" id="dob" {...register("dob", { 
                    valueAsDate: true,
                    required: 
                    {
                        value: true,
                        message: "Date of Birth is required"} 
                    })} />
                {errors.dob && <p className="error">{errors.dob.message}</p>}
            </div>

        <button>Submit</button>
         <button type="button" onClick={() => reset()}>Reset</button>
        <button type="button" onClick={() => console.log(getValues(["social", "skills"]))}>Get Values</button>
        <button type="button" onClick={() => setValue("username", "", {
            shouldDirty: true,
            shouldTouch: true,
            shouldValidate: true
        })}>
            Set Values
        </button>
      </form>
      <DevTool control={control} />
    </div>
    );
}