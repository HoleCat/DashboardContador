import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { AppComponent } from 'src/app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router, RouterModule } from '@angular/router';
import { MuestrasComponent } from 'src/app/modules/muestras/muestras.component';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CajaComponent } from 'src/app/modules/caja/caja.component';
import { LiquidacionComponent } from 'src/app/modules/caja/liquidacion/liquidacion.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { TableliquidacionComponent } from 'src/app/modules/caja/tableliquidacion/tableliquidacion.component';




@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    MuestrasComponent,
    CajaComponent,
    LiquidacionComponent,
    TableliquidacionComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  bootstrap: [AppComponent]
})
export class DefaultModule { }
