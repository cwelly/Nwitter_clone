import { GithubAuthProvider, signInWithPopup, signInWithRedirect } from "firebase/auth";
import styled from "styled-components";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

export default function GithubButton(){
    const navigate = useNavigate();
    const Button = styled.span`
    background-color: white;
    font-weight: 500;
    padding: 10px 20px;
    margin-top: 50px;
    border-radius: 50px;
    color: black;
    border : 0;
    display: flex;
    gap: 5px;
    align-items: center;
    cursor: pointer;
    justify-content: center;
    `;
    const Logo = styled.img`
    height: 25px;
    `;
    const Click = async ()=>{
        const provider = new GithubAuthProvider();
        try{
            await signInWithRedirect(auth , provider);
            navigate("/home");
        }catch(e){

        }
    }
   return <Button onClick={Click}>
    <Logo src="/github-mark.png"></Logo>
    Continue with Github
   </Button> 
}