import { Input, Pipe, PipeTransform } from "@angular/core";

@Pipe({ name : 'pluralMeasure'})

export class PluralPipe implements PipeTransform {
    measureDict : {[key:string]:any} = {}; 

    constructor () {
        this.measureDict = {
            'Ounce' : {'Singular' : 'Ounce', 'Plural' : 'Ounces' },
            'Dash' : {'Singular' : 'Dash', 'Plural' : 'Dashes' },
        }
    }

    transform(amount: number, measure : string) {
        if (amount > 1)
        {
            return this.measureDict[measure]['Plural']
        }
        else 
        {
            return this.measureDict[measure]['Singular']
        }
    }
}