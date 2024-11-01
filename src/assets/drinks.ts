// import { DrinkRecipe } from "src/app/drink-recipe";
// import { Ingredient } from "src/app/ingredient";

// export var drinks : DrinkRecipe[] = [
//     {
//         id : 1,
//         name : "Whiskey Sour",
//         ingredients : [
//             {
//                 id: 1,
//                 name : "Whiskey",
//                 quantity : 1.5,
//                 unit : "Oz"
//             },
//             {
//                 id: 2,
//                 name : "Lemon Super Juice",
//                 quantity : .75,
//                 unit : "Oz"
//             },
//             {
//                 id: 3,
//                 name : "2:1 Simple Syrup",
//                 quantity : .75,
//                 unit : "Oz"
//             }
//         ]
//     },
//     {
//         id : 2,
//         name : "Aviation",
//         ingredients : [
//             {
//                 id: 4,
//                 name : "Gin",
//                 quantity : 1.5,
//                 unit : "Oz"
//             },
//             {
//                 id: 2,
//                 name : "Lemon Super Juice",
//                 quantity : .5,
//                 unit : "Oz"
//             },
//             {
//                 id: 3,
//                 name : "2:1 Simple Syrup",
//                 quantity : .5,
//                 unit : "Oz"
//             },
//             {
//                 id: 5,
//                 name : "Maraschino Liquer",
//                 quantity : .5,
//                 unit : "Oz"
//             },
//             {
//                 id: 6,
//                 name : "Violet Liquer",
//                 quantity : .5,
//                 unit : "Oz"
//             },
//         ]
//     },
//     {
//         id : 3,
//         name : "Jack Rose",
//         ingredients : [
//             {
//                 id: 7,
//                 name : "Apple Brandy",
//                 quantity : 1.5,
//                 unit : "Oz"
//             },
//             {
//                 id: 2,
//                 name : "Lemon Super Juice",
//                 quantity : .75,
//                 unit : "Oz"
//             },
//             {
//                 id: 8,
//                 name : "2:1 Grenadine",
//                 quantity : .75,
//                 unit : "Oz"
//             }
//         ]
//     },
//     {
//         id : 4,
//         name : "Brandy Alexander",
//         ingredients : [
//             {
//                 id: 9,
//                 name : "Cognac",
//                 quantity : 1.5,
//                 unit : "Oz"
//             },
//             {
//                 id: 10,
//                 name : "Dark Creme de Cacao",
//                 quantity : .5,
//                 unit : "Oz"
//             },
//             {
//                 id: 11,
//                 name : "Cream",
//                 quantity : .5,
//                 unit : "Oz"
//             }
//         ]
//     },
//     {
//         id : 5,
//         name : "Old Fashioned",
//         ingredients : [
//             {
//                 id: 12,
//                 name : "Rye Whiskey",
//                 quantity : 2,
//                 unit : "Oz"
//             },
//             {
//                 id: 13,
//                 name : "Angostura Bitters",
//                 quantity : 3,
//                 unit : "Dashes"
//             },
//             {
//                 id: 3,
//                 name : "2:1 Simple Syrup",
//                 quantity : 1,
//                 unit : "Bar Spoon"
//             }
//         ]
//     },
//     {
//         id : 6,
//         name : "Cinnamon Sour",
//         ingredients : [
//             {
//                 id: 1,
//                 name : "Whiskey",
//                 quantity : 1.5,
//                 unit : "Oz"
//             },
//             {
//                 id: 14,
//                 name : "Lime Super Juice",
//                 quantity : .75,
//                 unit : "Oz"
//             },
//             {
//                 id: 15,
//                 name : "2:1 Cinnamon Simple Syrup",
//                 quantity : .75,
//                 unit : "Oz"
//             }
//         ]
//     },
//     // {
//     //     id: 12,
//     //     name: "Mimosa",
//     //     ingredients : [
//     //         {
//     //             id: 19,
//     //             name : "Water",
//     //             quantity : 2,
//     //             unit : "Oz"
//     //         },
//     //         {
//     //             id: 20,
//     //             name : "Orange Super Juice",
//     //             quantity : .5,
//     //             unit : "Oz"
//     //         },
//     //         {
//     //             id: 3,
//     //             name : "2:1 Simple Syrup",
//     //             quantity : .5,
//     //             unit : "Oz"
//     //         },
//     //         {
//     //             id: 22,
//     //             name: "Champagne",
//     //             quantity: 3,
//     //             unit: "Oz"
//     //         }
//     //     ]
//     // }
// ]

// export var softDrinks : DrinkRecipe[] = [
//     {
//         id : 8,
//         name : "Lemonade",
//         ingredients : [
//             {
//                 id: 19,
//                 name : "Water",
//                 quantity : 4,
//                 unit : "Oz"
//             },
//             {
//                 id: 2,
//                 name : "Lemon Super Juice",
//                 quantity : 1,
//                 unit : "Oz"
//             },
//             {
//                 id: 3,
//                 name : "2:1 Simple Syrup",
//                 quantity : 1,
//                 unit : "Oz"
//             }
//         ]
//     },
//     // {
//     //     id : 9,
//     //     name : "Orangeade",
//     //     ingredients : [
//     //         {
//     //             id: 19,
//     //             name : "Water",
//     //             quantity : 4,
//     //             unit : "Oz"
//     //         },
//     //         {
//     //             id: 20,
//     //             name : "Orange Super Juice",
//     //             quantity : 1,
//     //             unit : "Oz"
//     //         },
//     //         {
//     //             id: 3,
//     //             name : "2:1 Simple Syrup",
//     //             quantity : 1,
//     //             unit : "Oz"
//     //         }
//     //     ]
//     // },
//     {
//         id : 10,
//         name : "Shirley Temple",
//         ingredients : [
//             {
//                 id: 21,
//                 name : "Ginger Ale",
//                 quantity : 8,
//                 unit : "Oz"
//             },
//             {
//                 id: 8,
//                 name : "2:1 Grenadine",
//                 quantity : 1,
//                 unit : "Oz"
//             }
//         ]
//     },
//     {
//         id:11,
//         name: "Pour Over Coffee"
//     },
//     {
//         id: 12,
//         name: "Earl Gray Tea"
//     },
//     {
//         id: 13,
//         name: "Bengal Spice Tea"
//     }


// ]