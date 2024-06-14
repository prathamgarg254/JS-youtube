const arr = [1,2,3,4,5]

// for (const num of arr) {
//     console.log(num);
// }

// Maps

const map = new Map()
map.set('IN',"India")
map.set('USA' , "United States of America")
map.set('Fr' , "France")
map.set('IN',"India")

// console.log(map);

for (const [key,value] of map) {
    console.log(key);
}

const myobject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

// for (const [key,value] of myobject) {                //This will not work for iterating object
//     console.log(key);                                        
// }