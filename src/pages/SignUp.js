import React from 'react'
import SignInTemp from '../components/SignInTemp'
import supabase from '../config/supabaseClient'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  
  const navigate = useNavigate()
  const [fetchError, setFetchError] = useState(null);
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const fetchUserData = async () => {
      const { data, error } = await supabase
        .from("UserData")
        .select()

        if (error) {
          setFetchError("Couldn't connect, check your internet connection!")
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

  if (fetchError) {
    alert(fetchError)
    // return
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
  const [nin, setNin] = useState('')
  const [dob, setDob] = useState('')
  const [user, setUsername] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nin || !dob || !user) {
      alert("you didn't input any data")
      // window.open("/signup", "_self")
      return
    }
    // eslint-disable-next-line no-useless-escape, eqeqeq
    if (user.match(/[0-9]/) || user.match(/[@\#\$\%\^\&\*\(\)\+\=\_\~\`\\\}\{\]\[\:\;\"\'\<\>\.\,\/\?\!\-]/) || nin.match(/[A-Z]/) || nin.match(/[a-z]/) || nin.match(/[@\#\$\%\^\&\*\(\)\+\=\_\~\`\\\}\{\]\[\:\;\"\'\<\>\.\,\/\?\!\-]/) || nin.length != 11) {
      alert("error!, couldn't submit form!")
      // window.open("/signup", "_self")
      return
    } 
    
    const currentDate = new Date().getUTCFullYear()
    const getUserDob = new Date(dob).getUTCFullYear()
    const checkDate = Math.abs(currentDate - getUserDob)
    if (checkDate < 18) {
      alert("You're too young to vote!")
      return;

    }

    for (var i in userData) {
      // eslint-disable-next-line eqeqeq
      if (user == userData[i].Username || nin == userData[i].ninNumber){
        alert("Username or NIN exists, try another!")
        return
      } 
      
    }
    const { data, error } = await supabase
    .from('UserData')
    .insert([
      { Username: user, ninNumber: nin, userDOB: dob}
    ])
  

  
    if (!error) {
      alert("Cyberpoll: Congrats, Sign In to get started!")
      navigate("/")
    }
    if (error) {
      alert("Couldn't sign you up, check your network connection!")
      return
    }
  }


  

  return (
    <div>
        <SignInTemp 
          button="Sign Up" 
          title="Sign Up" 
          smallText="Already have an account?" 
          link="sign in" 
          reference="/"
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