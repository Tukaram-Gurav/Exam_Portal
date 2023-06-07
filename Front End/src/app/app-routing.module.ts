import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './Pages/sign-up/sign-up.component';
import { LogInComponent } from './Pages/log-in/log-in.component';
import { HomeComponent } from './Pages/home/home.component';
import { AdmindComponent } from './Pages/Admin/adminDashBoard/admind.component';
import { UserdComponent } from './Pages/User/userDashBoar/userd.component';
import { ADMINGuard } from './Services/Guard/AdminGuard/admin.guard';
import { USERGuard } from './Services/Guard/UserGuard/user.guard';
import { ProfileComponent } from './Pages/Profile/profile.component';
import { WelcomeComponent } from './Pages/Admin/Welcocme/welcome.component';
import { ViewCategriesComponent } from './Pages/Admin/View-Categries/view-categries.component';
import { AddCategriesComponent } from './Pages/Admin/Add-Categries/add-categries.component';
import { ShowQuizComponent } from './Pages/Admin/Show-Quiz/show-quiz.component';
import { AddQuizComponent } from './Pages/Admin/Add-Quiz/add-quiz.component';
import { UpdateQuizComponent } from './Pages/Admin/Updte-Quiz/update-quiz.component';
import { ViewQuestionsComponent } from './Pages/Admin/View-Questions/view-questions.component';
import { AddQuestionsComponent } from './Pages/Admin/Add-Questions/add-questions.component';
import { LoadQuizComponent } from './Pages/User/Load-Quiz/load-quiz.component';
import { InstructionsComponent } from './Pages/User/Instructions/instructions.component';
import { StartComponent } from './Pages/User/Start/start.component';
import { UpdateQuestionComponent } from './Pages/Admin/UpdateQuestion/update-question.component';
import { UpdateCategoryComponent } from './Pages/Admin/UpdateCategory/update-category.component';
import { HistoryComponent } from './Pages/User/userHistory/history.component';
import { QuizHistoryComponent } from './Pages/Admin/QuizHistory/quiz-history.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'signup', component: SignUpComponent
  },
  {
    path: 'login', component: LogInComponent
  },
    {
    path: 'admin', component: AdmindComponent, canActivate: [ADMINGuard],
    children:
      [
        {
          path: '', component: WelcomeComponent
        },
        {
          path: 'profile', component: ProfileComponent
        },
        {
          path: 'categories', component: ViewCategriesComponent
        },
        {
          path: 'add-categories', component: AddCategriesComponent
        },
        {
          path: 'quizes', component: ShowQuizComponent
        },
        {
          path: 'add-quiz', component: AddQuizComponent
        },
        {
          path: 'quiz/:qid', component: UpdateQuizComponent
        },
        {
          path: 'view-questions/:id/:title', component: ViewQuestionsComponent
        },
        {
          path: 'add-question/:qid/:title', component: AddQuestionsComponent
        },
        {
          path:'ques/:qid',component:UpdateQuestionComponent
        },
        {
          path:'category/:cid',component:UpdateCategoryComponent
        },
        {
          path:'history/:quiz',component:QuizHistoryComponent
        }
      ]
  },
  {
    path: 'user-dash', component: UserdComponent, canActivate: [USERGuard],
    children:
      [
        
        {
          path:'history',component:HistoryComponent
        },
        {
          path: ':cid', component: LoadQuizComponent
        },
        {
          path: 'instruction/:cid', component: InstructionsComponent
        }
      ]
  },
  {
    path: 'start/:qid', component: StartComponent,canActivate: [USERGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
