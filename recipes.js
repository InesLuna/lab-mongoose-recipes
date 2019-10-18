const mongoose = require('mongoose');
const Recipe = require("./models/Recipe.js")
const data = require('./data.js');

mongoose.connect('mongodb://localhost/recipeApp')
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });

// introducir a mano una receta
  let createRecipe = () => {
    Recipe.create({ title: 'nada', level:"Easy Peasy", cuisine: 'nada' })
      .then(recipe => { console.log('The user is saved and its value is: ', recipe) })
      .catch(err => { console.log('An error happened:', err)
  })};

//introducir varias recetas

let insertRecipes = (arr)=> {
  Recipe.insertMany(arr)
    .then(recipe => { console.log('The user is saved and its value is: ', recipe) })
    .catch(err => { console.log('An error happened:', err)})}

let updateByTitle = (recipeTitle) =>{
  Recipe.updateOne({title: recipeTitle}, {duration: 100})
    .then(recipe => console.log(`${recipe} has been updated`))
    .catch(err => { console.log('An error happened:', err)})
}

let removeRecipe = (recipeTitle) =>{
  Recipe.deleteOne({title: recipeTitle})
    .then(recipe => console.log(`The recipie has been deleted`))
    .catch(err => { console.log('An error happened:', err)})
}

removeRecipe('Carrot Cake')