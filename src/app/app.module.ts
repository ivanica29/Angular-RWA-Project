import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import {StoreModule} from '@ngrx/store';

// import { TrainingComponent } from './training/training.component';
// import { CurrentTrainingComponent } from './training/current-training/current-training.component';
// import { NewTrainingComponent } from './training/new-training/new-training.component';
// import { PastTrainingsComponent } from './training/past-trainings/past-trainings.component';
// import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './app-routing.module';
import {TodoNewComponent} from './components/todo-new/todo-new.component';
import {TodoService} from './services/todo.service';
import { rootReducer } from './store';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';
// import { HeaderComponent } from './navigation/header/header.component';
// import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
// import { StopTrainingComponent } from './training/current-training/stop-training.component';
// import { AuthService } from './auth/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    TodoNewComponent,
    TodoListComponent,
    TodoDetailComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    StoreModule.forRoot(rootReducer),
  ],
  providers: [TodoService],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
