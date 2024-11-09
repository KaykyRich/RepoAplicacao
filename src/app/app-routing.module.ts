import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VideoManagerComponent } from './Components/video-manager/video-manager.component';
import { VideoInputComponent } from './views/video-input/video-input.component';
import { ResultsProcessComponent } from './Components/results-process/results-process.component';
import { AwaitingAnalysisComponent } from './Components/awaiting-analysis/awaiting-analysis.component';

const routes: Routes = [
  {path: '', component: VideoInputComponent},
  {path: 'upload', component: VideoManagerComponent},
  {path: 'awaiting', component: AwaitingAnalysisComponent},
  {path: 'results', component: ResultsProcessComponent}
];

@NgModule({
  declarations:[],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
