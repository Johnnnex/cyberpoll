import React from 'react'
import '../css/dashboard.css'

const DashboardComp = ({children, activeHome, activeResults, activeVote}) => {
  return (
    <div>
      <header>
        <div class="user">
            <i class="fa-sharp fa-solid fa-user"></i><small id="username">Welcome, </small>
        </div>
        <div class="dropDown">
            <label for="dropDown">Connect Your Wallet<i class="fa-solid fa-angle-down"></i></label>
            <ul id="dropDown">
                <li>Connect to Metamask&nbsp;<img src="images/metamask.png" alt="" /></li>
                <li>Wallet connect <img src="images/WalletConnect-Logo.jpg" alt="" /></li>
                <li>Connect with Coinbase&nbsp;<img src="images/coinbase.png" alt="" /></li>
            </ul>
            {/* alternative, for smaller screens */}
            <ul id="nav-alternative">
                <li>Metamask&nbsp;<img src="images/metamask.png" alt="" /></li>
                <li>Wallet connect <img src="images/WalletConnect-Logo.jpg" alt="" /></li>
                <li>Coinbase&nbsp;<img src="images/coinbase.png" alt="" /></li>
            </ul>
        </div>
    </header>
    <aside>
        <nav>
            <ul class="ul-nav">
                <li style={activeHome}><i class="fa-solid fa-house"></i></li>
                <li style={activeVote}><i class="fa-solid fa-check-to-slot"></i></li>
                <li style={activeResults}><i class="fa-solid fa-chart-simple"></i></li>
                <li><i class="fa-solid fa-right-from-bracket"></i></li>
            </ul>
        </nav>
    </aside>
    <main>
        {children}
    </main>
    </div>
  )
}

export default DashboardComp