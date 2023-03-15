import SocialIcons from "./SocialIcons";
import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import { StyledFooter } from "./styles/Footer.styled";

export default function Footer() {
    return (
        <StyledFooter>
            <Container>
                <img src="./images/logo_white.svg" alt="logo" />

                <Flex>
                    <ul>
                        <li>Features</li>
                        <li>Team</li>
                        <li>Sign In</li>
                    </ul>
                    <ul>
                        <li>Blog</li>
                        <li>Help Center</li>
                        <li>Contact Us</li>
                    </ul>
                    <ul>
                        <li>Account</li>
                        <li>Media Center</li>
                        <li>Jobs</li>
                    </ul>
                    <ul>
                        <li>Resources</li>
                        <li>Privacy</li>
                        <li>Terms</li>
                    </ul>

                    {/* Social icons */}
                    <SocialIcons />
                </Flex>
                <p>&copy; 2021 Huddle. All rights reserved</p>
            </Container>
        </StyledFooter>
    )
}