import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './component/register/register.component';
import { ValidateComponent } from './component/validate/validate.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { OtraPaginaComponent } from './otra-pagina/otra-pagina.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ValidateComponent,
    ListarUsuariosComponent,
    OtraPaginaComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    

    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}