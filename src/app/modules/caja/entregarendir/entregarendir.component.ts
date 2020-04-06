import { Component, OnInit } from '@angular/core';
import { RegistroService } from 'src/app/services/registro.service';
import { Detalleliquidacion } from 'src/app/clases/liquidacion/detalleliquidacion';

@Component({
  selector: 'app-entregarendir',
  templateUrl: './entregarendir.component.html',
  styleUrls: ['./entregarendir.component.sass']
})
export class EntregarendirComponent implements OnInit {

  constructor(private register: RegistroService) { }
  idliquidacion;
  dlmodel;
  hidden = 0;

  documentos = [{ descripcion: 'DNI', id: 1}, { descripcion: 'PASAPORTE', id: 2}, { descripcion: 'OTRO', id: 3}];
  monedas = [{ descripcion: 'NUEVO SOL', id: 1}, { descripcion: 'DOLAR', id: 2}, { descripcion: 'EURO', id: 3}];
  centros = [{ descripcion: 'CENTRO DERECHO', id: 1}, { descripcion: 'CENTRO MEDIO', id: 2}, { descripcion: 'CENTRO IZQUIERDO', id: 3}];
  contabilidades = [{ descripcion: 'CONTA 3', id: 21345}, { descripcion: 'CONTA 2', id: 12312}, { descripcion: 'CONTA 1', id: 123123}];

  ngOnInit(): void {
    try {
      this.register.idLiquidacion.subscribe(resp => {
        this.idliquidacion = resp;
        this.dlmodel = new Detalleliquidacion(this.idliquidacion, 0, 0, 0, '2020-11-02', 0, 'ninguno', 0, 0, 0, false);
      } );
    } catch (error) {
      this.idliquidacion = 0;
    }

    if (this.idliquidacion > 0) {
      this.hidden = 1;
      console.log(this.hidden);
    }

  }

  onSubmit() {
    this.register.insertLiquidacionDetalle(this.dlmodel).subscribe(
      data => this.register.senddetalle(data),
      error => console.log('Error ! ' + error)
    );
  }

}
