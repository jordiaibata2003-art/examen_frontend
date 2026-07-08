import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private storageKey = 'approvisionnements';

  constructor() {
    // Initialiser avec des données par défaut si vide
    if (!localStorage.getItem(this.storageKey)) {
      this.initDefaultData();
    }
  }

  private initDefaultData() {
    const defaultData = [
      { id: 1, produit: 'Ordinateur Portable', quantite: 10, prix: 1200, fournisseur: 'TechDistrib', date: '2026-01-15' },
      { id: 2, produit: 'Souris Sans Fil', quantite: 30, prix: 45, fournisseur: 'OfficePro', date: '2026-01-20' },
      { id: 3, produit: 'Clavier Mécanique', quantite: 25, prix: 80, fournisseur: 'KeyMaster', date: '2026-07-08' }
    ];
    localStorage.setItem(this.storageKey, JSON.stringify(defaultData));
  }

  // ✅ Récupérer tous les approvisionnements
  getApprovisionnements(): any[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  // ✅ Sauvegarder
  private saveApprovisionnements(data: any[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }

  // ✅ Ajouter
  addApprovisionnement(appro: any): void {
    const list = this.getApprovisionnements();
    const maxId = list.reduce((max, a) => a.id > max ? a.id : max, 0);
    appro.id = maxId + 1;
    list.push(appro);
    this.saveApprovisionnements(list);
  }

  // ✅ Modifier
  updateApprovisionnement(id: number, updated: any): void {
    const list = this.getApprovisionnements();
    const index = list.findIndex(a => a.id === id);
    if (index !== -1) {
      list[index] = { ...list[index], ...updated };
      this.saveApprovisionnements(list);
    }
  }

  // ✅ Supprimer
  deleteApprovisionnement(id: number): void {
    let list = this.getApprovisionnements();
    list = list.filter(a => a.id !== id);
    this.saveApprovisionnements(list);
  }
}