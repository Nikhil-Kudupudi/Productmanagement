import axios from 'axios';
import {useState} from 'react';
import {useNavigate,useLocation} from 'react-router-dom';


const UpdateProduct=()=>{
  const location = useLocation();

const navigate=useNavigate();


const [product,setproduct]=useState({
  email:localStorage.getItem("email"),
  Productid: localStorage.getItem("prodid"),
    Productname:localStorage.getItem("prodname"),
    Cost:0,
    Quantity:0,
    CompanyName: localStorage.getItem("Companyname")
  
});
const handleonchange=(evt)=>{
setproduct({...product,[evt.target.name]:evt.target.value})
}
const [response,setresponse]=useState("")
const handleonsubmit=(evt)=>{
    axios.put("http://localhost:8080/updateproduct",product).then(res=>setresponse(res.data));
    evt.preventDefault();
}
if(response==="success"){
  navigate("/home");
}
return (
<>
<form onSubmit={handleonsubmit}>
  <div className="form-group">
    <label htmlFor="Productid"></label>
    <input type="text" name="Productid" id="Productid" className="form-control" placeholder="" value={product.Productid}aria-describedby="helpId" disabled/>
    <small id="helpId" className="text-muted">Help text</small>
  </div>
    <div className="form-group">
      <label htmlFor="Productname">Productname</label>
      <input type="text" name="Productname" id="Productname" className="form-control" placeholder="" value={product.Productname} aria-describedby="helpId" disabled />
      
    </div>
    <div className="form-group">
      <label htmlFor="Cost">Cost</label>
      <input type="number" name="Cost" id="Cost" className="form-control" value={product.Cost} onChange={handleonchange} placeholder="" aria-describedby="helpId"/>
      <small id="helpId" className="text-muted">Help text</small>
    </div>
    <div className="form-group">
      <label htmlFor="Quantity">Quantity</label>
      <input type="number" name="Quantity" id="Quantity" className="form-control" value={product.Quantity} onChange={handleonchange} placeholder="" aria-describedby="helpId"/>
      <small id="helpId" className="text-muted">Help text</small>
    </div>
    <div className="form-group">
      <label htmlFor="Companyname">Companyname</label>
      <input type="text" name="Companyname" id="Companyname" className="form-control" placeholder="" aria-describedby="helpId"/>
      <small id="helpId" className="text-muted">Help text</small>
    </div>

    <button type="submit" className="btn btn-primary">save</button>
</form>
</>
)



}
export default UpdateProduct;