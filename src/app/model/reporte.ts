import { Usuario } from "./usuario";
export class Reporte {
    id:number=0;
    comentario: string='';
    fechacreacion: Date=new Date(Date.now());
    usario!: Usuario
}
