import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Vente } from '../../../models/vente';
import { VenteService } from '../../../services/vente.service';

@Component({
  selector: 'app-vente-form',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './vente-form.html',
  styleUrl: './vente-form.css'
})
export class VenteFormComponent implements OnInit {

  vente: Vente = {
    id: 0,
    produit: '',
    quantite: 0,
    prix: 0,
    client: '',
    date: ''
  };

  isEdit = false;
  venteId: number | null = null;

  constructor(
    private venteService: VenteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // Vérifier si on est en mode modification
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.isEdit = true;
        this.venteId = +id;
        const existingVente = this.venteService.getVenteById(+id);
        if (existingVente) {
          this.vente = { ...existingVente };
        }
      } else {
        // Date par défaut
        this.vente.date = new Date().toISOString().split('T')[0];
      }
    });
  }

  enregistrer() {
    if (this.isEdit && this.venteId) {
      // Mode modification
      this.venteService.updateVente(this.venteId, this.vente);
      alert('Vente modifiée avec succès !');
    } else {
      // Mode ajout
      this.vente.id = Date.now();
      this.venteService.addVente(this.vente);
      alert('Vente enregistrée avec succès !');
    }
    this.router.navigate(['/ventes']);
  }
}