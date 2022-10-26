import { useNavigate } from "react-router-dom"
const navigate=useNavigate();
const Logout=()=>{
    return (
    <>
    <center>
       <h1> Are you sure you want to exit</h1>

       
       <div class="row">
        <div class=" col-lg-3 col-lg-3">
            <button type="button" onClick={navigate('/')}>Logout</button>
        </div>
       </div>
       
    </center>
    </>
    )
}

export default Logout;