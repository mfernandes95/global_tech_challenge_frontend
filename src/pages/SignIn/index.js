import React, { useCallback, useState } from "react";
import api from "../../services/api";
import { Container } from './styles';

const SignIn = () => {
  const [message, setMessage] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = useCallback(async (data) => {
    data.preventDefault()
    console.log('dataaa', email, password)
    try {
      const res = await api.post("/sessions", {
        email: email,
        password: password,
      });

      if (res.status === 200)
        window.location.href = "https://www.claro.com.br/";
      else {
        setMessage(true);
        setTimeout(() => {
          setMessage(false);
        }, 1800);
      }
    } catch (error) {
      setMessage(true);
        setTimeout(() => {
          setMessage(false);
        }, 1800);
      console.log("errr", error);
    }
  }, [email, password]);
  return (
    <>
    <Container>
      <form>
        <label>
          Email:
          <input type="text" name="email" value={email} onChange={e=> setEmail(e.target.value)}/>
        </label>
        <label>
          Password:
          <input type="password" name="password" value={password} onChange={e=> setPassword(e.target.value)} />
        </label>
        <button type="submit" onClick={handleSubmit}>Sign in</button>
      </form>
      {message === true && <span>Usuário e/ou Senha incorretos</span>}
      </Container>
    </>
  );
};

export default SignIn;
