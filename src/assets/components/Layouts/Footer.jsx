import React from 'react'

function Footer() {
  return (
    <>
    <footer className="w-full bg-gray-800 text-white py-5">
        <div className="max-w-screen-2xl w-full flex justify-between items-center px-5 mx-auto">
            <div className="text-xl font-semibold">
            &copy; 2021 Carlos Banks Academy
            </div>
            <div className="text-xl font-semibold">
            <a href="/">Home</a>
            <a href="/about" className="ml-5">About</a>
            <a href="/contact" className="ml-5">Contact</a>
            </div>
        </div>
    </footer>
    
    </>
  )
}

export default Footer