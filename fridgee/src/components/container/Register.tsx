import { Formik } from "formik"
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import TextField from "../TextField";
import { H1, H2 } from "../styles/Typography.styled";
import { StyledButtonFill } from "../styles/ButtonFill.styled";
import { StyledButtonStroke } from "../styles/ButtonStroke.styled";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FcGoogle } from 'react-icons/fc';
import { BsApple } from 'react-icons/bs';

const checkoutSchema = yup.object().shape({
    account: yup.string().required("required"),
    password: yup.string().required("required").nullable(),
});

type Props = {
    navigateLogin: () => void;
}

const Register = ({ navigateLogin }: Props) => {
    const auth = getAuth();
    const navigate = useNavigate();
    const [authing, setAuthing] = useState(false);

    const SignInWithGoogle = async () => {
        setAuthing(true);

        signInWithPopup(auth, new GoogleAuthProvider())
            .then(response => {
                console.log(response.user.uid);
                navigate('/');
            })
            .catch(error => {
                console.log(error);
                toast.error("Login Failed");
                setAuthing(false);
            })
    }

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    // const dispatch = useDispatch();

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    //========================== INITIAL VALUES ==========================
    const initialValues = {
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    }

    //  ========================== PASSWORD VISIBILITY ==========================
    const handleFormSubmit = async (values: any): Promise<void> => {
        console.log(values);

        const MAX_RETRY_ATTEMPTS = 3;
        let retryCount = 0;


        if (retryCount === MAX_RETRY_ATTEMPTS) {
            console.log(`Maximum retry attempts (${MAX_RETRY_ATTEMPTS}) exceeded.`);
            toast.error("Login Failed");
        }
    }

    return (
        <div className="">
            <div className={`${isMobile ? 'p-[2%]' : 'p-[5%]'}  items-center z-10`}>
                <div>
                    <div className="pb-4">
                        <H2 className="text-center">
                            Sign up for free to start cooking.
                        </H2>
                    </div>

                    {/* form */}
                    <div>
                        <div className="flex justify-between gap-4">
                            <StyledButtonStroke
                                type="submit"
                                onClick={SignInWithGoogle}
                                disabled={authing}
                                className="w-full"
                            >
                                <div className="flex gap-4 items-center justify-center">
                                    <FcGoogle className="text-xl" />
                                    Continue With Google
                                </div>
                            </StyledButtonStroke>

                            <StyledButtonStroke
                                type="submit"
                                onClick={SignInWithGoogle}
                                disabled={authing}
                                className="w-full"

                            >
                                <div className="flex gap-4 items-center justify-center">
                                    <BsApple className="text-xl" />
                                    Continue With Apple
                                </div>
                            </StyledButtonStroke>
                        </div>

                        <div className="my-4">
                            <hr />
                        </div>

                        <div>
                            <Formik
                                onSubmit={handleFormSubmit}
                                initialValues={initialValues}
                                validationSchema={checkoutSchema}
                            >
                                {({
                                    values,
                                    errors,
                                    touched,
                                    handleBlur,
                                    handleChange,
                                    handleSubmit,
                                }) => (
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-10">
                                            <TextField
                                                type="text"
                                                label="What should we call you?"
                                                placeholder="Enter your name"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.name}
                                                name="name"
                                                error={!!(touched.name && errors.name)} // Convert to boolean
                                                helperText={touched.name && errors.name ? errors.name : ""}
                                            />
                                            <TextField
                                                type="text"
                                                label="What's your email?"
                                                placeholder="Enter your email"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.email}
                                                name="email"
                                                error={!!(touched.email && errors.email)} // Convert to boolean
                                                helperText={touched.email && errors.email ? errors.email : ""}
                                            />
                                            <TextField
                                                type="password"
                                                label="Create a password"
                                                placeholder="Enter your password"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.password}
                                                name="password"
                                                error={!!(touched.password && errors.password)} // Convert to boolean
                                                helperText={touched.password && errors.password ? errors.password : ""}
                                            />
                                            <TextField
                                                type="password"
                                                label="Confirm your password"
                                                placeholder="Enter your password"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.confirmPassword}
                                                name="confirmPassword"
                                                error={!!(touched.confirmPassword && errors.confirmPassword)} // Convert to boolean
                                                helperText={touched.confirmPassword && errors.confirmPassword ? errors.confirmPassword : ""}
                                            />
                                            <div className="">
                                                <button
                                                    onClick={navigateLogin}>
                                                    <span className="text-[#0070F4]">
                                                        Already have an account?
                                                    </span>
                                                </button>
                                            </div>
                                        </div>

                                        <StyledButtonFill
                                            type="submit"
                                        >
                                            Register
                                        </StyledButtonFill>
                                    </form>
                                )}
                            </Formik>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}
export default Register