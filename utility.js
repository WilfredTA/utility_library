

(function(){

	function argsToArray(args){
		var arr = [];
		for (var i = 0; i < args.length; i++){
			arr.push(args[i]);
		}
		return arr;
	};

	var range = function(start, end){
				var arr =[];
				if (end === undefined){
					end = start;
					start = 0;
				}

				for (var i = start; i<= end-1; i++ ){
					arr.push(i);
				};

				return arr;

	};

	function removeRepeats(array){
		var uniques = [];

		for (var i = 0; i < array.length; i++){
			if (!uniques.includes(array[i])){
				uniques.push(array[i]);
			}
		}

		return uniques;
	};

	function getRandomInt(min, max) {
  		min = Math.ceil(min);
  		max = Math.floor(max);
  		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	var arrayUtilities = {

				first: function(){
					return this.element[0];
				},

				last: function(){
					return this.element[this.element.length - 1];
				},

				without: function(){
					var args = argsToArray(arguments);
					return this.element.filter(function(el){
						if (!args.includes(el)){
							return el;
						}
					});
				},

				lastIndexOf: function(num){
					var idx;

					for(var i = this.element.length -1; i >=0; i--){
						if (this.element[i] === num){
							idx = i;
							break;
						}
					}

					return idx;
				},
				sample: function(quantity){
					var samples = [];
					if (quantity === undefined){
						quantity = 1;
					}
					var uniqueElements = removeRepeats(this.element).sort(function(a,b){
						return a - b;
					});
					var min = uniqueElements[0];
					var max = uniqueElements[uniqueElements.length - 1];

					for (var i = 1; i <= quantity; i++){
						samples.push(getRandomInt(min, max))
					};

					if (samples.length === 1){
						return samples[0];
					} else {
						return samples;
					}
				}

	};

	function ObjectUtilLibrary(obj){
		// add hash utilities here
		this.findWhere = function() {};
		if(obj !== undefined){
			obj.constructor = ObjectUtilLibrary;
			this.constructor.prototype = obj;
		};
	};

	var _ = function(element){
		var utilities = new ObjectUtilLibrary(arrayUtilities);
		utilities.element = element;
		return utilities;
	};

	_.range = function(start, end){
		return range(start, end);
	};

	window._ = _;
})();
