import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  get historial() {
    return this.gisfServies.historial;
  }

  constructor( private gisfServies: GifsService) {}


  buscar( termino: string) {
    console.log( termino )
    this.gisfServies.buscarGifs( termino );
  }

}
