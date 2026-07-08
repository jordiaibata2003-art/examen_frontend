import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // ✅ Ajout important

@Component({
  selector: 'app-home',
  imports: [RouterModule], // ✅ Ajout dans imports
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {}