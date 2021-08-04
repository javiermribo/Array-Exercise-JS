// ## Array Cardio Day 2

const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
/* const isAdult = () => {
  const blabla = people.map(age => {
    if((2021 - age.year) > 19) {
      console.log('Is an adult')
    } else {
      console.log('Is not an adult')
    }
  })
}

console.log(people.some(isAdult)) */ //Not working properly

const isAdult = people.some(person => {
  const currentYear = (new Date()).getFullYear();
  if((currentYear - person.year) >= 19) {
    return true;
  } else {
    return false;
  }
})

//console.log(isAdult)

// Array.prototype.every() // is everyone 19 or older?

const everybody19 = people.every((person) => {
  (new Date().getFullYear() - person.year >= 19)
});

//console.log(everybody19)


// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

const findComment = comments.find(comment => comment.id === 823423);

//console.log(findComment)

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423

const commentIndexWithId = comments.findIndex(comment => comment.id === 823423);
//const deleteComment = comments.filter(comment => comment.id != 823423);
const deleteComment = comments.splice(commentIndexWithId, 1)

//console.log(commentIndexWithId);
console.log(comments)