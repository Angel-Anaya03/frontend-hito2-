import { Component, OnInit, ViewChild } from '@angular/core';
import { ReporteService } from '../service/reporte.service';
import { Reporte } from '../model/reporte';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-otra-pagina',
  templateUrl: './otra-pagina.component.html',
  styleUrls: ['./otra-pagina.component.css']
})
export class OtraPaginaComponent implements OnInit {
  displayedColumns: string[] = ['id', 'comentario', 'fechacreacion', 'usuario'];
  
  
  dataSource = new MatTableDataSource<Reporte>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  
  mostrarTabla: boolean = false;

  constructor(private reporteService: ReporteService) { }
  ngOnInit(): void {
    this.obtenerReportes();
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  obtenerReportes(): void {
    this.reporteService.getReportes()
      .subscribe(reportes => {
        this.dataSource.data = reportes;
        this.mostrarTabla = true;
      });
  }
  
}
