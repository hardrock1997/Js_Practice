const users = [
{ id: 1, name: "Alice", age: 28 },
{ id: 2, name: "Bob", age: 35 },
{ id: 3, name: "Charlie", age: 22 }
];

/*
Tasks:
- Return an array of usernames.
- Return an object mapping id -> name.
- Filter users older than 25 and return their names.

*/

const userNames = users.map((user)=>{
    return user.name
})

const userNamesWithId = users.map((user)=>{
    return {[user.id]:`-> ${user.name}`}
})

const usersFiltered = users.filter((user)=>{
    if(user.age>25) {
        return user.name
    }
})
console.log(userNames)
console.log(userNamesWithId)
console.log(usersFiltered)



const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

/*
Return an object like { apple: 3, banana: 2, orange: 1 }
*/

function getFreq(fruits) {
    const fm=new Map()
    for(const fruit of fruits) {
        if(fm.has(fruit)) {
            fm.set(fruit, fm.get(fruit)+1)
        }
        else {
            fm.set(fruit,1)
        }
    }
    const toReturn={}
    for(const [key,value] of fm) {
        toReturn[key]=value
    }
    return toReturn
}

const freObj=getFreq(fruits)
console.log(freObj)




const people = [
{ name: 'Alice', role: 'admin' },
{ name: 'Bob', role: 'user' },
{ name: 'Charlie', role: 'admin' },
{ name: 'Dave', role: 'user' },
];
/*
Task:
- Group people by role into an object like: { admin: ['Alice', 'Charlie'], user: ['Bob', 'Dave'] }
*/

function groupByRoles(people) {
    const n=people.length
    const m=new Map()
    for(const person of people) {
        if(m.has(person.role)) {
            const val=m.get(person.role)
            val.push(person.name)
            m.set(person.role, val)
        }
        else {
            m.set(person.role,[person.name])
        }
    }
    
    const toReturn={}
    for(const [key,value] of m) {
        toReturn[key]=value
    }
    return toReturn
}

const obj=groupByRoles(people)
console.log(obj)



const data = [
{ name: "Alice", scores: { math: 90, english: 80 } },
{ name: "Bob", scores: { math: 70, english: 85 } },
{ name: "Charlie", scores: { math: 85, english: 78 } }
];
/*
 Calculate Average Scores by Subject:
*/

function getAllSubjects(data) {
    const m=new Map()
    let obj={}
    for(const d of data) {
        obj=d.scores
        for(const [key,value] of Object.entries(obj)) {
            if(m.has(key)) {
                const val=m.get(key)
                val[0]+=value
                val[1]+=1
                m.set(key,val)
            }
            else {
                m.set(key,[value,1])
            }
        }
    }
    return m
}

const subjectsWithMarks=getAllSubjects(data)

function getAverageBySubjects(subjectsWithMarks) {
    const toReturn={}
    for(const [key,value] of subjectsWithMarks) {
      const subject=key
      const number=value[1]
      const marks=value[0]
      const avg=marks/number
      toReturn[key]=Number(avg.toFixed(2))
    }
    return toReturn
}

const result=getAverageBySubjects(subjectsWithMarks)
console.log(result)


const input = {
a: 1,
    b: {
        c: 2,
        d: {
            e: 3
        }
    }
};
/*
Flatten Object to Key Paths:
Output: { "a": 1, "b.c": 2, "b.d.e": 3 }
*/


const result=flattenHelper(input)
console.log(result)

function flattenHelper(input) {
    if(Array.isArray(input)) {
        return "Input is not an object"
    }
    if(!input) {
        return "not a valid input"
    }
    const toReturn={}
    const keys=Object.keys(input)
    for(const k of keys) {
        const val=input[k]
        if(typeof val!=="object") {
            toReturn[k]=val
        }
        else {
           const obj=flattenHelper(val)
           
           for(const [key,value] of Object.entries(obj)) {
               let customKey=""
               customKey+=`${k}.${key}`
               toReturn[customKey]=value
           }
            
        }
    }
    return toReturn
}

const articles = [
{ title: "A", tags: ["js", "web"] },
{ title: "B", tags: ["js", "backend"] },
{ title: "C", tags: ["css", "web"] }
];

/*
Output: { js: 2, web: 2, backend: 1, css: 1 }
*/

const tagFreq=articles.reduce(function(map,curr) {
   const tags=curr.tags
   for(const tag of tags) {
       if(map.has(tag)) {
           map.set(tag, map.get(tag)+1)
       }
       else {
           map.set(tag,1)
       }
   }
   return map
},new Map())


const freqObject = getFreqObj(tagFreq) 
console.log(freqObject)
    
function getFreqObj(tagFreq) {
    const toReturn={}
    for(const [k,v] of tagFreq) {
        toReturn[k]=v
    }
    return toReturn
}

const logs = [
{ user: "alice", action: "login", time: 10 },
{ user: "bob", action: "logout", time: 15 },
{ user: "alice", action: "logout", time: 20 },
];


/*
Task:
- Group by user: {
alice: [{ action: "login", time: 10 }, { action: "logout", time: 20 }],
bob: [{ action: "logout", time: 15 }]
}
*/

const grouped = logs.reduce((acc, log) => {
  const { user, ...rest } = log; // destructure to drop `user`
  if (!acc[user]) {
    acc[user] = [];
  }
  acc[user].push(rest);
  return acc;
}, {});

console.log(grouped);



const list = [
{ id: 1, name: "Alice" },
{ id: 2, age: 30 },
{ id: 1, city: "New York" },
{ id: 2, name: "Bob" }
];

/*
Task:
- Merge objects with same ID to get:
[
{ id: 1, name: "Alice", city: "New York" },
{ id: 2, age: 30, name: "Bob" }
]
*/

const updatedList = list.reduce(function(acc,curr) {
    const {id, ...rest}=curr
    if(!acc[id]) {
        acc[id]=[]
    }
    acc[id].push(curr)
    return acc
},{})


const merged = Object.entries(updatedList).map(([id, items]) => {
  return items.reduce((acc, obj) => Object.assign(acc, obj), {});
});

console.log(merged);


