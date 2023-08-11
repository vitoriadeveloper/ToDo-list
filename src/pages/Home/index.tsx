import { useTasks } from "../../contexts/TasksContext";
import { DefaultLayout } from "../../layout/DefaultLayout";
import { EmptyTasks } from "./components/EmptyTasks";
import { HeaderTasks } from "./components/HeaderTasks";
import { Tasks } from "./components/Tasks";
import { Content, HomeContainer } from "./styles";
export default function Home() {
    const { tasks } = useTasks();

    const hasTasks = tasks.length > 0;
    return (
        <>
            <DefaultLayout />
            <HomeContainer>
                <Content>
                    <HeaderTasks />
                    {hasTasks ? <Tasks /> : <EmptyTasks />}
                </Content>
            </HomeContainer>
        </>
    );
}
