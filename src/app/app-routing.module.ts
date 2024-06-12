import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './component/register/register.component';
import { ValidateComponent } from './component/validate/validate.component';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';
import { OtraPaginaComponent } from './otra-pagina/otra-pagina.component';

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'validate', component: ValidateComponent},
  {path: 'users', component: ListarUsuariosComponent},
  {path: '', redirectTo: '/register', pathMatch: 'full'},
  
  { path: 'listar-usuarios', component: ListarUsuariosComponent },
  { path: 'otra-pagina', component: OtraPaginaComponent } // Ruta para la nueva página de reportes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
