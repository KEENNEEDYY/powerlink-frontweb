import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Tracking from './routes/Tracking/index.tsx'
import CustomerArea from './routes/CustomerArea/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Tracking />} />
        <Route path="customerArea" element={<CustomerArea />} />
      </Route>
    </Routes>
  </BrowserRouter>
)