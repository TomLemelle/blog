import axios, { AxiosRequestConfig } from "axios";
import { FC } from "react";
import { useMutation } from "react-query";
import { useForm } from 'react-hook-form';

const LoginComponent: FC = () => {

    const { handleSubmit, register } = useForm();

    const onSubmit = async (data: any) => {
        return await axios.post('http://127.0.0.1:4001/auth', data);
    }

    const auth = useMutation<any>(onSubmit)
    console.log(auth);
    

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register('email', { required: true })} type="text" placeholder="email" />
                <input {...register('password', { required: true })} type="password" placeholder="password" />
                <button type="submit">Se connecter</button>
            </form>
        </div>
    )
}

export default LoginComponent;