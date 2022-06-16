import React, { useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';
import useAuth from '../../hooks/useAuth';
import Logo from '../Logo';
import LogoutButton from '../LogoutButton';
import * as S from './styles';

const Topbar = () => {
    const { user } = useContext(AuthContext);
    const { logout } = useAuth();

    const mountMessage = () => {
        return (
            <>
                {`Bem vind${user.gender === 'M' ? 'o' : 'a'}, `}
                <b>{user.name}</b>
            </>
        )
    }

    const handleLogout = () => {
        logout();
    }

    return (
        <S.Container>
            <Logo layout="dark" />
            <S.UserOptions>
                <S.UserMessage>{mountMessage()}</S.UserMessage>
                <LogoutButton onClick={handleLogout} />
            </S.UserOptions>
        </S.Container>
    );
}

export default Topbar;