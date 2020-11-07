import styled from 'styled-components';

export const ImageLogo = styled.div `
  width: 100%;
  max-width: 300px;
`;

export const Title = styled.h1 `
  color: #123952;
  font-size: 20px;
  font-family: 'Heebo', sans-serif;
`;

export const LinkVoltar = styled.div `
  display: flex;
  justify-content: center;
  margin-top: 40px;

  a {
    display: flex;
    align-items: center;
    color: #123952;
    text-decoration: none;
    font-size: 20px;
    font-weight: 400;
    font-family: 'Heebo', sans-serif;

    svg {
      font-size: 30px;
      color: #F25D27;
    }
  }

`
