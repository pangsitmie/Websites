import { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import { useForm } from "../utilities/hooks";
import { useMutation } from "@apollo/react-hooks";
import { TextField, Button, Container, Stack, Alert } from "@mui/material"

import { gql } from "@apollo/client"; //fixme: harus buat folder graphql-tag
import { useNavigate } from "react-router-dom";

const typeDefs = gql`
    extend type PhoneInput {
        number: String!,
        country: String!
    }
`
const LOGIN_USER = gql`
    mutation Login($phone: PhoneInput!, $password: String!, $deviceCode: String!, $firebaseToken: String!) {
        login(phone: $phone, password: $password, deviceCode: $deviceCode, firebaseToken: $firebaseToken) 
    }
    extend type PhoneInput {
        number: String!,
        country: String!
    }
`

function Login(props) {
    let navigate = useNavigate();
    const context = useContext(AuthContext);
    const [errors, setErrors] = useState([]);

    function loginUserCallback() {
        console.log("Callback hit");
        loginUser();
    }
    const { onChange, onSubmit, values } = useForm(loginUserCallback, {
        number: '',
        password: '',
        country: 'tw',
        deviceCode: '',
        firebaseToken: ''
    });

    const [loginUser, { loading }] = useMutation(LOGIN_USER, {
        update(proxy, { data: { loginUser: userData } }) {
            context.login(userData);
            navigate('/')
        },
        onError({ graphQLErrors }) {
            setErrors(graphQLErrors);
            console.log(errors);
        },
        variables: { registerInput: values }
    })

    return (
        <Container spacing={2} maxWidth="sm">
            <h3>Login</h3>
            <Stack spacing={2} paddingBottom={2}>
                <TextField
                    label="number"
                    name="number"
                    onChange={onChange}
                />
                <TextField
                    label="password"
                    name="password"
                    onChange={onChange}
                />
            </Stack>
            {/* {errors.map(function (error) {
                return (
                    <Alert severity="error">
                        {errors.message}
                    </Alert>
                );
            })} */}
            <Button variant="contained" onClick={onSubmit}>Login</Button>
        </Container>
    );
}
export default Login;