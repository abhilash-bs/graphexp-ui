
var mapping = (function(){

function getMapping(){
	
	var mapping = [
	
			{		
			"label" : "zeographin",
			"serverip" : "localhost",
			"serverport" : 8224,
			"traverser" : "g"
			}
			,
			{
			"label" : "zeographuk",
			"serverip" : "localhost",
			"serverport" : 8225,
			"traverser" : "g"
			}
	
	];

	return mapping;
				
}
	return {
		getMapping : getMapping
	};
})();