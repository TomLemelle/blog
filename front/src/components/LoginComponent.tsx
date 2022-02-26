import { FC, useContext } from "react";
import { useForm } from 'react-hook-form';
import { useCookies } from 'react-cookie';
import { Users } from '../api/api';
import { hasAuthenticated } from "../utils/AuthApi";
import Auth from "../contexts/Auth";
import { Navigate, useNavigate } from "react-router-dom";

const LoginComponent: FC = () => {

    const { handleSubmit, register } = useForm();
    const [tokenCookies, setTokenCookie] = useCookies(['token']);
    const [userCookies, setUserCookie] = useCookies(['user']);
    const {isAuthenticated, setIsAuthenticated} = useContext(Auth);
    let navigate = useNavigate();

    const onSubmit = async data => {
        await Users.userAuth(data)
            .then(res => {
                try {
                    setTokenCookie('token', res.token, { path: '/'} );
                    setUserCookie('user', res.user, { path: '/'} );
                    setIsAuthenticated(true);
                    if(isAuthenticated) navigate('/users');
                } catch (response) {
                    console.error(response);
                };
            });
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register('email', { required: true })} type="text" placeholder="email" />
                <input {...register('password', { required: true })} type="password" placeholder="password" />
                <button type="submit">S'inscrire</button>
            </form>

            <ul>
            </ul>
        </div>
    )
}

export default LoginComponent;