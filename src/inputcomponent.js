
import { useEffect, useState } from 'react';
import './App.css';

function Input(props) {
    //Scenario state
    const [scenario,setscenario]=useState("");
    //Previous value
    const [prev,setprev]=useState("");
    // input handle state
    const [inp,setinp]=useState("");
    //custom on change function to display value
function handleonchange(e){
    //To handle disable state
    if(scenario=="disabled")
        {setinp(prev);}
    else{
setprev(e.target.value);
setinp(e.target.value);}
}
let p="@";

//To check the button clicked 
useEffect(()=>{
    if(scenario=="disabled")
        {setinp(prev);
            
        }

},[scenario]);

  return (
    <div>
   {/* Input implementation for making customiseable Input  */}
    <input type={props.type} value={inp} onChange={(e)=>{handleonchange(e)}} maxLength={props.maxLength} minLength={props.minLength} title={props.title} style={props.style} placeholder={props.placeholder} required={props.required} />
    {/* To show the value */}
    <p>{props.showvalue?`Enter input:${props.type=="currency"&& inp.length>0?`${inp}.00`: inp}`:""}</p>
    {/*Error message implemented to check input type text should not be greater than 12 and password should contain @ */}
    <p>{props.type=="text"?inp.length>=11?"Name can't be more than 12 characters long":"":props.type=="password"?!inp.includes(p)?"Kindly enter strong password":"":null}</p>
    <div>
        {props.scenario==true?
        <>
        <p>On click of edit user can edit the input and on click of disable user can't change the input</p>
        <button onClick={()=>setscenario("edit")} style={{marginRight:"5%"}}>
            edit
        </button>
        <button onClick={()=>setscenario("disabled")}>
            disabled
        </button>
        </>
        :""}
    </div>
    </div>
  );
}

export default Input;
