import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { SimplybookService } from '../../core/services/simplybook.service';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { simplybookConfig } from '../../../environments/environment.prod';


@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [NgOptimizedImage, FormsModule, InputTextModule, FloatLabelModule, ButtonModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
  
})
export class LoginPageComponent {
  constructor(
    private http: HttpClient,
    private simplybookService: SimplybookService
  ) {}


  value: string | undefined;



  onSubmit() {
    this.simplybookService.login('eric.gomes0105@gmail.com', '48x2qgjB').subscribe((res) => {
      console.log(res)
    })
    this.simplybookService.getClient().subscribe((res) => {
      console.log(res)
    })
  }
}
