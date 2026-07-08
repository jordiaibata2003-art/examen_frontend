import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Vente } from '../../../models/vente';
import { VenteService } from '../../../services/vente.service';

@Component({
  selector: 'app-vente-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './vente-list.html',
  styleUrl: './vente-list.css'
})
export class VenteListComponent implements OnInit {

  ventes: Vente[] = [];

  constructor(private venteService: VenteService) {}

  ngOnInit() {
    this.ventes = this.venteService.getVentes();
  }

  supprimer(id: number) {
    if (confirm('Voulez-vous vraiment supprimer cette vente ?')) {
      this.venteService.deleteVente(id);
      this.ventes = this.venteService.getVentes();
      alert('Vente supprimée !');
    }
  }
}