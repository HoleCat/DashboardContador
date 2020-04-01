import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TableliquidacionDataSource, TableliquidacionItem } from './tableliquidacion-datasource';
import { CajaComponent } from '../caja.component';

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

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [
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
    'igv'];

  ngOnInit() {
    this.dataSource = new TableliquidacionDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
