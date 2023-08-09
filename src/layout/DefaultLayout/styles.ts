import styled from "styled-components";

export const LayoutContainer = styled.div`
    background-color: ${(props) => props.theme.black};
    height: 12.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 4rem;
`;
