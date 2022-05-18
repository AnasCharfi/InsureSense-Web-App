import { Component, OnInit } from '@angular/core';
import {blogcard,blogcards} from './blog-cards-data';
import { datamining,dataminingcards } from './datamining-cards-data';

@Component({
  selector: 'app-blog-cards',
  templateUrl: './blog-cards.component.html'
})
export class BlogCardsComponent implements OnInit {

  blogcards:blogcard[];
  dataminingcards:datamining[];

  constructor() { 

    this.blogcards=blogcards;
    this.dataminingcards=dataminingcards;
    console.log(this.dataminingcards);
  }

  ngOnInit(): void {
  }

}
