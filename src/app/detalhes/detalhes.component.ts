import { ListaTarefaService } from './../lista-tarefa.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-detalhes',
    templateUrl: './detalhes.component.html',
    styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {
    tarefa;
    id: number;
    constructor(
        private route: ActivatedRoute,
        private service: ListaTarefaService) { }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.id = +params.get('id');
        });

        this.tarefa = this.service.consultaUmaTarefa(this.id);
    }

}
