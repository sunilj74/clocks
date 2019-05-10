import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { lookupValidator } from 'src/app/validators/lookup';

@Directive({
  selector: '[in-lookup]',
  providers: [
                {
                  provide: NG_VALIDATORS,
                  useExisting: InputLookupDirective,
                  multi: true
                }
  ]
})
export class InputLookupDirective implements Validator {
  @Input('in-lookup') lookupValues: any[] | string[];
  @Input('in-lookup-name') lookupName: string;

  constructor() { }

  validate(control: AbstractControl): 
    {[key: string]: any} | null 
  {
    let validator = lookupValidator(this.lookupValues, this.lookupName);
    return validator(control);
  }

}
