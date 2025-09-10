import {useForm} from "react-hook-form";


export interface IFormProps {
    username: string;
    password: string;
    age: number;
}

const FormComponent = () => {

    const {
        handleSubmit,
        register,
        formState: {errors, isValid}
    } = useForm<IFormProps>({
        mode: "all"
    });

    const customHandler = (formDataProps: IFormProps) => {
        console.log(formDataProps);
    };
    return (
        <div>
            <form onSubmit={handleSubmit(customHandler)}>
                <label>
                    <input type="text" {...register("username",
                        {
                            required: {value: true, message: "This field is required"},
                            minLength: {value: 3, message: "Min length is 3"}
                        })}/>
                    {errors.username && <div>{errors.username.message}</div>}
                </label>
                <label>
                    <input type="text" {...register("password",
                        {
                            required: true,
                            minLength: {value: 6, message: "Min length is 6"},
                            maxLength: {value: 12, message: "Max length is 12"}
                        })}/>
                    {errors.password && <div>{errors.password.message}</div>}
                </label>
                <label>
                    <input type={"number"} {...register("age",
                        {
                            required: true,
                            min: {value: 3, message: "Min age is 3"},
                            max: {value: 117, message: "Max age is 117"},
                            valueAsNumber: true
                        })}/>
                    {errors.age && <div>{errors.age.message}</div>}
                </label>
                <button disabled={!isValid}>send</button>

            </form>
        </div>
    );
};

export default FormComponent;