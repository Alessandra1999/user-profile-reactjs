import { useState, useContext } from "react";
import { UserProfileContext } from "./UserProfileContext";

const EditProfile = () => {
    const { userProfile, setUserProfile } = useContext(UserProfileContext);
    const [profile, setProfile] = useState(userProfile);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setProfile(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setUserProfile(profile);
    }

    return (
        <div id="forms">
            <h2>Editar Perfil</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nome:
                        <input type="text" name="name" value={profile.name} onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <label>E-mail:
                        <input type="email" name="email" value={profile.email} onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <label>Idade:
                        <input type="number" name="age" value={profile.age} onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <label>Data de Nascimento:
                        <input type="date" name="birthDate" value={profile.birthDate} onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <label>Cidade:
                        <input type="text" name="city" value={profile.city} onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <label>Gênero:
                        <select name="gender" value={profile.gender} onChange={handleChange}>
                            <option value="">Selecione</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Feminino">Feminino</option>
                            <option value="Não Binário">Não Binário</option>
                            <option value="Outros">Outros</option>
                            <option value="Prefiro Não Responder">Prefiro Não Responder</option>
                        </select>
                    </label>
                </div>
                <div>
                    <button type="submit">Salvar</button>
                </div>
            </form>
        </div>
    )
}

export default EditProfile