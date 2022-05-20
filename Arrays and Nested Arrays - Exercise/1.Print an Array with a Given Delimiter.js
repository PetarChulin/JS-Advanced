function delimite(array , delimiter) {
    
    let text = '';   
    text = array.join(delimiter);
    console.log(text);

}
delimite(['How about no?','I','will', 'not','do','it!'], 
'_');