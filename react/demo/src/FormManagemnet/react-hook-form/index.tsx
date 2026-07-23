import { useForm , type SubmitHandler } from "react-hook-form";

enum genderEnum {
    MALE = "male",
    FEMALE = "female",
}
type Inputs = {
    name: string,
    email: string,
    gender: genderEnum,
}

export default function Index() {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
    }

    console.log(watch("name"));

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue="test" {...register("name")} />
            <input {...register("email", { required: true })} minLength={8} />
            {errors.email && <span>This field is required</span>}
            <select {...register("gender", { required: true })}>
                <option value="">Select Gender</option>
                <option value={genderEnum.MALE}>Male</option>
                <option value={genderEnum.FEMALE}>Female</option>
            </select>
            {errors.gender && <span>This field is required</span>}
            <input type="submit" />
        </form>
    )
}