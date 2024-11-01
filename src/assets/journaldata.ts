import { CheckItem } from "src/app/check-item"
import { JournalEntry } from "src/app/journal-entry"

export var checkItems = [
    {
        id : 1,
        name : "TodayTest",
        isDone: false
    },
    {
        id:2,
        name: "Another TodayTest",
        isDone: true
    }
]

export var journalEntries : JournalEntry[] = [
    {
        id: 1,
        toDoCheckList : [{
            id : 1,
            name : "TodayTest",
            isDone: false
        },
        {
            id:2,
            name: "Another TodayTest",
            isDone: true
        }],
        accomplishText : "Accomplishments go here",
        gratitudeText : "Grateful for Typescript?",
        planText : "I plan to make this damn website",
        entryDate : new Date()
    },
    {
        id : 2,
        toDoCheckList : [{
            id : 1,
            name : "TomorrowTest",
            isDone: false
        },
        {
            id:2,
            name: "Another TomorrowTest",
            isDone: true
        }],
        accomplishText : "Accomplishments will go here",
        gratitudeText : "Grateful for having done Typescript",
        planText : "I plan to make this damn website still",
        entryDate : new Date()
    }
]