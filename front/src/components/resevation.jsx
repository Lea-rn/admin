import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Reservation = () => {
  const [data , setData] = useState([])

  useEffect(()=>{
   axios.get("http://localhost:5500/reservation").then((res)=>{
    setData(res.data)
   })
  },[])
    return (
        <div style={{minHeight : "1000px"}}>
   <table style={{width :"98%"}} className="table mt-5 table-bordered table-striped mx-auto text-center ">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Recipe Id</th>
      <th scope="col">Recipe Name</th>
      <th scope="col">User Name</th>
      <th scope="col">User Phone</th>
    </tr>
  </thead>
  <tbody>

    {data.map((ele,i)=>(
   <tr key={i}>
   <th scope="row">{i+1}</th>
   <td>{ele.recipe_id}</td>
   <td>{ele.recipe_name}</td>
   <td>{ele.user_name}</td>
   <td>{ele.user_phone}</td>
 </tr>
    ))}
 

  </tbody>
</table>

</div>
       
    );
}

export default Reservation;
