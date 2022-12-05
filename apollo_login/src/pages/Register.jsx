import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/authContext'
import { useForm } from '../utilities/hooks'
import { useMutation } from '@apollo/client'
import { useNavigate } from 'react-router-dom'
import { Container } from '@mui/system'
import { Alert, Button, Stack, TextField } from '@mui/material'

import { gql } from "@apollo/client"; //fixme: harus buat folder graphql-tag


//FIXME: graphql tag
const REGISTER = gql`
mutation Login($phone: PhoneInput!, $password: String!, $deviceCode: String!, $firebaseToken: String!) {
  login(phone: $phone, password: $password, deviceCode: $deviceCode, firebaseToken: $firebaseToken)
}
`


const Register = () => {
    const context = useContext(AuthContext);
    let navigate = useNavigate();
    const [errors, setErrors] = useState([]);

    function registerUserCallback() {
        console.log("Callback hit");
        registerUser();
    }
    const { onChange, onSubmit, values } = useForm(registerUserCallback, {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })


    const [registerUser, { loading }] = useMutation(REGISTER, {
        update(proxy, { data: { registerUser: userData } }) {
            context.login(userData)
            navigate('/')
        },
        onError({ graphQLErrors }) {
            setErrors(graphQLErrors)
        },
        variables: { registerInput: values }
        //fixme: ini mgkn harus diubah registerInputnya jadi file sesuai mutation graphqlnya
    })

    return (
        <div>
            <Container spacing={2} maxWidth="sm">
                <h3>Register</h3>

                <Stack spacing={2} paddingBottom={2}>
                    <TextField
                        label="Username"
                        name="username"
                        onChange={onChange}
                    />
                    <TextField
                        label="Email"
                        name="email"
                        onChange={onChange}
                    />
                    <TextField
                        label="Password"
                        name="password"
                        onChange={onChange}
                    />
                    <TextField
                        label="Confirm Password"
                        name="confirmPassword"
                        onChange={onChange}
                    />


                </Stack>
                {errors.map((error) => {
                    return (
                        <Alert severity="error">
                            {error.message}
                        </Alert>
                    );
                })}

                <Button
                    variant="contained"
                    onClick={onSubmit}
                >
                    Register
                </Button>


            </Container>
        </div >
    )
}

export default Register