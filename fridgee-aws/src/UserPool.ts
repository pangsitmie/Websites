import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
    UserPoolId: 'ap-southeast-1_E1nSQW0bs',
    ClientId: '2k4roir77qaia9p5423cesi504'
}

export default new CognitoUserPool(poolData);