import { Component, OnInit, OnDestroy } from '@angular/core';
import { StudentsService } from './services/students.service';
import { ProjectsService } from './services/projects.service';

import { takeWhile } from 'rxjs/operators';

@Component({
    //como é chamado no HTML (TAG)
    selector: 'my-component-component',
    templateUrl: `./my-component.component.html`,
    //styleUrls: [`./my-compoment.component.css`]
})

export class MyComponentComponent implements OnInit, OnDestroy{
    isAlive = true;
    students = [];
    projects = [];
    searchText = "";

    constructor(
        private StudentsService: StudentsService,
        private ProjectsService: ProjectsService
    ){
        this.students = this.StudentsService.getStudents();
    }

    getProjects(){
        this.ProjectsService.getProjects(this.searchText);
    }

    isVisible = true;
    myValue = "";
    myList = [1, 2, 3, 4, 5, 6];

    dados =  {
        aluno: {
            idade: 15,
            nome: "Alana"
        }        
    };
    handleclick(){
        alert("handleclick");
    }

    ngOnInit(){
        this.ProjectsService.projects
        .pipe(
            takeWhile( ()=> this.isAlive)
        )
        .subscribe(
            projects =>{
                this.projects = projects;
            }
        )
    }

    ngOnDestroy(){
        this.isAlive = false;
    }
}
