import './App.css'
import './images/Profile-icon.png'

function App() {
  

  return (
    <>
      <div className='max-w-7xl mx-auto'>
      <header className='container flex justify-evenly font-bold'>
        <div>
          <h1 className='text-4xl'>Reba's Recipe</h1>
        </div>
        <div className='mt-3'>
          <ul className='flex gap-12'>
            <li><a href="">Home</a></li>
            <li><a href="">Recipes</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Search</a></li>
          </ul>
        </div>
        <div className="form-control">
      <input type="text" placeholder="Search" className="bg-gray-100 rounded-xl mt-2 p-2 w-24 md:w-auto" />
    </div>
    <div>
      
    </div>
      </header>
      <body>
        {/* Banner Section  */}
        <div>

        </div>
        {/* our recipe section */}
        <div className='flex justify-between'>
        <div className=''>
          <h1> all recipes</h1>
        </div>
        <div className='bg-gray-100 shadow-lg'>
          <h1 className=''>Want To Cook : <span>0</span></h1>
        </div>
        </div>
      </body>
      </div>
      
    </>
  )
}

export default App
