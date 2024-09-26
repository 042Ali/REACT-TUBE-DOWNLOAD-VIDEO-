import { Button, TextField } from "@mui/material";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function App() {
  const [users, setUsers] = useState();
  const notify = () => toast.success("Video in Download");

  return (
    <div>
      <h1 style={{ marginLeft: "750px", fontWeight: "300" }}>
        DOWN
        <span
          style={{
            backgroundColor: "RED",
            color: "white",
            borderRadius: "12px",
            border: "1px solid red",
            borderBottom: "10px",
          }}
        >
          TUBE
        </span>{" "}
      </h1>
      <TextField
        style={{ width: "700px", marginLeft: "450px", marginTop: "100px" }}
        id="outlined-basic"
        label="URL here...."
        variant="outlined"
      />
      <Button
        style={{
          marginTop: "100px",
          width: "100px",
          height: "58px",
          marginLeft: "10px",
          color: "#fff",
        }}
        variant="contained"
        href="#contained-buttons"
        onClick={notify}
      >
        Download
      </Button>
      <Toaster />
    </div>
  );
}
