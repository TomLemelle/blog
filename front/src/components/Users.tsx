import axios from "axios";
import { FC } from "react";
import Moment from "react-moment";
import { useQuery } from "react-query";
import { IUsers } from "../interface/IUser";

const Users: FC = () => {

    const getUsers = async () => {
        return await axios.get('http://127.0.0.1:4001/users');
    }

    const { isLoading, error, data} = useQuery<any, Error>('users', getUsers);

    if(isLoading) return <h1>...Loading</h1>

    if(error) return <div>Something went wrong: {error.message}</div>

    return (
        <>
                {data.data.responseData.map((user: IUsers, idx: number) => (
                    <ul key={idx}>
                        <li>{user.id}</li>
                        <li>{user.firstName}</li>
                        <li>{user.lastName}</li>
                        <li>{user.email}</li>
                        <li><Moment date={user.createdAt} format="YYYY-MM-DD HH:mm" /></li>
                        <li><Moment date={user.updatedAt} format="YYYY-MM-DD HH:mm" /></li>
                    </ul>
                ))}
        </>
    )
}

export default Users;