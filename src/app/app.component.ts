import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 2 Template Form-Including Validator and Custom Validation';
  isDig:boolean = false;

  OnSubmit(value:any){
    console.log(value);
  }

  OnClick(templateVar:any){
    console.log(templateVar);
  }

  DigTemplateVariable(){    
    this.isDig = !this.isDig;
  }
}
