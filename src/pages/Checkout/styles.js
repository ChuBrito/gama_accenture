import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export const Container = styled.div`
  height: 180vh;
  background-color: #f5f8fa;
  padding: 20px;
`;

export const ModalBorder = styled.div`
  border: 1px solid #000000;
  border-radius: 30px;
  width: 100%;
  max-width: 950px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 100%;

  .contentTitle {
    font-size: 26px;
    font-weight: 500;
    margin-bottom: 30px;
  }

  .contentInfoPassage {
    display: flex;
    align-items: center;
    color: #617480;
    > span {
      margin-right: 20px;

      font-size: 22px;
      font-weight: 500;
      margin-bottom: 10px;
      margin-top: 15px;
    }
  }
  .contentIdaVolta {
    font-size: 20px;
    margin-bottom: 6px;
  }
  .priceButton {
    display: flex;
    align-items: center;
    position: relative;
    left: 76%;
    margin-bottom: 10px;
  }
`;

export const ContainerForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .btn-Content {
    display: flex;
    justify-content: space-between;

    .btn-one {
      margin-right: 5px;

      > button {
        color: #fff;
        background-color: #00a000;
        border: 0px solid;
        border-radius: 4px;
        padding: 10px 15px;
        cursor: pointer;

        font-size: 16px;
      }
    }

    .btn-two {
      margin-left: 5px;

      > button {
        color: #fff;
        background-color: #cd5c5c;
        border: 0px solid;
        border-radius: 4px;
        padding: 10px 15px;
        cursor: pointer;

        font-size: 16px;
      }
    }
  }
`;

export const ContentInput = styled.div`
  display: flex;
  align-items: center;

  .input {
    padding: 4px;
    width: 200px;
  }
`;
export default useStyles;
