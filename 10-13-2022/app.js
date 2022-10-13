// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = "cnet"

//string, never empty, always a URL, any URL
//returns a string, domain name of the parameter URL

const domain = (url) => {
    //replace 'http://'
    url = url.replace('http://', '')
    //replace 'https://'
    url = url.replace('https://', '')
    //replace 'www.'
    url = url.replace('www.', '')

    //split url by '.' and return first element
    return url.split('.')[0]
}

console.log(domain('http://github.com/carbonfive/raygun')) // => 'github'
console.log(domain('http://www.zombie-bites.com')) // => 'zombie-bites'
console.log(domain('https://www.cnet.com')) // => 'cnet'
console.log(domain('www.cnet.com')) // => 'cnet'
console.log(domain('http://google.co.jp')) // => 'cnet'