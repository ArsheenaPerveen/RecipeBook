import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';
import NotFound from '../components/pages/NotFound';
import AddRecipe from '../components/pages/AddRecipe';
import HomePage from '../components/pages/HomePage';

function AppRouter() {
    const [list, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetchRecipes();
    }, []);
    const fetchRecipes = () => {
        axios.get('http://localhost:4000').then((res) => {
            setData(res.data.recipes);
            setLoading(false);
        });
    }
    return (
        <div>
            <Router history={history}>
                <Switch>
                    <Route path="/" exact>
                        <HomePage list={list} loadData={loading} />
                    </Route>
                    <Route path="/addRecipe">
                        <AddRecipe handleData={fetchRecipes} />
                    </Route>
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </div>
    )
}

export default AppRouter;
