import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LiquidacionComponent } from './liquidacion/liquidacion.component';
import { CajachicaComponent } from './cajachica/cajachica.component';
import { EntregarendirComponent } from './entregarendir/entregarendir.component';
import { CajaresumenComponent } from './cajaresumen/cajaresumen.component';
import { ParametrosComponent } from './parametros/parametros.component';
import { BrowserModule } from '@angular/platform-browser';
import { CajaComponent } from './caja.component';
import { TabladetalleComponent } from './tabladetalle/tabladetalle.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    CajaComponent,
    LiquidacionComponent,
    CajachicaComponent,
    EntregarendirComponent,
    CajaresumenComponent,
    ParametrosComponent,
    TabladetalleComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    MatSidenavModule,
    MatDividerModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class CajaModule { }
