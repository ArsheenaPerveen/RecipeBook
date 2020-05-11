import React, { useEffect, useState } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import CssBaseline from '@material-ui/core/CssBaseline';
import history from './components/history';
import Navbar from './components/Navbar';
import RecipeList from './components/RecipeList';
import NotFound from './components/NotFound';
import AddRecipe from './components/AddRecipe';
import FilterRecipes from './components/FilterRecipes';

function App() {
  const [recipeList, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [updatedRecipesList, setUpdatedRecipesList] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:4000').then((res) => {
      setData(res.data.recipes);
      setLoading(false);
    });
  }, []);
  useEffect(() => {
    setUpdatedRecipesList(
      recipeList.filter((item) => {
        return (
          item.title.toLowerCase().includes(search.toLowerCase()) ||
          item.userName.toLowerCase().includes(search.toLowerCase())
        );
      })
    );
  }, [search, recipeList]);
  const handleFilteredRecipes = (recipes) => {
    setUpdatedRecipesList(recipes);
  };
  const handleClearFilter = () => {
    setUpdatedRecipesList(recipeList);
  };
  const handleSearch = (inputValue) => {
    setSearch(inputValue);
  };
  return (
    <div>
      <CssBaseline />
      <Router history={history}>
        <Navbar searchRecipes={handleSearch} />
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <>
                <FilterRecipes
                  list={recipeList}
                  filterData={handleFilteredRecipes}
                  clearData={handleClearFilter}
                />
                <RecipeList recipeList={updatedRecipesList} loadData={loading} />
              </>
            )}
          />
          <Route path="/addRecipe" component={AddRecipe} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
