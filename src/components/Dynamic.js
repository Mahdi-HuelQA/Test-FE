import React, { useState, useEffect } from 'react';

function Dynamic() {
  //extra
  const [variantsMix, setVariantsMix] = useState();
  const [count, setCount] = useState(true);
  const [name1, setName1] = useState();
  const [name2, setName2] = useState();
  const [name3, setName3] = useState();
  const [name4, setName4] = useState();
  const [name5, setName5] = useState();

  //Prices
  const [price1, setPrice1] = useState();
  const [price2, setPrice2] = useState();
  const [price3, setPrice3] = useState(1);
  const [price4, setPrice4] = useState();
  const [price5, setPrice5] = useState();

  const [total, setTotal] = useState();

  // Variants

  const [variant1, setVariant1] = useState();
  const [variant2, setVariant2] = useState();
  const [variant3, setVariant3] = useState(1);
  const [variant4, setVariant4] = useState();
  const [variant5, setVariant5] = useState();

  //Photos

  const [imageOne, setImageOne] = useState();
  const [imageTwo, setImageTwo] = useState();
  const [imageThree, setImageThree] = useState();

  //  console.log(`start of render variants is ${variantsMix}`);
  useEffect(() => {
    async function fetchApi() {
      const res = await fetch(`https://frontendtest.huel.io/api/line-items`, {
        headers: {
          'content-type': 'application/json'
        }
      });

      const data = await res.json();
      // checking data

      console.log(`res is ${res}`);
      console.log(`data is ${data.line_items[0].name}`);
      // let test = JSON.parse(data.line_items[0].title);

      let test = JSON.stringify(data);
      // let testOne = JSON.parse(test)

      // console.log(`data is ${test}`);

      if (!count) {
        console.log('no fetch');
      } else {
        setVariantsMix(test);
        setCount(true);

        console.log(`count ${count}`);
        // console.log(`VM is ${variantsMix}`);
        //console.log(`VM IS ${JSON.stringify(variantsMix)}`)
        saveNames();
        savePrice();
        priceAdd();
        saveExtras();
        savePhotos();
      }

      //Next steps
      //annotate
      //state management
      //refactor code and separation of concerns (more components to make code less complex)
      //test
      // for const of etc go through data and combine by type.
      //Determine price, name and quantity
      //state ? display dependent on amount of data: regex to search data and optional renders

      //PLAN 2:
      // Reduce function to accumulate
      // state of powders
      //spread operator
    }
    fetchApi();
  }, [variantsMix, count, savePrice, saveExtras, savePhotos, priceAdd]);

  // function checkType(){
  //   variantsMix.Map((post)=>{
  //     return console.log(post.name)})
  // }
  // checkType()

  function saveNames() {
    console.log(`VM IS type  = ${typeof variantsMix}`);
    let types = JSON.parse(variantsMix);
    console.log(
      `object name is ${types.line_items[4].name} && type = ${typeof types}`
    );
    setName1(types.line_items[0].name);
    setName2(types.line_items[1].name.slice(0, 21));
    setName3(types.line_items[2].title.slice(0, 11));
    setName4(types.line_items[3].name);
    setName5(types.line_items[4].name);
  }

  function savePrice() {
    let types = JSON.parse(variantsMix);
    console.log(`Prices is working`);
    setPrice1(types.line_items[0].price);
    setPrice2(types.line_items[1].price);
    setPrice3(types.line_items[2].price);
    setPrice4(types.line_items[3].price);
    setPrice5(types.line_items[4].price);
  }

  function priceAdd() {
    //   let types = JSON.parse(variantsMix);
    //  console.log(typeof(types))

    //   let total  = 0

    //   for (let i = 0; i < types.line_items.length; i++) {
    //     total = total + types.line_items[i] ;
    //   }

    //   let arr = JSON.stringify(total)
    //let total = 0;
    //     let newArr = types.map(()=>{

    //       if (types.line_items.name.includes('Powder'))
    //       {
    //        total = total + types.line_items.price
    //     console.log('calculating');}
    //     else{

    let arr3 = JSON.parse(price3);
    let arr4 = JSON.parse(price4);
    let arr5 = JSON.parse(price5);
    setTotal(arr3 + arr4 + arr5);
    // console.log(`type of number ${typeof(price5)}`)
    console.log(`result is ${total}`);

    // }
    //     })
  }
  function saveExtras() {
    let types = JSON.parse(variantsMix);
    setVariant1(types.line_items[0].name);
    setVariant2(types.line_items[1].variant_title);
    setVariant3(types.line_items[2].name.slice(11, 17));
    setVariant4(types.line_items[3].name.slice(11, 19));
    setVariant5(types.line_items[4].title.slice(11, 21));

    console.log(`func is here`);
  }

  function savePhotos() {
    let types = JSON.parse(variantsMix);

    setImageOne(types.line_items[0].image);
    setImageTwo(types.line_items[1].image);
    setImageThree(types.line_items[2].image);

    console.log(`TEST`);
  }

  // next step: add state for amount of each variant eg "x1"
  // same process as above
  
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
                        <p className="product-title">{name1}</p>
                        <p className="product-variants">1x {variant1}</p>
                      </div>
                    </div>
                    <div className="media-right">
                      <p className="product-price"> ${price1}</p>
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
                        <p className="product-title">{name2}</p>
                        <p className="product-variants">1x {variant2} </p>
                      </div>
                    </div>
                    <div className="media-right">
                      <p className="product-price">${price2} </p>
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
                        <p className="product-title">{name3}</p>
                        <p className="product-variants">
                          1x {variant5}, 1x {variant3}, 1x {variant4}
                        </p>
                      </div>
                    </div>
                    <div className="media-right">
                      <p className="product-price">${total}</p>
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
