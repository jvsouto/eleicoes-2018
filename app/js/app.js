var eleicoes = angular.module('eleicoes', [
  'ui.router',
  'ngResource',
  'ui.bootstrap',
  'eleicoes.api',
  'eleicoes.core',
  'eleicoes.dashboard'
])
.constant('HASH_API_BASE_URI', 'https://inep-hash-api-js.herokuapp.com/v2')
.constant('WORD_API_BASE_URI', 'https://inep-hash-word-api-dev.herokuapp.com')
.constant('CONFIG', {
  'HASH_API_URL': 'https://inep-hash-api-js.herokuapp.com/v2',
  'WORD_API_URL': 'https://inep-hash-word-api-dev.herokuapp.com',
  'HASH_API_URL_V2': 'https://inep-hash-api-js.herokuapp.com/v2'  
});

/* Inicializando tempo de milisegundos */
var nowState = new Date();

var now = new Date(nowState.getTime() - 11700000);
var now15m = new Date(now.getTime() - 15*60000);
var now60 = new Date(now.getTime() - 3600000);
var now24 = new Date(now.getTime() - 86400000);
var now7 = new Date(now.getTime() - 7*86400000);
var now15d = new Date(now.getTime() - 15*86400000);
var now30 = new Date(now.getTime() - 30*86400000);

var nowT = new Date(now).getTime();
var nowT15m = new Date(now).getTime() - 15*60000;
var nowT60 = new Date(now).getTime() - 3600000;
var nowT24 = new Date(now).getTime() - 86400000;
var nowT7 = new Date(now).getTime() - 7*86400000;
var nowT15d = new Date(now).getTime() - 15*86400000;
var nowT30 = new Date(now).getTime() - 30*86400000;

/* Organizando data da forma nescessaria para passar para o link; */
var dataNow = now.toISOString().replace(/z/gi,'');
var dataNow15m = now15m.toISOString().replace(/z/gi,'');
var dataNow60 = now60.toISOString().replace(/z/gi,'');
var dataNow24 = now24.toISOString().replace(/z/gi,'');
var dataNow7 = now7.toISOString().replace(/z/gi,'');
var dataNow15d = now15d.toISOString().replace(/z/gi,'');
var dataNow30 = now30.toISOString().replace(/z/gi,'');

function transformTime(lTime){
	if (lTime == "15m") {
		return dataNow15m;
	} else if (lTime == "1h") {
		return dataNow60;
	} else if (lTime == "1d") {
		return dataNow24;
	} else if (lTime == "7d") {
		return dataNow7;
	} else if (lTime == "15d") {
		return dataNow15d;
	}
}
