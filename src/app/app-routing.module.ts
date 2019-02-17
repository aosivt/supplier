import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OperatorComponent } from './ui/operator/operator.component';
import { SupplierComponent } from './ui/supplier/supplier.component';

const routes: Routes = [
  // {path: 'operator/:id', component: OperatorComponent},
  // {path: 'supplier/:id', component: SupplierComponent},
  {path: 'operator', component: OperatorComponent},
  {path: 'supplier', component: SupplierComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
