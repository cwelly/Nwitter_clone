import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/layout"
import Profile from "./routes/profile"
import Home from "./routes/home"
import Login from "./routes/login"
import CreateAccount from "./routes/create-account"
import styled, { createGlobalStyle } from "styled-components"
import reset from "styled-reset"
import { useEffect, useState } from "react"
import LoadingScreen from "./components/loading-screen"
import { auth } from "./firebase/firebase"
import ProtectedRoute from "./components/protected-route"

const GlobalStyles = createGlobalStyle`
  ${reset};
  *{
    box-sizing: border-box;
  }
  body {
  background-color : black;
  color:white;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
 `;
const router = createBrowserRouter([{
  path: "/",
  element: <Layout></Layout>,
  children: [
    {
      path: "",
      element: <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    },
    {
      path: "profile",
      element: <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
    }
  ]
},
{
  path: "/login",
  element: <Login />,
}, {
  path: "/create-account",
  element: <CreateAccount />,
},
])
const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
`;
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const init = async () => {
    await auth.authStateReady();
    setIsLoading(false);
  }

  useEffect(() => {
    init();
  }, [])

  return (
    <Wrapper>
      <GlobalStyles></GlobalStyles>
      {isLoading ? <LoadingScreen /> : <RouterProvider router={router} />}
    </Wrapper>
  )
}

export default App
