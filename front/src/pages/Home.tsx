import { FC } from "react";
import { Link } from "react-router-dom";

const Home: FC = () => {
    return (
        <>
            <h1>Voici la page d'accueil</h1>
            <Link to="/users"> - Voir tout les utilisateurs de l'application</Link>
            <Link to="/auth"> - Se connecter</Link>
        </>
    )
}

export default Home;