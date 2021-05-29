import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AcrylicSquareComponent } from './components/acrylic-square/acrylic-square.component';

const components = [AcrylicSquareComponent];

@NgModule({
	declarations: [...components],
	imports: [CommonModule],
	exports: [...components],
})
export class MiscellaneousModule {}
