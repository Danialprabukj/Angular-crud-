import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesRoutingModule } from '../Employee/employees-routing.module';
import { EmployeeListComponent } from '../Employee/employee-list/employee-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [EmployeeListComponent],
})
export class EmployeesModule {}
