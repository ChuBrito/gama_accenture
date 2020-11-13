import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import useStyles from "./styles";
import PlaceholderTicket from "./PlaceholderTicket/PlaceholderTicket";

const TicketList = ({ list, name }) => {
  console.log(list);
  console.log(name);
  const classes = useStyles();
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon color="secondary" />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>{name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box display="flex" flexDirection="column" width="100%">
          {list.length === 0 ? <PlaceholderTicket name={name} /> : [...list]}
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default TicketList;
