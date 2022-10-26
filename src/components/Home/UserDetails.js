import { useEffect, useState } from "react";
import React from 'react';
import axios from 'axios';
const UserDetails=()=>{
    const [user,setUser]=useState({});
    var s=localStorage.getItem("email");
    const login={
        email:s
    }
    const [ispost,setpost]=useState(true);
if(ispost){
axios.post("http://localhost:8080/getdetails",login).then(res=>setUser(res.data));
setpost(false);
}

    

    return (
        <form>
            <div className="container-fluid">
                <div className="col">
                    <div className="row">
                     username   
                    </div>
                    <div className="row">
                     email   
                    </div>
                    <div className="row">
                     Phone  
                    </div>
                    <div className="row">
                     Address  
                    </div>
                    
                    
                    
                </div>
                
                {
                <React.Fragment key={user.userId}>

                <div className="col">
                    <div className="row">
                     {user.username}
                    </div>
                    <div className="row">
                     {user.email}
                    </div>
                    <div className="row">
                     {user.Phone}
                    </div>
                    <div className="row">
                     {user.Address}
                    </div> 
                </div>
                </React.Fragment>
                }
            </div>
           
        </form>
    )
}

export default UserDetails;