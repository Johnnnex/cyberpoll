import React from 'react';

const SignInTemp = () => {
  return (
    <div>
        <main>
            <div class="main-content carousel-container">
                <span class="span left" onclick="toggleCarousel()"><i class="fa-solid fa-arrow-left"></i></span>
                <span class="span right" onclick="toggleCarousel()"><i class="fa-solid fa-arrow-right"></i></span>
                <div class="carousel item-one">
                    <h2>"The vote is the most powerful instrument ever devised by man for breaking down injustice and destroying the terrible walls which imprison men because they are different from other men."</h2>
                    <p class="author">- Lyndon B. Johnson</p>
                </div>
                <div class="carousel item-two hidden">
                    <h2>"The vote is a trust more delicate than any other, for it involves not just the interests of the voter, but the interests of others as well."</h2>
                    <p class="author">- Samuel J. Tilden</p>
                </div>
            </div>
            <div class="main-content form">
                <h1>Sign Up</h1>
                <form action="" id="form">
                <input type="text" id="Uname" name="username" onclick="clicked(this)" oninput="input(this)" placeholder="Your Username" required /><br /> 
                <div class="error UnameErr hidden"> 
                        <p id="numberErr">Username cannot contain numbers!</p>
                        <p id="symbolErr">Username cannot contain symbols</p>
                    </div>
                    <input type="text" id="nin" autocomplete="off" name="nin" onclick="clicked(this)" oninput="input(this)" placeholder="Enter Your NIN Number" required /><br /> 
                    <div class="error ninErr hidden"> 
                        <p id="letterErr">NIN cannot contain letters!</p>
                        <p id="isCompleteErr">NIN cannot be more or less than 11 digits!</p>
                        <p id="symbolNinErr">NIN cannot contain symbols</p>
                    </div>
                    <button type="submit" name="submit">REGISTER</button>
                </form>
            </div>
        </main> 
    </div>
  )
}

export default SignInTemp;