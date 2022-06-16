import styled from 'styled-components';
import * as GS from '../../styles/global';
import Background from '../../assets/background.png';

export const Container = styled.section`
    background-image: url(${Background});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
`;

export const Wrap = styled(GS.Container)`
    height: 100vh;
    align-items: center;

    @media screen and (max-width: 1130px) {
        justify-content: center;
        
    }
`;

export const Form = styled.form`
    width: clamp(200px, 100%, 370px);
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media screen and (max-width: 370px) {
        padding: 10px;
    }
`;

export const WrapLogo = styled.div`
    margin-bottom: 48px;
`;