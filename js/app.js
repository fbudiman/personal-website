angular
  .module('PersonalWebsite', ['ui.router'])
  .config(MainRouter)

function MainRouter($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('welcome', {
      url: '/',
      templateUrl: 'views/welcome.html'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'views/about.html'
    })
    .state('projects', {
      url: '/projects',
      templateUrl: 'views/projects.html'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: 'views/contact.html'
    })
    .state('project-one', {
      url: '/project-one',
      templateUrl: 'views/project-one.html'
    })
    .state('project-two', {
      url: '/project-two',
      templateUrl: 'views/project-two.html'
    })
    .state('project-three', {
      url: '/project-three',
      templateUrl: 'views/project-three.html'
    })
    .state('project-four', {
      url: '/project-four',
      templateUrl: 'views/project-four.html'
    })

    $urlRouterProvider.otherwise('/')
}
