
import './App.css';
import person from "./image/person.png";
import email from "./image/email.png";
import pass from "./image/pass.png";
import {useRef,useState} from "react";

function App() {
  const func_one=()=>{
    const [uname,setUname]=useRef(" ");
    const [upsw,setUpsw]=useRef(" ");
  }
  const my_func=()=>{
   return uname.current.value=="admin" && upsw.current.value=="admin" ?alert("Login Success"):alert("Login Fail");
  }

  return (
    <div className="main">
     <div className="sub-main">
      <div>
        <div className="imgs">
          <div container="container-image">
            <img src={person} alt="person" className="person"/>
          </div>
        </div>
        <div>
          <h1>Login Page</h1>
          <div>
            <img src={email} alt="email" className="email"/>
            <input type="text" placeholder="user name" useRef={uname} className="name"/>
          </div>
          <div className="second-input">
            <img src={pass} alt="pass" className="email"/>
            <input type="password" placeholder="password" useRef={upsw} className="name"/>
          </div >
          <div className="login-button">
          <button onClick={func_one}>Login</button>
          </div>
          <div>
            <p className="link">
              <a href="#">Forget password ?</a> Or <a href="#">Sign Up</a>
            </p>
          </div>
        </div>
      </div>
     </div>
    </div>
  );
}

export default App;
