import { NgModule } from '@angular/core';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { UsuarioComponent } from './usuario/usuario.component';
import { EquipoComponent } from './equipo/equipo.component';
import { ConcursoComponent } from './concurso/concurso.component';
import { ProblemaComponent } from './problema/problema.component';
import { HomeComponent } from './home/home.component';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule, Router } from '@angular/router';
import { AdminComponent } from './admin.component';
import { FilterUPipe } from './pipes/filter-u.pipe';
import { FilterLPipe } from './pipes/filter-l.pipe';
import { FilterPPipe } from './pipes/filter-p.pipe';
import { FilterEPipe } from './pipes/filter-e.pipe';
import { MenuComponent } from './menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { PerfilComponent } from './perfil/perfil.component';
import { ScriptComponent } from './script/script.component';
import { AsignarComponent } from './asignar/asignar.component';
import { ScoreComponent } from './score/score.component';
import { PipeScorePipe } from './pipes/pipe-score.pipe';
import {MatCardModule} from '@angular/material/card';
import {CdkTreeModule} from '@angular/cdk/tree';
import { CrearUsuarioComponent } from './usuario/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario/editar-usuario.component';
import { EditarConsursoComponent } from './concurso/editar-consurso/editar-consurso.component';
import { CrearConsursoComponent } from './concurso/crear-consurso/crear-consurso.component';
import { CrearEquipoComponent } from './equipo/crear-equipo/crear-equipo.component';
import { EditarEquipoComponent } from './equipo/editar-equipo/editar-equipo.component';
import { CrearProblemaComponent } from './problema/crear-problema/crear-problema.component';
import { EditarProblemaComponent } from './problema/editar-problema/editar-problema.component';
import { RegistrarSolucionComponent } from './score/registrar-solucion/registrar-solucion.component';
import { FilterConcursoPipe } from './pipes/filter-concurso.pipe';
import { ImportarComponent } from './importar/importar.component';
import { ColegioComponent } from './colegio/colegio.component';
import { CrearColegioComponent } from './colegio/crear-colegio/crear-colegio.component';
import { EditarColegioComponent } from './colegio/editar-colegio/editar-colegio.component';
import { FilterColegioPipe } from './pipes/filter-colegio.pipe';
import { HabilitarComponent } from './habilitar/habilitar.component';
import { RegistrarEquipoComponent } from './asignar/registrar-equipo/registrar-equipo.component';
import { VerMaquinaComponent } from './asignar/ver-maquina/ver-maquina.component';
import { AutoComponent } from './auto/auto.component';
import {MatMenuModule} from '@angular/material/menu';
import { ReporteComponent } from './reporte/reporte.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { GanadoresComponent } from './ganadores/ganadores.component';
import { ButtonModule } from 'primeng/button';
import { ProductoComponent } from './producto/producto.component';
import { EditarProductoComponent } from './producto/editar-Producto/editar-Producto.component';
import { CrearProductoComponent } from './producto/crear-Producto/crear-Producto.component';

// import { NgxChartModule } from 'ngx-chart';

@NgModule({
  declarations: [
    UsuarioComponent, 
    EquipoComponent, 
    ConcursoComponent, 
    ProblemaComponent, 
    HomeComponent, 
    AdminComponent,
    FilterUPipe, 
    FilterLPipe, 
    FilterPPipe, 
    FilterEPipe,
    MenuComponent,
    PerfilComponent, 
    ScriptComponent, 
    AsignarComponent, 
    ScoreComponent, 
    PipeScorePipe, 
    CrearUsuarioComponent, 
    EditarUsuarioComponent, 
    EditarProductoComponent, 
    CrearProductoComponent, 
    EditarConsursoComponent, 
    CrearConsursoComponent, 
    CrearEquipoComponent, 
    EditarEquipoComponent, 
    CrearProblemaComponent, 
    EditarProblemaComponent, 
    RegistrarSolucionComponent, 
    FilterConcursoPipe, ImportarComponent, ColegioComponent, CrearColegioComponent, EditarColegioComponent, FilterColegioPipe, HabilitarComponent, RegistrarEquipoComponent, VerMaquinaComponent, AutoComponent, ReporteComponent, GanadoresComponent, ProductoComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    CdkTreeModule,
    MatDatepickerModule,
    MatMenuModule,
    NgxChartsModule,
    ConfirmDialogModule,
    ButtonModule
    // BrowserAnimationsModule
],
  exports:[
    AdminComponent
  ],
  entryComponents: []
})
export class AdminModule { }
