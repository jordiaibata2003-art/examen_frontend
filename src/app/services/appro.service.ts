import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'  // ✅ Disponible dans toute l'application
})
export class ApprovisionnementService {
  
  private storageKey = 'approvisionnements';

  constructor() { }

  // Récupérer tous les approvisionnements
  getAll(): any[] {
    const data = localStorage.getItem(this.storageKey);
    if (data) {
      return JSON.parse(data);
    }
    // Données par défaut si rien en localStorage
    return [
      { 
        id: 1, 
        produit: 'Ordinateur Portable', 
        quantite: 10, 
        prix: 1200, 
        fournisseur: 'TechDistrib', 
        date: '2026-01-15' 
      },
      { 
        id: 2, 
        produit: 'Souris Sans Fil', 
        quantite: 30, 
        prix: 45, 
        fournisseur: 'OfficePro', 
        date: '2026-01-20' 
      }
    ];
  }

  // Sauvegarder la liste
  private save(data: any[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }

  // Ajouter un approvisionnement
  add(appro: any): void {
    const data = this.getAll();
    appro.id = this.generateId(data);
    data.push(appro);
    this.save(data);
  }

  // Modifier un approvisionnement
  update(appro: any): void {
    const data = this.getAll();
    const index = data.findIndex(a => a.id === appro.id);
    if (index !== -1) {
      data[index] = appro;
      this.save(data);
    }
  }

  // Supprimer un approvisionnement
  delete(id: number): void {
    const data = this.getAll();
    const filtered = data.filter(a => a.id !== id);
    this.save(filtered);
  }

  // Récupérer un approvisionnement par son ID
  getById(id: number): any {
    const data = this.getAll();
    return data.find(a => a.id === id);
  }

  // Générer un nouvel ID
  private generateId(data: any[]): number {
    if (data.length === 0) return 1;
    const maxId = Math.max(...data.map(a => a.id));
    return maxId + 1;
  }
}