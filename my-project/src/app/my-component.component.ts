import { Component, OnInit } from '@angular/core';

@Component({
    //como é chamado no HTML (TAG)
    selector: 'my-component-component',
    templateUrl: `./my-component.component.html`,
    //styleUrls: [`./my-compoment.component.css`]
})

export class MyComponentComponent implements OnInit{
    
    isVisible = false;
    myValue = "";
    myList = [1, 2, 3, 4, 5, 6];

    dados =  {
        aluno: {
            idade: 15,
            nome: "Alana"
        }        
    };

    constructor(){}

    ngOnInit(){

    }

}
