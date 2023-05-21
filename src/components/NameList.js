import React from 'react'

function NameList() {
    const person = [
        {
            id: 1,
            name: 'Sachin',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Nitin',
            age: 25,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Rakesh',
            age: 28,
            skill: 'Java'
        },
        {
            id: 4,
            name: 'Jatin',
            age: 23,
            skill: 'Python'
        },
        {
            id: 5,
            name: 'Vaibhav',
            age: 24,
            skill: 'Mysql'
        },
        {
            id: 6,
            name: 'Shrikant',
            age: 23,
            skill: 'DSA'
        },
        {
            id: 7,
            name: 'Manthan',
            age: 24,
            skill: 'javascript',
        },
        {
            id: 8,
            name: 'Aashish',
            age: 22,
            skill: 'Node.js',
        },
        {
            id: 9,
            name: 'Pavan',
            age: 23,
            skill: 'Vue.js'
        },
        {
            id: 10,
            name: 'Shubham',
            age: 24,
            skill: 'MongoDb'
        }
    ]
    
    const personList = person.map(person => (
        <h2>
         {person.name}. is a {person.age}. years old. He know {person.skill}
        </h2>
        ))
  return <div>{personList}</div>
  
}

export default NameList
