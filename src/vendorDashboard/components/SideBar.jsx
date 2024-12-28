import React from 'react'
// import AddFirm from './AddFirm'
// import AddProduct from './AddProduct';
// import AllProducts from './AllProducts';
// import UserBookings from './UserBookings';

const SideBar = ({showFirmHandler, showProductHandler,  showAllProductsHandler, showFirmTitle}) => {
//   const [showFirm, setShowFirm] = useState(false);
//   const [showProduct, setShowProduct] = useState(false);
//   const [allProducts, setAllProducts] = useState(false);
//   const [showBookings, setShowBookings] = useState(false);

  
//   const firmHandler =()=>{
//     setShowFirm(true)
//     setShowProduct(false)
//     setAllProducts(false)
//     setShowBookings(false)
//   }

//   const productHandler=()=>{
//     setShowProduct(true)
//     setShowFirm(false)
//     setAllProducts(false)
//     setShowBookings(false)

//   }
//   const firmProductsHandler=()=>{
//     setShowProduct(false)
//     setShowFirm(false)
//     setAllProducts(true)
//     setShowBookings(false)

//   }
// const userBookingHandler =()=>{
//   setShowProduct(false)
//   setShowFirm(false)
//   setAllProducts(false)
//   setShowBookings(true)
// }

  return (
//   <>
    <div className='sideBarSection'>
        <ul>
            {showFirmTitle ? <li onClick={showFirmHandler}>Add Firm </li> : "" }
            <li onClick= {showProductHandler}>Add Product</li>
            <li onClick={showAllProductsHandler}>All Products</li>
            <li>User Booking</li>    
        </ul>
    </div>

   )
}

export default SideBar