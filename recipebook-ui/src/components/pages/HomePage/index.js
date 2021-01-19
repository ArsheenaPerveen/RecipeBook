import React, { useState, useEffect } from 'react';
import Navbar from '../../organisms/Navbar';
import FilterRecipes from '../../organisms/FilterRecipes';
import RecipeList from '../../organisms/RecipeList';

const HomePage = ({ list, loadData }) => {
    const [search, setSearch] = useState('');
    const [updatedRecipesList, setUpdatedRecipesList] = useState([]);
    useEffect(() => {
        setUpdatedRecipesList(
            list.filter((item) => {
                return (
                    item.title.toLowerCase().includes(search.toLowerCase()) ||
                    item.userName.toLowerCase().includes(search.toLowerCase())
                );
            })
        );
    }, [search, list]);
    const handleFilteredRecipes = (recipes) => {
        setUpdatedRecipesList(recipes);
    };
    const handleClearFilter = () => {
        setUpdatedRecipesList(list);
    };
    const handleSearch = (inputValue) => {
        setSearch(inputValue);
    };
    return (
        <div>
            <Navbar searchRecipes={handleSearch} />
            <FilterRecipes
                list={list}
                filterData={handleFilteredRecipes}
                clearData={handleClearFilter}
            />
            <RecipeList recipeList={updatedRecipesList} loadData={loadData} />
        </div>
    )
}

export default HomePage;
