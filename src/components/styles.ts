import styled from "styled-components";

export const CreateInputContainer = styled.div`
    position: sticky;
    top: 12.5rem;
    left: 50%;
    transform: translate(-50%, 50%);

    display: flex;
    gap: 8px;
    @media only screen and (max-width: 896px) {
        width: 200px;
        position: none;
        position: fixed;
        transform: translate(-66%, -51%);
    }

    input {
        width: calc(730px - 72px);
        max-width: 100%;
        color: ${(props) => props.theme["gray-300"]};
        padding: 1rem;
        height: 54px;
        max-height: 100%;
        background-color: ${(props) => props.theme["gray-700"]};
        border: 1px solid ${(props) => props.theme["gray-700"]};
        border-radius: 8px;
    }
`;

export const ButtonCreate = styled.button`
    font-weight: 700;
    font-size: 0.875rem;

    background-color: ${(props) => props.theme["blue-dark"]};
    border-radius: 8px;
    color: ${(props) => props.theme["gray-100"]};

    padding: 1rem;
    border: none;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    cursor: pointer;
`;
