import { DefaultLayout } from "../../layout/DefaultLayout";
import { EmptyTasks } from "./components/EmptyTasks";
// import { EmptyTasks } from "./components/EmptyTasks";
import { HeaderTasks } from "./components/HeaderTasks";
import { Tasks } from "./components/Tasks";
import { Content, HomeContainer } from "./styles";
export default function Home() {
    return (
        <>
            <DefaultLayout />
            <HomeContainer>
                <Content>
                    <HeaderTasks />
                    {/* <EmptyTasks /> */}
                    <Tasks />
                </Content>
            </HomeContainer>
        </>
    );
}
