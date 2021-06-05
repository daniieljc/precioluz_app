import { Component, OnInit } from '@angular/core';
import { PrecioService } from '../servicios/precio.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  hora;
  hora2;
  minuto;
  tramoHora: string;
  tramos;
  tramosAux: any[];
  preciokWh: number;
  bgColor;

  constructor(private precio: PrecioService) {
    this.tramos = [];
    this.tramosAux = [];
    this.preciokWh = 0;
  }

  ngOnInit() {
    this.hora = new Date().getHours();
    this.hora2 = new Date().getHours() + 1;
    this.minuto = new Date().getMinutes();

    this.hora = this.hora < 10 ? `0${this.hora}` : this.hora;
    this.hora2 = this.hora2 < 10 ? `0${this.hora2}` : this.hora2;
    this.minuto = this.minuto < 10 ? `0${this.minuto}` : this.minuto;

    this.tramoHora = this.hora + '-' + this.hora2;

    this.precio.getPrecio().then((data) => {
      this.tramos = data;

      this.tramosAux = this.tramos.PVPC.filter(({ Hora }) => {
        return Hora == this.tramoHora;
      });

      this.preciokWh = parseInt(this.tramosAux[0].PCB) / 1000;
    });
  }
}
