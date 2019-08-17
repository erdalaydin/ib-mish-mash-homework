
const groupAdultsByAgeRange = (group) => {

    if(group.length === 0) return {}
    let result = {}

    const adultPeople = group.filter((person)=>person.age >= 18)
    let cat1 = adultPeople.filter((people)=>people.age <=20)
    let cat2 = adultPeople.filter((people)=>people.age >=21 && people.age <=30)
    let cat3 = adultPeople.filter((people)=>people.age >=31 && people.age <=40)
    let cat4 = adultPeople.filter((people)=>people.age >=41 && people.age <=50)
    let cat5 = adultPeople.filter((people)=>people.age >=51)
    
    if(cat1.length !== 0) result["20 and younger"] = cat1
    if(cat2.length !== 0) result["21-30"] = cat2
    if(cat3.length !== 0) result["31-40"] = cat3
    if(cat4.length !== 0) result["41-50"] = cat4
    if(cat5.length !== 0) result["51 and older"] = cat5
    return result
}



//  var data = groupAdultsByAgeRange([
//     { name: "pete", age: 10 },
//     { name: "dove", age: 17 },
//     { name: "dave", age: 18 },
//     { name: "hall", age: 19 },
//     { name: "donn", age: 20 },
//     { name: "trey", age: 21 },
//     { name: "hann", age: 29 },
//     { name: "chew", age: 30 },
//     { name: "cloe", age: 31 },
//     { name: "dart", age: 39 },
//     { name: "this", age: 40 },
//     { name: "dame", age: 41 },
//     { name: "henk", age: 49 },
//     { name: "anna", age: 50 },
//     { name: "olga", age: 51 },
//     { name: "bert", age: 52 },
//     { name: "oldd", age: 120 },
//   ])


// console.log(data);



module.exports = {groupAdultsByAgeRange}