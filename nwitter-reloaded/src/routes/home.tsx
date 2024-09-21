import styled from "styled-components";
import { auth } from "../firebase/firebase"
import PostTweetForm from "../components/post-tweet-form";

const Wrapper = styled.div``;

export default function Home(){
    return <Wrapper>
        <PostTweetForm></PostTweetForm>
    </Wrapper>
    
}