import React from "react";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material";
import { Theme } from "../../../Themes/theme";


const ButtonComponent = (props: any) =>{
  return(
    <ThemeProvider theme={Theme}>
      <Button {...props} sx={{textTransform:'none'}}>
        {props.children}
      </Button>
    </ThemeProvider>
  )
}

export default ButtonComponent;