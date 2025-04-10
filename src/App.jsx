import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import AddStudent from "./components/AddStudent";
import StudentList from "./components/StudentList";
import UpdateStudents from "./components/UpdateStudents";

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
