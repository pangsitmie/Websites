import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";




const Login = () => {
    const navigate = useNavigate();

    const [formState, setFormState] = useState({
        email: '',
        password: '',
    });

    return (
        <div>
            <div className="flex flex-column">
                <input
                    value={formState.email}
                    onChange={(e) =>
                        setFormState({
                            ...formState,
                            email: e.target.value
                        })
                    }
                    type="text"
                    placeholder="Your email address"
                />
                <input
                    value={formState.password}
                    onChange={(e) =>
                        setFormState({
                            ...formState,
                            password: e.target.value
                        })
                    }
                    type="password"
                    placeholder="Choose a safe password"
                />
            </div>
            <div className="flex mt3">
                <button
                    className="pointer mr2 button"
                    onClick={() => navigate('/app')}
                >
                    Login
                </button>

            </div>
        </div>
    )
};

export default Login