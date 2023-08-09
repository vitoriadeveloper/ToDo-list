import { EmptyTasksContainer } from "./styles";
import clipboard from "../../../../assets/clipboard.svg";

export function EmptyTasks() {
    return (
        <EmptyTasksContainer>
            <img src={clipboard} alt="" />
            <span>
                Você ainda não tem tarefas cadastradas{" "}
                <p>Crie tarefas e organize seus itens a fazer</p>
            </span>
        </EmptyTasksContainer>
    );
}
