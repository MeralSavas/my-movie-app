import Login from "./pages/Login";
import Register from "./pages/Register";
import { userOut, signIn, IsLogin } from "./auth/firebase";

function App() {
  const logout = () => {
    userOut();
  };

  const checkUser = () => {
    IsLogin();
  };
  return (
    <div>
      <Register />
      <Login />
      <button onClick={logout}>Log Out</button>
      <button onClick={checkUser}>Kullanici login mi?</button>
    </div>
  );
}

export default App;
