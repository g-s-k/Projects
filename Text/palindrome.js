//string functions project
function revers(str) {
    // Accept an input string, str, and reverse its characters in order
    return str.split("").reverse().join("");
    
}
function uppercase(str) {
    // Convert all the characters of the input string, str, to upper
    // case. Reurn the uppercased string.
    return str.toLocaleUpperCase();
}
function palindrome(str) {
    // Check if the input string, str, is spelled the same forwards
    // as it is spelled backwards.
    // Return "is a palindrome" if it is, or "is not a palindrome" if it is not.
    var strMod;
    str = uppercase(str);
    strMod = revers(str);
    if(str===strMod) // strictly equal 
    {
        return "is a palindrome";
    }
    else {
        return "is not a palindrome";
    }
}