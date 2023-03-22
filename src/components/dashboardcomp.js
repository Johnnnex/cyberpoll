import React, { useEffect, useState } from 'react'
import '../css/dashboard.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const DashboardComp = ({children, activeHome, activeResults, activeVote}) => {
    const navigate = useNavigate()
    const [user, setName] = useState(null)
    useEffect (() => {
        const getUserName = localStorage.getItem("Username")
         // eslint-disable-next-line eqeqeq
        if (getUserName == "" || getUserName == null) {
            console.log(user)
            alert("You're not signed in, log in to continue!")
            navigate("/")
            return
        }
        
        const setUsername = () => setName(getUserName)
        setUsername()
    }, [navigate, user])
    const toggleMenu = () => {
        const aside =document.querySelector("aside");
        aside.classList.toggle("aside-in")
    }
    const noDisp = () => {
        const getModal = document.querySelector(".modal-logout")
        getModal.classList.remove("no-display")
    }
    const goBack = () => {
        const getModal = document.querySelector(".modal-logout")
        getModal.classList.add("no-display")
    }
    const logout = () => {
        localStorage.clear("name");
        navigate("/")
    }

   
  return (
    <div>
        <div className='container'>
            <header>
                <div className="user">
                    <i className="fa-sharp fa-solid fa-user"></i><small id="username">Welcome, {user}</small>
                </div>
                <div className="dropDown">
                    <label htmlFor="dropDown">Connect Your Wallet<i className="fa-solid fa-angle-down"></i></label>
                    <ul id="dropDown">
                        <li>Connect to Metamask&nbsp;<img src="assets/images/metamask.png"  alt="img-metamask" /></li>
                        <li>Wallet connect <img src="assets/images/WalletConnect-Logo.jpg" alt="img-walletconnect" /></li>
                        <li>Connect with Coinbase&nbsp;<img src="assets/images/coinbase.png" alt="img-coinbase" /></li>
                    </ul>
                    {/* alternative, for smaller screens */}
                    <ul id="nav-alternative">
                        <li>Metamask&nbsp;<img src="assets/images/metamask.png" alt="" /></li>
                        <li>Wallet connect <img src="assets/images/WalletConnect-Logo.jpg" alt="" /></li>
                        <li>Coinbase&nbsp;<img src="assets/images/coinbase.png" alt="" /></li>
                    </ul>
                </div>
            </header>
            <aside>
                <nav>
                    <ul className="ul-nav">
                        <Link className="dashboard-link" to="/home">
                            <li style={activeHome}><i className="fa-solid fa-house"></i></li>
                        </Link>
                        <Link className="dashboard-link" to="/vote">
                            <li style={activeVote}><i className="fa-solid fa-check-to-slot"></i></li>
                        </Link>
                        <Link className="dashboard-link" to="/results">
                            <li style={activeResults}><i className="fa-solid fa-chart-simple"></i></li>
                        </Link>
                        <li onClick={noDisp}><i className="fa-solid fa-right-from-bracket"></i></li>
                    </ul>
                </nav>
            </aside>
            <main className='dashboard-main'>
            <span onClick={toggleMenu} className='span-right' title='toggle menu in or out'><i className="fa-solid fa-angles-left"></i></span>
            <div className='modal-logout no-display'>
                <h1>CyberPoll</h1>
                <p>Are you sure you want to log out?</p>
                <div className='btn-div'>
                    <button className='btn btn-danger' onClick={logout}><i className="fa-solid fa-door-open"></i>&nbsp;Yes, Logout</button>
                    <button className='btn btn-sucess' onClick={goBack}><i className="fa-solid fa-backward"></i>&nbsp;No, I'll stay</button>
                </div>
            </div>
                {children}
            </main>
        </div>
    </div>
  )
}

export default DashboardComp