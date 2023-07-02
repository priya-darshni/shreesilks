import React from 'react'
import { NavLink,Link } from 'react-router-dom'
// import {MdAutoAwesome} from 'react-icons/md'
import { useAuth } from '../../context/auth'
import { token } from 'morgan'
import Dashboard from './../../pages/user/Dashboard';
const Header = () => {
  const [auth,setAuth] = useAuth();
  const handleLogout=()=>{
    setAuth({
      ...auth,user:null,token:''
    })
    localStorage.removeItem('token')
  }
  return (
    <>
       <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link to ="/" className="navbar-brand" href="#">🙏shree silks</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to ="/" className="nav-link active" aria-current="page" >Home</NavLink>
        </li>
        
        {!auth.user ?<>
        <li className="nav-item">
          <NavLink to ="/register" className="nav-link" >register</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to ="/login" className="nav-link" >login</NavLink>
        </li>
        </> :<>
        <li className="nav-item dropdown">
          <NavLink to ="/categories" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </NavLink>
          <ul className="dropdown-menu">
            <li><NavLink to ={`/dashboard/${
                            auth?.user?.role === 1 ? "admin" : "user"
                          }`} className="dropdown-item">Dashboard</NavLink></li>
            <li><NavLink to ="/logout" className="dropdown-item" >logout</NavLink></li>
          </ul>
        </li>
        <li className="nav-item">
          <NavLink onClick={handleLogout} to ="/login" className="nav-link" >logout</NavLink>
        </li>
        </>}
        <li className="nav-item">
          <NavLink  to ="/cart" className="nav-link">cart(0)</NavLink>
        </li>       
      </ul> 
    </div>
  </div>
</nav>

    </>
  )
}

export default Header