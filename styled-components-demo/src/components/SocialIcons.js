import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { StyledSocialIcons } from './styles/SocialIcons.styled';

export default function SocialIcons() {
    return (
        <StyledSocialIcons>
            <li>
                <a href="https://www.facebook.com/">
                    <FaFacebookF />
                </a>
            </li>
            <li>
                <a href="https://www.twitter.com/">
                    <FaTwitter />
                </a>
            </li>
            <li>
                <a href="https://www.Linkedin.com/">
                    <FaInstagram />
                </a>
            </li>

        </StyledSocialIcons>
    )
}
