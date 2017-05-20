hgss.service('variablesService', [ function(){

	var stations = [ "Bjelovar", "Čakovec", "Delnice", "Dubrovnik", "Gospić", "Karlovac", "Koprivnica", "Krapina", "Makarska", "Novska", "Ogulin", "Orahovica", "Orebić", "Osijek", "Požega", "Pula", "Rijeka", "Samobor", "Šibenik", "Slavonski", "Split", "Varaždin", "Vinkovci", "Zadar" ];
	var actionTypes = ["Potraga", "Spašavanje"];

	return {
	    getStations : function(){ return stations; },
	    getActionTypes : function(){ return actionTypes; }
	}

}]);