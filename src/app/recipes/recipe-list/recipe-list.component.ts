import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe ('A Test Recipe','Recipe description...', 'https://images.media-allrecipes.com/images/56589.png'),
    new Recipe ('Another Test Recipe','Recipe description...', 'https://planningwithkids.com/wp-content/2014/05/homemade-chicken-casserole-for-baby.jpg')
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {    
    this.recipeWasSelected.emit(recipe);
  }

}
