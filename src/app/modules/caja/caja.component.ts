import { Component, OnInit } from '@angular/core';
import { Detalleliquidacion } from 'src/app/clases/liquidacion/detalleliquidacion';
import { LiquidacionComponent } from './liquidacion/liquidacion.component';
import { RegistroService } from 'src/app/services/registro.service';
import { MiObservableService } from 'src/app/services/misObservables.service';
import { TableliquidacionComponent } from './tableliquidacion/tableliquidacion.component';

@Component({
  selector: 'app-caja',
  templateUrl: './caja.component.html',
  styleUrls: ['./caja.component.sass'],
  providers: [LiquidacionComponent]
})
export class CajaComponent implements OnInit {
  documentos = [{ descripcion: 'DNI', id: 1}, { descripcion: 'PASAPORTE', id: 2}, { descripcion: 'OTRO', id: 3}];
  monedas = [{ descripcion: 'NUEVO SOL', id: 1}, { descripcion: 'DOLAR', id: 2}, { descripcion: 'EURO', id: 3}];
  centros = [{ descripcion: 'CENTRO DERECHO', id: 1}, { descripcion: 'CENTRO MEDIO', id: 2}, { descripcion: 'CENTRO IZQUIERDO', id: 3}];
  contabilidades = [{ descripcion: 'CONTA 3', id: 21345}, { descripcion: 'CONTA 2', id: 12312}, { descripcion: 'CONTA 1', id: 123123}];
  constructor(
    private li: LiquidacionComponent,
    private register: RegistroService,
    private miObservable: MiObservableService
  ) { }

  public idliquidacion;
  public listadetalle;

  public  dlmodel;
  visibility: boolean;
  getstatus() {
    return this.visibility = this.li.lcreated;
  }

  getDetalleLiquidacion(x) {
    this.register.selectLiquidacionDetalle(this.dlmodel).subscribe(
      data => this.listDetalleLiquidacion(data),
      error => console.log('Error ! ' + error)
    );
  }

  onSubmit() {
    this.register.insertLiquidacionDetalle(this.dlmodel).subscribe(
      data => this.getDetalleLiquidacion(data),
      error => console.log('Error ! ' + error)
    );
  }

  listDetalleLiquidacion(data) {
    this.listadetalle = data;
  }

  ngOnInit(): void {

    try {
      this.miObservable.idLiquidacion.subscribe(resp => {


        this.idliquidacion = resp;
        // tslint:disable-next-line: max-line-length
        this.dlmodel = new Detalleliquidacion(this.idliquidacion, 7777777777, 1, 77777777, '2020-11-02', 1, 'ninguno', 213123, 1, 2000, true);

      } );

    } catch (error) {
      this.idliquidacion = 0;
    }


  }

}
