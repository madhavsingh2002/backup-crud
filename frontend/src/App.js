import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFoundPage from './Pages/NotFound';
import { ThemeProvider } from '@mui/material';
import { createTheme } from './theme';
function App() {
  const theme = createTheme();
  return (
    <div className="App">
     <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />          
          <Route path="*" element={<NotFoundPage />} />          
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
    </div>
  );
}

export default App;
