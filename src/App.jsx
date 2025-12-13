import React, {useState, useEffect, useCallback } from 'react'
import { Link } from "react-router-dom"
import "./index.css"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './pages/Footer'
import api from "./loginApi/logindata"
import { useNavigate } from 'react-router-dom'


function App({ children }) {    
  const navigate = useNavigate();
  const [ user, setUser] = useState('')
  const [userName, setUserName] = useState("");
  

// logout func
const handleLogout = () => {
  localStorage.removeItem("user"); // remove login flag
  navigate('/'); 
};

// AUTO LOGOUT TIME
const autoLogoutTime = 2 * 60 * 1000; // 5 minutes
  const autoHandleLogout = useCallback(() => {
    localStorage.removeItem("user");
    navigate("/");
  }, [navigate]);

  useEffect(() => {
    let logoutTimer;

    const resetTimer = () => {
      clearTimeout(logoutTimer);
      logoutTimer = setTimeout(handleLogout, autoLogoutTime);
    };

    // Activities that count as "active"
    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("keydown", resetTimer);
    window.addEventListener("click", resetTimer);

    // Start timer when page loads
    resetTimer();

    return () => {
      clearTimeout(logoutTimer);
      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("keydown", resetTimer);
      window.removeEventListener("click", resetTimer);
    };
  }, [autoHandleLogout]);



useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      const user = JSON.parse(storedUser);
      setUserName(user.name); // Display name from backend
    }
  }, []);

 
console.log(userName)
    useEffect(() => {
      api.get('/post')
       .then(user => {
         setUser(user.data.name)
        console.log(user.data.name)
         if(user.data === "Success"){
          navigate('/addpersonnel')
         }
       })
       
       .catch(error => console.log(error))
  
    }, [])
  
  return (
    <> 
    <div className='App'>   
    <div className='
            app-container 
        '>
        <nav>
          <div className='header m-2'>
          <h1>ARFFS</h1>
            Welcome,
          <small className='m-2 capitalize text- p-2 shadow bold'>{userName}</small>
          </div>
            <ul className=' h-[10vh] font-[1] font-weight-[600] flex justify-center items-center space-x-3
              '>
               
                <li>
                  <Link to="/" >Home</Link>
                </li>

                <li>
                  <Link to="/addpersonnel">AddPersonnel</Link>
                </li>
                <li>
                  <Link to="/leave">Leaves</Link>
                </li>
         
                <li>
                  <Link to="/personnel">Personnel</Link>
                </li>
                <button 
                onClick={handleLogout}
                className='text-italic logout'
                // style={{ padding: "2px 1px",  color: "blue", border: "none", borderRadius: "5px" }}
                  >
                  Logout
                </button>

              </ul>
          
            </nav>
          </div>
          <div className='main-container relative'>
          <main
            className='text-white w-[100%]'
            >
              {children}
          </main>
          </div>
          <footer className='w-[100%] mb-0'>
              <Footer/>
          </footer>
        </div>
    </>
  )
}

export default App
