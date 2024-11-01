import { CheckItem } from "./check-item";

export class JournalEntry {
    id: number;
    toDoCheckList : CheckItem[];
    accomplishText : string;
    gratitudeText : string;
    planText : string;
    entryDate : Date;

    constructor(){
        this.id = 0;
        this.toDoCheckList  = [] as CheckItem[];
        this.accomplishText = '';
        this.gratitudeText = '';
        this.planText='';
        this.entryDate = new Date();
    }
}