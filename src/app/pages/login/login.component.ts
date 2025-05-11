import { Component} from '@angular/core';
import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginFormComponent, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

}
