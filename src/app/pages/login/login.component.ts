import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

const apiUrl = 'http://localhost:9002/api/auth/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private httpClient: HttpClient) {}

  data: any[] = [];
  remember: boolean = false;
  user = {
    email: '',
    password: ''
  };

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.httpClient.get(apiUrl).subscribe((data: any) => {
      console.log(data);
      this.data = data;
    });
  }

  onSubmit() {
    const loginData = {
      email: this.user.email,
      password: this.user.password
    };

    this.httpClient.post(apiUrl, loginData).subscribe(
      (response: any) => {
        console.log(response);
        if (response.message === "true") {
          // Display success message
          alert("Welcome");
          localStorage.setItem("isLoggedIn", "true");
          localStorage.setItem("response", response.role);
          localStorage.setItem("email", response.email);
          if (response.role == '1') {
            this.router.navigate(['']).then(() => {
              window.location.reload();
            });
          } else if (response.role == "2") {
            this.router.navigate(['/home']).then(() => {
              window.location.reload();
            });
          }
        } else {
          // Handle unsuccessful login
          console.error('Login error:', response);
        }
      },
      (error: any) => {
        // Handle error
        alert('Incorrect username or password');
        console.error('Incorrect username or password', error);
      }
    );
  }
}
