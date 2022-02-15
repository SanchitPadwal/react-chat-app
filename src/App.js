
import './App.css';
import { BrowserRouter , Route , Routes} from 'react-router-dom';
import Login from './components/Login'; 
import Otp from './components/Otp';
import Chat from "./components/Chat/Chat"; 

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="Otp" element={<Otp />} />
          <Route path="Chat" element={<Chat />} /> 
        
          
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
