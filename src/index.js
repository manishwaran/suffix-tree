import defaults from './defaults'
import SuffixTreeCreate from './suffix-tree-create'

export default class SuffixTree extends SuffixTreeCreate {
	
	constructor(string, delimitor) {
		super()
		this.delimitor = delimitor || defaults.delimitor 
		this.sTree = null
		this.create(string)
	}

};
