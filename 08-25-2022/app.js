// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

const accum = s => s.split("").reduce((total, current, index) => total + (index !== 0 ? "-" : "") + current.toUpperCase() + current.toLowerCase().repeat(index), "");

console.log(accum("alSdf"));