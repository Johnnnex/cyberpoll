import React from 'react'
import SignInTemp from '../components/SignInTemp'

const SignUp = () => {
  const clicked = (variable) => {
    let errDOM = `.${variable}Err`;
    document.querySelector(errDOM).classList.remove('hidden');
  }
  const input = (variable) => {
    if (variable === "nin") {
        const vNin = document.querySelector("#nin").value;
        const isCompleteErr = document.querySelector("#isCompleteErr");
        const symbolNinErr = document.querySelector("#symbolNinErr");
        const letterErr = document.querySelector("#letterErr");
        if (vNin.match(/[A-Z]/) || vNin.match(/[a-z]/)) {
            letterErr.style.color = "#ff0000";
        } else {
            letterErr.style.color = "#00ff00";
        }
        // eslint-disable-next-line no-useless-escape
        if (vNin.match(/[@\#\$\%\^\&\*\(\)\+\=\_\~\`\\\}\{\]\[\:\;\"\'\<\>\.\,\/\?\!\-]/)) {
            symbolNinErr.style.color = "#ff0000";
        } else {
            symbolNinErr.style.color = "#00ff00";
        }
        // eslint-disable-next-line eqeqeq
        if (vNin.length != 11) {
            isCompleteErr.style.color = "#ff0000";
        } else {
            isCompleteErr.style.color = "#00ff00";
        }
      }
    }

  return (
    <div>
        <SignInTemp button="Sign Up" title="Sign Up" smallText="Already have an account?" link="sign in" referemce="/signin">
            <input type="text" id="nin" autoComplete="off" name="nin" onClick={() => clicked("nin")} onInput={() => input("nin")} placeholder="Enter Your NIN Number" required /><br /> 
                <div className="error ninErr hidden"> 
                    <p id="letterErr">NIN cannot contain letters!</p>
                    <p id="isCompleteErr">NIN cannot be more or less than 11 digits!</p>
                    <p id="symbolNinErr">NIN cannot contain symbols</p>
                </div>
              <input type="date" id="date" title="Input Your Date Of Birth" required/>
        </SignInTemp>
    </div>
  )
}

export default SignUp