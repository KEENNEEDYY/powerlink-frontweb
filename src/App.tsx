import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomerArea from "./routes/CustomerArea";
import Home from "./routes/Home";
import Tracking from "./routes/Tracking";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Tracking />} />
          <Route path="customerArea" element={<CustomerArea />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}