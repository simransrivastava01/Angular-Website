import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

export class Properties { 
  constructor ( 
     public name: string, 
     public address: string,
     public phone?: number
  ) {  } 
}