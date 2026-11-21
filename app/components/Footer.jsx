import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#F0F0F0] h-124.75  w-full mt-19  '>
      <div className="box bg-black text-white w-310 h-49 flex -mt-20 mx-auto rounded-2xl justify-center items-center gap-88">
<h2 className='font-bold text-4xl w-129  p-10'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
<div className='flex flex-col gap-y-4'>
    <div className='bg-white text-gray-900 h-10 w-74 rounded-3xl flex justify-center'><input type="text" placeholder='Enter your email adress'/></div>
    <button className='bg-white text-gray-900 h-10 w-74 rounded-3xl'>Subscribe to Newsletter</button>
</div>
      </div>

  <div className="links flex gap-25 mt-9 justify-center items-center">
     <div className="col-1">
   <h3 className='font-extrabold mb-8 text-3xl'>SHOP.CO</h3>
      <p className='w-75 mb-8 text-gray-600'>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
   </div>

   <div className="col-2">
<h4 className=' text-[21px] '>COMPANY</h4>

<ul className='text-gray-500 gap-y-2 mt-2.5 flex flex-col'>
    <li>About</li>
    <li>Feature</li>
    <li>Works</li>
    <li>Career</li>
</ul>
   </div>
   <div className="col-3">
<h4 className='text-[21px]'>HELP</h4>
<ul className='text-gray-500 gap-y-2 mt-2.5 flex flex-col'>
    <li>Customer Support</li>
    <li>Delivery Details</li>
    <li>Terms & Conditions</li>
    <li>Privacy Policy</li>
</ul>
   </div>
   <div className="col-4">
<h4 className='text-[21px]'>FAQ</h4>
<ul className='text-gray-500 gap-y-2 mt-2.5 flex flex-col'>
    <li>Account</li>
    <li>Manage Deliveries</li>
    <li>Orders</li>
    <li>Payments</li>
</ul>
   </div>
   <div className="col-5">
   <h4 className='text-[21px] '>RESOURCES</h4> 
   <ul className='text-gray-500 gap-y-2 mt-2.5 flex flex-col'>
    <li>Free eBooks</li>
    <li>Development Tutorial</li>
    <li>How to - Blog</li>
    <li>Youtube Playlist</li>
   </ul>
   </div>
  </div>
    </div>
  )
}

export default Footer
