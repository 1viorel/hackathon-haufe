import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import {DefaultPageComponent} from "./default-page/default-page.component";

const routes: Routes = [
  { path: 'checkout', component: CheckoutPageComponent },
  // Add other routes if needed
  { path: '', component: DefaultPageComponent}, // Redirect to a different default route (e.g., 'home')
  { path: '**', redirectTo: '' }, // Redirect to the default route for any unmatched route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

