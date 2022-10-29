import axios from "axios";
import { useState,useEffect } from "react";
import {v4 as uuid} from "uuid";

const AddProduct=()=>{
  const uid=uuid();
  const [info, setinfo] = useState(
    {
    Productid: uid,
    Productname:'',
    Cost:0,
    Quantity:0,
    Companyname:''
    }
  );
const [Product, setProduct] = useState({
  email:localStorage.getItem("email"),
  product:[
    
  ]
  
});


const [isSubmit,setIsSubmit]=useState(false);
const [formerrors, setformerrors] = useState({});
const handleChange=(evt)=>{
  setinfo({...info,[evt.target.name]:evt.target.value});
  setProduct({...Product,product:[info]})
  setformerrors(validate(info))
  
  setIsSubmit(formerrors.length>0?false:true);
}

const handleSubmit=(evt)=>{
    console.log("hello")
    axios.put('http://localhost:8080/addnewproduct',Product).then(res=>console.log("hello"+res.data))
    // axios.post("http://localhost:8080/addproduct",Product).then(res=>{
    //   if(res.data==="User Exists"){
    //     setUserExist(true);
    //   }
    //   console.log(res.data);
    // });
   
    
  
   
  
evt.preventDefault();
}

const validate=(values)=>{
  const errors={};
  if(values.Productname===""){
    errors.Productname="product name is required";
  }
  if(values.CompanyName===""){
    errors.CompanyName="company name is required";
  }
  if(values.Cost===0){
    errors.Cost="Cost should not be zero";
  }
  if(values.Quantity===0){
      errors.Quantity="Quantity should be greater than 0 ";
  }
  return errors;
}


    return (
        <>
        <div className="container-fluid">
            <h1>Add Product</h1>
        </div>
        <form className="form-group" onSubmit={handleSubmit}>
        <div className="mb-3">
       <label htmlFor="Productid" className="form-label">Product Name</label>
       <input type="text" name="Productid" id="Productid" value={info.Productid} onChange={handleChange} className="form-control" placeholder="" aria-describedby="helpId" required/>
       
     </div>
     <div className="mb-3">
       <label htmlFor="Productname" className="form-label">Product Name</label>
       <input type="text" name="Productname" id="Productname" value={info.Productname} onChange={handleChange}className="form-control" placeholder="" aria-describedby="helpId"/>
       <small id="helpId" className="text-danger">{formerrors.Productname}</small>
     </div>
     <div className="form-group">
       <label htmlFor="Cost">Cost</label>
       <input type="number" name="Cost" id="Cost"  value={info.Cost} onChange={handleChange} className="form-control" placeholder="" aria-describedby="helpId"/>
       <small id="helpId" className="text-danger">{formerrors.Cost}</small>
     </div>
     <div className="form-group">
       <label htmlFor="Quantity">Quantity</label>
       <input type="number" name="Quantity" id="Quantity" value={info.Quantity} onChange={handleChange} className="form-control" placeholder="" aria-describedby="helpId"/>
       <small id="helpId" className="text-danger">{formerrors.Quantity}</small>
     </div>
        <div className="form-group">
          <label htmlFor="CompanyName">Company Name</label>
          <input type="text" name="CompanyName" id="CompanyName" value={info.CompanyName} onChange={handleChange} className="form-control" placeholder="" aria-describedby="helpId"/>
          <small id="helpId" className="text-danger">{formerrors.CompanyName}</small>
        </div>
        <br/>
        <button type="submit" className="btn btn-primary" >Submit</button>
     </form>

        </>
    );
}
export default AddProduct;