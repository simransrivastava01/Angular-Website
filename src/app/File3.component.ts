import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './File3.component.html',
  styleUrls: ['./app.component.css']
})
export class AppFile3 {
    list = [ {
        "name" : "Ana",
        "course" : "Angular",
        "imgsrc" : "./assets/a1.jpg"
     },
  
     {
      "name" : "Jay",
      "course" : "Node.js",
      "imgsrc" : "./assets/a2.jpg"
     },
  
     {
      "name" : "Anu",
      "course" : "ReactJS",
      "imgsrc" : "./assets/a3.jpg"
     }
    ];
}