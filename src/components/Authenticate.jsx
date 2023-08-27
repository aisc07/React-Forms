import { useState } from "react";

export default function Authenticate({token}){

    const [successMessage, setSuccessMessage]=useState(null);
    const [error, setError]=useState(null);

   async function handleClick(){
        try{ const response = await fetch(
            "https://fsa-jwt-practice.herokuapp.com/authenticate",
            {
                method:"GET",
                headers:{
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            });

            const result = await response.json();
            setSuccessMessage(result.message);            
        }catch (error) {
            setError(error.message);
        }
        // console.log("Clicked")
   };

    return(
   <div className="bottom">

    {/* <div className="box2"> */}

        <h2 className="authenticate">Authenticate</h2>

        {successMessage && <p className="successMessage">{successMessage}</p>}
        {error && <p className="errorMessage">{error}</p>}

        <button className="tokenButton" onClick={handleClick}>Authenticate Token</button>
    
    {/* </div> */}

</div>
    );  
};