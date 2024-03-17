import React from 'react';

import { IoTimeOutline } from "react-icons/io5";
import { FaFire } from "react-icons/fa6";

const SingleRecipe = ({ recipe,handleAddRecipe}) => {
    //console.log(handleAddRecipe);
    return (
        <div className=' bg-gray-100 m-6 p-6 rounded-xl shadow-lg space-y-2 m-6'>
            <img className='w-full rounded-2xl' src={recipe.recipe_image} alt="" />
            <h1 className='text-3xl font-bold'>{recipe.recipe_name}</h1>
            <p>{recipe.short_description}</p>
            <h3 className='font-bold'>Ingredients : {recipe.ingredients.length}</h3>
            <p>
                {
                    recipe.ingredients.map((ingredent,index)=><span key={index}><ul className='list-disc ml-8'>
                        <li>{ingredent}</li></ul></span>)
                }
            </p>
            <div className='flex gap-10'>
                <div className='flex gap-2'>
                <button><IoTimeOutline /></button>
                <p>{recipe.preparing_time}</p>
                </div>
                <div className='flex gap-2'>
                <button><FaFire /></button>
                <p>{recipe.calories}</p>
                </div>
            </div>
            <button onClick={() => handleAddRecipe(recipe)} className='bg-[#0BE58A] p-4 rounded-full font-bold'>Want To Cook</button>
            
        </div>
    );
};

export default SingleRecipe;