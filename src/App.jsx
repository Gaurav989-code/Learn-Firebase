import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import AddStudent from "./components/AddStudent";
import StudentList from "./components/StudentList";
import UpdateStudents from "./components/UpdateStudents";
import AddFaculty from "./components/AddFaculty";
import FacultyList from "./components/FacultyList";
import UpdateFaculty from "./components/upadateFaculty";

function App() {

  const router= createBrowserRouter([
    {
      path: "",Component:Dashboard,children:[
        {
          path:"",element:<StudentList/>
        },
        {
          path:"/addStudent",element:<AddStudent/>
        },
        {
          path:"/studentList",element:<StudentList/>
        },
        {
          path:"/updateStudent",element:<UpdateStudents/>
        },
        {
          path:"/addFaculty",element:<AddFaculty/>
        },
        {
          path:"/facultyList",element:<FacultyList/>
        },
        {
          path:"/updateFaculty",element:<UpdateFaculty/>
        }
      ]
    },
  ]);



  return (
    <>
      <RouterProvider router={router} />
      {/* <AppData /> */}
    </>
  );
}

export default App;
