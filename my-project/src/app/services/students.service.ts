import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor() { }

  getStudents(){
    return [
        {nome: "Maria"},
        {nome: "Alana"},
        {nome: "Rosa"}
    ]
  }
}
