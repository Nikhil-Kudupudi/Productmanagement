import { FaRegEdit } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import React from "react";
import axios from 'axios';

const IconChange=({task})=>{
    const [edit, setedit] = useState(true);
    const [item,setitem]=useState({
        email: localStorage.getItem("email"),
        product: task
    })

 console.log(task)
const handleonchange=(evt)=>{
    console.log(item);
    setitem({...item,[evt.target.name]:evt.target.value})
    console.log(item);
   
    
}
const handlesubmit=()=>{

}

    return (
        <>
        <React.Fragment key={item.product.Productid}>
        <tr >
        <td>{item.product.Productid}</td>
        <td >{item.product.Productname}</td>
        <td contentEditable={edit} onChange={handleonchange}>{item.product.Cost}</td>
        <td contentEditable={edit} onChange={handleonchange}>{item.product.Quantity}</td>
        <td contentEditable={edit} onChange={handleonchange}>{item.product.CompanyName}</td>
        <td ><FaRegEdit onClick={handlesubmit}/></td>
        </tr>
        </React.Fragment>
        </>
    )


}
function ProductDetails() {
    const [Product,setProduct]=useState({
        email :localStorage.getItem("email"),
        product:[

        ]
    });
    const [isset,setisset]=useState(true);
if(isset){
    axios.get("http://localhost:8080/productdetails/"+Product.email,
    
    ).then(res=>setProduct(res.data)).catch(err=>console.log(err));
    setisset(false);
}

    return (
        <div className="">
            <div className="container-fluid">
                <h1>Product Details</h1>
            </div>
            <table className="table table-striped table-inverse table-responsive">
                <thead className="thead-inverse">
                    <tr>
                        <th>Product id</th>
                        <th>Product Name</th>
                        <th>Cost</th>
                        <th>Quantity</th>
                        <th> Company Name</th>
                    </tr>
                </thead>
                <tbody>
                    {

                        Product.product.map((task) => (

                           <IconChange task={task}/>

                        ))
                    }



                </tbody>
            </table>
        </div>

    )
}
export default ProductDetails;