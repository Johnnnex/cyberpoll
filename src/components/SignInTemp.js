import React, { Children } from 'react';

const SignInTemp = ({button, input, title, clicked, Children}) => {
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
                <h1>{title}</h1>
                <form action="" id="form">
                <input type="text" id="Uname" name="username" onClick={() => clicked(this)} onInput={() => input(this)} placeholder="Your Username" required /><br /> 
                <div class="error UnameErr hidden"> 
                        <p id="numberErr">Username cannot contain numbers!</p>
                        <p id="symbolErr">Username cannot contain symbols</p>
                    </div>
                    {Children}
                    <button type="submit" name="submit">{button}</button>
                </form>
            </div>
        </main> 
    </div>
  )
}

export default SignInTemp;