import { Component, OnInit } from '@angular/core';
import { ListaTarefaService } from '../lista-tarefa.service';

@Component({
    selector: 'app-lista-tarefas',
    templateUrl: './lista-tarefas.component.html',
    styleUrls: ['./lista-tarefas.component.css']
})
export class ListaTarefasComponent implements OnInit {
    tarefas;

    constructor(private service: ListaTarefaService) { }

    ngOnInit() {
        this.tarefas = this.service.consultaTarefas();
    }

}
