import React from "react";
import { Box } from "@material-ui/core";
import { ReactComponent as LogoLarge } from "../../assets/Logo_lg.svg";
import { ReactComponent as LogoSmall } from "../../assets/Logo_sm.svg";
import { ReactComponent as LogoLine } from "../../assets/Logo_line.svg";

const Logo = ({ large, line, height, width, padding }) => {
  return (
    <Box display="flex" maxHeight={height} maxWidth={width} padding={padding}>
      {line ? <LogoLine /> : large ? <LogoLarge /> : <LogoSmall />}
    </Box>
  );
};

export default Logo;
