
var app = angular.module('starter', ['ionic','ui.router','remoteSqlPrdModule'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


.config(function($stateProvider, $urlRouterProvider){

  $stateProvider.state('home',{
    url:'/menu',
    templateUrl:'templates/menu.html',
    controller:'MenuController'
  });//Fin vue

 $stateProvider.state('showRdv',{
    url:'/showRdv/:jour/:heure',
    templateUrl:'templates/showRDV.html',
    controller:'ShowRdvController'
  });//Fin vue

  $urlRouterProvider.otherwise('/menu')

});//fin fonctin


app.config( ["sqlPrdProvider", function( sqlPrdProvider)
{   
    // Appel de la méthode config du provider de provider webSql pour enregistrer une configuration
    // qui sera utilisée au moment de l'appel de la fabrique référencée par l'argument $get
    // On ne précise rien pour l'URL car nous déjà  dans le répertoire www du WEB service
    // Le nom de la base de données est ici "lcsalsacggroot"
    // Les paramètres de connection Ã  cette dernière stockés dans le fichier config.php du WEB service
    sqlPrdProvider.config( "lcsalsacggroot.mysql.db", "lcsalsacggroot", "lcsalsacggroot", "Lcs123Bd", function( provider )
    { 
        // Retourne l'objet singleton
        return provider ;
    });
}]);

/*Base de données:

Serveur: lcsalsacggroot.mysql.db
BD: lcsalsacggroot
login: lcsalsacggroot
password: Lcs123Bd*/
