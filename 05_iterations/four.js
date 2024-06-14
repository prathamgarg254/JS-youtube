const myobject  = {
    js: "Javascript",
    cpp : "C++",
    rb: "Ruby",
    swift: "swift by apple"
}

// for (const key in myobject) {
//    console.log(key);
// }

// for (const key in myobject) {
//    console.log(myobject[key]);
// }

const myarr = ["js","cpp","rb"]

for (const key in myarr) {
    console.log(key);
}

// for in loop will not work on maps as maps are not iterable