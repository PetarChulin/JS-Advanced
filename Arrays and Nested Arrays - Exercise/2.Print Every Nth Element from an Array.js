function printNthElement(array , step) {
    
    return array.filter((e,i ) => i % step == 0);
}

//     let newArray = [];

//     for (let i = 0; i < array.length; i+=step) {
        
//         newArray.push(array[i]);
//     }
//     return newArray;
// }

printNthElement(['5', '20', '31', '4', '20'], 
2);
