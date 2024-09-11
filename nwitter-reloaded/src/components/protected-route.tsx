import { Navigate } from "react-router-dom";
import { auth } from "../firebase/firebase";

export default function ProtectedRoute({children}:{children:React.ReactNode}){
    // 파이어 베이스에서 가져온 커렌트 유저
    const user = auth.currentUser;
    if(user===null){
        return <Navigate to="/login"/>
    }
    return children;
}