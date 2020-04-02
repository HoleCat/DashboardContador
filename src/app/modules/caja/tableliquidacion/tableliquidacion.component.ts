import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TableliquidacionDataSource, TableliquidacionItem } from './tableliquidacion-datasource';
import { CajaComponent } from '../caja.component';

const EXAMPLE_DATA: any[] = [
  {
    id: 33,
    idliquidacion: 38,
    ruc: 7777777777,
    tipodocumento: '1',
    numerodocumento: 77777777,
    fecha: '2020-11-02',
    moneda: 1,
    concepto: 'ninguno',
    contabilidad: 213123,
    centrocosto: 1,
    monto: 2000,
    igv: 1,
    created_at: '2020-04-01 21:53:59',
    updated_at: '2020-04-01 21:53:59',
  }
];

@Component({
  selector: 'app-tableliquidacion',
  templateUrl: './tableliquidacion.component.html',
  styleUrls: ['./tableliquidacion.component.css'],
  providers: [CajaComponent]
})

export class TableliquidacionComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<TableliquidacionItem>;
  dataSource: TableliquidacionDataSource;

  public data: any = EXAMPLE_DATA;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [
    'id',
    'idliquidacion',
    'ruc',
    'tipodocumento',
    'numerodocumento',
    'fecha',
    'moneda',
    'concepto',
    'contabilidad',
    'centrocosto',
    'monto',
    'igv'
    ];

  ngOnInit() {
    this.dataSource = new TableliquidacionDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
