import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InputComponent } from './input/input.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { OutputComponent } from './output/output.component';



@NgModule({
  declarations: [
    NewComponentComponent,
    InputComponent,
    OutputComponent
  ],
  exports: [NewComponentComponent, InputComponent, OutputComponent],
  imports: [CommonModule]
})
export class SharedModule { }
