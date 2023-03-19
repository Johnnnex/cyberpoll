import React from 'react'
import SignInTemp from '../components/SignInTemp'
import supabase from '../config/supabaseClient'
import { useEffect, useState } from 'react'

const SignUp = () => {
  const [fetchError, setFetchError] = useState(null);
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const fetchUserData = async () => {
      const { data, error } = await supabase
        .from("UserData")
        .select()

        if (error) {
          setFetchError("Couldn't Register, check your internet connection!")
          console.log(error)
          setUserData(null)
        }
        if (data) {
          setUserData(data)
          setFetchError(null)
        }
    }
    fetchUserData()
  }, [])
  console.log(userData)
  const [nin, setNin] = useState('')
  const [dob, setDob] = useState('')
  const [user, setUsername] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nin || !dob || !user) {
      alert("you didn't input any data")
      // window.open("/signup")
      return
    }
    // if 
    let value;
    for (var i in userData) {
      // eslint-disable-next-line eqeqeq
      if (user == userData[i].Username || nin == userData[i].ninNumber){
          value = true;
      } 
      else {
          value = false;
      }
      
  }
  }



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
        <SignInTemp 
          button="Sign Up" 
          title="Sign Up" 
          smallText="Already have an account?" 
          link="sign in" 
          reference="/signin"
          textInput = {e => setUsername(e.target.value)}
          text = {user}
          post = {handleSubmit}>
            <input type="text" 
              id="nin" autoComplete="off" 
              value={nin} 
              onChange = {e => setNin(e.target.value)}
              name="nin" 
              onClick={() => clicked("nin")} 
              onInput={() => input("nin")} 
              placeholder="Enter Your NIN Number" 
              required /><br /> 
                <div className="error ninErr hidden"> 
                    <p id="letterErr">NIN cannot contain letters!</p>
                    <p id="isCompleteErr">NIN cannot be more or less than 11 digits!</p>
                    <p id="symbolNinErr">NIN cannot contain symbols</p>
                </div>
            <input type="date"
              id="date" 
              value={dob}
              onChange = {e => setDob(e.target.value)}
              title="Input Your Date Of Birth" 
              required/>
        </SignInTemp>
    </div>
  )
}

export default SignUp