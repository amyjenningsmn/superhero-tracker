// console.log("Hello from client.min.js");

var app = angular.module("heroApp", []);

app.controller('HeroController', ['$http', function($http){
  var vm = this;
  vm.heroObject = {};
  vm.powersList = ['Invisibility', 'Flight', 'Super Speed', 'Heat Vision', 'Super Strength', 'Accellerated Healing', 'Power Blast', 'Animal Affinity'];
  vm.heroList = [];

  vm.addHeroData = function(){
    console.log('This is the heroObject being send to db:', vm.heroObject);
    $http.post('/hero/addHero', vm.heroObject).then(function(serverResponse){
      console.log('added this hero to db:', serverResponse);
      vm.heroObject = {};
      vm.getAllHeroes();
    })
  };

  vm.getAllHeroes = function(){
    $http.get('/hero/allHeroes').then(function(response){
      console.log('This is the server response from getAllHeroes', response);
      vm.heroList = response.data;
      console.log('These are the heroes currently in db', response.data);

      if (response.status !== 200){
        console.log('Error on getting heroes');
      }
    })
  };

  vm.deleteHero = function(hero, index){
    console.log("index", index);
    var id = hero._id;
    $http.delete('/hero/delete/' + id).then(function(response){
      console.log('ajax delete call made');
    });
    vm.getAllHeroes();
  
  }

  vm.getAllHeroes();



// end controller
}]);
