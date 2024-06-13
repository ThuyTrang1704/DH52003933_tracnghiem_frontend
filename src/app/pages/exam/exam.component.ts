import { Component } from '@angular/core';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent {
  showCreateExamForm: boolean = false;

  toggleCreateExamForm() {
    this.showCreateExamForm = !this.showCreateExamForm;
  }
}
