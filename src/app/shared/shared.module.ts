import { NgModule } from "@angular/core";
import { CommonModule, DatePipe } from "@angular/common";
import { NgModel, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
// import { FlexLayoutModule } from "@angular/flex-layout";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatStepperModule } from "@angular/material/stepper";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
// import { MyDateRangePickerModule } from "mydaterangepicker";

import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatChipsModule } from "@angular/material/chips";
import { MatNativeDateModule } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDividerModule } from "@angular/material/divider";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatSliderModule } from "@angular/material/slider";
import { MatSortModule } from "@angular/material/sort";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatBadgeModule } from "@angular/material/badge";
import { MatBottomSheetModule } from "@angular/material/bottom-sheet";
import {
  MatProgressBarModule,
  MatProgressBar,
} from "@angular/material/progress-bar";
import { MatTabsModule } from "@angular/material/tabs";
import { AvatarComponent } from "./avatar/avatar.component";
// import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatNativeDateModule } from '@angular/material/dialog';
import {
  SearchOrgFilter,
  ConcatStringFilter,
  SearchTripFilter,
  AddressPipeOfCustomField,
  SearchVehBranchFilter,
  CustomNumber,
  IsCustomFieldSelected,
  IsCustomFieldSelectedv2,
  ArrayIncludesFilter,
   
} from "./shared-filter/shared-filter";
import {
  VehicleFilter,
  DriverFilter,
  MemberFilter,
  DeviceFilter,
  PlacesListFilter,
  BusinessPartnerFilter,
  MsToDurationFilter,
  GroupFilter,
  OfficeSearchFilter,
  MsToDurationFilterDetails,
  DateFormatPipe,
  TimeFromNowPipe,
  FlatFilters,
  SearchByFilter,
  TrimNumberFilter,
 
} from "./local-filter";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { OwlDateTimeModule, OwlNativeDateTimeModule } from '@danielmoncada/angular-datetime-picker';
import { HttpClient, HttpClientModule } from "@angular/common/http";

