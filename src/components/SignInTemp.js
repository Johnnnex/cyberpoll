import React from 'react';
import '../css/index.css';

const SignInTemp = ({button, title, children, smallText, reference, link}) => {
    const clicked = (variable) => {
        let errDOM = `.${variable}Err`;
        document.querySelector(errDOM).classList.remove('hidden');
    }
    
    const input = (variable) => {
        if (variable === "Uname") {
            const vUname = document.querySelector("#Uname").value;
            const numberErr = document.querySelector("#numberErr");
            const symbolErr = document.querySelector("#symbolErr");
            if (vUname.match(/[0-9]/)) {
                numberErr.style.color = "#ff0000";
            } else {
                numberErr.style.color = "#00ff00";
            }
            // eslint-disable-next-line no-useless-escape
            if (vUname.match(/[@\#\$\%\^\&\*\(\)\+\=\_\~\`\\\}\{\]\[\:\;\"\'\<\>\.\,\/\?\!\-]/)) {
                symbolErr.style.color = "#ff0000";
            } else {
                symbolErr.style.color = "#00ff00";
            }
        }
        
    }
    
  return (
    <div>
        <main>
            <div class="main-content carousel-container">
                <span class="span left" onclick={toggleCarousel}><i class="fa-solid fa-arrow-left"></i></span>
                <span class="span right" onclick={toggleCarousel}><i class="fa-solid fa-arrow-right"></i></span>
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
                
                <form action="" id="form">
                    <h1>{title}</h1>
                    <input type="text" id="Uname" name="username" onClick={() => clicked("Uname")} onInput={() => input("Uname")} placeholder="Your Username" required /><br /> 
                    <div class="error UnameErr hidden"> 
                            <p id="numberErr">Username cannot contain numbers!</p>
                            <p id="symbolErr">Username cannot contain symbols</p>
                    </div>
                    {children}
                    <button type="submit" name="submit">{button}</button>
                </form>
                <small>{smallText} <a href={reference}>{link}</a></small>
            </div>
        </main> 
    </div>
  )
}

export default SignInTemp;