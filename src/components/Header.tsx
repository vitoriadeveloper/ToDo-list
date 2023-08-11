import logo from "../assets/logo.svg";
import { ButtonCreate, CreateInputContainer } from "./styles";
import plus from "../assets/plus.svg";
import { useState } from "react";
import { useTasks } from "../contexts/TasksContext";

export default function Header() {
    const { tasks, setTasks } = useTasks();
    const [newTask, setNewTask] = useState("");
    function handleCreateTasks() {
        if (newTask.trim() !== "") {
            const taskObject = { task: newTask, finished: false };
            setTasks([...tasks, taskObject]);
            setNewTask("");
        }
    }

    return (
        <>
            <img src={logo} alt="Logo" />

            <CreateInputContainer>
                <input
                    type="text"
                    placeholder="Adicione uma nova tarefa"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <ButtonCreate onClick={handleCreateTasks}>
                    Criar{" "}
                    <div>
                        <img src={plus} alt="" />
                    </div>
                </ButtonCreate>
            </CreateInputContainer>
        </>
    );
}
