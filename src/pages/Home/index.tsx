import clipboard from "../../assets/clipboard.svg";
import { DefaultLayout } from "../../layout/DefaultLayout";
import { Contador, EmptyTasks, HeaderTasks, HomeContainer } from "./styles";
export default function Home() {
    return (
        <>
            <DefaultLayout />
            <HomeContainer>
                <div className="content">
                    <HeaderTasks>
                        <span className="tasks-created">
                            Tarefas criadas <Contador>0</Contador>
                        </span>
                        <span className="tasks-finished">
                            Concluídas <Contador>0</Contador>{" "}
                        </span>
                    </HeaderTasks>
                    <EmptyTasks>
                        <img src={clipboard} alt="" />
                        <span>
                            Você ainda não tem tarefas cadastradas{" "}
                            <p>Crie tarefas e organize seus itens a fazer</p>
                        </span>
                    </EmptyTasks>
                </div>
            </HomeContainer>
        </>
    );
}
