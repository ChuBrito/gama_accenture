import styled from "styled-components";

export const Container = styled.div`
  background: #f5f8fa;
  height: 100vh;
`;
export const Content = styled.div`
  height: 100vh;
  display: flex;
  margin: 10px;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  max-width: 400px;

  .texto {
    flex-wrap: wrap;
    font-size: 24px;
    margin-bottom: 10px;

    color: #888888;
    font-family: "Heebo", sans-serif;
  }

  .textFieldInput {
    margin-bottom: 30px;
    background-color: #fff;
  }

  .ButtonEnviar {
    background: #f25d27;
    color: #fff;
    height: 55px;
    border: 0px solid;

    font-size: 20px;

    &:hover {
      background: #df5421;
      border: 0px solid;
    }
  }
`;
