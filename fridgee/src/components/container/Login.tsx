import { Formik } from "formik"
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import TextField from "../TextField";
import { H1, H2 } from "../styles/Typography.styled";
import { StyledButtonFill } from "../styles/ButtonFill.styled";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { StyledButtonStroke } from "../styles/ButtonStroke.styled";
import { FcGoogle } from 'react-icons/fc';
import { BsApple } from 'react-icons/bs';
import ButtonFill from "../button/ButtonFill";
import { Button } from "../../stories/Button";


const checkoutSchema = yup.object().shape({
    account: yup.string().required("required"),
    password: yup.string().required("required").nullable(),
});

type Props = {
    navigateRegister: () => void;
}

const Login = ({ navigateRegister }: Props) => {
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
        account: "",
        password: ""
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
            <div className={`${isMobile ? 'p-[2%]' : 'p-[5%]'} items-center z-10 `}>
                <div>
                    <div className="pb-4">
                        <H2 className="text-center">
                            Log in
                        </H2>
                        <div className="flex justify-center">
                            <span className="text-center mr-1">
                                New to Fridgee?
                            </span>

                            <button
                                onClick={navigateRegister}>
                                <span className="text-primary">
                                    Sign up for free
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* form */}
                    <div>
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
                                        <div className="mb-16">
                                            <TextField
                                                type="text"
                                                label="Email"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.account}
                                                name="account"
                                                error={!!(touched.account && errors.account)} // Convert to boolean
                                                helperText={touched.account && errors.account ? errors.account : ""}
                                            />
                                            <TextField
                                                type="password"
                                                label="Password"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.password}
                                                name="password"
                                                error={!!(touched.password && errors.password)} // Convert to boolean
                                                helperText={touched.password && errors.password ? errors.account : ""}
                                            />
                                            <div className="flex justify-between">
                                                <div></div>
                                                <span className="">
                                                    <a href="">Forget password</a>
                                                </span>
                                            </div>
                                        </div>

                                        <div className="w-full">
                                            <Button
                                                label="Login"
                                                onClick={() => { }}
                                                primary
                                            />
                                        </div>


                                        <div className="my-4">
                                            <hr />
                                        </div>

                                        <div className="flex justify-between gap-4">
                                            <Button
                                                label="Continue With Google"
                                                icon={<FcGoogle />}
                                                onClick={SignInWithGoogle}
                                                disabled={authing}
                                            />
                                            <Button
                                                label="Continue With Apple"
                                                icon={<BsApple />}
                                                onClick={SignInWithGoogle}
                                                disabled={authing}
                                            />
                                        </div>

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
export default Login