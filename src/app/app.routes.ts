import { Routes } from '@angular/router';
import { FirstComponentComponent } from '../app/first-component/first-component.component';
import { SecondComponentComponent } from '../app/second-component/second-component.component';
import { ThirdComponentComponent } from '../app/third-component/third-component.component';
import { HijoComponent } from './hijo/hijo.component';
import { ForthComponentComponent } from './forth-component/forth-component.component';
import { FifthComponentComponent } from './fifth-component/fifth-component.component';
import { EightComponentComponent } from './eight-component/eight-component.component';
import { ContactoTDComponent } from './contacto-td/contacto-td.component';
import { ContactoReactiveComponent } from './contacto-reactive/contacto-reactive.component';
import { ConsumirImagenComponent } from './consumir-imagen/consumir-imagen.component';

export const routes: Routes = [
  { path: '', component: HijoComponent },
  { path: 'first', component: FirstComponentComponent },
  { path: 'second', component: SecondComponentComponent },
  { path: 'third', component: ThirdComponentComponent },
  { path: 'forth', component: ForthComponentComponent },
  { path: 'fifth', component: FifthComponentComponent},
  { path: 'eight', component: EightComponentComponent},
  { path: 'contactoTD', component: ContactoTDComponent},
  { path: 'contactoReactive', component: ContactoReactiveComponent},
  { path: 'consumirImagen', component: ConsumirImagenComponent}
];
