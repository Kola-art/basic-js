const CustomError = require("../extensions/custom-error");

const chainMaker = {
    chain: [],
    getLength() {
      throw new CustomError('Not implemented');
    },
    addLink(value) {
      this.chain.push('( '+ String(value) +' )');

      return this;  
    },

    removeLink(position) {
    if(Number.isInteger(position) && position < this.chain.length && position > 0 ) {
      this.chain.splice(position-1, 1);
    }
    else { this.chain.length = 0; throw Error('THROWN');}
    return this;
    },
  reverseChain() {

  this.chain = this.chain.reverse();
  return this;
  },
  
  finishChain() {
   
    let str = this.chain.join('~~');
    this.chain.length = 0;
    return str;
    
  }
};

module.exports = chainMaker;
