import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/authContext'
import { useForm } from '../utilities/hooks'
import { useMutation, useQuery } from '@apollo/client'
import { useNavigate } from 'react-router-dom'
import { Container } from '@mui/system'
import { Alert, Button, Stack, TextField } from '@mui/material'

import { gql } from "@apollo/client"; //fixme: harus buat folder graphql-tag

const GET_COORDINATE = gql`
query GetStoresByCoordinate($coordinate: CoordinateInput!) {
    getStoresByCoordinate(coordinate: $coordinate) {
      id
      name
      lineUrl
      cover
      intro
      email
      brandId
    }
  }
`
const Coordinate = () => {
    const context = useContext(AuthContext);
    let navigate = useNavigate();
    const [errors, setErrors] = useState([]);

    function getStoresByCoordinateCallback() {
        console.log("Callback hit");
        getStoresByCoordinate();
    }

    const { onChange, onSubmit, values } = useForm(getStoresByCoordinateCallback, {
        latitude: '',
        longitude: '',
    })

    const [getStoresByCoordinate, { loading }] = useQuery(GET_COORDINATE, {
        update(proxy, { data: { getStoresByCoordinate: userData } }) {
            // context.login(userData)
            navigate('/')
        },
        onError({ graphQLErrors }) {
            setErrors(graphQLErrors)
        },
        variables: { coordinate: values }
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
        </div>
    )
}

export default Coordinate