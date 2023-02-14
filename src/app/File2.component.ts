import { Component } from '@angular/core';
import { Router }  from '@angular/router'; 

@Component({
  selector: 'app-root',
  templateUrl: './File2.component.html',
  styleUrls: ['./app.component.css']
})
export class AppFile2 {
  array1 = ['Angular','Node.js', 'ReactJs'];
  array2 = ['Dot Net','PHP', 'JAVA'];
  array3 = ['JavaScript','Bootstrap', 'Jquery'];
  
  constructor(private _router: Router){} 
  
  onBack(): void { 
    this._router.navigate(['/File 4']); 
 }

}
