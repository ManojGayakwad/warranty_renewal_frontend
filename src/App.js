import { Route, Routes } from "react-router-dom";
import Form from "./pages/form";

function App() {
  return (
    <>
      <Routes>
      
      <Route path="/" element={<Form />}></Route>

      </Routes>
    </>
  );
}

export default App;
