import { Recipe } from './recipe.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes : Recipe[] = [
    new Recipe('Shopska Salad','Tomatoes, cucumber, and feta','https://www.wandercooks.com/wp-content/uploads/2016/05/bulgarian-shopska-salad-4.jpg'),
    new Recipe('Italian Roasted Cauliflower Soup','mashed potatoes,fudgy brownies,Cauliflower','https://toriavey.com/images/2014/03/MG_4998.jpg')
  ];

  getRecipes(){
    return this.recipes.slice();
  }
}
