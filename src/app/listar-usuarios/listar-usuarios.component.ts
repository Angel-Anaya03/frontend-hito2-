import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent  implements OnInit{
  users : any = [];

  constructor(private usuarioService: UsuarioService){}

  ngOnInit(): void {
    this.usuarioService.getAllUsers().subscribe(
      response => {
        this.users = response;
      },
      error => {
        console.error('Error al obtener los usuarios', error);
      }
    );
  }
}
