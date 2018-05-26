import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PEOPLE } from '../mock-people';
import { PersonService } from '../person.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  person: Person = {
    id: 1,
    name: 'Windstorm'
  };
  people: Observable<Person[]>;

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.getPeople();
  }

  selectedPerson: Person;

  onSelect(person: Person): void {
    this.selectedPerson = person;
  }

  getPeople(): void {
    this.people = this.personService.getPeople();
  }
}
