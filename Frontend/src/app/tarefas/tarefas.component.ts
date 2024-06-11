import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.scss']
})
export class TarefasComponent implements OnInit {
  tarefas: any;

  constructor(http: HttpClient) { }

  ngOnInit() {
    this.getTarefas();
  }

  getTarefas(){

    this.tarefas = [
      {
        nome: 'Lavar Louça',
        descricao: 'Lava logo!'
      },
      {
        nome: 'Limpar banheiro',
        descricao: 'Limpa logo!'
      }
    ]

  }
}
