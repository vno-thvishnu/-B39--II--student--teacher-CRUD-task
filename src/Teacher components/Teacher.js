import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { Alert, Button } from "bootstrap";
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function Teacher({ teacherData, loading, setTeacherData, setLoading }) {
  const [id, setId] = useState();
  function dlt(id) {
    setId(id);
    // console.log(a)
  }
  const del = async () => {
    try {
      const deleting = await axios.delete(
        `https://636405f97b209ece0f3e9710.mockapi.io/teacher/${id}`
      );

      //  alert("successfully deleted, Click back")
      rlt();
    } catch (error) {
      alert("Error");
    }
  };

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
    <>
      <div className="teacher">
        <h4>Teacher - List</h4>

        <Link
          to={"/teachercreate"}
          style={{ color: "white", backgroundColor: "#fd1e4d" }}
          className="btn"
        >
          Add New Teacher
        </Link>

        <div>
          {loading ? (
            <div className="loading">
              <div
                class="spinner-grow  "
                style={{ marginTop: "120px", color: "#fd1e4d" }}
                role="status"
              >
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <table className="table">
              <thead class="table-dark">
                <tr>
                  <th>No Of Teachers</th>
                  <th>Name</th>
                  <th> </th>
                </tr>
              </thead>
              <tbody>
                {teacherData.map((get, index) => {
                  return (
                    <tr>
                      <th>{index + 1}</th>
                      <td>{get.name}</td>

                      <td class="dropdown" style={{ float: "left;" }}>
                        <Link
                          class="dropbtn"
                          style={{ backgroundColor: "white", color: "#fd1e4d" }}
                          className="btn btn-sm"
                        >
                          <b>More details</b>
                        </Link>
                        <div class="dropdown-content" style={{ left: "0;" }}>
                          <table className="table">
                            <thead>
                              <tr>
                                <th class="table-dark">Email</th>
                                <td>{get.email}</td>
                              </tr>
                              <tr>
                                <th class="table-dark">Takingbatch</th>
                                <td>{get.takingbatch}</td>
                              </tr>
                              <tr>
                                <th class="table-dark">TopicCovered</th>
                                <td>{get.topicCoverd}</td>
                              </tr>
                              <tr>
                                <th class="table-dark">Topics</th>
                                <td>{get.topics}</td>
                              </tr>
                              <tr>
                                <th class="table-dark">Attendance</th>
                                <td>{get.attendance}</td>
                              </tr>
                            </thead>
                            <thead>
                              <tr style={{ textAlign: "center" }}>
                                <th></th>
                                <td className="forbtn">
                                  <Link
                                    className="btn btn-danger"
                                    to={`/teacherupdate/${get.id}`}
                                    icon="fa-solid fa-user-pen"
                                  >
                                    Update
                                  </Link>
                                  {""}

                                  <button
                                    type="button"
                                    onClick={() => dlt(get.id)}
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    className="btn btn-danger"
                                  >
                                    Delete
                                  </button>
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
          )}
        </div>

        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Are you sure
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                Do you really want to Delete these records ? this process cannot
                be undone
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <Link
                  type="button"
                  onClick={del}
                  class="btn btn-danger"
                  data-bs-dismiss="modal"
                >
                  Confrim Delete
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Teacher;
