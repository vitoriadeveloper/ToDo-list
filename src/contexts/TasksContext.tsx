import React, {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

interface Tasks {
    task: string;
    finished: boolean;
}

interface TasksContextType {
    tasks: Tasks[];
    setTasks: React.Dispatch<React.SetStateAction<Tasks[]>>;
}

interface TasksContextProviderProps {
    children: ReactNode;
}

export const TasksContext = createContext({} as TasksContextType);

export function TasksProvider({ children }: TasksContextProviderProps) {
    const [tasks, setTasks] = useState<Tasks[]>([]);

    useEffect(() => {
        const storedTasks = localStorage.getItem(
            "@ignite-todo:task-state-1.0.0",
        );
        if (storedTasks) {
            setTasks(JSON.parse(storedTasks));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(
            "@ignite-todo:task-state-1.0.0",
            JSON.stringify(tasks),
        );
    }, [tasks]);

    return (
        <TasksContext.Provider value={{ tasks, setTasks }}>
            {children}
        </TasksContext.Provider>
    );
}

export function useTasks() {
    const context = useContext(TasksContext);
    if (!context) {
        throw new Error("useTasks must be used within a TasksProvider");
    }
    return context;
}
