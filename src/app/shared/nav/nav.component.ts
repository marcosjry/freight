import { LoginService } from './../../components/login/services/login-service.service';
import { ChangeDetectorRef, Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavItemComponent } from './nav-item/nav-item.component';
import { LoadService } from '../loading/services/load.service';
import { AppComponent } from '../../app.component';
import { ButtonGenericComponent } from '../button-generic/button-generic.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    NavBarComponent,
    NavItemComponent,
    RouterLink,
    RouterLinkActive,
    AppComponent,
    ButtonGenericComponent
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

  constructor(private loginService: LoginService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private loadService: LoadService,
    private appComponet: AppComponent
  ) {
    
  }

  onExit() {
    this.loadService.show()
    this.router.navigate(['/login']);
    this.loginService.logout().then(() => {
      setTimeout(()=> {
        this.loadService.hide()    
      }, 3000)
      this.appComponet.isLoggedIn = false;
    })
    this.cdr.detectChanges();
  }
}
