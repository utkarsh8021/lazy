import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

export default function Login() {
  return (
    <form noValidate autoComplete="off">
      <TextField
        id="outlined-secondary"
        label="Enter email"
        variant="outlined"
        color="secondary"
      />
      <TextField
        id="outlined-secondary"
        label="Email password"
        variant="outlined"
        color="secondary"
      />

      <Button type="button" color="primary">
        Log in
      </Button>
    </form>
  );
}