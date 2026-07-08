import { Injectable } from '@angular/core';
import { Vente } from '../models/vente';

@Injectable({
  providedIn: 'root'
})
export class VenteService {

  private storageKey = 'ventes';

  constructor() {}

  private getVentesFromStorage(): Vente[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  private saveVentesToStorage(ventes: Vente[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(ventes));
  }

  getVentes(): Vente[] {
    return this.getVentesFromStorage();
  }

  getVenteById(id: number): Vente | undefined {
    const ventes = this.getVentesFromStorage();
    return ventes.find(v => v.id === id);
  }

  addVente(vente: Vente): void {
    const ventes = this.getVentesFromStorage();
    ventes.push(vente);
    this.saveVentesToStorage(ventes);
  }

  updateVente(id: number, updatedVente: Vente): void {
    const ventes = this.getVentesFromStorage();
    const index = ventes.findIndex(v => v.id === id);
    if (index !== -1) {
      ventes[index] = updatedVente;
      this.saveVentesToStorage(ventes);
    }
  }

  deleteVente(id: number): void {
    const ventes = this.getVentesFromStorage();
    const filtered = ventes.filter(v => v.id !== id);
    this.saveVentesToStorage(filtered);
  }
}