import { useState } from "react";



//deconstruct setToken from props(below)
export default function SignUpForm({setToken}){
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [error, setError] = useState(null);
   const [submitted, setSubmitted] = useState(false);
//    const [validated, setValidated] = useState(false);

    // function displayLogin(){
    //     if(username >= 5){
    //         <h2 className="displayUsername">Welcome, {username}!</h2>
    //     }else
    //          (alert("Username must be at least 5 characters long."))
    // };

    function validateForm(){
    
        if(password.length < 8){
            alert(
                "Password must be at least 8 characters long."
                )
            };
    };

   async function handleSubmit(event){
           event.preventDefault();
        
                try{
                   const response = await fetch(
                        "https://fsa-jwt-practice.herokuapp.com/signup",{
                    method: "POST",
                    body: JSON.stringify({username, password})

                        });
                    const result = await response.json();
                     setToken(result.token)
                    console.log(result);
                    const data = {username};
                    console.log(data);
                }catch (error) {
                        setError(error.message);
                    };      
                   setSubmitted(true);
    };   

    return(
    <div className="top">
        
        <h2 className="signUp">Sign Up</h2>
        {error && <p>{error}</p>}

        <form className="box1"  onSubmit={handleSubmit}>

            <label className="box1">
            Username:{""}
                <input className="usernameInput" value={username} onChange={(e)=>setUsername(e.target.value)}/>           
            </label>
        <br/>

            <label className="box1">
        <br/>
            Password:{""}
                <input className="passwordInput" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </label>
        <br/>
        <br/>
            <button className="submitButton" type="submit" onClick={() => validateForm()}>Submit</button>
            
        </form>
       {submitted ? <h2 className="displayUsername">Welcome, {username}!</h2> : false}
     
       {/* {username < 0 ? alert("Invalid username. Please try again.") : ""} */}
       {/* {password.length < 8 ? alert("Password must be at least 8 characters long") : false} */}
    </div>
    );  
};