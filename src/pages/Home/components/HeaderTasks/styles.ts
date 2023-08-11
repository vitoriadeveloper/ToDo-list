import styled from "styled-components";

export const HeaderTasksContainer = styled.div`
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

    @media only screen and (max-width: 896px) {
        padding: 1rem;
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
