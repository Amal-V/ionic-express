import { NgModule } from '@angular/core';
import { ActionSheetComponent } from './action-sheet/action-sheet';
import { ButtonComponent } from './button/button';
@NgModule({
	declarations: [ActionSheetComponent,
    ButtonComponent],
	imports: [],
	exports: [ActionSheetComponent,
    ButtonComponent]
})
export class ComponentsModule {}
