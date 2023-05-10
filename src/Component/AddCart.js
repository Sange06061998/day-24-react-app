import React from "react";

export default function AddCart(Props){
    const {data={},onRemove=(item)=>{}} =Props;
    return(

        <div>
            <div className="container-fluid d-flex ">
<div class="card" style={{width: "18rem"}}>
<img src={data.image} class="card-img-top" style={{width: "450",height:"500"}} alt=""/>
  <div class="card-body">
    <h4 class="card-title">{data.label }</h4>
    <h4 class="card-title text-muted">{`₹${data.price }`}</h4>
    
    <div>
    <button type="button" class="btn btn-danger" onClick={()=>onRemove(data)} > DELETE
    </button>
    </div>
  </div>
</div>
</div>



        </div>
    
    );
}
