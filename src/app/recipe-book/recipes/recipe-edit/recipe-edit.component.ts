import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;

  recipeForm: FormGroup;
  recipe: Recipe;
  ingredientArray = new FormArray([]);

  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((a: Params) => {
      this.id = +a['id'];
      this.editMode = a['id'] != null;
    });
    if (this.editMode) {
      this.recipe = this.recipeService.getRecipeById(this.id);
      if (this.recipe['ingredients']) {
        for (const ing of this.recipe.ingredients) {
          this.ingredientArray.push(new FormGroup({
            'name': new FormControl(ing.name, Validators.required),
            'amount': new FormControl(ing.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
          }));
        }
      }
    } else {
      this.recipe = new Recipe(Math.floor(Math.random() * 1000), '', '', '', []);
    }
    this.createForm();
  }

  createForm() {
    this.recipeForm = new FormGroup({
      'name': new FormControl(this.recipe.name, Validators.required),
      'imagePath': new FormControl(this.recipe.imagePath, Validators.required),
      'description': new FormControl(this.recipe.description, Validators.required),
      'ingredients': this.ingredientArray
    });
  }

  onSubmit() {
    this.recipe.name = this.recipeForm.value['name'];
    this.recipe.description = this.recipeForm.value['description'];
    this.recipe.imagePath = this.recipeForm.value['imagePath'];
    this.recipe.ingredients = this.recipeForm.value['ingredients'];
    if (this.editMode) {
      this.recipeService.updateRecipeById(this.recipe.id, this.recipe);
    } else {
      this.recipeService.addRecipe(this.recipe);
    }
    this.onCancel();
  }

  getControls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
      'name': new FormControl(null, Validators.required),
      'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
    }));
  }
  onDeleteIngredient(i: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(i);
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }


}
