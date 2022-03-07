import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
 
function Label() {
 const [data, setData] = useState(JSON.parse(localStorage.getItem("ImgData")));
 const [label, setLabel] = useState("");
 const [index, setIndex] = useState(0);
 
 const handleChange = (e) => {
   setLabel(e.target.value);
 };
 
 const handlePrev = () => {
   setIndex((index) => index - 1);
 };
 
 const handleNext = () => {
   setIndex((index) => index + 1);
 };
 
 const downloadFile = ({ data, fileName, fileType }) => {
   const blob = new Blob([data], { type: fileType });
   const a = document.createElement("a");
   a.download = fileName;
   a.href = window.URL.createObjectURL(blob);
   const clickEvt = new MouseEvent("click", {
     view: window,
     bubbles: true,
     cancelable: true,
   });
   a.dispatchEvent(clickEvt);
   a.remove();
 };
 
 const handleSave = (e) => {
   e.preventDefault();
   let objData = {
     label: label,
     url: data.images,
     name: data.name,
     description: data.description,
   };
 
   downloadFile({
     data: JSON.stringify(objData),
     fileName: "users.json",
     fileType: "text/json",
   });
   setLabel("");
 };
 
 return (
   <div className="label-data">
   <div className="outer-div">
     <TextField
       id="label"
       label="label"
       type="text"
       style={{ margin: "10px 15px" }}
       onChange={handleChange}
     />
 
     <img src={data.images[index].url} height="200px" width="200px" />
     </div>
     <div className="label-btn">
       <Button onClick={handlePrev} disabled={index == 0} className="btn" style={{ marginRight: "10px " }}>
         Prev
       </Button>
       <Button
         onClick={handleNext}
         disabled={index == data.images.length - 1}
         className="btn"
         style={{ marginRight: "10px " }}
       >
         Next
       </Button>
       <Button
         onClick={handleSave}
         className="btn"
         disabled={label.length == 0}
       >
         Save
       </Button>
     </div>
   </div>
 );
}
 
export default Label;
 
