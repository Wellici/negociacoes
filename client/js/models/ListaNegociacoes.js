class ListaNegociacoes {
  constructor() {
    this._negociacoes = [];
  }

  addNegociacao(negociacao) {
    this._negociacoes.push(negociacao);
  }

  get negociacoes() {
    // Programação defenciva
    return [].concat(this._negociacoes); // Retorno um novo array com os elementos do array _negociações
    // Isso impede que se consiga acessar o array negociações pelo metodo get negociacoes(), já que será um novo array
  }
}
