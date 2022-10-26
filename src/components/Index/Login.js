import { useState ,useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function Login(){
const navigate = useNavigate();
const [isloading,setisloading]=useState(false)
const [logindata,setLoginData]=useState({
    email: '',
    password: '',
});

const [response, setresponse] = useState("");
const [Formerrors, setFormerrors] = useState({});
const [isSubmit, setIsSubmit] = useState(false);
useEffect(() => {
    if (Object.length === 0 && isSubmit) {

      alert("submitted successfully");
    
      

    }
  }, [Formerrors, isSubmit]);
  const [Product, setProduct] = useState({
    email:'',
    product:[
      
    ]
    
  });
 


const handleSubmit=()=>{
    setFormerrors(validate(logindata));
    setIsSubmit(Formerrors.length>0?false:true);
    


if (isSubmit) {
  setisloading(true);
 axios.post("http://localhost:8080/login", logindata).then(res =>setresponse(res)).catch(err => console.log(err));
 
 if(response.data==="success"){
  console.log(response.data);
  localStorage.setItem("email",logindata.email);
  navigate('/home');
  setresponse("else");
}
}
if(isloading){
  return (
      <>
      <h1>is loading</h1>
      
      </>
    )
}

}

const validate=(values)=>{
    const errors={}
    if(!values.email){
        errors.email="email is required";
    }
    if (!values.password){
        errors.password="password is required";
    }

    return errors;
}

const handleChange=(e)=>{
    setLoginData({...logindata,[e.target.name]:e.target.value});
    setProduct({...Product,email:logindata.email});
}

    return (
        <>
        <div className="container">
        <div className=' bg-dark text-lg text-center text-white rounded'>
            <h3>Login</h3>
        </div>
            <form className="form-group" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Name</label>
                  <input type="email" name="email" id="email" className="form-control" value={logindata.email} onChange={handleChange} placeholder="" aria-describedby="helpId"/>
                  <small id="helpId" className="text-muted">{Formerrors.email}</small>
                </div>
                <div className="form-group">
                  <label htmlFor="password">password</label>
                  <input type="password" className="form-control" name="password" id="password" value={logindata.password}  onChange={handleChange} placeholder=""/>
                  <small id="helpId" className="text-muted">{Formerrors.password}</small>
                </div>
                    <br/>
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
        </>
    )
}

export default Login;