import { Component } from '@angular/core';
import { Properties } from './formProperties';
import { Router }  from '@angular/router'; 

@Component({
  selector: 'product-form',
  templateUrl: './File4.component.html',
  styleUrls: ['./app.component.css']
})
export class AppFile4 {
    obj = new Properties('','');
    items = [ {
      "name" : "Angular",
      "price" : "599"
   },

   {
    "name" : "JAVA",
    "price" : "899",
   }
  ];
  
  onSubmit(): void {
    if(this.obj.name && this.obj.address && this.obj.phone)
    {
      alert(this.obj.name+" Your order is successfully placed!");
      this._router.navigate(['/File 5']);
    }
    else
    alert("Input Required");
  }

  constructor(private _router: Router){} 


}