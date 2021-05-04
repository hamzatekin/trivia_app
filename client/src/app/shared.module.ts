import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import {
  DxValidationSummaryModule,
  DxValidatorModule,
  DxValidationGroupModule,
  DxAutocompleteModule,
  DxButtonModule,
  DxLookupModule,
  DxDataGridModule,
  DxPopoverModule,
  DxPopupModule,
  DxTextBoxModule,
  DxTextAreaModule,
  DxFileUploaderModule,
  DxScrollViewModule,
  DxSelectBoxModule,
  DxMultiViewModule,
  DxCheckBoxModule,
  DxListModule,
  DxTabPanelModule,
  DxDateBoxModule,
  DxTreeListModule,
  DxTreeViewModule,
  DxNumberBoxModule,
  DxLoadIndicatorModule,
  DxCalendarModule,
  DxTagBoxModule,
  DxLoadPanelModule,
  DxPieChartModule,
  DxRadioGroupModule,
  DxButtonGroupModule,
  DxDropDownButtonModule,
  DxHtmlEditorModule,
  DxSwitchModule,
  DxAccordionModule,
  DxGalleryModule,
  DxTooltipModule,
  DxDropDownBoxModule,
  DxProgressBarModule,
  DxFileManagerModule,
  DxSchedulerModule,
  DxGanttModule,
  DxTileViewModule,
} from 'devextreme-angular';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DxSchedulerModule,
    DxValidationSummaryModule,
    DxValidatorModule,
    DxValidationGroupModule,
    DxAutocompleteModule,
    DxAccordionModule,
    DxGalleryModule,
    DxButtonModule,
    DxLookupModule,
    DxDataGridModule,
    DxPopoverModule,
    DxPopupModule,
    DxTextBoxModule,
    DxTextAreaModule,
    DxFileUploaderModule,
    DxProgressBarModule,
    DxScrollViewModule,
    DxTileViewModule,
    DxSelectBoxModule,
    DxMultiViewModule,
    DxCheckBoxModule,
    DxListModule,
    DxTabPanelModule,
    DxDateBoxModule,
    DxTreeListModule,
    DxFileManagerModule,
    DxTreeViewModule,
    DxNumberBoxModule,
    DxLoadIndicatorModule,
    DxCalendarModule,
    DxTagBoxModule,
    DxLoadPanelModule,
    DxPieChartModule,
    DxRadioGroupModule,
    DxButtonGroupModule,
    DxDropDownButtonModule,
    DxHtmlEditorModule,
    DxSwitchModule,
    DxTooltipModule,
    DxGanttModule,
    DxDropDownBoxModule,
  ],
  exports: [
    CommonModule,
    DxValidationSummaryModule,
    DxValidatorModule,
    DxValidationGroupModule,
    DxAutocompleteModule,
    DxAccordionModule,
    DxGalleryModule,
    DxButtonModule,
    DxLookupModule,
    DxDataGridModule,
    DxPopoverModule,
    DxPopupModule,
    DxProgressBarModule,
    DxTextBoxModule,
    DxTextAreaModule,
    DxTileViewModule,
    DxFileUploaderModule,
    DxScrollViewModule,
    DxSchedulerModule,
    DxSelectBoxModule,
    DxMultiViewModule,
    DxCheckBoxModule,
    DxListModule,
    DxTabPanelModule,
    DxDateBoxModule,
    DxTreeListModule,
    DxTreeViewModule,
    DxNumberBoxModule,
    DxLoadIndicatorModule,
    DxCalendarModule,
    DxTagBoxModule,
    DxLoadPanelModule,
    DxPieChartModule,
    DxFileManagerModule,
    DxRadioGroupModule,
    DxButtonGroupModule,
    DxDropDownButtonModule,
    DxSwitchModule,
    DxTooltipModule,
    DxDropDownBoxModule,
    DxGanttModule,
  ],
})
export class SharedModule {}