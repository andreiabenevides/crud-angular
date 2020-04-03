import { Injectable } from '@angular/core';

@Injectable(
    { providedIn: 'root' }
)
export class ListaTarefaService {
    tarefas = [
        {
            id: 0,
            nome: 'Aprender angular',
            descricao: 'Aprender o básico sobre o angular 2+',
            completo: false
        },
        {
            id: 1,
            nome: 'Aprender css',
            descricao: 'Aprender o básico sobre css',
            completo: false
        },
        {
            id: 2,
            nome: 'Aprender lógica',
            descricao: 'Aprender a pensar',
            completo: true
        },
        {
            id: 3,
            nome: 'Aprender sobre variáveis',
            descricao: 'Aprender tudo sobre variaveis',
            completo: true
        },
        {
            id: 4,
            nome: 'Aprender Javascript',
            descricao: 'Aprender tudo sobre Javascript',
            completo: false
        },
        {
            id: 5,
            nome: 'Aprender a ferver água',
            descricao: 'Aprender o básico sobre como ferver água',
            completo: true
        },
    ];

    consultaTarefas() {
        return this.tarefas;
    }

    consultaUmaTarefa(id) {
        const index = this.tarefas.findIndex(item => item.id === id);
        return this.tarefas[index];
    }

    consultaTarefaStatus(status: boolean) {
        return this.tarefas.filter(tarefa => tarefa.completo === status);
    }

    adicionaTarefa(nome, descricao) {
        this.tarefas.push({
            id: this.tarefas[this.tarefas.length - 1].id + 1,
            nome: nome,
            descricao: descricao,
            completo: false
        });
    }

    mudaStatus(tarefa) {
        const index = this.tarefas.findIndex(item => item.id === tarefa.id);
        this.tarefas[index].completo = !this.tarefas[index].completo;
    }

    exclui(tarefa) {
        const index = this.tarefas.findIndex(item => item.id === tarefa.id);
        this.tarefas.splice(index, 1);
    }
}
