import React, { ButtonHTMLAttributes } from 'react';
import * as S from './styles';
import { MdLogout } from 'react-icons/md';

interface LogoutButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { }

const LogoutButton = ({ ...rest }: LogoutButtonProps) => {
    return (
        <S.Container {...rest}>
            <MdLogout />
        </S.Container>
    );
}

export default LogoutButton;