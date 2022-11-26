import React from 'react';
import Category from './Category';

const Categories = () => {

    const categories=[
        "Android Phones",
        "Landline Phones",
        "Button Phones",
    ];

    return (
        <div>
            <h1 className='font-bold text-center mt-12 text-3xl'>Categories</h1>
            <p className='text-center mb-6'>Click in category to see categoriewise data</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                categories.map((category, index)=><Category
                    key={index}
                    index={index+1}
                    category={category}
                ></Category>)
            }
        </div>
        </div>
    );
};

export default Categories;