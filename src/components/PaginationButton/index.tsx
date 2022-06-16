import React, { ButtonHTMLAttributes } from 'react';
import * as S from './styles';

interface PaginationButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon: React.ReactNode
}

const PaginationButton = ({ icon, ...rest }: PaginationButtonProps) => {
    return (
        <S.Container {...rest}>
            {icon}
        </S.Container>
    );
}

export default PaginationButton;