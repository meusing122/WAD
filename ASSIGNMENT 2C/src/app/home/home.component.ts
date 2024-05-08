import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserserviceService } from '../services/userservice.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  data:any;
  constructor(userData : UserserviceService){
    this.data = userData.users();
    console.log(this.data);
  }
}
