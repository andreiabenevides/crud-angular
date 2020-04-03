import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ListaTarefaService } from '../lista-tarefa.service';

@Component({
    selector: 'app-excluir',
    templateUrl: './excluir.component.html',
    styleUrls: ['./excluir.component.css']
})
export class ExcluirComponent {
    @Input() tarefa;
    @Output() excluiu = new EventEmitter();

    constructor(private service: ListaTarefaService) { }

    excluir() {
        this.service.exclui(this.tarefa);
        this.excluiu.emit();
    }

}
