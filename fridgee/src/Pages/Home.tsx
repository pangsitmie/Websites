import { getAuth, signOut } from 'firebase/auth';
import { StyledButtonStroke } from '../components/styles/ButtonStroke.styled';
import { H1 } from '../components/styles/Typography.styled';

type Props = {}

const Home = (props: Props) => {
    const auth = getAuth();


    return (
        <div>
            <H1>HOME</H1>


            <StyledButtonStroke
                type="submit"
                onClick={() => signOut(auth)}
            >
                Sign out
            </StyledButtonStroke>
        </div>
    )
}

export default Home