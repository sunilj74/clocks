import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  private hasView = false;

  @Input() set appUnless(condition: boolean) {
    console.log({templateRef: this.templateRef, viewContainer: this.viewContainer, condition});
    if(!condition && !this.hasView){
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    }
    else if(condition && this.hasView){
      this.viewContainer.clear();
      this.hasView =false;
    }

  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) 
  { 
  }

}
