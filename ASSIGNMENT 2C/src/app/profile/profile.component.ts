import { Component } from '@angular/core';
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  name:string = "Mr. Anonymous";
  photo:any = "../../assets/9439678.jpg";
}
