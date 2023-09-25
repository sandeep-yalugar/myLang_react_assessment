import React from 'react';
import './Home.css'; 
import { GoogleLogin,googleLogout } from '@react-oauth/google';



const Home = ({login,setLogin}) => {
  const normal = () => {
    setLogin(true);
    localStorage.setItem('sLogin',JSON.stringify({state:true}));
    alert('Login successful')
  }

  const normalLogout = () => {
    
    setLogin(false);
    googleLogout();
    localStorage.setItem('sLogin',JSON.stringify({state:false}));
    alert('logout successful');

  }
  
  return (
    
    <div className="homelayout">
      <div className='login'>
      
    
      <GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
    setLogin(true);
    localStorage.setItem('sLogin',JSON.stringify({state:true}))
    alert('Login Successful');

  }}
  onError={() => {
    console.log('Login Failed');
    alert('login failed');
  }}
/>


      </div>
      <h1 onClick={() => {setLogin(true); localStorage.setItem('sLogin',JSON.stringify({state:true}))}}>Home Page</h1>
      
      <div>
        <p>
          Question 1: The answer is in The cards section
        </p>
        <p>
          Question 2:The answer is in The Rating Section
        </p>
        <p>
          Question 3:The answer is in The Comments Section
        </p>
        <p>
          Question 4:The answer is in The Share Section
        </p>
      </div>
       <div className='explaination'>
        <p>use 'Normal Login' button to login without google sign in or any authentication</p>
        <button className='logBtn' onClick={()=>normal()}>Normal Login</button>
       
        <button className='logBtn' onClick={()=>normalLogout()}>Logout</button>

      </div>
    </div>

    
    
  );
}

export default Home;
