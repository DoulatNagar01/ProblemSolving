function palendrom(str) {
    let str2 = "";
    for (let i = str.length-1; i>=0; i--) {
        str2+=str[i];
    }
    if (str===str2) {
        return true;
    } else {
        return false;
    }
}
// console.log(str2);
console.log(palendrom("madam"));