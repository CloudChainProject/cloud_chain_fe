import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            // { path: '', redirectTo: 'home', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'product/create', loadChildren: './product/products/products.module#ProductsModule' },
            { path: 'product/edit/:id', loadChildren: './product/products/products.module#ProductsModule' },
            { path: 'product/list', loadChildren: './product/products_list/products_list.module#ProductsListModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
    // providers: [
})
export class LayoutRoutingModule {}
