import { Routes } from '@angular/router';
import { CategoriasListComponent } from './components/categorias-list/categorias-list.component';
import { ProductosListComponent } from './components/productos-list/productos-list.component';

export const routes: Routes = [
    {
        path:'lista-categorias', component:CategoriasListComponent
    },
    {
        path:'lista-productos', component: ProductosListComponent
    }

];
