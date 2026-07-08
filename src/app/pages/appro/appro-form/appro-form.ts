import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DataService } from '../../../services/Data-service';


@Component({
  selector: 'app-appro-form',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './appro-form.html',
  styleUrl: './appro-form.css'
})
export class ApproFormComponent implements OnInit {
  
  appro = {
    id: 0,
    produit: '',
    quantite: 0,
    prix: 0,
    fournisseur: '',
    date: ''
  };

  isEdit = false;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      
      if (id) {
        this.isEdit = true;
        const found = this.dataService.getApprovisionnements().find(a => a.id === +id);
        if (found) {
          this.appro = { ...found };
          console.log('✅ Chargé :', this.appro);
        }
      } else {
        // ✅ Nouveau produit : date par défaut
        this.appro.date = new Date().toISOString().split('T')[0];
      }
    });
  }

  onSubmit() {
    if (this.isEdit) {
      this.dataService.updateApprovisionnement(this.appro.id, this.appro);
      alert('✅ Approvisionnement mis à jour !');
    } else {
      this.dataService.addApprovisionnement(this.appro);
      alert('✅ Nouvel approvisionnement ajouté !');
    }
    this.router.navigate(['/appro']);
  }

  onCancel() {
    this.router.navigate(['/appro']);
  }
}