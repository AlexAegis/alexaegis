import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const modules = [CommonModule, RouterModule, FontAwesomeModule];

@NgModule({
	imports: [...modules],
	exports: [...modules],
})
export class SharedModule {}
