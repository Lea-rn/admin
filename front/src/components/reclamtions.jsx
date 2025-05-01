import axios from "axios"
import { useEffect, useState } from "react"


function Reclamtions() {

    const [data , setData] = useState([])
    useEffect (()=>{
      axios.get("http://localhost:5500/reclamations").then((res)=>{
        console.log(res.data)
        setData(res.data)
      })
    },[data])

    return (
    
        <div style={{minHeight : "1000px"}}>
   <table style={{width :"98%"}} className="table mt-5 table-bordered table-striped mx-auto text-center ">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">User Name</th>
      <th scope="col">User Email</th>
      <th scope="col">Reclamation Subject</th>
   
    </tr>
  </thead>
  <tbody>

    {data.map((ele,i)=>(
   <tr key={i}>
   <th scope="row">{i+1}</th>
   <td>{ele.name}</td>
   <td>{ele.email}</td>
   <td>{ele.subject}</td>
 </tr>
    ))}
 

  </tbody>
</table>

</div>
    
    )
}

export default Reclamtions
