import { Portal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class LayoutTricolumnShoulderPortalsService {
	leftShoulderPortals$ = new BehaviorSubject<Portal<unknown>[]>([]);
	rightShoulderPortals$ = new BehaviorSubject<Portal<unknown>[]>([]);
}
