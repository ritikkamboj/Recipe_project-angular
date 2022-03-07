import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[]=[

    new Recipe('A Test Recipe', 'This is simply a test',"https://pixabay.com/link/?ua=cd3%3Dimage%26cd7%3Den%253Arecipe%253AIND%26ec%3Dapi_ad%26ea%3Dnavigate%26el%3Dgetty%26tid%3DUA-20223345-1%26dr%3Dhttps%253A%252F%252Fpixabay.com%252F&next=https%3A%2F%2Fwww.istockphoto.com%2Fphoto%2Fraw-chicken-legs-delicious-marinated-chicken-legs-top-view-hot-grilled-chicken-leg-gm1362448929-434371641%3Futm_source%3Dpixabay%26utm_medium%3Daffiliate%26utm_campaign%3DSRP_image_sponsored%26utm_content%3Dhttp%253A%252F%252Fpixabay.com%252Fimages%252Fsearch%252Frecipe%252F%26utm_term%3Drecipe&hash=c5a8dbeddea0debe0f3b1972c35da8a2c293a0fc&=",)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
