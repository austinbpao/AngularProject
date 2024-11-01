import { Input, Pipe, PipeTransform } from "@angular/core";

@Pipe({ name : 'comma'})

export class CommaPipe implements PipeTransform {
    transform(value: string) {
        const commas = value.split(',');
        var newString = '';
        for(let i = 1; i<=commas.length; i++){
            newString += commas[commas.length-i] + ' ';
        }
        return newString;
    }
}