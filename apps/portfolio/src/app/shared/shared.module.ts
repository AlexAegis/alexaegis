import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const modules = [CommonModule, RouterModule];

@NgModule({
	imports: [...modules],
	exports: [...modules],
})
export class SharedModule {}
