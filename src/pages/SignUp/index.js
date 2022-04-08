import React, { useCallback, useState } from 'react';
import api from "../../services/api";
import { Container } from "./styles";


const SignUp = () => {
  const [message, setMessage] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = useCallback(async (data) => {
    data.preventDefault()
    try {
      const res = await api.post("/users", {
        name: name,
        email: email,
        password: password,
      });

      if (res.status === 201)
        window.location.href = "http://localhost:3000/signin";
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
  }, [name, email, password]);

  return (
    <>
          <Container>
      <form>
      <label>
          Name:
        </label>
          <input type="text" name="name" value={name} onChange={e=> setName(e.target.value)} />
      <label>
          Email:
        </label>
          <input type="text" name="email" value={email} onChange={e=> setEmail(e.target.value)}/>
        <label>
          Password:
        </label>
          <input type="password" name="password" value={password} onChange={e=> setPassword(e.target.value)} />
        <button type="submit" onClick={handleSubmit}>Sign up</button>
      {message === true && <span>Dados incorretos</span>}
      </form>
      </Container>
    </>
    
  );
};

export default SignUp;

/* <button onClick={ ()=> navigate.push('/signup')}>Sing up</button> */

