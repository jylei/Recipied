import React from 'react';
import { connect } from 'react-redux';
import { searchRecipe } from './reducer';
import DashBoard from './DashBoard';
import { API_BASE_URL } from './config';
import './SearchRecipePage.css'
//only 4 on search, with next button
//maybe a background for the card itself?
//recipeName, ingredient, calories, steps, file
class SearchRecipePage extends React.Component {
    //create reduicer to set the idset state to false
    componentWillMount(props) {
        console.log(this.props.match.params.id);
        this.props.dispatch(searchRecipe(this.props.match.params.id));
    }
    render() {
        console.log(this.props.recipeData);
        let recipes = undefined;
        if (this.props.recipeData) {
            recipes = this.props.recipeData.map((recipe, i) => {
                console.log(recipe.ingredients);
                let test = `${API_BASE_URL}/file/${recipe.image}`;
                let image = <img className='imagefile col-xs-6'src={test} />
                // let arr = [];
                let ingredients = recipe.ingredients.map(ingredient => {
                    return <div className='col-xs-6'>{ingredient}</div>
                    // arr.push(ingredient);
                    // for (var i = 0; i < arr.length; i++) {
                    //     console.log(arr[i].split('-'));
                    //     return arr[i].replace(/-/gi, /\n/);
                    // }
                })
                let steps = recipe.steps.map(step => {
                    return <div className='col-xs-12'>{step}</div>
                })
                return (
                    <div className='col-xs-12' key={i}>
                        <section className='upper-container col-xs-12'>
                            <h3>this would hold name and picture</h3>
                            <h3 className='col-xs-6'>{recipe.dishName}</h3>
                            {image}
                            <div className='col-xs-12'>
                                <h3>calories: {recipe.calories}</h3>
                            </div>
                        </section>
                        <section className='middle-container col-xs-12'>
                            <h3>ingredients</h3>
                            <div className='col-xs-12 ingredient-list'>{ingredients}</div>
                        </section>
                        <div className='lower-container col-xs-12'>
                            <h3>steps</h3>
                            <div className='col-xs-12 step-list'>{steps}</div>
                        </div>
                    </div>
                )
            })
        }
        else {
            recipes = <h1> nothing here</h1>
        }
        return (
            <div>
                <DashBoard />
                {recipes}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    recipeData: state.recipeData
})


export default connect(mapStateToProps)(SearchRecipePage);