import React from 'react';
import * as S from './styles';

export type TooltipProps = {
    message?: string
}

const Tooltip = ({ message }: TooltipProps) => {
    return (
        <>
            {message && message !== '' && (
                <S.Container>
                    {message}
                </S.Container>
            )}
        </>
    );
}

export default Tooltip;