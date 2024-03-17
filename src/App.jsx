import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'
import SingleRecipe from './SingleRecipe';
import profile from '../src/assets/images/Profile-icon.png'

function App() {

  const [recipes, setRecipes] = useState([]);
  const [cook, setCook] = useState([]);

  useEffect(() => {
    fetch("./fakeData.json")
      .then(res => res.json())
      .then(data => {
        setRecipes(data);
      })
  }, []);

  const handleAddRecipe = (r) => {
    const isExist = cook.find((item) => item.recipe_id == r.recipe_id)
    if (!isExist) {
      setCook([...cook, r]);
    }
    else {
      alert('Already added');
    }
  };

  const handlePreparing = (id) => {
    const newCook = cook.filter((item) => item.recipe_id != id);
    setCook(newCook);
    console.log(newCook);
  }


  //console.log(cook);

  return (
    <>
      <div className='max-w-7xl mx-auto space-y-20 lexend'>
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
          <img src={profile} alt="" />
          </div>
        </header>
        <body>
          {/* Banner Section  */}
          <div>

          </div>
          {/* our recipe section */}
          <div className='flex justify-between gap-8'>
            <div className='grid grid-cols-2'>
              {
                recipes.map((recipe) => (<SingleRecipe handleAddRecipe={handleAddRecipe} recipe={recipe}></SingleRecipe>))
              }
            </div>
            <div className='bg-gray-100 shadow-lg rounded-xl m-6 p-10 space-y-2'>
              <h1 className='font-bold text-center'>Want To Cook : <span>0</span></h1><hr />
              <div className='flex gap-12'>
                <h3>Name</h3>
                <h3>Time</h3>
                <h3>Calories</h3>
              </div>
              <div>
                {
                  cook.map((item, index) => (
                    <div className='flex gap-12 space-y-3 bg-white p-4 m-4 rounded-xl'>
                      <p>{index + 1}</p>
                      <h3>{item.recipe_name}</h3>
                      <h3>{item.preparing_time}</h3>
                      <h3>{item.calories}</h3>
                      <button onClick={() => handlePreparing(item.recipe_id)} className='bg-[#0BE58A] px-3 rounded-full font-bold'>Preparing</button>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </body>
      </div>

    </>
  )
}

export default App
