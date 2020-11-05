import React from "react";
import { ContentMiddle } from "../../styles";

// TODO

const FlyInfos = ({ information }) => {
  return (
    <ContentMiddle>
      <>
        <CornerContainer>
          <ContentTimeText>23:15</ContentTimeText>
          <ContentAirportText>CGH</ContentAirportText>
        </CornerContainer>
        <MiddleContainer>
          <ContentBlueText>Direto</ContentBlueText>
          <ContentFlightDurationText>03h 20min</ContentFlightDurationText>
        </MiddleContainer>
        <CornerContainer>
          <ContentTimeText>01:35</ContentTimeText>
          <ContentAirportText>CGH</ContentAirportText>
        </CornerContainer>
      </>
    </ContentMiddle>
  );
};

export default FlyInfos;
