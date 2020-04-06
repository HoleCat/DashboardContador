import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Liquidacion } from '../clases/liquidacion/liquidacion';
import { Detalleliquidacion } from '../clases/liquidacion/detalleliquidacion';
import { Subject, BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  url = 'http://localhost:8000/';

  public idLiquidacion: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public detalle = new Subject<string>();
  datellecontent$ = this.detalle.asObservable();

  constructor(private html: HttpClient) { }

  sendliquidacion(message: number) {
    this.idLiquidacion.next(message);
  }

  senddetalle(message: string) {
    this.detalle.next(message);
    console.log(message);
  }

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
