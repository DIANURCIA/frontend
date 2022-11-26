import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarPersonaComponent } from './personas/buscar-persona/buscar-persona.component';
import { CrearPersonaComponent } from './personas/crear-persona/crear-persona.component';
import { EditarPersonaComponent } from './personas/editar-persona/editar-persona.component';
import { EliminarPersonaComponent } from './personas/eliminar-persona/eliminar-persona.component';
import { BuscarProductoComponent } from './producto/buscar-producto/buscar-producto.component';
import { CrearProductoComponent } from './producto/crear-producto/crear-producto.component';
import { EditarProductoComponent } from './producto/editar-producto/editar-producto.component';

const routes: Routes = [
  {
    path: "crear-persona",
    component: CrearPersonaComponent
  },
  {
    path: "buscar-persona",
    component: BuscarPersonaComponent
  },
  {
    path: "listar-productos",
    component: BuscarProductoComponent
  },
  {
    path: "crear-producto",
    component: CrearProductoComponent
  },
  {
    path: "editar-producto/:id",
    component: EditarProductoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
