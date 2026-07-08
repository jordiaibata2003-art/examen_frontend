import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [];
  private storageKey = 'users';

  constructor() {
    // Charger les données depuis localStorage au démarrage
    const stored = localStorage.getItem(this.storageKey);
    if (stored) {
      this.users = JSON.parse(stored);
    } else {
      // Données par défaut
      this.users = [
        { id: 1, nom: 'Admin', prenom: 'Super', email: 'admin@gmail.com', password: 'admin123', role: 'admin' },
        { id: 2, nom: 'Dupont', prenom: 'Jean', email: 'jean@gmail.com', password: '123456', role: 'user' }
      ];
      this.saveToStorage();
    }
  }

  private saveToStorage() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.users));
  }

  getUsers(): User[] {
    return this.users;
  }

  getUserById(id: number): User | undefined {
    return this.users.find(u => u.id === id);
  }

  addUser(user: User): void {
    this.users.push(user);
    this.saveToStorage();
  }

  updateUser(user: User): void {
    const index = this.users.findIndex(u => u.id === user.id);
    if (index !== -1) {
      this.users[index] = user;
      this.saveToStorage();
    }
  }

  deleteUser(id: number): void {
    this.users = this.users.filter(u => u.id !== id);
    this.saveToStorage();
  }

  // Générer un nouvel ID
  generateId(): number {
    return this.users.length > 0 ? Math.max(...this.users.map(u => u.id)) + 1 : 1;
  }
}