import './App.css';
import { GoogleOAuthProvider, GoogleLogin  } from '@react-oauth/google';
import jwt_decode from "jwt-decode";


function App() {
 
  return (
    
    <div className="App">
      <div className='d-flex flex-column align-items-center justify-content-center' style={{height:"60vh",boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset", backgroundColor:"#E3F4F4", margin:"10vh 20vw 0 20vw", borderRadius:"10px"}}>
      <h1 style={{marginBottom:"5vh"}}> Hello Sir  ✌️</h1>
      <h4 style={{marginBottom:"3vh"}}> Here is my assignment......</h4>
      <p style={{fontSize:"20px"}}>In the console all the authentication info will get print as soon as you login in both incoded as well as decoded form.</p>
      <GoogleOAuthProvider clientId="812617319400-blfvu7jh258cham6sie96d3rksg7ct3i.apps.googleusercontent.com">
        <div style={{height:"10vh", margin:"3vh", padding:"2vh 25vw",  backgroundColor:"#F8F6F4", borderRadius:"10px"}} className='d-flex justify-content-center align-items-center'>
        <GoogleLogin style={{height:"10vh"}}
          onSuccess={ credentialResponse => {
          var decoded = jwt_decode(credentialResponse.credential);
          console.log(decoded);   
          console.log(credentialResponse);
          <h1>login completed</h1>
          }}
        onError={() => {
        console.log('Login Failed');
        }}
        />
        </div>
      </GoogleOAuthProvider>
      </div>
      

    </div>
  );
}

export default App; 



// ID: 812617319400-blfvu7jh258cham6sie96d3rksg7ct3i.apps.googleusercontent.com
// SKey: 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


