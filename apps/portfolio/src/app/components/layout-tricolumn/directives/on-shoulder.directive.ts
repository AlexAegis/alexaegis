import { Portal, TemplatePortal } from '@angular/cdk/portal';
import {
	AfterViewInit,
	ChangeDetectorRef,
	Directive,
	Input,
	OnDestroy,
	OnInit,
	TemplateRef,
	ViewContainerRef,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LayoutTricolumnShoulderPortalsService } from '../services/layout-tricolumn-shoulder-portals.service';

@Directive({
	selector: '[portfolioOnShoulder]',
})
export class OnShoulderDirective implements OnInit, OnDestroy, AfterViewInit {
	@Input()
	private shoulder: 'left' | 'right' = 'left';

	private portalHandler!: BehaviorSubject<Portal<unknown>[]>;
	private templatePortal!: TemplatePortal;
	constructor(
		private readonly layoutTricolumnShoulderPortalsService: LayoutTricolumnShoulderPortalsService,
		private readonly viewContainerRef: ViewContainerRef,
		private readonly templateRef: TemplateRef<unknown>,
		private readonly cd: ChangeDetectorRef
	) {}

	ngOnInit(): void {
		if (this.shoulder === 'left') {
			this.portalHandler = this.layoutTricolumnShoulderPortalsService.leftShoulderPortals$;
		} else {
			this.portalHandler = this.layoutTricolumnShoulderPortalsService.rightShoulderPortals$;
		}
	}

	ngAfterViewInit(): void {
		this.templatePortal = new TemplatePortal(this.templateRef, this.viewContainerRef);
		this.portalHandler.next([...this.portalHandler.value, this.templatePortal]);
		setTimeout(() => this.cd.markForCheck(), 0); // On Next Tick
	}

	ngOnDestroy(): void {
		this.portalHandler.next(
			this.portalHandler.value.filter((portal) => portal !== this.templatePortal)
		);
	}
}
