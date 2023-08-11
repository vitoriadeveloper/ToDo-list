import styled from "styled-components";

export const TasksContainer = styled.div`
    display: flex;
`;

export const Table = styled.table`
    width: 100%;
    @media only screen and (max-width: 896px) {
        width: 100%;
    }
`;

export const DefaultTable = styled.tr`
    display: flex;
    flex-direction: column;
    font-size: 0.875rem;

    .filled {
        display: flex;
        padding: 16px;
        align-items: center;
        gap: 12px;
        align-self: stretch;

        border-radius: 8px;
        border: 1px solid ${(props) => props.theme["gray-400"]};
        background: ${(props) => props.theme["gray-500"]};
        box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.06);
        margin-bottom: 12px;
        justify-content: space-between;
    }
    .finished {
        display: flex;
        padding: 16px;
        align-items: flex-start;
        gap: 12px;
        align-self: stretch;

        border-radius: 8px;
        border: 1px solid ${(props) => props.theme["gray-400"]};
        background: ${(props) => props.theme["gray-500"]};
        box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.06);
        margin-bottom: 12px;
        justify-content: space-between;
        color: ${(props) => props.theme["gray-300"]};
        text-decoration: line-through;
    }

    img {
        cursor: pointer;
    }
`;
