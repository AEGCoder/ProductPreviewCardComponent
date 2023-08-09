import {BsFillCartCheckFill} from 'react-icons/bs'
function App() {
  return (
    <div className="w-full h-screen bg-gradient-to-r from-yellow-200 via-yellow-200 to-yellow-200 flex items-center justify-center">
      <div className="w-[50rem] h-[35rem]  flex md:flex-row flex-col items-center justify-center rounded-md">
        <div className="md:w-[50%]  w-[90%] h-full rounded-md">
          <img src="/images/parfüme.jpg" alt="product" className="h-full w-full object-cover rounded-md"/>
        </div>
        <div className="md:w-[50%] w-[90%] h-full bg-yellow-50 flex flex-col md:gap-y-0 gap-y-2 items-start justify-around p-3">
          <h1 className='md:text-xl text-lg font-bold tracking-wider pl-3'>Parfume</h1>
          <h2 className='md:text-3xl text-2xl font-bold text-black md:w-[70%] w-[90%] text-center'>
            Gabrielle Essence Eau  De Parfum
          </h2>
          <p className='md:text-base text-sm text-center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className='flex items-center justify-center w-full gap-x-5'>
            <span className='text-3xl text-green-700 font-bold'>
              $149.99
            </span>
            <span className='text-sm font-medium line-through'>
              $169.99
            </span>
          </div>
          <button className='bg-green-700 hover:bg-transparent border-4 hover:border-red-500 shadow-sm hover:text-orange-500 transition-all duration-300 w-full flex justify-center items-center text-white gap-x-3 text-xl py-1 rounded-lg'>
            <BsFillCartCheckFill/>
            <span className='flex items-center justify-center pt-4'>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
