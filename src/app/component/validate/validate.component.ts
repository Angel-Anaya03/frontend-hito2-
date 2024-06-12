import { Component } from '@angular/core';
import { UsuarioService } from '../../service/usuario.service';

@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.css']
})
export class ValidateComponent {
  user: any = {};
  constructor(private usuarioService: UsuarioService) { }
  validate (): void{
    this.usuarioService.validateUser(this.user).subscribe(
      response => {
        console.log('Usuario validado', response);
      },
      error => {
        console.error('Error al validar el usuario', error);
      }
    );
  }
}
