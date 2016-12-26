((app)=>{

  app.component('login',{
    templateUrl: 'src/js/components/login/login.html',
    controller: ['authorsService', function(authorsService){
      angular.extend(this, {
        $onInit(){

        }
      })
    }]
  })
})(angular.module('app.login'))
