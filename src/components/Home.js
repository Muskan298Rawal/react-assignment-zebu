import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState({
    name: "",
    description: "",
    images: [],
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const handleImages = (e) => {
    console.log(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div>
      <h3>Create project</h3>
      <div className="outer-box">
        <div>
          <input
            className="inner-box"
            multiple
            type="file"
            onChange={handleImages}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <TextField
            id="name"
            label="Name"
            type="text"
            style={{ margin: "10px 15px" }}
            onChange={handleChange}
          />
          <TextField
            id="description"
            label="Description"
            type="text"
            style={{ margin: "10px 15px" }}
            onChange={handleChange}
          />
          <Link
            to={{
              pathname: "/label-images",
              state: {
                name: "muskan",
              },
            }}
          >
            <button className="btn">Create</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
