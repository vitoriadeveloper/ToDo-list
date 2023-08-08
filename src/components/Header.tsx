import logo from "../assets/logo.svg";
import { CreateInputContainer } from "./styles";
export default function Header() {
    return (
        <>
            <img src={logo} alt="Logo" />

            <CreateInputContainer>
                <input type="text" />
                <button>Criar</button>
            </CreateInputContainer>
        </>
    );
}
