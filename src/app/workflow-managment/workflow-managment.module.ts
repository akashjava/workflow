import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkFlowManagmentRoutingModule } from './workflow-managment.routing.module';
import { WorkflowEntityEditorComponent } from './components/workflow-entity-editor/workflow-entity-editor.component';
import { WorkflowManagmentContainerComponent } from './components/workflow-managment-container/workflow-managment-container.component';
import { WorkflowLayoutComponent } from './components/workflow-layout/workflow-layout.component';
import { WFDFieldType, CalculateGridArea } from './pipes/wfd.pipe';
import { SharedModule } from '../shared';
import { WorkflowHelperService } from './services/workflow-helper';
import { WorkflowPriviewComponent } from './components/workflow-priview/workflow-priview.component';
import { AddEditEntityComponent } from './components/dialogs/add-edit-entity/add-edit-entity.component';
import { AddressWidgetComponent } from './components/logical-widgets/address-widget/address-widget.component';
import { CheckboxWidgetComponent } from './components/logical-widgets/checkbox-widget/checkbox-widget.component';
import { CounterWidgetComponent } from './components/logical-widgets/counter-widget/counter-widget.component';
import { WeightWidgetComponent } from './components/logical-widgets/weight-widget/weight-widget.component';
import { TextWidgetComponent } from './components/logical-widgets/text-widget/text-widget.component';
import { ContactWidgetComponent } from './components/logical-widgets/contact-widget/contact-widget.component';
import { EmailWidgetComponent } from './components/logical-widgets/email-widget/email-widget.component';
import { DateWidgetComponent } from './components/logical-widgets/date-widget/date-widget.component';
import { DateTimeWidgetComponent } from './components/logical-widgets/date-time-widget/date-time-widget.component';
import { RadioButtonWidgetComponent } from './components/logical-widgets/radio-button-widget/radio-button-widget.component';
import { YesNoWidgetComponent } from './components/logical-widgets/yes-no-widget/yes-no-widget.component';
import { SingleSelectionWidgetComponent } from './components/logical-widgets/single-selection-widget/single-selection-widget.component';
import { MultiSelectionWidgetComponent } from './components/logical-widgets/multi-selection-widget/multi-selection-widget.component';
import { CameraWidgetComponent } from './components/logical-widgets/camera-widget/camera-widget.component';
import { StringWidgetComponent } from './components/entity-widgets/string-widget/string-widget.component';
import { DecimalWidgetComponent } from './components/entity-widgets/decimal-widget/decimal-widget.component';
import { BooleanWidgetComponent } from './components/entity-widgets/boolean-widget/boolean-widget.component';
import { NumberWidgetComponent } from './components/entity-widgets/number-widget/number-widget.component';
import { WorkflowActionEditorComponent } from './components/workflow-actions/workflow-action-editor/workflow-action-editor.component';
import { WorkflowActionFormBuilderComponent } from './components/workflow-actions/workflow-action-form-builder/workflow-action-form-builder.component';
import { WorkflowActionContainerComponent } from './components/workflow-actions/workflow-action-container/workflow-action-container.component';
import { ActionConditionComponent } from './components/workflow-actions/action-condition/action-condition.component';
import { ActionConditionSelectorComponent } from './components/workflow-actions/action-condition-selector/action-condition-selector.component';
import { DefineWidthComponent } from './components/workflow-actions/define-width/define-width.component';
import { AceEditorModule } from '@postfinance/ngx-ace-editor-wrapper';

@NgModule({
  declarations: [
    WorkflowManagmentContainerComponent,
    WorkflowEntityEditorComponent,
    WorkflowLayoutComponent,
    WFDFieldType,
    CalculateGridArea,
    WorkflowPriviewComponent,
    AddEditEntityComponent,
    AddressWidgetComponent,
    CheckboxWidgetComponent,
    CounterWidgetComponent,
    WeightWidgetComponent,
    TextWidgetComponent,
    NumberWidgetComponent,
    ContactWidgetComponent,
    EmailWidgetComponent,
    DateWidgetComponent,
    DateTimeWidgetComponent,
    RadioButtonWidgetComponent,
    YesNoWidgetComponent,
    SingleSelectionWidgetComponent,
    MultiSelectionWidgetComponent,
    CameraWidgetComponent,
    StringWidgetComponent,
    DecimalWidgetComponent,
    BooleanWidgetComponent,
    WorkflowActionEditorComponent,
    WorkflowActionFormBuilderComponent,
    WorkflowActionContainerComponent,

    ActionConditionComponent,
    ActionConditionSelectorComponent,
    DefineWidthComponent,
  ],
  imports: [
    CommonModule,
    WorkFlowManagmentRoutingModule,
    SharedModule,
    AceEditorModule,
  ],
  providers: [WorkflowHelperService],
  entryComponents: [
    WorkflowLayoutComponent,
    AddEditEntityComponent,
    WorkflowActionEditorComponent,
    WorkflowActionFormBuilderComponent,
    DefineWidthComponent,
  ],
})
export class WorkflowManagmentModule {}
