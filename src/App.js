import { Route, Routes } from "react-router-dom";
import Form from "./pages/form";
import Table from "./pages/table";

function App() {
  return (
    <>
      <Routes>
      
      <Route path="/" element={<Form />}></Route>
      <Route path="/table" element={<Table />}></Route>
      </Routes>
    </>
  );
}

export default App;
