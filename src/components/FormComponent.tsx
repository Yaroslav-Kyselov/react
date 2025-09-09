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
    } = useForm<IFormProps>();

    const customHandler = (formDataProps: IFormProps) => {
        console.log(formDataProps);
    };
    return (
        <div>
            <form onSubmit={handleSubmit(customHandler)}>

                <input type="text" {...register("username",
                    {
                        required: true,
                        minLength: {value: 3, message: "Min length is 3"}
                    })}/>
                <input type="text" {...register("password",
                    {
                        required: true,
                        minLength: {value: 6, message: "Min length is 6"},
                        maxLength: {value: 12, message: "Max length is 12"}
                    })}/>
                <input type="number" {...register("age",
                    {
                        required: true,
                        min: {value: 3, message: "Min age is 3"},
                        max: {value: 9, message: "Max age is 9"},
                        valueAsNumber: true
                    })}/>
                <button>send</button>

            </form>
        </div>
    );
};

export default FormComponent;