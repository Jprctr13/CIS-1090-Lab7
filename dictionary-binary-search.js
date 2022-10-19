import words from "./words.js";

function binarySearch(needle, haystack){
    let low = 0;
    let high = haystack.length-1;
    while true{
        let mid = ((high + low)/2);
        Math.floor(mid);
        if(haystack[mid]==needle)
        return true;
        if(haystack[mid < needle])
        start mid;
        if(haystack[mid > needle])
        end mid;
        if start = end;
    return false;
}

export default function(word){
    return binarySearch(word, words);
}