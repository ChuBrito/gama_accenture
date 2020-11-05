import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 10px auto;
`;

export const CardHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #115D8C;
  padding: 1em;
`;

export const HeaderTextDestination = styled.span`
  color: white;
`

export const ContentContainer = styled.main`
  display: flex;
  orientation: row;
  padding: .3em;
`

export const ContentAirline = styled.div`
  text-align: center;
  align-items: center;
  font-weight: bold;
`

export const CornerContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  font-size: 1.5em;
  &:first-child{
    font-weight: bold;
  }
`