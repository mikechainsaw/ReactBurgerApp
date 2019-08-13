import React, {Component} from 'react';
import Aux from '../../hoc/AuxComp';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad :  0.5,
    bacon :  0.4,
    cheese :  1.3,
    meat :  0.7
}

class BurgerBuilder extends Component{
    state = {
        ingredients:{
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat:0
        },
        totalPrice: 5
    }

    addIngredientHandler=(type)=>{
        const oldCount = this.state.ingredients[type];
        const updatedIngredients={...this.state.ingredients};
        updatedIngredients[type]=oldCount+1;
        const priceChange= this.state.totalPrice+INGREDIENT_PRICES[type];
        this.setState({ingredients:updatedIngredients,totalPrice:priceChange});
    }

    removeIngredientHandler=(type)=>{
        const oldCount = this.state.ingredients[type];
        const updatedIngredients={...this.state.ingredients};
        if(oldCount-1>=0){
            updatedIngredients[type]=oldCount-1;
            const priceChange= this.state.totalPrice-INGREDIENT_PRICES[type];
            this.setState({ingredients:updatedIngredients,totalPrice:priceChange});
        }
    }

    render(){
        return (
            <Aux>
                <div>{this.state.totalPrice}</div>
                <Burger ingredients={this.state.ingredients} gono={0} />
                <BuildControls 
                ingredientAdded={this.addIngredientHandler}  
                ingredientRemoved={this.removeIngredientHandler} />
            </Aux>
        );
    }
}

export default BurgerBuilder;