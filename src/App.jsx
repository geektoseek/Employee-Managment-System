import React, { useContext, useEffect, useState } from 'react';
import Login from './Components/Auth/Login';
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard';
import AdminDashboard from './Components/Dashboard/AdminDashboard';
import { getLocalStorage, setLocalStorage } from './Utils/LocalStorage';
import { AuthContext } from './Context/AuthProvider';
const App = () => {
  const authData = useContext(AuthContext);
  const [loggedInUserData, setloggedInUserData] = useState(null)
  const [user, setUser] = useState(null);


  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    if (loggedInUser) {
      console.log("User Logged In")
    }

  })






  const handleLogin = (email, password) => {
    if (email == 'admin@gmail.com' && password == '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    }
    else if (authData) {
      const employee = authData.employees.find((e) => email == e.email && password == e.password);
      if (employee) {
        setUser('employee')
        setloggedInUserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'user' }))
      }
    }
    else {
      alert("Invalid Credentials");
    }
  }
  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === 'admin' ? <AdminDashboard /> : (user == 'employee' ? <EmployeeDashboard data={loggedInUserData} /> : null)}
    </>
  );
}

export default App