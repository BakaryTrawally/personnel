import React from 'react'

const Logout = () => {

const handleLogout = () => {
  localStorage.removeItem("user"); // remove login flag
  navigate('/'); // go back to index/login page
};



  return (
    <div>
      <h2>Logou Page</h2>
      <button 
  onClick={handleLogout}
  style={{ padding: "8px 15px", background: "red", color: "white", border: "none", borderRadius: "5px" }}
>
  Logout
</button>
    </div>
  )
}

export default Logout;
