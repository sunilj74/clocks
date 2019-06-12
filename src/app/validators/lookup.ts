import { AbstractControl, ValidatorFn } from '@angular/forms';

export function lookupValidator(data: any[] , name: string = ""): ValidatorFn {
    return (control: AbstractControl): 
        {[key: string]: any} | null =>
    {
        const value = control.value;
        if(data != null && data.length > 0 && value !== ''){
            let index = data.findIndex(p=>
            {
                if(typeof p === "string"){
                    return p == value;
                }
                else{
                    if(p!=null && p[name] == value){
                        return true;
                    }
                }
                return false;

            });


            if(index==-1){
                return {
                    lookup: true
                };
            }
        }
        return null;
    }
}