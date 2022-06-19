import { Component, OnInit, Output, EventEmitter, ElementRef, ViewChild, Input, OnDestroy, AfterViewInit } from '@angular/core';

@Component({
    selector: 'infinite-scroll',
    templateUrl: './infinite-scroll.component.html',
    styleUrls: ['./infinite-scroll.component.scss']
})
export class InfiniteScrollComponent implements OnInit, OnDestroy, AfterViewInit {
    @Output() scrolled = new EventEmitter();
    @ViewChild('anchorCheck')
    public anchorCheck!: ElementRef<HTMLElement>;
    private observer!: IntersectionObserver;

    constructor() { }

    ngOnInit() {
        this.initObserver();
    }

    ngAfterViewInit() {
        this.observer.observe(this.anchorCheck.nativeElement);
    }

    ngOnDestroy() {
        this.observer.disconnect();
    }

    initObserver() {
        const options = {
            root: null,
            rootMargin: "0px"
        };
        this.observer = new IntersectionObserver(([entry]) => {
            entry.isIntersecting && this.scrolled.emit();
        }, options);
    }
}