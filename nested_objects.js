function flattenArray(arr) {
    if (!arr.length) return []
    let toReturn = []
    for (const ele of arr) {
        if (Array.isArray(ele)) {
            const temp = flattenArray(ele)
            toReturn=[...toReturn, ...temp]
        }
        else {
            toReturn.push(ele)
        }
    }
    return toReturn
}

const res1=flattenArray([1, [2, [3, 4], 5], 6]);
const res2=flattenArray([["a"], ["b", ["c", "d"]], "e"]);
console.log(res1, res2)


const input = {
  user: {
    id: 1,
    profile: {
      name: "Alice",
      contact: {
        email: "alice@example.com",
        phone: "12345"
      }
    }
  },
  status: "active"
};

/*
output:
{
  "user.id": 1,
  "user.profile.name": "Alice",
  "user.profile.contact.email": "alice@example.com",
  "user.profile.contact.phone": "12345",
  "status": "active"
}
*/

function flatten(input) {
    let toReturn={}
    const keys=Object.keys(input)
    for(const key of keys) {
        if(typeof input[key]==="object") {
            const obj=flatten(input[key])
            const ks=Object.keys(obj)
            for(const x of ks) {
                const ckey = `${key}.${x}`
                toReturn[ckey]=obj[x]
            }
        }
        else {
            toReturn[key]=input[key]
        }
    }
    return toReturn



const obj1 = {
  a: 1,
  b: { x: 10, y: 20 },
  d: { z: 100 }
};
const obj2 = {
  b: { y: 30, k: 40 },
  c: 3,
  d: 4
};

/*
✅ Expected Output:
{
  a: 1,
  b: { x: 10, y: 30, k: 40 },
  c: 3,
  d: 4
}
*/

const res = helper(obj1, obj2)

console.log(res)

function helper(obj1, obj2) {
    if((!obj1 && obj2) || (obj1 && !obj2)) {
        return "invalid inputs"
    }
    let toReturn={}
    const keys1=Object.keys(obj1)
    const keys2=Object.keys(obj2)
    for(const key of keys1) {
        toReturn[key]=obj1[key]
    }
    
    for(const key of keys2) {
        if(typeof obj2[key]==="object") {
            toReturn[key]={...toReturn[key],...obj2[key]}
        }
        else toReturn[key]=obj2[key]
        
    }
    
    return toReturn
    
    
}
    
}

const res=flatten(input)
console.log(res)
