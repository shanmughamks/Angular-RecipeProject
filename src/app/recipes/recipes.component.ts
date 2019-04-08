import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers:[RecipeService]
})
export class RecipesComponent implements OnInit {
  // Instead of Event emitter and end handler, we use "Subject" Observable. No need of service
  // selectedRecipe: Recipe;
  // constructor(private recipeService: RecipeService) { }

  constructor() {  }

  ngOnInit() {
    // Instead of Event emitter and end handler, we use "Subject" Observable.
    // this.recipeService.recipeSelected
    // .subscribe(
    //   (recipe: Recipe) => { this.selectedRecipe = recipe }
    // );
  }

  // onRecipeSelected(recipe: Recipe) {
  //   this.selectedRecipe = recipe;
  // }

}
