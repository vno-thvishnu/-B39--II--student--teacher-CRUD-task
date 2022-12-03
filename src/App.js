import logo from "./logo.svg";
import "./App.css";
import "./Teacher components/teacher.css";
import "./Homepage.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import Teacher from "./Teacher components/Teacher";
import { useEffect, useState } from "react";
import axios from "axios";
import Teacherdata from "./Teacher components/Teachercreate";
import Teachercreate from "./Teacher components/Teachercreate";
import Teacherupdate from "./Teacher components/Teacherupdate";
import Student from "./Student component/Student";
import Studentcreate from "./Student component/Studentcreate";
import Studentupdate from "./Student component/Studentupdate";

function App() {
  const [teacherData, setTeacherData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  let fetchData = async () => {
    try {
      setLoading(true);
      const getting = await axios.get(
        "https://636405f97b209ece0f3e9710.mockapi.io/teacher"
      );
      setTeacherData(getting.data);
      // console.log(getting.data)
      setLoading(false);
    } catch (error) {
      alert("error fetching teacher");
    }
  };

  const [studentData, setStudentData] = useState([]);
  useEffect(() => {
    stuData();
  }, []);

  let stuData = async () => {
    try {
      setLoading(true);

      const getting = await axios.get(
        "https://636405f97b209ece0f3e9710.mockapi.io/student"
      );
      setStudentData(getting.data);
      setLoading(false);
    } catch (error) {
      alert("error fetching student");
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Homepage
                setTeacherData={setTeacherData}
                setStudentData={setStudentData}
                setLoading={setLoading}
              />
            }
          >
            <Route
              path="/student"
              element={
                <Student
                  studentData={studentData}
                  setStudentData={setStudentData}
                  setLoading={setLoading}
                  loading={isLoading}
                />
              }
            />
            <Route
              path="/studentcreate"
              element={
                <Studentcreate
                  studentData={studentData}
                  setStudentData={setStudentData}
                  setLoading={setLoading}
                />
              }
            />
            <Route
              path="/studentupdate/:id"
              element={
                <Studentupdate
                  studentData={studentData}
                  setStudentData={setStudentData}
                  setLoading={setLoading}
                />
              }
            />

            <Route
              path="/teacher"
              element={
                <Teacher
                  teacherData={teacherData}
                  setTeacherData={setTeacherData}
                  setLoading={setLoading}
                  loading={isLoading}
                />
              }
            />
            <Route
              path="/teachercreate"
              element={
                <Teachercreate
                  teacherData={teacherData}
                  setTeacherData={setTeacherData}
                  setLoading={setLoading}
                />
              }
            />
            <Route
              path="/teacherupdate/:id"
              element={
                <Teacherupdate
                  teacherData={teacherData}
                  setTeacherData={setTeacherData}
                  setLoading={setLoading}
                />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