import { CustomFormBuilderComponent } from "./custom-form/custom-form-builder/custom-form-builder.component";
import { CustomFormViewerComponent } from "./custom-form/custom-form-viewer/custom-form-viewer.component";
import { CheckboxViewerComponent } from "./custom-form/form-viewer-components/checkbox-viewer-component";
import { CustomTextareaComponent } from "./custom-form/form-viewer-components/custom-textarea-component";
import { JsonSchemaService } from "./custom-form/json-schema-service";
import { WebcameraComponent } from "./custom-form/form-viewer-components/webcamera.component";
import { WebcamModule } from "ngx-webcam";
import { CustomFileComponent } from "./custom-form/form-viewer-components/custom-file-component";
import { CheckboxBuilderComponent } from "./custom-form/form-builder-components/checkbox-builder-component";
import { WeightBuilderComponent } from "./custom-form/form-builder-components/weight-builder-component";
import { TextBuilderComponent } from "./custom-form/form-builder-components/text-builder-component";
import { DateBuilderComponent } from "./custom-form/form-builder-components/date-builder-component";
import { AddressBuilderComponent } from "./custom-form/form-builder-components/address-builder-component";
import { CameraBuilderComponent } from "./custom-form/form-builder-components/camera-builder-component";
import { CounterBuilderComponent } from "./custom-form/form-builder-components/counter-builder-component";
import { EmailBuilderComponent } from "./custom-form/form-builder-components/email-builder-component";
import { RadioButtonBuilderComponent } from "./custom-form/form-builder-components/radio-button-builder-component";
import { YesNoBuilderComponent } from "./custom-form/form-builder-components/yes-no-builder-component";
import { SelectBuilderComponent } from "./custom-form/form-builder-components/select-builder-component";
import { ContactNoBuilderComponent } from "./custom-form/form-builder-components/contact-no-builder-component";
import {
  EntityBuilderComponent,
  EntitySettingDialogComponent,
} from "./custom-form/form-builder-components/entity-builder/entity-builder-component";
import { WeightViewerComponent } from "./custom-form/form-viewer-components/weight-viewer-component";
import { TextViewerComponent } from "./custom-form/form-viewer-components/text-viewer-component";
import { DateViewerComponent } from "./custom-form/form-viewer-components/date-viewer-component";
import { AddressViewerComponent } from "./custom-form/form-viewer-components/address-viewer-component";
import { CounterViewerComponent } from "./custom-form/form-viewer-components/counter-viewer-component";
import { EmailViewerComponent } from "./custom-form/form-viewer-components/email-viewer-component";
import { RadioButtonViewerComponent } from "./custom-form/form-viewer-components/radio-button-viewer-component";
import { YesNoViewerComponent } from "./custom-form/form-viewer-components/yes-no-viewer-component";
import { SelectViewerComponent } from "./custom-form/form-viewer-components/select-viewer-component";
import { ContactNoViewerComponent } from "./custom-form/form-viewer-components/contact-no-viewer-component";
import { EntityViewerComponent } from "./custom-form/form-viewer-components/entity-viewer-component";
import { MembersPickerComponent } from "./members-picker/members-picker.component";
import { FretronToggleButtonComponent } from "./fretron-toggle-button/fretron-toggle-button.component";
import { DriverPickerComponent } from "./driver-picker/driver-picker.component";
import { ViewerComponent } from "./custom-form/form-viewer-components/viewer/viewer.component";
import {
  UserByUuid,
  OrgDetailPipe,
  SelectionMade,
} from "./pipes/shared-pipes";
// import { SharedMapServices } from "./shared-map-services";
import { YesNoComponent } from "./yes-no/yes-no.component";
import { DisableEvent } from "./directives/disable-button.directive";
import { DisableClickEventDirective } from "./directives/disable-click-event.directive";
import { DisableInputDirective } from "./directives/disable-input.directive";
import { ClickDirective } from "./directives/click.directive";
import { PickTransporterComponent } from "./pick-transporter/pick-transporter.component";
import { SelectVehicleTypeComponent } from "./select-vehicle-type/select-vehicle-type.component";
import { UploadOrPickImageComponent } from "./upload-or-pick-image/upload-or-pick-image.component";
import { CustomFieldPickerComponent } from "./custom-form/custom-field-picker/custom-field-picker.component";
import { CustomFieldEditorComponent } from "./custom-form/custom-field-editor/custom-field-editor.component";
import { AppTimerComponent } from "./app-timer/app-timer.component";
import { TrimText } from "./directives/trim-txt.directive";
import { MatRippleModule } from "@angular/material/core";
import { AceEditorModule } from "@postfinance/ngx-ace-editor-wrapper";
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ChartsModule } from "ng2-charts";

