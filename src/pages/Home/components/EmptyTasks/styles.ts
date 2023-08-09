import styled from "styled-components";
export const EmptyTasksContainer = styled.div`
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
