import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import styled from "styled-components"
import { auth } from "../firebase/firebase";
import { Form, Link, useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import { Error, Input, Switcher, Title, Wrapper } from "../components/auth-components";


export default function Login() {
    const navigate = useNavigate();
    const [isLoading, setLoading] = useState(false); 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { target: { name, value } } = e; 
       if (name === "email") {
            setEmail(value);
        }
        else if (name === "password") {
            setPassword(value);
        }
    }
    const onSubmit =async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        if(isLoading|| email===""||password===""){
            return;
        }
        try {
            setLoading(true);
            // create an account;
            await signInWithEmailAndPassword(auth,email,password);
            // set the name of the user.
            // await updateProfile(credentials.user , {displayName:name});
            // redirect to the home page
            navigate("/");
        } catch (e) {
            // setError
            if(e instanceof FirebaseError){
                setError(e.message);
            }
        } finally {
            setLoading(false);

        }
        console.log(name, email, password);
    }
    return <Wrapper>
        <Title>Login X</Title>
        <Form onSubmit={onSubmit}>
             <Input name="email" value={email} placeholder="Email" type="email" onChange={onChange} />
            <Input name="password" value={password} placeholder="Password" type="password" onChange={onChange} required />
            <Input type="submit" value={isLoading ? "Loading..." : "Login"} />
        </Form>
        {error !=="" ? <Error>{error}</Error>:null}
        <Switcher>
            Don't have an account? <Link to="/create-account">Create one &rarr;</Link>
        </Switcher>
    </Wrapper>
}