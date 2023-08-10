import styled from "styled-components";

export const TasksContainer = styled.div`
    display: flex;
`;

export const DefaultTable = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    font-size: 0.875rem;

    td {
        display: flex;
        padding: 16px;
        align-items: flex-start;
        gap: 12px;
        align-self: stretch;

        border-radius: 8px;
        border: 1px solid ${(props) => props.theme["gray-400"]};
        background: ${(props) => props.theme["gray-500"]};
        box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.06);

        /* .empty {
            color: ${(props) => props.theme["gray-300"]};
            text-decoration-line: strikethrough;
        } */
    }

    img {
        cursor: pointer;
    }
`;
