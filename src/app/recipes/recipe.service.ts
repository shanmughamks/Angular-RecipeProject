import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    //Instead of Event emitter and handler, we use "Subject" Observable.
    // recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe ('Tasty Schintzel',
        'This is really yummy Schintzel', 
        'https://images.media-allrecipes.com/images/56589.png', 
        [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)
        ]),
        new Recipe ('Big Fat Burger',
        'Really big....!!', 
        'https://planningwithkids.com/wp-content/2014/05/homemade-chicken-casserole-for-baby.jpg', 
        [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 1)
        ]),
      ];

    constructor(private slService: ShoppingListService) {        
    }
    
    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

    getRecipe(index: number){
        return this.recipes[index];
    }
}