hgss.service('variablesService', ["httpService", function(httpService){

	var stations = [ "Bjelovar", "Čakovec", "Delnice", "Dubrovnik", "Gospić", "Karlovac", "Koprivnica", "Krapina", "Makarska", "Novska", "Ogulin", "Orahovica", "Orebić", "Osijek", "Požega", "Pula", "Rijeka", "Samobor", "Šibenik", "Slavonski", "Split", "Varaždin", "Vinkovci", "Zadar" ];
	var actionTypes = ["Potraga", "Spašavanje"];
	var groups;

	return {
		getGroups : function(){
			if(!groups){
				httpService.getAllGroups().then(function(res){
			        groups = res.data;
			    })
			}
			return groups;
		},
	    getStations : function(){ return stations; },
	    getActionTypes : function(){ return actionTypes; }
	}

}]);