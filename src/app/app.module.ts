import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuSuperiorComponent } from './menu-superior/menu-superior.component';
import { ListaTarefasComponent } from './lista-tarefas/lista-tarefas.component';
import { CadastroTarefasComponent } from './cadastro-tarefas/cadastro-tarefas.component';
import { ConsultaStatusComponent } from './consulta-status/consulta-status.component';
import { StatusComponent } from './status/status.component';
import { ExcluirComponent } from './excluir/excluir.component';
import { ItemListaComponent } from './item-lista/item-lista.component';
import { DetalhesComponent } from './detalhes/detalhes.component';

@NgModule({
    declarations: [
        AppComponent,
        MenuSuperiorComponent,
        ListaTarefasComponent,
        CadastroTarefasComponent,
        ConsultaStatusComponent,
        StatusComponent,
        ExcluirComponent,
        ItemListaComponent,
        DetalhesComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
