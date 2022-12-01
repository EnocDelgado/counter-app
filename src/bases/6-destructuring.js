// Destructuring

const person = {
    name: 'Tony',
    age: 45,
    key: 'Ironman'
};


// Rename a key
// const { name:name2 } = person;

// const { age, key, name } = person;

const returnPerson = ({ age, key, name }) => {
    // console.log( name, age, key )
}


const usContext = ({ age, key, name }) => {

    return {
        keyName: key,
        age: age
    }
}
 const {keyName, age } = usContext(person);

 console.log(keyName, age)