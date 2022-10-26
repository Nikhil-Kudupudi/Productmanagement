import { Navigate } from 'react-router';
import Signup from './Signup';
import './User.css';
function User(props){
   
    
      return (
        <>
        
          <div className='background'>
          
            <div className='formdata'>
              <div className=" shadow p-3 mb-5  mb5 rounded container-sm bg-dark text-white">
               
                
                <Signup />
                <center> <div className='login'>Already Registered?<a href="Login">Login</a></div></center>
                
              </div>
              <br />
            </div>
    
            
          
          </div>
    
    
    
    
        </>
    
      );
    
}
export default User;