import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { ReactNode, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export interface IAuthRouteProps {
    children?: ReactNode; // Here is the addition of the children property
}

const AuthRoute = (props: IAuthRouteProps) => {
    const { children } = props;
    const auth = getAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log('user is logged in');
                setLoading(false);
                navigate('/');
            } else {
                console.log('user is not logged in');
                setLoading(false);
                navigate('/welcome');
            }
        });

        // Cleanup function
        return () => {
            unsubscribe();
        };
    }, [auth, navigate])

    if (loading) return <div>Loading...</div>

    return (
        <>{children}</>
    )
}

export default AuthRoute