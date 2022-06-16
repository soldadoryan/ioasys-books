import styled from "styled-components";
import * as GS from "../../styles/global";

export const Container = styled.section`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
`;

export const Wrap = styled(GS.Container)`
    flex-direction: column;
    
    @media screen and (max-width: 1130px) {
        padding: 0 20px;
    }
`;