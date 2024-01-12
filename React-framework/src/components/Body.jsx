

function Body() {
    return (
      <div>
          <div className='flex flex-col my-10 ml-10'>
          <h1 className='text-6xl'>Welcome 😃</h1>
          <p className='text-3xl py-5'>Become a thriving Software Engineer!</p>
          <button className='bg-red-600 py-2 text-white text-xl rounded-md w-40'>Learn More</button>
        </div>
  
        <div className='bg-red-100 border-2 border-red-500 py-5 w-11/12 ml-10 px-3 text-red-500 rounded-md'>
          <p> <span className='text-red-700 font-bold'>Alert!</span> We have a new course!</p>
        </div>
  
        <div className='flex ml-10 mt-10'>
          <div className='flex gap-10 shadow-lg w-70 py-20 px-5 border-2 border-gray-200'>
            <img className='h-20' src="https://kalvium.community/images/sidebar-3d-logo.svg" alt="" />
            <div>
              <h1 className='text-3xl font-semibold'>Kalvium Store</h1>
              <p className='text-gray-600 pt-2'>You have a new course!</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Body