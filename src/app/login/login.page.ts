// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ToastController } from '@ionic/angular'; // Importa ToastController


@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  username: any;
  password: any;

  constructor(private toastController: ToastController
,    private authService: AuthService, private router: Router) {}
  
  async mostrarMensaje(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 3000, // Duración del mensaje en milisegundos (en este caso, 3 segundos)
      position: 'bottom', // Posición del mensaje en la pantalla
    });
    toast.present();
  }


  login() {
    this.authService.login(this.username, this.password).then((isAuthenticated: any) => {
      if (isAuthenticated) {
        this.router.navigate(['/home']);
      } else {
        // Manejar el fallo de autenticación
        this.mostrarMensaje('Por favor, completa todos los campos.');
          return; // Evita continuar si los campos están vacíos


                


      }
    });
  }
  
}
