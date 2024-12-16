import React, { useEffect, useState } from 'react'

function FakeStoreAPI() {

    let [products, setProducts] = useState([]);

    useEffect( () => {
        onGetProducts();
    },[])

    let onGetProducts = async () => {
        console.log("onGetProducts");

        let reqOptions = {
            method:"GET",
        };

        // STORED IN JSON FORMAT
        let JSONData = await fetch("https://fakestoreapi.com/products",reqOptions);

        // Converting JSON to JSO
        let JSOData = await JSONData.json();
        setProducts(JSOData);
        console.log(JSOData);
        
    };

  return (
    <div className='fakeStoreDiv'>
      <button className='getProductsBTN'
        onClick={ () => {
            onGetProducts();
        }}
      >Get Products</button>
      

     <div className='productContainer'>
        {products.map((product,i) => {
            
                return <div className='productDiv'>
                    <img src={product.image} className='productImage'></img>
                    <p>{product.title}</p>
                    <p>Price : ${product.price}/-</p>                
                    </div>
            
        })}   
     </div>
    </div>
  )
}

export default FakeStoreAPI
