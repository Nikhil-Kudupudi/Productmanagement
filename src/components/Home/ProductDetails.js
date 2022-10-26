import { FaRegEdit } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import React from "react";
import axios from 'axios';

const IconChange=({task})=>{
    const [edit, setedit] = useState(false);

    const updatechanges = () => {
        setedit(!edit);
        console.log(edit);
    }



    return (
        <>
        <React.Fragment key={task.Productid}>
        <tr >
        <td >{task.Productname}</td>
        <td contentEditable={edit}>{task.Cost}</td>
        <td contentEditable={edit}>{task.Quantity}</td>
        <td contentEditable={edit}>{task.CompanyName}</td>
        <td className="col-sm-10" key={task.Productid}>{!edit?<FaRegEdit onClick={updatechanges}/>:<button type="button" className='btn btn-primary' onClick={updatechanges}>save</button>}</td>
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