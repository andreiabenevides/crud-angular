import { ListaTarefaService } from './../lista-tarefa.service';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-status',
    templateUrl: './status.component.html',
    styleUrls: ['./status.component.css']
})
export class StatusComponent {
    @Input() tarefa;

    constructor(private service: ListaTarefaService) { }

    status() {
        this.service.mudaStatus(this.tarefa);
    }
}
