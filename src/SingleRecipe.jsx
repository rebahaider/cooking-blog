import React from 'react';

const SingleRecipe = ({ recipe,handleAddRecipe }) => {
    //console.log(handleAddRecipe);
    return (
        <div className=' bg-gray-100 *:m-6 p-6 rounded-xl shadow-lg space-y-2 m-6'>
            <img className='w-[300px] rounded-2xl' src={recipe.recipe_image} alt="" />
            <h1 className='text-3xl font-bold'>{recipe.recipe_name}</h1>
            <p>{recipe.short_description}</p>
            <h3 className='font-bold'>Ingredients:6</h3>
            <div className='flex gap-10'>
                <p>{recipe.preparing_time}</p>
                <p>{recipe.calories}</p>
            </div>
            <button onClick={() => handleAddRecipe(recipe)} className='bg-[#0BE58A] p-4 rounded-full font-bold'>Want To Cook</button>
        </div>
    );
};

export default SingleRecipe;