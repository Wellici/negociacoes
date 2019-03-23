class NegociacaoController {
  constructor() {
    let $ = document.querySelector.bind(document); // Para melhorar um pouco a sintaxe
    // guardo na variavel '$' a sintaxe da pesquisa e faço com que o contexto não se perca e continue com o document

    // tensformando essas consultas em propriedades da minha instancia vou ganhar performace, já que só vou precisar
    //percorrer o DOM uma vez na hora da instanciação, ou seja, mesmo que eu faça 1000 negociações eu só vou
    //procurar meus elementos no DOM uma unica vez, o que é uma ganho enorme em performaçe.
    this._inputData = $("#data");
    this._inputQuantidade = $("#quantidade");
    this._inputValor = $("#valor");
    this._listaNegociacoes = new ListaNegociacoes();
    this._negociacoesView = new NegociacoesView($('#tabela-negociacoes'));

    this._negociacoesView.update(this._listaNegociacoes); // Atualiza a pagina com base na lista de negociacoes
  }

  adicionar(event) {
    // Meu metódo recebe um evente pois ele vai ser chamado quando submeter meu formulário
    event.preventDefault(); //Retirar o comportamento padrão de recarregar o formulario quando submetido

    this._listaNegociacoes.addNegociacao(this._criaNegociacao()); //crio uma negociacao e a adiciono a lista
    this._negociacoesView.update(this._listaNegociacoes)
    this._limpaFormulario();
    console.log(this._listaNegociacoes.negociacoes);
  }

  _criaNegociacao() {
    return new Negociacao(
      DataHelper.textoParaData(this._inputData.value), // Chamo o metodo statico de DataHelper
      this._inputQuantidade.value,
      this._inputValor.value
    );
  }

  _limpaFormulario() {
    this._inputData.value = "";
    this._inputQuantidade.value = 1;
    this._inputValor.value = 0.0;

    this._inputData.focus();
  }
}
