import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { CarTableComponent } from '../../components/car-table/car-table.component';

@Component({
  selector: 'app-dashboard',
  imports: [NavbarComponent, SidebarComponent, CardComponent, CarTableComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  ngOnInit() {
    
  }

}
