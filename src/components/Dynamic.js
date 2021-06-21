import React, { useState, useEffect } from 'react';

function Dynamic() {
  //Set 1 of product state
  // const [data, setData] = useState();
  const [content, setContent] = useState();

  //set 2 of products this.state.
  //   const [priceTwo, setPriceTwo] = useState([]);
  //   const [titleTwo, setTitleTwo] = useState("title placeholder");
  //   const [imageTwo, setImageTwo] = useState();
  //   const [variantTwo, setVariantTwo] = useState();

  //set 2 of products this.state.
  //    const [priceThree, setPriceThree] = useState([]);
  //    const [titleThree, setTitleThree] = useState("title placeholder");
  //    const [imageThree, setImageThree] = useState();
  //    const [variantThree, setVariantThree] = useState();

  // extra
  // const [variantsMix, setVariantsMix] = useState([{ nameOne:"one", quantityOne: "one" , priceOne: 0 ,}, {nameTwo:"two", quantityTwo: "two" , priceTwo: 0 ,}]);

  console.log(`start of render state is ${content}`);
  useEffect(() => {
    async function fetchApi() {
      const res = await fetch(`https://frontendtest.huel.io/api/line-items`, {
        headers: {
          'content-type': 'application/json'
        }
      });
      const data = await res.json();
      let test = JSON.stringify(data) 
      // console.log( `data is  ${JSON.stringify(data)}`);
      setContent(test);

      // console.log(`TEST result is ${test}`);
     

      //variants addition

      // setVariantsMix({variantsMix, name: data.line_items[3].name, price: data.line_items[3].price, quantity: data.line_items[3].quantity})
      // console.log(`start of variants = ${variantsMix}`);

      
      //Next steps
      //annotate
      //state managent
      //refactor code and separation on concerns
      //test
      // for const of etc go through data and combine by type.
      //calculate price, name and quantity
      //state ? display dependent on amount of data: regec to search data and optional render of extra components in products sub section (variant header)

      // console.log(`data is ${JSON.stringify(data.payload[0].mood)}`)

      //PLAN 2:
      // Reduce function to accumulate price
      // state of powders, object?
      //spread operator needed
    }
    fetchApi();
  }, []);
  //Test state
  // console.log(`content is ${content}`);

  // dynamic content




  
  // console.log(`end of variants = ${variantsMix}`);

  return (
    <div>
      <div className="box orders-history-block has-shadow-hover">
        <div className="order-information">
          <h2 className="title is-6 is-marginless"> Dynamic </h2>
          <div>
            <div className="order-information-expanded">
              <div className="product-list-boxes columns is-multiline">
                <div className="column is-6">
                  <div className="media">
                    <div className="media-left">
                      <img
                        alt="Product bars"
                        className="image"
                        src= "https://cdn.shopify.com/s/files/1/0578/1097/products/HUEL_SHAKER_FROSTER_FR_1200.jpg?v=1515319444"
                      />
                    </div>
                    <div className="media-content">
                      <div>
                        <p className="product-title">title</p>
                        <p className="product-variants">Dynamic product</p>
                      </div>
                    </div>
                    <div className="media-right">
                      <p className="product-price"> $ price</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dynamic;
