// import Products from './components/Products';
// import './App.css'
// / import {productsList} from './data'
// import { sculptureList } from './data.js';
// import { useState } from 'react';

// export default function Form() {
//   const [firstName,setFirstName] = useState();
//   const [lastName,setlastName] = useState()

//   function handleFirstNameChange(e) {
//     setFirstName(e.target.value);
//   }

//   function handleLastNameChange(e) {
//     setlastName(e.target.value);
//   }

//   function handleReset() {
//     firstName = '';
//     lastName = '';
//   }

//   return (
//     <form onSubmit={e => e.preventDefault()}>
//       <input
//         placeholder="First name"
//         value={firstName}
//         onChange={handleFirstNameChange}
//       />
//       <input
//         placeholder="Last name"
//         value={lastName}
//         onChange={handleLastNameChange}
//       />
//       <h1>Hi, {firstName} {lastName}</h1>
//       <button onClick={handleReset}>Reset</button>
//     </form>
//   );
// }

// export default function App() {
//   return (
//     < div className='App'>
//       <Gallery />
//     </div>

//   )
// }

// function Gallery() {
//   const [index, setIndex] = useState(0); //state variable
//   const [showMore, setShowMore] = useState(false); //showmore variable // setshowmore function

//   function handleNextClick() {
//     if (index < sculptureList.length - 1) {
//       setIndex(index + 1) //index = index + 1;
//     }
//   }
//   function handlePrevClick() {
//     if (index > 0) {
//       setIndex(index - 1)
//     }
//   }

//   function disPrev() {
//     return index === 0
//   }

//   function disNext() {
//     return index === sculptureList.length - 1
//   }


//   function handleShowMoreClick() {
//     setShowMore(!showMore);
//   }

//   function degrement(){
//     setNumber(number=1)
//   }
//   //rerendering

//   let sculpture = sculptureList[index];
//   return (
//     <>
//       <button onClick={handlePrevClick} disabled={disPrev()}>
//         previous
//       </button>
//       <button onClick={handleNextClick} disabled={disNext()}>
//         Next
//       </button>
//       <h2>
//         <i>{sculpture.name} </i>
//         by {sculpture.artist}
//       </h2>
//       <h3>
//         ({index + 1} of {sculptureList.length})
//       </h3>
//       <img
//         src={sculpture.url}
//         alt={sculpture.alt}
//       />
//       <button onClick={handleShowMoreClick}>{showMore ? "Hide" : "Show"} details</button>
//       {showMore && <p>
//         {sculpture.description}
//       </p>}

//     </>
//   );
// }

// export default  function Counter() {
//   const [number, setNumber] = useState(0); 

//   function incredement(){
    
//   }
//   return (
//     <div>
//       <button onClick={degrement}  >-</button>
//       {number}
//       <button onClick={degrement} >+</button>
//     </div>
//   )
// }

// function Button({ onClick, children }) {
//   return (
//     <button onClick={onClick}>
//       {children}
//     </button>
//   );
// }

// function PlayButton({ movieName }) {
//   function handlePlayClick() {
//     alert(`Playing ${movieName}!`);
//   }

//   return (
//     <Button onClick={handlePlayClick}>
//       Play "{movieName}"
//     </Button>
//   );
// }

// function UploadButton() {
//   return (
//     <Button onClick={() => alert('Uploading!')}>
//       Upload Image
//     </Button>
//   );
// }

// function AlertButton({ message, children }) {
//   return (
//     <button onClick={() => alert(message)}>
//       {children}
//     </button>
//   );
// }

// function handleClick() {
//   let bodyStyle = document.body.style;
//   if (bodyStyle.backgroundColor === 'black') {
//     bodyStyle.backgroundColor = 'white';
//   } else {
//     bodyStyle.backgroundColor = 'black';
//   }
// }

// function App() {
//   function handleClick() {
//     alert('wow !');
//   }

//   return (
//     <div className="App">


//       <form onSubmit={(s) => {
//         s.preventDefault();
//         alert("Submitted !")
//       }}>

//         <input type="text" name="username" />
//         <button type="submit">Submit</button>
//       </form>

//       <div onClick={() => alert('main div!')}>
//         <div className="Toolbar" onClick={(s) => {
//           s.stopPropagation(); {
//             alert('You clicked on the toolbar!')
//           };
//         }}>
//           <Button onClick={(s) => { s.stopPropagation(); alert('Playing!'); }}>
//             Play Movie
//           </Button>
//           <Button onClick={(s) => { s.stopPropagation(); alert('Uploading!'); }}>
//             Upload Image
//           </Button>
//         </div>
//       </div>
//       {/* <PlayButton movieName="Kiki's Delivery Service" />
//       <UploadButton /> */}

