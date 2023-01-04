import React from 'react'

export default function Footer() {
  return (
    <footer className='h-full pb-10 w-full bg-[#ffb703] flex flex-col sm:flex-row sm:items-center sm:p-10'>
    <div>
        {/* <img src={require("../assets/Logo.png")} alt="" /> */}
    </div>
    <div className='flex ml-auto text-white'> 
        <div className='mx-6'>
            <h2 className='text-lg'>Quick Links</h2>
            <ul>
                <li className='my-2' >> About Us</li>
                <li className='my-2'>> Terms Of Privacy</li>
                <li className='my-2'>> Help Center</li>
            </ul>
        </div>
        <div className='mx-6'>
            <h2 className='text-lg'>Contact</h2>
            <ul>
                <li className='flex my-2 items-center'>
                    {/* <img className="h-8 w-4 mx-1" src={require('../assets/Address.png')} alt="" /> */}
                    <p>Address-Lorem Ipsum</p>
                </li>
                <li className='flex my-2 items-center'>
                    {/* <img className="h-4 w-4 mx-1" src={require('../assets/Mail.png')} alt="" /> */}
                    <p>Address-lorem@gmail.com</p>
                </li>
                <li className='flex my-2 items-center'>
                    {/* <img className="h-4 w-4 mx-1" src={require('../assets/Phone.png')} alt="" /> */}
                    <p>978210980</p>
                </li>
            </ul>
        </div>
    </div>
</footer>
  )
}
