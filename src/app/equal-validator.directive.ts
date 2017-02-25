import { Directive, forwardRef, Attribute } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
    selector:'[validateEqual]',
    providers:[{provide: NG_VALIDATORS, useExisting: forwardRef(()=>EqualValidator), multi:true}]
})

// validateEqual is the control used to match;
// reverse is used to identify display error on match confirm pwd control
export class EqualValidator implements Validator{
    constructor(@Attribute('validateEqual') public validateEqual:string, @Attribute("reverse") public reverse:string){

    }

     private get isReverse() {
        if (!this.reverse) return false;
        return this.reverse === 'true' ? true: false;
    }

    validate(c: AbstractControl): { [key: string]: any } {
        // self value
        let v = c.value;

        // control vlaue
        let e = c.root.get(this.validateEqual);       
        // value not equal
        if (e && v !== e.value && !this.isReverse) {
          return {
            "pwdmisMatch":true,
            validateEqual: false
          }
        }

        // value equal and reverse
        if (e && v === e.value && this.isReverse) {
            delete e.errors['validateEqual'];
            if (!Object.keys(e.errors).length) e.setErrors(null);
        }

        // value not equal and reverse
       
        console.log(v);
        if (e && v !== e.value && this.isReverse) {           
            e.setErrors({
                "pwdmisMatch":true,
                validateEqual: false
            })
        }

        return null;
    }
}