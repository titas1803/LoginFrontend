import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { truncate } from 'fs';

@Directive({
  selector: '[appPasswordMatch]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: PasswordMatchDirective,
    multi: true
  }]
})
export class PasswordMatchDirective implements Validator {

  constructor() { }

  @Input() appPasswordMatch: string;
  validate(control: AbstractControl): ValidationErrors {
    const controlToCompare=control.parent.get(this.appPasswordMatch);
    if(controlToCompare && controlToCompare.value!== control.value){
      return {'notEqual': true};
    }
    return {'notEqual': false};
  }

}
