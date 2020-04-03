import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-item-lista',
    templateUrl: './item-lista.component.html',
    styleUrls: ['./item-lista.component.css']
})
export class ItemListaComponent {
    @Input() tarefa;
    @Output() excluiu = new EventEmitter();
}
