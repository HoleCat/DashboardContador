import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Liquidacion } from '../clases/liquidacion/liquidacion';
import { Detalleliquidacion } from '../clases/liquidacion/detalleliquidacion';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  url = 'http://localhost:8000/';
  constructor(private html: HttpClient) { }

  insertLiquidacion(l: Liquidacion) {
    return this.html.post<any>(this.url + 'liquidacionstore', l);
  }

  insertLiquidacionDetalle(dl: Detalleliquidacion) {
    return this.html.post<any>(this.url + 'liquidaciondetallestore', dl);
  }

  selectLiquidacionDetalle(dl: Detalleliquidacion) {
    return this.html.post<any>(this.url + 'liquidaciondetalleindex', dl);
  }

}
