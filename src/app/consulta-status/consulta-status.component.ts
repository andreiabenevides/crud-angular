import { ListaTarefaService } from './../lista-tarefa.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-consulta-status',
    templateUrl: './consulta-status.component.html',
    styleUrls: ['./consulta-status.component.css']
})
export class ConsultaStatusComponent implements OnInit {
    public tarefas;
    public status = true;
    constructor(private service: ListaTarefaService) { }

    ngOnInit() {
        this.busca();
    }

    buscaStatus() {
        this.status = !this.status;
        this.busca();
    }

    busca() {
        this.tarefas = this.service.consultaTarefaStatus(this.status);
    }


}
