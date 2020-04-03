import { ListaTarefaService } from './../lista-tarefa.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-cadastro-tarefas',
    templateUrl: './cadastro-tarefas.component.html',
    styleUrls: ['./cadastro-tarefas.component.css']
})
export class CadastroTarefasComponent implements OnInit {
    form: FormGroup;
    nome: string;
    descricao: string;

    constructor(
        private fb: FormBuilder,
        private service: ListaTarefaService
    ) { }

    ngOnInit() {
        this.form = this.fb.group({
            nome: [this.nome, Validators.required],
            descricao: [this.descricao, Validators.required]
        });
    }

    submitForm() {
        if (this.form.valid) {
            this.service.adicionaTarefa(this.nome, this.descricao);
            this.form.reset();
            window.alert('Tarefa cadastrada com sucesso!');
        } else {
            window.alert('Preencha todos os campos!');
        }
    }
}
