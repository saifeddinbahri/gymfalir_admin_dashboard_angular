import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet, Event } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  isLoginRoute: boolean = false;

  constructor(private router: Router) {}

  title = 'gym_falir_front';
  isLogin = !!localStorage.getItem('token')
  isAdmin = false
  ngOnInit() {
    
    this.router.events.pipe(
      filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      if(localStorage.getItem('role')) {
        this.isAdmin = localStorage.getItem('role') === 'admin'
      }
      if(!localStorage.getItem('token')) {
        this.isLogin = false
      } else {
        this.isLogin = event.urlAfterRedirects !== '/login'
      }
    });
  }
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  logOut() {
    localStorage.clear()
    this.router.navigate(['/login']);
  }
}
