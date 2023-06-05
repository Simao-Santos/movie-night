import React from 'react';
import { AppBar } from '@mui/material';
import '../CSS/color-palette.css';

const styles = {
  main: {
    backgroundColor: "var(--primary-color)",
    padding: "1em 1em 1em 1em",
    marginBottom: "0.5em",
    margin: "1em",
    // textAlign: "right",
    borderRadius: "17px",
  },
};

function Navbar() {
  return (
    <AppBar style={styles.main}>
      navbar
    </AppBar>
  )
}

export default Navbar