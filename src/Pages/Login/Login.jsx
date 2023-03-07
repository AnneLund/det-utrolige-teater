import { useState } from "react";
import { useLoginStore } from "./useLoginStore";
import useFlashMessageStore from "../../Components/FlashMessages/useFlashMessageStore";
import { LoginFormStyled } from "./LoginFormStyled";
import LoginButton from "./LoginButton";

const Login = () => {
  const { setLoggedIn, loggedIn } = useLoginStore();
  const { setFlashMessage } = useFlashMessageStore();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (evt) => {
    const value = evt.target.value;
    setUser({
      ...user,
      [evt.target.name]: value,
    });
  };

  //Login funktion

  const LogMeIn = async (e) => {
    // Jeg vil forhindre at siden reloader når der trykkes på submit (default-behavior)
    e.preventDefault();

    try {
      const endPoint = "https://api.mediehuset.net/token";
      const username = user.username;
      const password = user.password;
      const data = { username, password };

      const response = await fetch(endPoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const json = await response.json();

      if (json.status === "Ok") {
        setFlashMessage("Velkommen");
        json.user.user_id = json.user_id;
        setLoggedIn(true, json.user, json.username, json.access_token);
      } else {
        setFlashMessage("Ingen brugere med disse kriterier");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return !loggedIn ? (
    <LoginFormStyled onSubmit={LogMeIn}>
      <input type="text" name="username" onChange={(e) => handleChange(e)} />
      <div>
        <input type="password" name="password" onChange={(e) => handleChange(e)} />
        <LoginButton>Login</LoginButton>
      </div>
    </LoginFormStyled>
  ) : null;
};

export default Login;
