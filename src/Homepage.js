import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import axios from "axios";

function Homepage({setLoading,setTeacherData,setStudentData}) {

  const reLoadTeach = async()=>{
    try{
      setLoading(true)
      const getting = await axios.get("https://636405f97b209ece0f3e9710.mockapi.io/teacher");
      setTeacherData(getting.data)
      // console.log(getting.data)
      setLoading(false)
    }catch(error){
      alert("error fetching teacher")
    }
    
    }
    const reLoadStud = async()=>{
      try{
        setLoading(true)
      
          const getting=await axios.get("https://636405f97b209ece0f3e9710.mockapi.io/student")
          setStudentData(getting.data)
        setLoading(false)
      
        }catch(error){
          alert("error fetching student")
        }
      
      }

  return (
    <div className='home'>
        <div className='topbar'>
            <h2 style={{color:"white",marginTop:"30px"}}>Think & Code</h2>

            <p style={{color:"white",opacity:"75%"}}>Teacher student portal</p>
        </div>
        <div className="comp">
      <div className="sidebar">
        <Link
          style={{
            color: "white",
            backgroundColor: "#fd1e4d",
            borderRadius: "10px",
          }}
          type="button"
          to={"/teacher"}
          onClick={reLoadTeach}

          class="btn btn-sm mt-3 fs-4 "
        >
          Teacher
        </Link>
        <br />
        <Link
          type="button"
          style={{
            color: "white",
            backgroundColor: "#1e7afa",
            borderRadius: "10px",
          }}
          class="btn btn-sm mt-3 fs-4"
          to={"/student"}
          onClick={reLoadStud}

        >
          Student
        </Link>
      </div>

<div className="content">
<Outlet/>

</div>
    </div>
        
    </div>
  )
}

export default Homepage