import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,NgModel } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SignUpComponent } from './Pages/sign-up/sign-up.component';
import { LogInComponent } from './Pages/log-in/log-in.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './Pages/home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { authInterceptorProviders } from './Services/auth.interceptor';
import { UserdComponent } from './Pages/User/userDashBoar/userd.component';
import { AdmindComponent } from './Pages/Admin/adminDashBoard/admind.component';
import { ProfileComponent } from './Pages/Profile/profile.component';
import { SidebarComponent } from './Pages/Admin/sideBar/sidebar.component';
import {MatListModule} from '@angular/material/list';
import { WelcomeComponent } from './Pages/Admin/Welcocme/welcome.component';
import { ViewCategriesComponent } from './Pages/Admin/View-Categries/view-categries.component';
import { AddCategriesComponent } from './Pages/Admin/Add-Categries/add-categries.component';
import {MatDividerModule} from '@angular/material/divider';
import { MatLineModule } from '@angular/material/core';
import { ShowQuizComponent } from './Pages/Admin/Show-Quiz/show-quiz.component';
import { AddQuizComponent } from './Pages/Admin/Add-Quiz/add-quiz.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import { UpdateQuizComponent } from './Pages/Admin/Updte-Quiz/update-quiz.component';
import { ViewQuestionsComponent } from './Pages/Admin/View-Questions/view-questions.component';
import { AddQuestionsComponent } from './Pages/Admin/Add-Questions/add-questions.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { SideBarComponent } from './Pages/User/Side-Bar/side-bar.component';
import { LoadQuizComponent } from './Pages/User/Load-Quiz/load-quiz.component';
import { InstructionsComponent } from './Pages/User/Instructions/instructions.component';
import { StartComponent } from './Pages/User/Start/start.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';
import { UpdateQuestionComponent } from './Pages/Admin/UpdateQuestion/update-question.component';
import { UpdateCategoryComponent } from './Pages/Admin/UpdateCategory/update-category.component';
import { HistoryComponent } from './Pages/User/userHistory/history.component';
import { QuizHistoryComponent } from './Pages/Admin/QuizHistory/quiz-history.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SignUpComponent,
    LogInComponent,
    HomeComponent,
    UserdComponent,
    AdmindComponent,
    ProfileComponent,
    SidebarComponent,
    WelcomeComponent,
    ViewCategriesComponent,
    AddCategriesComponent,
    ShowQuizComponent,
    AddQuizComponent,
    UpdateQuizComponent,
    ViewQuestionsComponent,
    AddQuestionsComponent,
    SideBarComponent,
    LoadQuizComponent,
    InstructionsComponent,
    StartComponent,
    UpdateQuestionComponent,
    UpdateCategoryComponent,
    HistoryComponent,
    QuizHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    NgbModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatToolbarModule,
    MatListModule,
    MatDividerModule,
    MatLineModule,
    MatSlideToggleModule,
    MatSelectModule,
    CKEditorModule,
    MatProgressSpinnerModule,
    
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground:true,
    })
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
