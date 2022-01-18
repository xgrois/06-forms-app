import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Person {
  name: string;
  favorites: Favorite[]
}

interface Favorite {
  id: number;
  title: string;
}

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styles: [
  ]
})
export class DynamicsComponent implements OnInit {

  @ViewChild('myForm') myForm!: NgForm;

  person: Person = {
    name: 'Peter',
    favorites: [
      { id: 1, title: 'Gears of Wars'},
      { id: 2, title: 'CSGO'},
    ]
  }

  newTitle: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  submit() {

  }

  nameIsEmpty() {
    return ( this.myForm?.value.name === '' && this.myForm?.touched );
  }

  add() {
    const newFavorite: Favorite = {
      id: this.person.favorites.length + 1,
      title: this.newTitle
    };
    this.person.favorites.push( { ...newFavorite } );
    this.newTitle = '';
  }

  onKeydown( event: KeyboardEvent ) {
    if (event.key === "Enter") {
      this.add();
    } 
  }

  delete( i: number ) {
    this.person.favorites.splice(i,1);
  }

}
