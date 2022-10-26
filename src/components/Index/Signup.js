import { useState, useEffect, } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function Signup() {
  const navigate = useNavigate();
  const [isloading, setisloading] = useState(false);
  const [data, setData] = useState({

    username: '',
    email: '',

    password: '',
    cpassword: '',
    Phone: '',
    Address: '',

  });
  const [response, setresponse] = useState("");

  const [formerrors, setFormerrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  useEffect(() => {
   
    if (Object.length === 0 && isSubmit) {

      alert("submitted successfully");
      console.log("hello",formerrors);
      

    }
  }, [formerrors, isSubmit,data]);
  const [Product, setProduct] = useState({
    email:"",
    product:[
      
    ]
    
  });
if(response.data==="success"){
  
  navigate('/home');
}

if(isloading){
  return (
    <>
    <h1>is loading</h1>
    </>
  )
}

// if (isSubmit) {
//     setisloading(true);
//    axios.post("http://localhost:8080/user", data).then(res =>setresponse(res)).catch(err => console.log(err));
//    setIsSubmit(false);
//   console.log(response.data);
// }
  //checks htmlFor formerros are there or not based on length
  //on submit event is called 
  function handleSubmit(evt) {
    console.log("handle Submit",formerrors);
    axios.post("http://localhost:8080/user", data).then(res =>setresponse(res)).catch(err => console.log(err));
    setProduct({...Product,email : data.email});
    axios.post("http://localhost:8080/addproduct",Product).then(res=>console.log("add",res.data));
   evt.preventDefault();
 
  }



  // form validation
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!values.password)
      errors.password = "Enter password";
    else if (values.password && (values.password.length < 4 || values.password.length > 10)) {
      errors.password = "password should be of length 4-10";
    }
    if (!values.cpassword)
      errors.cpassword = "Enter confirm password";
    else if (values.cpassword && (values.cpassword.length < 4 || values.cpassword.length > 10)) {
      errors.cpassword = "password should be of length 4-10";
    }
    else if (values.cpassword && !(values.password === values.cpassword)) {
      errors.cpassword = "password does not match";
    }
    if (!values.Phone) {
      errors.Phone = "Enter Phone Number";
    }
    // else if(values.Phone && values.length!==10){
    //   errors.Phone="Enter valid phone number";
    // }

    if (!values.Address) {
      errors.Address = 'Enter Address';
    }



    return errors;
  }

  //On change of input field values the values are updated
  function handleChange(evt) {
    setData({
      ...data,
      [evt.target.name]: evt.target.value
    });
    setFormerrors(validate(data));
    setIsSubmit(formerrors.length > 0 ? false : true);
  }



  //Signup from
  return (
    <>

      

      <div className=' bg-dark text-lg text-center text-white rounded'>
        <h3>Register</h3>
        
        <h2>{response.data}</h2>
      
      </div>
      <form className="form-group" onSubmit={isSubmit?handleSubmit:console.log(formerrors)}>

        <div className="form-group">
          <label htmlFor="username">UserName</label>
          <input type="textarea" name="username" id="username" value={data.username} className="form-control" placeholder="" onChange={handleChange} />
          <small className='text-danger'>{formerrors.username}</small>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" name="email" id="email" value={data.email} onChange={handleChange} aria-describedby="emailHelpId" placeholder="" />
          <small className='text-danger'>{formerrors.email}</small>
        </div>
        <div className="form-group">
          <label htmlFor="Phone">Phone Number</label>
          <input type="tel" name="Phone" id="Phone" maxLength="10" value={data.Phone} onChange={handleChange} className="form-control" placeholder="" aria-describedby="helpId" />
          <small className="text-danger">{formerrors.Phone}</small>
        </div>
        <div className="form-group">
          <label htmlFor="Address">Address</label>
          <input type="textarea" name="Address" id="Address" value={data.Address} onChange={handleChange} className="form-control" placeholder="" aria-describedby="helpId" />
          <small className="text-danger">{formerrors.Address}</small>
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" name="password" id="password" value={data.password} onChange={handleChange} className="form-control" placeholder="" aria-describedby="helpId" />
          <small className=' text-danger'>{formerrors.password}</small>
        </div>
        <div className="form-group">
          <label htmlFor="cpassword" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" name="cpassword" id="cpassword" value={data.cpassword} onChange={handleChange} placeholder="" />
          <small className=' text-danger'>{formerrors.cpassword}</small>
        </div>
        <br />
        <center>
          <button type="submit" className="btn btn-primary col-6">Submit</button>
        </center>
      </form>
    </>
  )
}

export default Signup;