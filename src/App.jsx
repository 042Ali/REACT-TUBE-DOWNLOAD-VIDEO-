import axios from "axios";
import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function App() {
  const [download, setDownload] = useState("");
  const [url, setUrl] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const notify = () => toast.success("Video in Download");

  useEffect(() => {
    axios
      .get(
        `https://yt-dowloader-api-fastapi-1.onrender.com/download?url=${url}`
      )
      .then((response) => {
        setDownload(response.data);
      });
  }, [url]);

  const handleChange = (event) => {
    setUrl(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (download) {
      window.location.href = download;
    }
  };

  return (
    <div>
      <h1 style={{ marginLeft: "750px", fontWeight: "300" }}>
        DOWN
        <span
          style={{
            backgroundColor: "red",
            color: "white",
            borderRadius: "12px",
            border: "4px solid red",
          }}
        >
          TUBE
        </span>
      </h1>
      <form onSubmit={handleSubmit}>
        <TextField
          style={{ width: "700px", marginLeft: "450px", marginTop: "100px" }}
          id="outlined-basic"
          label="URL here...."
          variant="outlined"
          value={url}
          onChange={handleChange}
        />
        <Button
          style={{
            marginTop: "100px",
            width: "100px",
            height: "58px",
            marginLeft: "10px",
            color: "#fff",
          }}
          type="submit"
          variant="contained"
          href="#contained-buttons"
          onClick={notify}
        >
          Download
        </Button>
        <Toaster />
      </form>
    </div>
  );
}
