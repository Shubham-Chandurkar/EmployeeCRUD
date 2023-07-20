import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Employee} from "../../models/employee.model";

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css']
})
export class EmployeeCardComponent {
@Input() employee:Employee;
@Output() onRemoveEmployee = new EventEmitter<number>();
@Output() onEditEmpolyee = new EventEmitter<number>();
constructor() {
  this.employee={
    firstname:'',
    lastname:'',
    birthdate:'',
    gender:'',
    education:'',
    company:'',
    jobExperience:0,
    salary:0,
    profile:'',
  };
}

ngOnInit(): void{

}

deleteEmployeeClicked(){
  this.onRemoveEmployee.emit(this.employee.id);
}

  editEmployeeClicked(){
    this.onEditEmpolyee.emit(this.employee.id);
  }
  // protected readonly Employee = Employee;
}