//       {/* <button onClick={handleClick}>
//               Click me
//           </button>
//           <AlertButton message={"Hello S !"}>Hello World !</AlertButton> */}
// //     </div >

//   )
// }


// export default App;


// function App() {
//   const products = [
//     {
//       name: "Смартфон Vivo Y35 64GB Agate Black",
//       img: "https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2Fsmartfon_gsm_vivo_y35s_thx_655_50_4_64gb_agate_black_266984_1.jpg&w=256&q=100",
//       rating: 4.9,
//       reviews: 30,
//       originalPrice: 109990,
//       discountedPrice: 59990,
//       deliveryTime: "Доставим за 2 часа",
//     },
//     {
//       name: "Саундбар JBL Cinema SB170",
//       img: "https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2Fsaundbar_jbl_cinema_sb170_268354_1.jpg&w=256&q=100",
//       rating: 0,
//       originalPrice: 179990,
//       discountedPrice: 99990
//     },
//     {
//       name: "Электрическая варочная панель Electrolux EHF6232FOK",
//       img: "https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2Fvstraivaemaya_elektricheskaya_varochnaya_panel_electrolux_ehf6232fok_268730_1.jpg&w=256&q=100",
//       rating: 5,
//       reviews: 3,
//       originalPrice: 379990,
//       discountedPrice: 209990,
//       deliveryTime: "Доставим за 2 часа",
//     },
//     {
//       name: "Велотренажер Genau Ergo XT-850",
//       img: "https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2Fvelotrenazher_genau_ergo_xt_850_271709_1a.jpg&w=256&q=100",
//       rating: 0,
//       originalPrice: 405290,
//       discountedPrice: 198890
//     },
//     {
//       name: "Воздухоочиститель Tefal PT-2530",
//       img: "https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2Fvozduhoochistitel_tefal_pt_2530_277248_1.jpg&w=256&q=100",
//       rating: 0,
//       originalPrice: 155990,
//       discountedPrice: 79990
//     },
//     {
//       name: "Смартфон Samsung Galaxy A25 5G 128GB Blue black",
//       img: "https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2Fsmartfon_samsung_galaxy_a25_5g_128gb_blue_black_277337_1.jpg&w=256&q=100",
//       rating: 5,
//       reviews: 1,
//       originalPrice: 149990,
//       discountedPrice: 129990,
//       deliveryTime: "Доставим за 2 часа"
//     }
//   ];

//   return (
//     <div className="App">
//       <div className="cards">
//         {
//           products.map((product) => (
//             <Products
//               rating={product.rating}
//               img={product.img}
//               name={product.name}
//               originalPrice={product.originalPrice}
//               deliveryTime={product.deliveryTime}
//               discountedPrice={product.discountedPrice}

//             />
//           ))}
//       </div>
//     </div>
//   )
// }

// export default App;

// hw //

// export default function LightSwitch() {
//   function handleClick() {
//     let bodyStyle = document.body.style;
//     if (bodyStyle.backgroundColor === 'black') {
//       bodyStyle.backgroundColor = 'white';
//     } else {
//       bodyStyle.backgroundColor = 'black';
//     }
//   }

//   return (
//     <button onClick={handleClick}>
//       Toggle the lights
//     </button>
//   );
// // }

// export default function Product() {
//     return (
//         <div className="product">
//             <div className="product-items">{
//                 productsList.map((product) => (
//                     <Product
//                         title={product.title}
//                         description={product.description}
//                         price={product.price}
//                         discountPercentage={product.discountPercentage}
//                         stock={product.stock}
//                         brand={product.brand}
//                         category={product.category}
//                         thumbnail={product.thumbnail}  
//                         images={product.images}
//                     />
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default function Shopify() {
//   const [index, setIndex] = useState(0);
//   const [showMore, setShowMore] = useState(false);

//   function handleBackClick() {
//     if (index > 0) {
//       setIndex(index - 1)
//     }
//   }

//   function handleNextClick() {
//     if (index < product.length - 1) {
//       setIndex(index + 1)
//     }
//   }

//   function handleShowMoreClick() {
//     setShowMore(!showMore);
//   }

//   let product = productsList[index];
//   return (
//     <section className='product'>
//       <div className='img-product'>
//         <button onClick={handleBackClick} disabled={index == 0}>Previous</button>
//         <img src={product.images + 1} />
//         <button onClick={handleNextClick} disabled={index == product.length - 1}>Next</button>
//       </div>
//       <h6>{product.title}</h6>

//       <h3>({index + 1} of {product.images.length})</h3>

//       <button onClick={handleShowMoreClick}>{showMore ? 'Hide' : 'Show'} details</button>
//       {showMore && <p>{product.description}</p>}
//     </section>
//   )
// }