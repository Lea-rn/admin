import "./App.css";

import Navbar from "./components/navbar";
import Main from "./components/main";
import Footer from "./components/footer";
import Reservation from "./components/resevation";

import Addblogs from "./components/addblogs";
import Add from "./components/add";
import Category from "./components/category";
import Reclamtions from "./components/reclamtions";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {


  //// for the add : 
  const [copyofdata, setcopyofdata] = useState([]); /// copy of data
  const [newdata,setNewdata] = useState([])  /// data after updating


  const [searchdata,setSearchdata] = useState([])  /// get the data after searching
  const [category,setCategory] = useState("")




  const [hundelget,setHundelget] = useState(null)
 
 const hundelhomepage = ()=>{
  setHundelget(true)
  console.log("home page true")
 }

 const hundelsearchpage = ()=>{
 setHundelget(null)
 console.log("search page true")
 }
 
  const handeldata = (copy)=>{   /// function to take copie from main component
    setcopyofdata(copy)
  }

 const hundelnewdata = (newdata)=>{ /// function to get the new data updated
     setNewdata(newdata)
 }
 
 const getofsearch = (datasearched)=>{
  setSearchdata(datasearched)

 }


 const categorytype = (category)=>{  
  setCategory(category)

 }


   
    //// "hundeldata" attribute is a function  to take a copie of data from the main component
    //// "copyofdata" attribute is a value witch has a copy of data incomming from the function hundeldata

    ////  "newdata"  attribute send the function hundelnewdata to the add component to get the newdata updated
    //// "dataupdated" attribute send the new data after updating to the main component to render it 




  return (
    <div className="App">
      <Navbar getofsearch={getofsearch} hundelhomepage={hundelhomepage} hundelsearchpage={hundelsearchpage} categorytype={categorytype} />
      <Routes>
        <Route path="/" exact element={<Main dataupdated={newdata}  handeldata={handeldata} searchdata={searchdata} hundelget={hundelget}  />} />
        <Route path="/add" element={<Add newdata={hundelnewdata} copyofdata={copyofdata}  />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/addblogs" element={<Addblogs />} />
        <Route path="/category" element={<Category category={category} copyofdata={copyofdata}  />} />
        <Route path="/reclamations" element={<Reclamtions/>}/>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
