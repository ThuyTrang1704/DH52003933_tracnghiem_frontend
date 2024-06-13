import { Component } from '@angular/core';

@Component({
  selector: 'app-create-exam',
  templateUrl: './create-exam.component.html',
  styleUrls: ['./create-exam.component.css']
})
export class CreateExamComponent {
  showForm: boolean = false;

  toggleForm() {
    this.showForm = !this.showForm;
  }
}
