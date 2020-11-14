import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";

export const ModalBorder = styled.div `
  border: 1px solid #000000;
  border-radius: 30px;
  width: 100%;
  max-width: 740px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const useStyles = makeStyles((theme) => ({
    modalContainer: {},
    modalHeader: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "4px",
        width: "100%",
        maxWidth: "800px",
        margin: "0 auto",
    },
    appBar: {
        position: "relative",
        color: "#222",
        backgroundColor: "#fff",

        padding: "8px",
        outline: "1px solid #fff",
        borderRadius: "0px",
    },
    fontHour: {
        fontWeight: "500",
    },
    fontVoo: {
        fontWeight: "500",
    },
    modalContent: {
        padding: "24px",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        boxSizing: "border-box",
        alignItems: "center",
    },
    modalContentItem: {
        padding: "8px",
    },
    modalButtonComprar: {
        maxWidth: "350px",
        width: "100%",
        position: "absolute",
        borderRadius: "60px",
        backgroundColor: "#F25D27",
        color: "#fff",
        height: "56px",
        fontSize: "20px",
        marginTop: "16px",
    },
    modalAlinhado: {
        display: "flex",
    },
    modalAlinhamento: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "fixed",
        maxWidth: "330px",
        width: "100%",
        padding: "10px",
        bottom: "80px",
    },
    modalAlinhamentoPreco: {
        display: "flex",
        alignItems: "center",
    },
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        margin: "0 auto",
        width: "94%",
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
    },
    ModalPrice: {
        paddingLeft: "10px",
        fontSize: "35px",
    },
}));

export default useStyles;