import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {HelloComponent} from './hello';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: HelloComponent
  }
];

export const routing = RouterModule.forRoot(routes);
