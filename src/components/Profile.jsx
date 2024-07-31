import { useContext } from "react";
import { UserProfileContext } from "./UserProfileContext";

const Profile = () => {
    const { userProfile } = useContext(UserProfileContext);

    return (
        <div id="profile">
            <h1>Perfil do Usuário</h1>
            <h2>Dados do Usuário:</h2>
            <p><strong>Nome:</strong> {userProfile.name}</p>
            <p><strong>E-mail:</strong> {userProfile.email}</p>
            <p><strong>Idade:</strong> {userProfile.age}</p>
            <p><strong>Data de Nascimento:</strong> {userProfile.birthDate}</p>
            <p><strong>Cidade:</strong> {userProfile.city}</p>
            <p><strong>Gênero:</strong> {userProfile.gender}</p>
        </div>
    )
}

export default Profile