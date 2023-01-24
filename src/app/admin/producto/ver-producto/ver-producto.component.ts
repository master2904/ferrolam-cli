import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Formulario } from '../formulario';

@Component({
  selector: 'app-ver-producto',
  templateUrl: './ver-producto.component.html',
  styleUrls: ['./ver-producto.component.scss']
})
export class VerProductoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<VerProductoComponent>,@ Inject(MAT_DIALOG_DATA) public form: Formulario) {
      
    }
  public fmaquinas=[];
  ngOnInit(): void {
    const x=this.form.columnas;
    const n=this.form.maquinas/x;
    this.fmaquinas=[];
    let c=1;
    for (let i = 0; i < n; i++) {
      const fila=[];
      for (let j = 0; j < x; j++) {
        if(c<=this.form.maquinas)
        fila.push(c++);
      }
      this.fmaquinas.push(fila);
  }
  }
  cancelar() {
    this.dialogRef.close();
  }
  
}
