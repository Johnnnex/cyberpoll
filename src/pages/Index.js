import React from 'react';
import SignInTemp from '../components/SignInTemp';
// import supabase from '../config/supabaseClient';

const Index = () => {
  return (
    <div>
        <SignInTemp button="Sign In" title="Sign In" smallText="Don't have an account yet?" link="sign up" reference="/signup"/>
    </div>
  )
}

export default Index;