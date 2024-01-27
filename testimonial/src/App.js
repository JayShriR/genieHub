import Testimonial from './components/Testimonial';
import reviews from "./data"
function App() {
  return (
    <div className='flex flex-col h-[100vh] w-[100vw] justify-center items-center bg-gray-200'>
      <div className='text-center'>
          <h1 className='text-4xl font-bold '>
            Our Testimonial
          </h1>
      </div>
      <div className='bg-violet-400 h-1 w-1/5 mt-1'></div>
      <Testimonial reviews={reviews}/>
    </div>
  );
}

export default App;
