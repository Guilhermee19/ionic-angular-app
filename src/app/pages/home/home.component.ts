import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonicModule], // ✅ Adicionando IonicModule
  templateUrl: './home.component.html',
})
export class HomeComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
