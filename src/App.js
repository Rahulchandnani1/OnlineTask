import logo from './logo.svg';
import './App.css';
import Input from './inputcomponent';

//disable
function App() {
  return (
    <div className="App">
    {/* For Input here We have passed props like 
    style  to update the style of input,
    the placeholder,
    title,
    showvalue as true so that entered value will  be shown,
    minlength ,maxlength,
    type and required  */}

    <h2>Below are implementation of Input component in parent component</h2>
    <p>For Input here We have passed props like 
    style  to update the style of input,
    the placeholder,
    title,
    showvalue as true (so that entered value will  be shown)
    minlength ,maxlength,
    scenario as true to show the edit and disabled button
    type and required</p>
    
 
    {/* Below are implementation of Input component in parent component for different input type value and props */}

<p>For Create scenario we have to implement input component in parent</p>
<p></p>
    <Input type={"text"}  title={"type text"} scenario={true} showvalue={true} minLength={10} maxLength={12} style={{marginBottom:"20px", padding:"20px",background:"white",color:"black"}} placeholder={"Enter name"} required={"required"}/>
    {/* For type radio */}
    <Input type={"radio"}  title={"type radio"} showvalue={true} style={{padding:"10px",background:"white",color:"black"}} placeholder={"Enter name"} required={"required"}/>
    {/* For type checkbox */}
    <Input type={"checkbox"}  title={"type checkbox"}showvalue={true} style={{padding:"25px",background:"white",color:"black"}} placeholder={"Enter name"} required={"required"}/>
    {/* For type number */}
    <Input type={"number"}  title={"type number"}showvalue={true}style={{marginBottom:"20px",padding:"30px",background:"white",color:"black"}} placeholder={"Enter Age"} required={"required"}/>
    {/* For type password */}
    <Input type={"password"} showvalue={true} title={"type password"}style={{padding:"20px",background:"white",color:"black"}} placeholder={"Enter Password"} required={"required"}/>
    {/* For type currency */}
    <Input type={"currency"} showvalue={true} title={"type currency"}style={{padding:"20px",background:"white",color:"black"}} placeholder={"Enter Currency"} required={"required"}/>
    </div>

  );
}

export default App;
