import { useTasks } from "../../../../contexts/TasksContext";
import { HeaderTasksContainer, Contador } from "./styles";

export function HeaderTasks() {
    const { tasks } = useTasks();

    const tasksCreatedCount = tasks.length;

    const tasksFinishedCount = tasks.filter((task) => task.finished).length;
    return (
        <HeaderTasksContainer>
            <span className="tasks-created">
                Tarefas criadas <Contador>{tasksCreatedCount}</Contador>
            </span>
            <span className="tasks-finished">
                Concluídas{" "}
                <Contador>
                    {tasksFinishedCount} de {tasksCreatedCount}
                </Contador>{" "}
            </span>
        </HeaderTasksContainer>
    );
}
