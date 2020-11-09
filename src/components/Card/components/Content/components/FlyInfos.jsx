import { Typography } from "@material-ui/core";
import React from "react";
import { ContentMiddle, CornerContainer, MiddleContainer } from "../../styles";

// TODO alterar tipografias para certos no theme

const FlyInfos = ({ information }) => {
  return (
    <ContentMiddle>
        <CornerContainer>
          <Typography>23:15</Typography>
          <Typography>CGH</Typography>
        </CornerContainer>
        <MiddleContainer>
          <Typography>Direto</Typography>
          <Typography>03h 20min</Typography>
        </MiddleContainer>
        <CornerContainer>
          <Typography>01:35</Typography>
          <Typography>CGH</Typography>
        </CornerContainer>
    </ContentMiddle>
  );
};

export default FlyInfos;
