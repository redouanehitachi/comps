import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimes]',
  standalone: true,
})
export class TimesDirective {
  constructor(
    private viewcontainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}
  @Input('appTimes') set render(times: number) {
    this.viewcontainer.clear();
    for (let index = 0; index < times; index++) {
      this.viewcontainer.createEmbeddedView(this.templateRef, {});
    }
  }
}
