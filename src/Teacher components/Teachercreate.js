import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Teachercreate({ setTeacherData, setLoading }) {
  // const[refresh,setRefresh]=useState("")

  // function display (){
  //   return(
  //     <>
  //     <div className="dis">
  //       hlo
  //     </div>
  //     </>
  //   )
  // }

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      takingbatch: "",
      topicCoverd: "",
      topics: "",
      attendance: "",
    },
    validate: (values) => {
      let error = {};

      if (values.name === "") {
        error.name = "please enter valid name";
      }

      if (values.name && (values.name.length <= 2 || values.name.length > 15)) {
        error.name = "name must be between 3 to 15 character ";
      }
      if (values.email === "") {
        error.email = "please enter a email";
      }
      if (
        values.email &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9._]+\.[A-z]{2,4}$/i.test(values.email)
      ) {
        error.email = " please enter a valid email";
      }

      if (values.takingbatch === "") {
        error.takingbatch = "please enter your batch's";
      }

      if (
        values.takingbatch &&
        (values.name.length <= 2 || values.takingbatch.length > 15)
      ) {
        error.takingbatch = "batchs must be like B35,B22";
      }

      if (values.topicCoverd === "") {
        error.topicCoverd = "please enter how many topics you finished";
      }
      if (values.topics === "") {
        error.topics = "please enter topics";
      }

      if (
        values.topics &&
        (values.topics.length <= 2 || values.topics.length > 25)
      ) {
        error.topics = "name must be between 3 to 25 character ";
      }
      if (values.attendance === "") {
        error.attendance = "please select Present or Absent";
      }

      return error;
    },
    onSubmit: async (values) => {
      try {
        const createData = await axios.post(
          "https://636405f97b209ece0f3e9710.mockapi.io/teacher",
          values
        );
        alert("successfully new teacher created");

        // setRefresh("successfully new teacher created")
      } catch (error) {
        alert("error");
      }
    },
  });

  const rlt = async () => {
    try {
      setLoading(true);
      const getting = await axios.get(
        "https://636405f97b209ece0f3e9710.mockapi.io/teacher"
      );
      setTeacherData(getting.data);
      console.log(getting.data);
      setLoading(false);
    } catch (error) {
      alert("error fetching teacher");
    }
  };

  return (
    <div>
      <h4 className="mt-3 mb-3">Create - Teacher</h4>
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
                  ${
                    formik.touched.name && formik.errors.name ? "error-box" : ""
                  }
                  ${
                    formik.touched.name && !formik.errors.name
                      ? "success-box"
                      : ""
                  }
                  `}
                  id="floatingInput"
                  placeholder="name"
                />{" "}
                {formik.touched.name && formik.errors.name ? (
                  <span style={{ color: "red" }}>{formik.errors.name} </span>
                ) : null}
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
                  ${
                    formik.touched.email && formik.errors.email
                      ? "error-box"
                      : ""
                  }
                  ${
                    formik.touched.email && !formik.errors.email
                      ? "success-box"
                      : ""
                  }
                  `}
                  id="floatingInput"
                  placeholder="email"
                />
                {formik.touched.email && formik.errors.email ? (
                  <span style={{ color: "red" }}>{formik.errors.email} </span>
                ) : null}
                <label for="floatingInput">Email</label>
              </div>
            </div>
          </div>

          <div className="row justify-content-center ">
            <div className="col-lg-2">
              <div class="form-floating mb-3">
                <input
                  type={"text"}
                  name="takingbatch"
                  value={formik.values.takingbatch}
                  onChange={formik.handleChange}
                  class={`form-control
                  ${
                    formik.touched.takingbatch && formik.errors.takingbatch
                      ? "error-box"
                      : ""
                  }
                  ${
                    formik.touched.takingbatch && !formik.errors.takingbatch
                      ? "success-box"
                      : ""
                  }
                  `}
                  id="floatingInput"
                  placeholder="text"
                />
                {formik.touched.takingbatch && formik.errors.takingbatch ? (
                  <span style={{ color: "red" }}>
                    {formik.errors.takingbatch}{" "}
                  </span>
                ) : null}
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
                  ${
                    formik.touched.topicCoverd && formik.errors.topicCoverd
                      ? "error-box"
                      : ""
                  }
                  ${
                    formik.touched.topicCoverd && !formik.errors.topicCoverd
                      ? "success-box"
                      : ""
                  }
                  `}
                  id="floatingInput"
                  placeholder="number"
                />
                {formik.touched.topicCoverd && formik.errors.topicCoverd ? (
                  <span style={{ color: "red" }}>
                    {formik.errors.topicCoverd}{" "}
                  </span>
                ) : null}
                <label for="floatingInput">Topic finished</label>
              </div>
            </div>

            <div className="col-lg-3">
              <div class="form-floating mb-3">
                <input
                  type={"text"}
                  name="topics"
                  value={formik.values.topics}
                  onChange={formik.handleChange}
                  class={`form-control
                  ${
                    formik.touched.topics && formik.errors.topics
                      ? "error-box"
                      : ""
                  }
                  ${
                    formik.touched.topics && !formik.errors.topics
                      ? "success-box"
                      : ""
                  }
                  `}
                  id="floatingInput"
                  placeholder="text"
                />
                {formik.touched.topics && formik.errors.topics ? (
                  <span style={{ color: "red" }}>{formik.errors.topics} </span>
                ) : null}
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
            {formik.touched.attendance && formik.errors.attendance ? (
              <span style={{ color: "red" }}>{formik.errors.attendance} </span>
            ) : null}
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
              {/* {
                !formik.errors.name && formik.touched.name? 
                <div className="dis">{refresh}</div>:""

              } */}
            </div>
          </div>
          <Link className="btn btn-dark mt-5" to={"/teacher"} onClick={rlt}>
            Back
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Teachercreate;
