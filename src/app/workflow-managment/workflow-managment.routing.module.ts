import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { WorkflowManagmentContainerComponent } from './components/workflow-managment-container/workflow-managment-container.component';

const routes: Routes = [
    {
        path : "",
        component : WorkflowManagmentContainerComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkFlowManagmentRoutingModule {}
