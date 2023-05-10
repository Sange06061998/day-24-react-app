import React from "react";


export default function CardProducts (Props){
    const {data={},onChange=(item)=>{},disabled={}} =Props;
    return(

        <div>
            <div className="container-fluid d-flex ">
<div class="card" style={{width: "18rem"}}>
<img src={data.image} class="card-img-top" style={{width: "450",height:"500"}} alt="No image here"/>
  <div class="card-body">
    <h4 class="card-title">{data.label }</h4>
    <h4 class="card-title text-muted">{`₹${data.price }`}</h4>

    
    <div>
    <button type="button" class="btn btn-warning" onClick={()=>onChange(data)}>{disabled ? "Added":"Addcart"}
    </button>
    </div>
  </div>
</div>
</div>



        </div>
    
    );
}


