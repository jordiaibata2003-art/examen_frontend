import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-form.html',
  styleUrl: './user-form.css'
})
export class UserFormComponent implements OnInit {

  user: User = {
    id: 0,
    nom: '',
    prenom: '',
    email: '',
    password: '',
    role: 'user'
  };

  isEdit = false;
  title = 'Ajouter un utilisateur';

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEdit = true;
        this.title = 'Modifier un utilisateur';
        const id = +params['id'];
        const user = this.userService.getUserById(id);
        if (user) {
          this.user = { ...user };
        }
      }
    });
  }

  enregistrer() {
    if (this.isEdit) {
      this.userService.updateUser(this.user);
    } else {
      this.userService.addUser(this.user);
    }
    this.router.navigate(['/users']);
  }

  annuler() {
    this.router.navigate(['/users']);
  }
}