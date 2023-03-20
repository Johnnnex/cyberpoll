import React from 'react';
import SignInTemp from '../components/SignInTemp';
import supabase from '../config/supabaseClient';
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Index = () => {
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

  const [user, setUsername] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      alert("you didn't input any data")
      // window.open("/signup", "_self")
      return
    }
    // eslint-disable-next-line no-useless-escape, eqeqeq
    if (user.match(/[0-9]/) || user.match(/[@\#\$\%\^\&\*\(\)\+\=\_\~\`\\\}\{\]\[\:\;\"\'\<\>\.\,\/\?\!\-]/)) {
      alert("error!, couldn't submit form!")
      // window.open("/signup", "_self")
      return
    } 
    // let value;
    for (var i in userData) {
      // let bool;
      // eslint-disable-next-line eqeqeq
      if (user == userData[i].Username){
        var bool = true;
        // return
      } 
      
    }
    if (bool) {
      localStorage.setItem("Username", user)
      alert("Cyberpoll: Welcome!")
      navigate("/home")
      return
    }
    else {
      alert("We couldn't recognize you, Sign Up please!")
      navigate("/signup")
    }
  }

  return (
    <div>
        <SignInTemp 
          button="Sign In" 
          title="Sign In" 
          smallText="Don't have an account yet?" 
          link="sign up" 
          reference="/signup"
          textInput = {e => setUsername(e.target.value)}
          text = {user}
          post = {handleSubmit}/>
    </div>
  )
}

export default Index;