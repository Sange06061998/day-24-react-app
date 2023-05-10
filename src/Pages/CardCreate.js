import { useState } from "react";
import CardProducts from "../Component/CardProducts";
import AddCart from "../Component/AddCart";

const data = [
    {
    image:"https://bit.ly/416DWXt",  
      label: "Fancy Product",
      price: 40 -80,
    },
    {
        image:"https://bit.ly/3nSymK7",
      label: "Special Item",
      price: 18,
    },
    {
    image:"https://bit.ly/3KDJMu2",
      label: "Sale Item",
      price: 50 -25,
    },
    {
        image:"https://bit.ly/4172mAe",
      label: "Popular Item",
      price: 35,
    },
    {
        image:"https://bit.ly/3maraIP",
      label: "Home Things",
      price: 15,
    },
    {
        image:"https://bit.ly/3ZNMX6H",
      label: "Drawing Items",
      price: 10,
    },
    {
        image:"https://bit.ly/3ZNMelZ",
      label: "Gift Items",
      price: 35,
    },
    {
        image:"https://bit.ly/3MpVYQl",
      label: "Decor Items",
      price: 45,
    }
  ];
  



 function CardCreate(){
  const[cart,setCart]=useState([]);

  function handleChange(item={}){
    let cartcopy=[...cart]
    if(item.label){
      cartcopy.push(item);
    }
    setCart(cartcopy)
  }
  function handleCart(item={}){
    let cartcopy=[...cart]
    if(item.label){
       cartcopy=cartcopy.filter((_data) => _data.label!==item.label);
    }
    setCart(cartcopy)

  }


  function checkCartStatus(item={}){
    let status=false;
    if(item.label){
      status=cart.filter((_data) => _data.label===item.label).length>0 ? true:false;
      
    }
    return status;
  }

    return(

      <div className="cart">
          
      
        <div className="container-fluid">
          
          
          
        <nav class="navbar navbar-light bg-secondary">
  <div class="container">
    <a class="navbar-brand" href="#">
      <img src="https://mir-s3-cdn-cf.behance.net/projects/404/5d09bc117584105.Y3JvcCwxMDg5LDg1MiwxNjksOTc.png"
       alt="" width="70" height="70"/>
    </a>
    <div>
<h1 className="heading"> D-MART</h1>
</div>

  </div>
  
</nav>



<div class="showing">

      {data.map((e,i)=><CardProducts disabled={checkCartStatus(e)} data={e} onChange={handleChange}/>)}

</div>
<div className="addcart">
<h4>cartitems</h4>
</div>
<div className="productshower">
{cart.map((d,i)=>(
  <AddCart data ={d} onRemove={handleCart}/>
))}
</div>


</div>


        </div>

    );
}
export default CardCreate;
