import logo from "../assets/logo.svg";
import { ButtonCreate, CreateInputContainer } from "./styles";
import plus from "../assets/plus.svg";
export default function Header() {
    return (
        <>
            <img src={logo} alt="Logo" />

            <CreateInputContainer>
                <input type="text" placeholder="Adicione uma nova tarefa" />
                <ButtonCreate>
                    Criar{" "}
                    <div>
                        <img src={plus} alt="" />
                    </div>
                </ButtonCreate>
            </CreateInputContainer>
        </>
    );
}
