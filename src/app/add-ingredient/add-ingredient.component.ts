import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../ingredient';
import { IngredientService } from '../ingredient.service'
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.css']
})
export class AddIngredientComponent implements OnInit {

  ingredients = [] as Ingredient[];

  activeIngredient : Ingredient = new Ingredient();

  updating : boolean = false;

  editing : boolean = false;

  selectedIngredient : Ingredient = new Ingredient();

  ingredientForm = this.formBuilder.group({
    ingredientId : [0, Validators.required],
    ingredientName : ['', Validators.required],
    ingredientQuantity : [0],
    ingredientUnit : ["Oz"]
  })

  constructor(private ingredientService :IngredientService,
    private formBuilder : FormBuilder) { 
    ingredientService.getIngredients().subscribe(data => {
    this.ingredients = (data as any).object;
    this.selectedIngredient = this.ingredients[0];
    this.ingredientSelected();
    })
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {

  }

  addIngredient(){
    this.activeIngredient = new Ingredient();
    this.ingredientForm.reset();
    this.editing = false;
    this.updating = true;
  }

  editIngredient(){
    this.ingredientForm.controls['ingredientId'].setValue(this.activeIngredient.id);
    this.ingredientForm.controls['ingredientName'].setValue(this.activeIngredient.name);
    this.ingredientForm.controls['ingredientQuantity'].setValue(this.activeIngredient.quantity);
    this.ingredientForm.controls['ingredientUnit'].setValue(this.activeIngredient.unit);
    this.editing = true;
    this.updating = true;
  }

  stopProp(event : any){
    event.stopPropagation();
  }

  ingredientSelected(){
    this.activeIngredient = this.selectedIngredient;
  } 

  submitIngredient(){
    if(this.ingredientForm.valid)
    this.activeIngredient.name = this.ingredientForm.value.ingredientName!;
    this.activeIngredient.quantity = this.ingredientForm.value.ingredientQuantity!;
    this.activeIngredient.unit = this.ingredientForm.value.ingredientUnit!;
    if(this.editing){
      this.ingredientService.updateIngredient(this.activeIngredient).subscribe();
    }
    else {
      this.ingredientService.addToIngredients(this.activeIngredient).subscribe();
    }
    this.ingredientForm.reset();
    this.activeIngredient = new Ingredient();
    this.updating = false;
  }

}
