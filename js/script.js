// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Julianne Leblanc-Peltier
// Created on: April 2024
// This file contains the JS functions for index.html

// variable
const randomNumber = Math.floor(Math.random() * 6) + 1 // returns a random integer from 1 to 6 into variable "randomNumber"

function myButtonClicked() {
  const userNumberGuess = parseInt(document.getElementById("user-number-guess").value)

  if (userNumberGuess == randomNumber) {
    //output
    document.getElementById("number-guess-output").innerHTML = "You guessed correctly!"
  }

  if (userNumberGuess != randomNumber) {
    //output
    document.getElementById("number-guess-output").innerHTML = "You guessed incorrectly!"
  }

  if (userNumberGuess > 6 || userNumberGuess < 1) {
    //output
    document.getElementById("number-guess-output").innerHTML = "Please input a number from 1 to 6!"
  }
}
