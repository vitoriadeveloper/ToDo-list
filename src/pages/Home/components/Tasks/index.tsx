import checkboxFilled from "../../../../assets/checkbox_filled.svg";
import checkboxEmpty from "../../../../assets/checkbox_empty.svg";
import dump from "../../../../assets/dump.svg";
import { DefaultTable, Table, TasksContainer } from "./styles";
import { useTasks } from "../../../../contexts/TasksContext";

export function Tasks() {
    const { tasks, setTasks } = useTasks();

    function handleTaskToggle(index: number) {
        const updatedTasks = tasks.map((task, i) =>
            i === index ? { ...task, finished: !task.finished } : task,
        );

        setTasks(updatedTasks);
    }

    function handleDeleteTask(index: number) {
        const updatedTasks = tasks.filter((task, i) => i !== index);
        setTasks(updatedTasks);
    }

    return (
        <TasksContainer>
            <Table>
                <tbody>
                    {tasks.map((task, i) => (
                        <DefaultTable key={i}>
                            <td
                                className={
                                    task.finished ? "finished" : "filled"
                                }
                            >
                                <img
                                    src={
                                        task.finished
                                            ? checkboxFilled
                                            : checkboxEmpty
                                    }
                                    alt=""
                                    onClick={() => handleTaskToggle(i)}
                                />
                                {task.task}
                                <img
                                    src={dump}
                                    alt=""
                                    onClick={() => handleDeleteTask(i)}
                                />
                            </td>
                        </DefaultTable>
                    ))}
                </tbody>
            </Table>
        </TasksContainer>
    );
}
