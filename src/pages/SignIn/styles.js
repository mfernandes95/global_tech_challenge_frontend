import styled from "styled-components";

export const Container = styled.form`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    background-color: #ff6961;
    padding: 100px;
    border-radius: 20px;

    label {
      font-size: 20px;
      color: #fff;
      font-weight: bold;
      padding-bottom: 5px;
    }

    input {
      border: none;
      outline: none;
      border-radius: 15px;
      padding: 6% 4%;
      width: 300px;
    }

    #password {
      margin: 15px 0px 0px 0px;
    }

    button {
      margin-top: 15px;
      height: 40px;
      width: 320px;
      background-color: #fff;
      color: #ff6961;
    }

    span {
      color: #f6cb7c;
      font-weight: bold;
      text-align: center;
      margin-top: 10px;
    }
  }
`;
