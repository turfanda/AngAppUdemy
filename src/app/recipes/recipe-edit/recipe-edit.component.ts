import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id:number;
  editMode=false;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((a:Params)=> {
      this.id = +a['id'];
      this.editMode = a['id'] != null;
    });
  }

}
