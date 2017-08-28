export default class SuffixTreeCreate {

	_constructSuffixTree(string) {
		
	}

	constructSuffixTree(string) {
		this._constructSuffixTree(string.reverse())
	}
	
	create(string) {
		if (!string) {
			return
		}
		string = string.concat(this.delimitor)
		console.log(string);
	}

};

