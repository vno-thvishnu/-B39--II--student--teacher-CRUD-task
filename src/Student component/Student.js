import React from 'react'
import { Link, Outlet } from "react-router-dom";
import axios from "axios";
import  { useState } from "react";


function Student({studentData,setStudentData,setLoading,loading}) {

  const [id,setId] = useState()
  function dlt(id){

    setId(id)
    // console.log(a)
  

   
  }
const del = async()=>{
  try{
    const deleting = await axios.delete
       (`https://636405f97b209ece0f3e9710.mockapi.io/student/${id}`)

      //  alert("successfully deleted, Click back")
      rls()

      } catch (error) {
        alert("Error")
        }}

        const rls = async()=>{
            try{
              setLoading(true)
              const getting = await axios.get("https://636405f97b209ece0f3e9710.mockapi.io/student");
              setStudentData(getting.data)
              console.log(getting.data)
              setLoading(false)
            }catch(error){
              alert("error fetching teacher")
            }
            
            }
  return (
    <>
    <div className="teacher">
      <h4>Student - List</h4>




      <Link
      to={"/studentcreate"}
        style={{ color: "white", backgroundColor: "#1e7afa" }}
        className="btn"
      >
        Add New Student
      </Link>
   
    
   
         <div>
          {
         loading?  <div className="loading">
<div class="spinner-grow  " style={{marginTop:"120px",color:"#1e7afa"}} role="status">
     <span class="visually-hidden">Loading...</span>
   </div>

         </div>
           :
           <table className="table">
             <thead class="table-dark">
               <tr>
                 <th>No Of Students</th>
                 <th>Name</th>
                 <th> </th>
               </tr>
             </thead>
             <tbody>
               {studentData.map((get, index) => {
                 return (
                   <tr>
                     <th>{index + 1}</th>
                     <td>{get.name}</td>
                   
                     <td class="dropdown" style={{float:"left;"}}>
                       <Link  class="dropbtn" style={{backgroundColor:"white",color:"#1e7afa"}}
                        className="btn btn-sm"><b>More details</b></Link>
                       <div class="dropdown-content" style={{left:"0;"}}>
   
       <table className="table">
           <thead >
           <tr>
                            <th class="table-dark">Email</th>
                            <td>{get.email}</td>
                          </tr>
                          <tr>
                            <th class="table-dark">Gender</th>
                            <td>{get.gender}</td>
   
                         </tr>
                          <tr>
                            <th class="table-dark">Task-Completed</th>
                            <td>{get.taskCompletion}</td>
   
                          </tr>
                          <tr>
                            <th class="table-dark">Batch</th>
                            <td>{get.batch}</td>
                          </tr>
                          <tr>
                            <th class="table-dark">Attendance</th>
                            <td>{get.attendance}</td>
                           
                        </tr>
                       
           </thead>
           <thead>
           <tr style={{textAlign:"center"}}>
               <th></th>
               <td className="forbtn">
                           <Link className="btn "
                           style={{backgroundColor:"#1e7afa",color:"white"}}
         to={`/studentupdate/${get.id}`}
                           
                           icon="fa-solid fa-user-pen">
                             Update</Link>{""}
   
                           <button type="button"
                           onClick={()=>(dlt(get.id))}
                        style={{backgroundColor:"#1e7afa",color:"white"}}

                           data-bs-toggle="modal" data-bs-target="#exampleModal"  className="btn">Delete</button>
                           </td>

   
   
   
                        </tr>
           </thead>
         
       </table>
   
       
     </div>
                     </td>
                    
                   </tr>
                 );
               })}
             </tbody>
           </table>
           }
         </div>
   
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Are you sure</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Do you really want to Delete these records ? this process cannot be undone
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <Link type="button"
         onClick={del}
        
         class="btn btn-primary" data-bs-dismiss="modal">Confrim  Delete</Link>
      </div>
    </div>
  </div>
</div>
    </div>
 
    
      
 </>
  )
}

export default Student