import React, { useEffect } from 'react'
import { useFormik } from "formik";
import { Link } from "react-router-dom";

import { useParams } from 'react-router-dom'
import axios from 'axios';

function Teacherupdate({teacherData,setTeacherData,setLoading}) {
    const {id}=useParams()
    const index =teacherData.findIndex((x)=>x.id==id)
    const mentor=teacherData[index]

    const formik = useFormik({
        initialValues: {
          name: "",
          email: "",
          takingbatch: "",
          topicCoverd: "",
          topics: "",
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
    
    if(values.takingbatch ===""){
      error.takingbatch ="please enter your batch's"
    }
    
    if(values.takingbatch && (values.takingbatch.length <=2 || values.takingbatch.length>15)){
      error.takingbatch ="batchs must be like B35,B22"
    }
    
    if(values.topicCoverd === "" ){
      error.topicCoverd ="please enter how many topics you coveres"
    }
    if (values.topics === ""){
      error.topics = "please enter topics"
    }
    
    if(values.topics && (values.topics.length <=2 || values.topics.length>25)){
      error.topics = "name must be between 3 to 25 character ";
    }
    
    return error;
    
    
        },
    onSubmit:async(values)=>{
        try{
            const upt=await axios.put
            (`https://636405f97b209ece0f3e9710.mockapi.io/teacher/${mentor.id}`,values)
            alert("successfully edited your data")
        }catch(error){
            alert("error")
        }
    }
    })

    useEffect(()=>{
        formik.setValues(mentor)
    },[])

    const rlt= async()=>{
      try{
        setLoading(true)
        const getting = await axios.get("https://636405f97b209ece0f3e9710.mockapi.io/teacher");
        setTeacherData(getting.data)
        console.log(getting.data)
        setLoading(false)
      }catch(error){
        alert("error fetching teacher")
      }
      
      }
  return (
    <div>
    <h4 className="mt-3 mb-3">Update - Teacher</h4>
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
          <div className="col-lg-3">
            <div class="form-floating mb-3">
              <input
                type={"text"}
                name="takingbatch"
                value={formik.values.takingbatch}
                onChange={formik.handleChange}
                class={`form-control
                ${formik.touched.takingbatch && formik.errors.takingbatch? "error-box":""}
                ${formik.touched.takingbatch && !formik.errors.takingbatch? "success-box":""}
                `}
                id="floatingInput"
                placeholder="text"
              />
              <label for="floatingInput">Your Batch's</label>
            </div>
          </div>

          <div className="col-lg-2">
            <div class="form-floating mb-3">
              <input
                type={"number"}
                name="topicCoverd"
                value={formik.values.topicCoverd}
                onChange={formik.handleChange}
                class={`form-control
                ${formik.touched.topicCoverd && formik.errors.topicCoverd? "error-box":""}
                ${formik.touched.topicCoverd && !formik.errors.topicCoverd? "success-box":""}
                `}
                id="floatingInput"
                placeholder="number"
              />
              <label for="floatingInput">TopicCovered</label>
            </div>
          </div>

          <div className="col-lg-5">
            <div class="form-floating mb-3">
              <input
                type={"text"}
                name="topics"
                value={formik.values.topics}
                onChange={formik.handleChange}
                class={`form-control
                ${formik.touched.topics && formik.errors.topics? "error-box":""}
                ${formik.touched.topics && !formik.errors.topics? "success-box":""}
                `}
                id="floatingInput"
                placeholder="text"
              />
              <label for="floatingInput">Topics</label>
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

        <div className="row justify-content-center ">
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
        <Link className="btn btn-dark mt-5" to={"/teacher"} onClick={rlt}>Back</Link>

      </div>
    </form>
  </div>
  )
}

export default Teacherupdate