const UpdateProduct=()=>{
return (
<>
<form>
    <div className="form-group">
      <label htmlFor="Productname">Productname</label>
      <input type="text" name="Productname" id="Productname" className="form-control" placeholder="" value="" aria-describedby="helpId"/>
      
    </div>
    <div className="form-group">
      <label htmlFor="Cost">Cost</label>
      <input type="text" name="Cost" id="Cost" className="form-control" placeholder="" aria-describedby="helpId"/>
      <small id="helpId" className="text-muted">Help text</small>
    </div>
    <div className="form-group">
      <label htmlFor="Quantity">Quantity</label>
      <input type="text" name="Quantity" id="Quantity" className="form-control" placeholder="" aria-describedby="helpId"/>
      <small id="helpId" className="text-muted">Help text</small>
    </div>
    <div className="form-group">
      <label htmlFor="Companyname">Companyname</label>
      <input type="text" name="Companyname" id="Companyname" className="form-control" placeholder="" aria-describedby="helpId"/>
      <small id="helpId" className="text-muted">Help text</small>
    </div>
</form>
</>
)



}
export default UpdateProduct;