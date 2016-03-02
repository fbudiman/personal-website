angular.module('PersonalWebsite')
  .controller('MainController', MainController);

function MainController() {

  this.welcome = "Hello. It's me."
  this.description = "Web developer / Foodie / Aspiring World Traveler"
  this.about = "Who, me?"
  this.projects = "Recent Work:"
  this.contact = "Hello world! Say hello back:"

  this.images = {
    one: "images/project1-1.png",
    two: "images/project2-1.png",
    three: "images/project3-1.png",
    four: "images/project4-1.png"
  }
}
