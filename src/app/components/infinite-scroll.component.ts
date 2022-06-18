import { Component, OnInit, Output, EventEmitter, ElementRef, ViewChild, Input, OnDestroy, AfterViewInit } from '@angular/core';

@Component({
    selector: 'infinite-scroll',
    templateUrl: './infinite-scroll.component.html',
    styleUrls: ['./infinite-scroll.component.scss']
})
export class InfiniteScrollComponent implements OnInit, OnDestroy, AfterViewInit {
    @Input() options = {};
    @Output() scrolled = new EventEmitter();
    @ViewChild('anchorCheck')
    anchorCheck!: ElementRef<HTMLElement>;

    private observer!: IntersectionObserver;

    constructor(private host: ElementRef) { }
    ngAfterViewInit() {
        this.observer.observe(this.anchorCheck.nativeElement);
    }

    get element() {
        return this.host.nativeElement;
    }

    ngOnInit() {
        const options = {
            root: this.isHostScrollable() ? this.host.nativeElement : null,
            ...this.options
        };

        this.observer = new IntersectionObserver(([entry]) => {
            entry.isIntersecting && this.scrolled.emit();
        }, options);

    }

    private isHostScrollable() {
        const style = window.getComputedStyle(this.element);
        return style.getPropertyValue('overflow') === 'auto' ||
            style.getPropertyValue('overflow-y') === 'scroll';
    }

    ngOnDestroy() {
        this.observer.disconnect();
    }

}