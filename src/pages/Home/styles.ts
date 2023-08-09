import styled from "styled-components";

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .content {
        display: flex;
        width: 730px;
        max-width: 100%;
        display: flex;
        flex-direction: column;
    }
`;

export const HeaderTasks = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;

    .tasks-created {
        color: ${(props) => props.theme.blue};
    }

    .tasks-finished {
        color: ${(props) => props.theme.purple};
    }
`;

export const Contador = styled.span`
    padding: 0.125rem 0.5rem;
    background-color: ${(props) => props.theme["gray-400"]};
    border-radius: 999px;

    color: ${(props) => props.theme["gray-200"]};
    font-weight: 700;
    font-size: 0.75rem;
`;

export const EmptyTasks = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 100%;
    height: 240px;
    max-height: 100%;
    border-top: 1px solid ${(props) => props.theme["gray-400"]};
    border-radius: 8px;
`;
