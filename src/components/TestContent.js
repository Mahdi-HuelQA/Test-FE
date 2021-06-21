import React, { useState, useEffect } from 'react';

function TestContent() {

  //Set 1 of product state 
  // const [data, setData] = useState();
  const [priceOne, setPriceOne] = useState([]);
  const [title, setTitle] = useState("title placeholder");
  const [imageOne, setImageOne] = useState();
  const [variantOne, setVariantOne] = useState();



  //set 2 of products this.state.
  const [priceTwo, setPriceTwo] = useState([]);
  const [titleTwo, setTitleTwo] = useState("title placeholder");
  const [imageTwo, setImageTwo] = useState();
  const [variantTwo, setVariantTwo] = useState();
  


   //set 2 of products this.state.
   const [priceThree, setPriceThree] = useState([]);
   const [titleThree, setTitleThree] = useState("title placeholder");
   const [imageThree, setImageThree] = useState();
   const [variantThree, setVariantThree] = useState();

  // extra
  // const [variantsMix, setVariantsMix] = useState([{ nameOne:"one", quantityOne: "one" , priceOne: 0 ,}, {nameTwo:"two", quantityTwo: "two" , priceTwo: 0 ,}]);


  console.log(`start of render state is ${priceOne}`);
  useEffect(() => {
    async function fetchApi() {
      const res = await fetch(`https://frontendtest.huel.io/api/line-items`, {
        headers: {
          'content-type': 'application/json'
        
        }
      });
      const data = await res.json();
      console.log( `data is  ${JSON.stringify(data)}`);

      // set 1 FETCH
      setPriceOne(data.line_items[0].price);
      setImageOne(data.line_items[0].image);
      setTitle(data.line_items[0].title)
      setVariantOne(data.line_items[0].name)

      // Set 2 Fetch 
      setPriceTwo(data.line_items[1].price);
      setImageTwo(data.line_items[1].image);
      setTitleTwo(data.line_items[1].title)
      setVariantTwo(data.line_items[1].variant_title)

      //set Fetch 3
        
        setPriceThree(data.line_items[2].price);
        setImageThree(data.line_items[2].image);
        setTitleThree(data.line_items[2].title)
        setVariantThree(data.line_items[2].name)
        console.log(`TEST`);


        //variants addition

        // setVariantsMix({variantsMix, name: data.line_items[3].name, price: data.line_items[3].price, quantity: data.line_items[3].quantity})
        // console.log(`start of variants = ${variantsMix}`);

      //Next steps
      //annotate
      //state managent
      //refactor code and separation on concerns
      //test
      // for const of etc go through data and combine by type. 
      //calculate price, name and

      // console.log(`data is ${JSON.stringify(data.payload[0].mood)}`)

//PLAN 2:
// Reduce function to accumulate price 
// state of powders, object?
//spread operator needed

    }
    fetchApi();
  }, [title, priceOne]);
  //Test state
  console.log(`end of fetch price is ${priceOne}`);
  console.log(`end of fetch title is ${title}`);
  console.log(`end of fetch image is ${imageOne}`);
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
                        src={imageOne}
                      />
                    </div>
                    <div className="media-content">
                      <div>
                        <p className="product-title">
                         {title} 
                        </p>
                        <p className="product-variants">
                          {variantOne} 
                        </p>
                      </div>
                    </div>
                    <div className="media-right">
                      <p className="product-price"> ${priceOne}</p>
                    </div>
                  </div>
                </div>
                <div className="column is-6">
                  <div className="media">
                    <div className="media-left">
                      <img
                        alt="Product bars"
                        className="image"
                        src={imageTwo}
                      />
                    </div>
                    <div className="media-content">
                      <div>
                        <p className="product-title">
                        {titleTwo} 
                        </p>
                        <p className="product-variants">{variantTwo} </p>
                      </div>
                    </div>
                    <div className="media-right">
                      <p className="product-price">${priceTwo}</p>
                    </div>
                  </div>
                </div>
                <div className="column is-6">
                  <div className="media">
                    <div className="media-left">
                      <img
                        alt="Product bars"
                        className="image"
                        src={imageThree}
                      />
                    </div>
                    <div className="media-content">
                      <div>
                        <p className="product-title">{titleThree}</p>
                        <p className="product-variants">
                          {variantThree}
                        </p>
                      </div>
                    </div>
                    <div className="media-right">
                      <p className="product-price">${priceThree}</p>
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
export default TestContent;
