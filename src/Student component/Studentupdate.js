import React from 'react'
import { Link } from "react-router-dom";
import axios from "axios";
import  { useEffect } from 'react'

import { useParams } from 'react-router-dom'
import { useFormik } from "formik";

function Studentupdate({studentData,setStudentData,setLoading}) {
    const {id} = useParams()
    const index =studentData.findIndex((x)=>x.id==id)
    const stu=studentData[index]

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            gender: "",
            taskCompletion: "",
            batch: "",
            attendance: "",
        },
        validate:(values)=>{
            let error={}
      
            if (values.name === ""){
              error.name = "please enter valid name"
            }
      
            if(values.name && (values.name.length <=2 || values.name.length>15)){
              error.name = "name must be between 3 to 15 character ";
            }
      if(values.email ===""){
        error.email = "please enter a email"
      }
      if (
        values.email &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9._]+\.[A-z]{2,4}$/i.test(values.email)
      ) {
        error.email = " please enter a valid email";
      }
      
      if(values.batch ===""){
        error.batch ="please enter your batch's ,like B-35 B-38"
      }
      
      
      
      if(values.gender === "" ){
        error.gender ="please enter how many topics you coveres"
      }
      if (values.taskCompletion === ""){
        error.taskCompletion = "please enter topics"
      }
      
     
      
      return error;
      
      
          },
    onSubmit:async(values)=>{
        try{
            const upt=await axios.put
            (`https://636405f97b209ece0f3e9710.mockapi.io/student/${stu.id}`,values)
            alert("successfully edited your data")
        }catch(error){
            alert("error")
        }
    }
    })

    useEffect(()=>{
        formik.setValues(stu)
    },[])

    const rls= async()=>{
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
    <div>
    <h4 className="mt-3 mb-3">Create - Student</h4>
    <form>
      <div className="container-fluid form-group ">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div class="form-floating mb-3">
              <input
                type={"text"}
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                class={`form-control
                ${formik.touched.name && formik.errors.name? "error-box":""}
                ${formik.touched.name && !formik.errors.name? "success-box":""}
                `}
                id="floatingInput"
                placeholder="name"
              />
              <label for="floatingInput">Name</label>
            </div>
          </div>

          <div className="col-lg-5">
            <div class="form-floating mb-3">
              <input
                type={"text"}
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                class={`form-control
                ${formik.touched.email && formik.errors.email? "error-box":""}
                ${formik.touched.email && !formik.errors.email? "success-box":""}
                `}
                id="floatingInput"
                placeholder="email"
              />
              <label for="floatingInput">Email</label>
            </div>
          </div>
        </div>

        <div className="row justify-content-center ">
          <div className="col-lg-2">
            <div class="form-floating mb-3">
              <select
                type={"text"}
                name="gender"
                value={formik.values.gender}
                onChange={formik.handleChange}
                class={`form-control
                ${formik.touched.gender && formik.errors.gender? "error-box":""}
                ${formik.touched.gender && !formik.errors.gender? "success-box":""}
                `}
                id="floatingInput"
                placeholder="text"
              > 
                <option >--- select below --- </option>
                <option>Male</option>
                <option>Female</option>

              </select>
              <label for="floatingInput">Gender</label>
            </div>
          </div>

          <div className="col-lg-2">
            <div class="form-floating mb-3">
              <input
                type={"number"}
                name="taskCompletion"
                value={formik.values.taskCompletion}
                onChange={formik.handleChange}
                class={`form-control
                ${formik.touched.taskCompletion && formik.errors.taskCompletion? "error-box":""}
                ${formik.touched.taskCompletion && !formik.errors.taskCompletion? "success-box":""}
                `}
                id="floatingInput"
                placeholder="number"
              />
              <label for="floatingInput">Task-Completed</label>
            </div>
          </div>

          <div className="col-lg-2">
            <div class="form-floating mb-3">
              <input
                type={"text"}
                name="batch"
                value={formik.values.batch}
                onChange={formik.handleChange}
                class={`form-control
                ${formik.touched.batch && formik.errors.batch? "error-box":""}
                ${formik.touched.batch && !formik.errors.batch? "success-box":""}
                `}
                id="floatingInput"
                placeholder="text"
              />
              <label for="floatingInput">Your Batch</label>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-1">
            <label for="floatingInput">Attendance</label>
          </div>

          <div className="col-lg-2">
            <div class="form-check">
              <input
                type={"radio"}
                onChange={formik.handleChange}
                id="attendance"
                name="attendance"
                value="Present"
              />
              Present
            </div>
          </div>

          <div className="col-lg-2">
            <div class="form-check">
              <input
                type={"radio"}
                onChange={formik.handleChange}
                id="attendance"
                name="attendance"
                value="Absent"
              />
              Absent
            </div>
          </div>
        </div>

        <div className="row justify-content-center mt-2">
          <div className="col-lg-5">
            <button
              onClick={formik.handleSubmit}
              className="btn btn-danger "
              type={"submit"}
            >
              Submit
            </button>{" "}
          </div>
        </div>
        <Link className="btn btn-dark mt-5" to={"/student"} onClick={rls}>Back</Link>
       
      </div>
    </form>
  </div>
  </>
  )
}

export default Studentupdate