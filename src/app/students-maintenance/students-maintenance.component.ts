import { Component } from '@angular/core';
import { Student } from '../Models/Student';

@Component({
  selector: 'app-students-maintenance',
  templateUrl: './students-maintenance.component.html',
  styleUrls: ['./students-maintenance.component.css']
})
export class StudentsMaintenanceComponent {
    studentRecord: Student = {
      studNo: 0, 
      studFirstName: '',
      studLastName: '',
      studProgram: '',
      studYear: 0
    };

    printingAllowed: boolean = false;

    studentCollection: Array<Student> = [];

    addStudentRecord(){
      if(this.studentRecord.studNo > 0){
          this.studentCollection.push({...this.studentRecord}); // create a copy of the studentRecord
          this.initStudentRecord();
      }
       console.log(this.studentCollection);
    }

    initStudentRecord(){
      this.studentRecord = {
        studNo: 0, 
        studFirstName: '',
        studLastName: '',
        studProgram: '',
        studYear: 0
      };      
    }

    listStudents(){
       if(this.studentCollection.length > 0){
            this.printingAllowed = true;
       }
    }

updateField(field: keyof Student, inputElement: HTMLInputElement) {
  this.studentRecord[field] = inputElement.value;
}
}