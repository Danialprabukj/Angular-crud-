import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';
import { EmployeesRoutingModule } from './Employee/employees-routing.module';
import { DashboardRoutingModule } from './dashBoard/dash-board-home/dashBoard-routing.module';
import { EmployeeListComponent } from './Employee/employee-list/employee-list.component';
import { CreateEmployeeComponent } from './Employee/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './Employee/update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './Employee/employee-details/employee-details.component';

@NgModule({
  declarations: [
    AppComponent
    // EmployeeListComponent,
    // CreateEmployeeComponent,
    // UpdateEmployeeComponent,
    // EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DashboardRoutingModule,
    EmployeesRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

