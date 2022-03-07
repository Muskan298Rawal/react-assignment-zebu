
import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
 
function Home() {
 const [data, setData] = useState({
   name: "",
   description: "",
   images: [],
 });
 
 let navigate = useNavigate();
 
 useEffect(() => {
   localStorage.setItem("ImgData", JSON.stringify(data));
 }, [data]);
 
 const handleChange = (e) => {
   setData({ ...data, [e.target.id]: e.target.value });
 };
 
 const handleImages = (e) => {
   const tempArr = [];
 
   [...e.target.files].forEach((file) => {
     tempArr.push({
       data: file,
       url: URL.createObjectURL(file),
     });
   });
   setData({ ...data, images: tempArr });
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
 
         <Button
           className="btn"
           disabled={
             data.images.length == 0 ||
             data.name.length == 0 ||
             data.description.length == 0
           }
           onClick={() => navigate("/label-images")}
         >
           Create
         </Button>
         {/* </Link> */}
       </div>
     </div>
   </div>
 );
}
 
export default Home;
