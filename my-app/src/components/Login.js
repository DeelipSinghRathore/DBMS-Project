import React, {useState} from 'react'
import "../style/Login.css"
import firebase from './firebase-config';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
function Login() {
   
    const [email,setEmail]=useState("");
	const [password,setPassword]=useState("");
    const signUp = () => {
		console.log("in signup")
		const auth = getAuth();
		createUserWithEmailAndPassword(auth, email, password)
  			.then((userCredential) => {
				// Signed in 
				const user = userCredential.user;
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				// ..
			});
    }

	const handleOnChange=()=>{

	}

    return (
        <div class="login-wrap">
	     <div class="login-html">
		<input id="tab-1" type="radio" name="tab" class="sign-in" checked></input><label for="tab-1" class="tab">Sign In</label>
		<input id="tab-2" type="radio" name="tab" class="sign-up"></input><label for="tab-2" class="tab">Sign Up</label>
		<div class="login-form">
			<div class="sign-in-htm">
				<div class="group">
					<label for="user" class="label">Username</label>
					<input id="user" type="text" class="input"></input>
				</div>
				<div class="group">
					<label for="pass" class="label">Password</label>
					<input id="pass" type="password" class="input" data-type="password"></input>
				</div>
				<div class="group">
					<input id="check" type="checkbox" class="check" checked></input>
					<label for="check"><span class="icon"></span> Keep me Signed in</label>
				</div>
				<div class="group">
					<input type="submit" class="button" value="Sign In"></input>
				</div>
				<div class="hr"></div>
				<div class="foot-lnk">
					<a href="#forgot">Forgot Password?</a>
				</div>
			</div>
			<div class="sign-up-htm">
				<div class="group">
					<label for="user" class="label">Email</label>
					<input id="user" type="text" onChange = {(e)=>{e.preventDefault();setEmail(e.target.value)}} value = {email} class="input"></input>
				</div>
				<div class="group">
					<label for="pass" class="label">Password</label>
					<input id="pass" type="password" onChange = {(e)=>setPassword(e.target.value)} value = {password} class="input" data-type="password"></input>
				</div>
				{/* <div class="group">
					<label for="pass" class="label">Repeat Password</label>
					<input id="pass" type="password" onChange = {handleOnChange} value = {password} class="input" data-type="password"></input>
				</div> */}
				{/* <div class="group">
					<label for="pass" class="label">Email Address</label>
					<input id="pass" type="text" onChange = {handleOnChange} value = {email} class="input"></input>
				</div> */}
				<div class="group">
					<input type="submit" onClick={signUp}  class="button" value="Sign Up"></input>
				</div>
				<div class="hr"></div>
				<div class="foot-lnk">
					<label for="tab-1">Already Member?</label>
				</div>
			</div>
		</div>
	</div>
</div>
    )
}

export default Login










// import React, {useState} from 'react'
// import "../style/Login.css"
// import firebase from './firebase-config';

// function Login() {
   
//     const [title, setTitle] = useState('');
//     const email = '', password = '';
//     const handleOnChange = (e) => {
//         // setTitle(e.target.value);
//     }

//     const signUp = () => {
//         const userRef = firebase.database().ref('Users');
//         const Users = {
//             email : '',
//             password : '',
//         }

//         userRef.push(Users);
//     }



//     return (
//         <div class="login-wrap">
//          <div class="login-html">
//         <input id="tab-1" type="radio" name="tab" class="sign-in" checked></input><label for="tab-1" class="tab">Sign In</label>
//         <input id="tab-2" type="radio" name="tab" class="sign-up"></input><label for="tab-2" class="tab">Sign Up</label>
//         <div class="login-form">
//             <div class="sign-in-htm">
//                 <div class="group">
//                     <label for="user" class="label">Username</label>
//                     <input id="user" type="text" class="input"></input>
//                 </div>
//                 <div class="group">
//                     <label for="pass" class="label">Password</label>
//                     <input id="pass" type="password" class="input" data-type="password"></input>
//                 </div>
//                 <div class="group">
//                     <input id="check" type="checkbox" class="check" checked></input>
//                     <label for="check"><span class="icon"></span> Keep me Signed in</label>
//                 </div>
//                 <div class="group">
//                     <input type="submit" class="button" value="Sign In"></input>
//                 </div>
//                 <div class="hr"></div>
//                 <div class="foot-lnk">
//                     <a href="#forgot">Forgot Password?</a>
//                 </div>
//             </div>
//             <div class="sign-up-htm">
//                 <div class="group">
//                     <label for="user" class="label">Username</label>
//                     <input id="user" type="text" onChange = {handleOnChange} value = {email} class="input"></input>
//                 </div>
//                 <div class="group">
//                     <label for="pass" class="label">Password</label>
//                     <input id="pass" type="password" onChange = {handleOnChange} value = {password} class="input" data-type="password"></input>
//                 </div>
//                 <div class="group">
//                     <label for="pass" class="label">Repeat Password</label>
//                     <input id="pass" type="password" onChange = {handleOnChange} value = {password} class="input" data-type="password"></input>
//                 </div>
//                 <div class="group">
//                     <label for="pass" class="label">Email Address</label>
//                     <input id="pass" type="text" onChange = {handleOnChange} value = {email} class="input"></input>
//                 </div>
//                 <div class="group">
//                     <input type="submit" onSubmit = "signUp()" class="button" value="Sign Up"></input>
//                 </div>
//                 <div class="hr"></div>
//                 <div class="foot-lnk">
//                     <label for="tab-1">Already Member?</label>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
//     )
// }

// export default Login