@NgModule({
  declarations: [
    AvatarComponent,
    SearchOrgFilter,
    SearchTripFilter,
    VehicleFilter,
    DriverFilter,
    MemberFilter,
    DeviceFilter,
    ConcatStringFilter,
    PlacesListFilter,
    BusinessPartnerFilter,
    MsToDurationFilter,
    MsToDurationFilterDetails,
    DateFormatPipe,
    TimeFromNowPipe,
    FlatFilters,
    SearchByFilter,
    GroupFilter,
    TrimNumberFilter,
    OfficeSearchFilter,
    SearchVehBranchFilter,
    CustomNumber,
    IsCustomFieldSelected,
    IsCustomFieldSelectedv2,
    ArrayIncludesFilter,
    CustomFormBuilderComponent,
    CheckboxViewerComponent,
    CustomTextareaComponent,
    WebcameraComponent,
    CustomFileComponent,
    CheckboxBuilderComponent,
    WeightBuilderComponent,
    TextBuilderComponent,
    CameraBuilderComponent,
    AddressBuilderComponent,
    DateBuilderComponent,
    CounterBuilderComponent,
    EmailBuilderComponent,
    RadioButtonBuilderComponent,
    YesNoBuilderComponent,
    SelectBuilderComponent,
    ContactNoBuilderComponent,
    EntityBuilderComponent,
    EntitySettingDialogComponent,

    CustomFormViewerComponent,
    WeightViewerComponent,
    TextViewerComponent,
    DateViewerComponent,
    AddressViewerComponent,
    CounterViewerComponent,
    EmailViewerComponent,
    RadioButtonViewerComponent,
    YesNoViewerComponent,
    SelectViewerComponent,
    ContactNoViewerComponent,
    EntityViewerComponent,
    MembersPickerComponent,
    FretronToggleButtonComponent,
    DriverPickerComponent,
    ViewerComponent,
    AddressPipeOfCustomField,
    UserByUuid,
    YesNoComponent,
    DisableEvent,
    DisableClickEventDirective,
    DisableInputDirective,
    ClickDirective,
    PickTransporterComponent,
    SelectVehicleTypeComponent,
    UploadOrPickImageComponent,
    OrgDetailPipe,
    CustomFieldPickerComponent,
    CustomFieldEditorComponent,
    AppTimerComponent,
    TrimText,
    SelectionMade,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatInputModule,
    MatButtonModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatDividerModule,
    MatListModule,
    MatSelectModule,
    DragDropModule,
    MatMenuModule,
    MatProgressBarModule,
    MatRadioModule,
    MatChipsModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    // EffectsModule.forRoot([]),
    MatDatepickerModule,
    MatNativeDateModule,
    MatStepperModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatDialogModule,
    ChartsModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    // MyDateRangePickerModule,
    MatIconModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    MatTableModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatSortModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatExpansionModule,
    HttpClientModule,
    WebcamModule,
    MatSlideToggleModule,
    MatRippleModule,
    AceEditorModule,
  ],
  providers: [
    NgModel,
    MatProgressBar,
    HttpClient,
    JsonSchemaService,
    DatePipe,
  ],

  exports: [
    // filters
    SearchOrgFilter,
    SearchTripFilter,
    CommonModule,
    FormsModule,
    MsToDurationFilter,
    MsToDurationFilterDetails,
    SearchVehBranchFilter,
    DateFormatPipe,
    TimeFromNowPipe,
    FlatFilters,
    SearchByFilter,
    CustomNumber,
    IsCustomFieldSelected,
    IsCustomFieldSelectedv2,
    ArrayIncludesFilter,
    TrimNumberFilter,
    ReactiveFormsModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatButtonModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatDividerModule,
    MatListModule,
    MatSelectModule,
    MatMenuModule,
    MatProgressBarModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatToolbarModule,
    DragDropModule,
    MatRadioModule,
    // MyDateRangePickerModule,

    MatDatepickerModule,
    MatNativeDateModule,
    MatStepperModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatTabsModule,

    ChartsModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    // components
    AvatarComponent,
    MatCheckboxModule,
    VehicleFilter,
    DriverFilter,
    MemberFilter,
    DeviceFilter,
    ConcatStringFilter,
    PlacesListFilter,
    BusinessPartnerFilter,
    MatIconModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSliderModule,
    GroupFilter,
    OfficeSearchFilter,
    HttpClientModule,
    MatExpansionModule,
    CustomFormBuilderComponent,
    CheckboxViewerComponent,
    CustomTextareaComponent,
    WebcamModule,
    CustomFileComponent,
    CheckboxBuilderComponent,
    WeightBuilderComponent,
    TextBuilderComponent,
    DateBuilderComponent,
    CameraBuilderComponent,
    AddressBuilderComponent,
    CounterBuilderComponent,
    EmailBuilderComponent,
    RadioButtonBuilderComponent,
    YesNoBuilderComponent,
    SelectBuilderComponent,
    ContactNoBuilderComponent,
    EntityBuilderComponent,
    EntitySettingDialogComponent,

    CustomFormViewerComponent,
    DateViewerComponent,
    CameraBuilderComponent,
    AddressViewerComponent,
    WeightViewerComponent,
    TextViewerComponent,
    WebcameraComponent,
    CounterViewerComponent,
    EmailViewerComponent,
    RadioButtonViewerComponent,
    YesNoViewerComponent,
    SelectViewerComponent,
    ContactNoViewerComponent,
    EntityViewerComponent,
    MembersPickerComponent,
    FretronToggleButtonComponent,
    DriverPickerComponent,
    UserByUuid,
    YesNoComponent,
    DisableEvent,
    DisableClickEventDirective,
    DisableInputDirective,
    ClickDirective,
    SelectVehicleTypeComponent,
    PickTransporterComponent,
    UploadOrPickImageComponent,
    OrgDetailPipe,
    CustomFieldPickerComponent,
    CustomFieldEditorComponent,
    AppTimerComponent,
    TrimText,
    SelectionMade,
    MatRippleModule,
    AceEditorModule,
  ],
  entryComponents: [
    EntitySettingDialogComponent,
  ],
})
export class SharedModule {}
