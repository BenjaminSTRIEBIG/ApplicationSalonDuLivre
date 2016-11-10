app.controller('MenuController', ['$scope','$state',function($scope,$state){
	
	$scope.heures = [] ;
	for( var i=9 ; i<20 ; i++ ) $scope.heures.push( i ) ;
  
	$scope.Envoyer = function(data){
		if((typeof(data)!="undefined")&&(typeof(data)!="null")&&(typeof(data.heure)!="undefined")&&(typeof(data.jour)!="undefined")){
			$scope.heure=data.heure
	    	$state.go('showRdv',{jour:data.jour,heure:data.heure})
		}
		else{
			alert("Veuillez remplir le formulaire")
		}

	};
	  
}])//fin controller

app.controller('ShowRdvController',['$scope','$stateParams','sqlPrd',function($scope,$stateParams,sqlPrd){
	console.dir($stateParams)
	//    sqlPrd.select("SELECT * FROM rdv WHERE heure>=? AND jour>=?", [data.heure,data.jour], $scope.lesRDV);
	$scope.jour=$stateParams.jour
	$scope.heure=$stateParams.heure
	var date={
		s:'2016-11-21',
		d:'2016-11-22'
	}
	$scope.lesRDV=[] 
	var afterRequest=function(response){

	}
	
	if($scope.jour!="sd"){
		var jour=date[$scope.jour]
		var req="SELECT * FROM rdv WHERE heure>=? AND jour=?"
	//	sqlPrd.select(req,[$scope.heure,jour]).then(afterRequest)
	}
	else{
		var jour=date.s
		var req="SELECT * FROM rdv WHERE heure>=? AND jour>=?"
	//	sqlPrd.select(req,[$scope.heure,jour]).then(afterRequest)
	}
	
	sqlPrd.select("SELECT * FROM rdv",[]).then(afterRequest);
//	alert(req)
}])