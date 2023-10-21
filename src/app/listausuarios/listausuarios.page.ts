import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';


@Component({
  selector: 'app-listausuarios',
  templateUrl: './listausuarios.page.html',
  styleUrls: ['./listausuarios.page.scss'],
})
export class ListausuariosPage implements OnInit {
  public users : any;
  constructor() { }

  ngOnInit() {
  

    }
  


}
