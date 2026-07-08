import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataService } from '../../../services/Data-service';


@Component({
  selector: 'app-appro-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './appro-list.html',
  styleUrl: './appro-list.css'
})
export class ApproListComponent implements OnInit {
  
  approvisionnements: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.approvisionnements = this.dataService.getApprovisionnements();
    console.log('📋 Données chargées :', this.approvisionnements);
  }

  deleteAppro(id: number) {
    if (confirm('Voulez-vous vraiment supprimer cet approvisionnement ?')) {
      this.dataService.deleteApprovisionnement(id);
      this.loadData(); // ✅ Recharger la liste
    }
  }
}