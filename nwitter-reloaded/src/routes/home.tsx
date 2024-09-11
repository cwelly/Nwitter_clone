import { auth } from "../firebase/firebase"

export default function Home(){
    const logout = ()=>{
        auth.signOut();
    }
    return <h1><button onClick={logout}>logOut</button>Home!</h1>
}