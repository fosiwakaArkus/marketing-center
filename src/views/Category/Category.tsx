import React from 'react';
import { useParams } from 'react-router-dom';
import Cards from '../../components/cards/cards';
import CategoryCards from '../../components/category/category';

function Category() {
    const props = useParams();
    return (
        <div className="App">
            <CategoryCards />
            <h1>Category</h1>
            <h2>SubCategory: {props.id}</h2>
        </div>
    );
}

export default Category;