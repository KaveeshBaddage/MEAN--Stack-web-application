var app = angular.module('myapp',[]);


app.controller ('AppCtrl', function($scope){
    console.log("Hello controller");

    person1 ={
        name:'Hello',
        email: '123',
        number:'1'
    };
    person2 ={
        name:'gello',
        email: '456123',
        number:'31'
    };

    person3 ={
        name:'33Hello',
        email: '33123',
        number:'31'
    };

    var contactlist = [person1, person2 , person3];
    console.log(contactlist);
    $scope.contactlist = contactlist;
});