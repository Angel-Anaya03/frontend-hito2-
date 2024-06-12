import { Component } from '@angular/core';
import { UsuarioService } from '../../service/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: any={};

  constructor(private usuarioService: UsuarioService){}

  register(): void{
    this.usuarioService.register(this.user).subscribe(
      response => {
        console.log('Usuario registrado', response);
      },
      error => {
        console.error('Error al registrar el usuario', error);
      }
    );
  }
}
