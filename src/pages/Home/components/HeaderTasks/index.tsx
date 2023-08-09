import { HeaderTasksContainer, Contador } from "./styles";

export function HeaderTasks() {
    return (
        <HeaderTasksContainer>
            <span className="tasks-created">
                Tarefas criadas <Contador>0</Contador>
            </span>
            <span className="tasks-finished">
                Concluídas <Contador>0</Contador>{" "}
            </span>
        </HeaderTasksContainer>
    );
}
