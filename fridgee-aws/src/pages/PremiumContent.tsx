import { Authenticator, WithAuthenticatorProps } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
type Props = {}

const PremiumContent = (props: Props) => {
    return (
        <div>
            <Authenticator>
                {({ signOut, user }: WithAuthenticatorProps) => (
                    <main>
                        <h1>Hello {user?.username}</h1>
                        <button onClick={signOut}>Sign out</button>
                    </main>
                )}
            </Authenticator>
        </div>
    )
}

export default PremiumContent