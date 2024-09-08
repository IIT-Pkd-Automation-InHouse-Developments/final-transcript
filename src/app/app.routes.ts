import { Routes } from '@angular/router';
import {StudentListComponent} from "./student-list/student-list.component";
import {TranscriptComponent} from "./transcript/transcript.component";

export const routes: Routes = [

  { path: 'students', component: StudentListComponent },
  { path: 'transcript', component: TranscriptComponent },
  { path: '', redirectTo: '/students', pathMatch: 'full' }

];
