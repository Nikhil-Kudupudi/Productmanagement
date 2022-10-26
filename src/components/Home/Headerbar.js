
import AddProduct from "./AddProduct";
import ProductDetails from "./ProductDetails";
import UserDetails from "./UserDetails";
const Headerbar=()=>{
    
    return (
        <>
        
        <ul className="nav nav-tabs bg-dark text-white" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Add product</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Product details</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="messages-tab" data-bs-toggle="tab" data-bs-target="#messages" type="button" role="tab" aria-controls="messages" aria-selected="false">UserDetails</button>
          </li>
        </ul>
        
        
        <div className="tab-content">
          <div className="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab"> <AddProduct/> </div>
          <div className="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab">  <ProductDetails/></div>
          <div className="tab-pane" id="messages" role="tabpanel" aria-labelledby="messages-tab"> <UserDetails/> </div>
        </div>
      
      </>
    )
}
export default Headerbar;