import { useContext } from "react";
import AddTask from "./components/AddTask";
import ToDoScreens from "./screens/ToDoScreens";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { TaskProvider } from "./context/TaskContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ToDoScreens />,
  },
  {
    path: "add-task",
    element: <AddTask />,
  },
]);

const App = () => {
  return (
    <TaskProvider>
      <RouterProvider router={router} />;
    </TaskProvider>
  ); 
};

export default App;
