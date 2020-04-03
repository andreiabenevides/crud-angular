import { DetalhesComponent } from './detalhes/detalhes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultaStatusComponent } from './consulta-status/consulta-status.component';
import { CadastroTarefasComponent } from './cadastro-tarefas/cadastro-tarefas.component';
import { ListaTarefasComponent } from './lista-tarefas/lista-tarefas.component';

const routes: Routes = [
    { path: '', component: ListaTarefasComponent },
    { path: 'cadastar', component: CadastroTarefasComponent },
    { path: 'consulta-status', component: ConsultaStatusComponent },
    { path: 'detalhe/:id', component: DetalhesComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
