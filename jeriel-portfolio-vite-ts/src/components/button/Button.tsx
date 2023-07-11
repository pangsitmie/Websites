import React from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps {
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * How large should the button be?
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Button contents
     */
    label?: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;
}

const StyledButton = styled.button<ButtonProps>`
    /* common styles */
    border: none;
    cursor: pointer;
    display: inline-block;
    border-radius: 12px;
    margin: 0;

    /* size */
    ${props => props.size === 'small' && css`
        font-size: 12px;
        padding: 10px 16px;
    `}
    ${props => props.size === 'medium' && css`
        font-size: 14px;
        padding: 11px 20px;
    `}
    ${props => props.size === 'large' && css`
        font-size: 16px;
        padding: 12px 24px;
    `}

    /* colors */
    ${props => props.primary ? css`
        background-color: ${props.backgroundColor || '#1ea7fd'};
        color: white;
    ` : css`
        background-color: #FFF;
        color: ${props.backgroundColor || '#333'};
    `}
`;

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
    primary = false,
    size = 'medium',
    backgroundColor,
    label,
    ...props
}) => {
    return (
        <StyledButton primary={primary} size={size} backgroundColor={backgroundColor} {...props}>
            {label}
        </StyledButton>

    );
};
