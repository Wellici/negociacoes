class DataHelper {
  constructor() {
    // Como a classe DateHelper só tem metodos estaticos ela não pode ser instanciada
    throw new Error("DateHelper não pode ser instanciada"); // então se alguem chamar o operador new(que chama o constructor da classe) ela vai lançar esse erro
  }

  static textoParaData(texto) {
    if (!/\d{4}-\d{2}-\d{2}/.test(texto))
      //Validar se o formato da data está correto
      throw new Error("O formato de data é invalido");
    return new Date(
      ...texto.split("-").map((item, indice) => item - (indice % 2))
    );
  }

  static dataParaTexto(data) {
    return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
  }
}

/* Codigo que era feito no negociaçãoController e agora é feito nesta classe
let arrayData = this._inputData.value.split("-"), // Transformo minha data 'ano-mes-dia' num array tendo como separador o - 'split('-')
      data = new Date(
        ...arrayData.map(function(item, indice) {
          // uso o spread '...' para despejar os elementos do array no construtor de Date()
          return item - (indice % 2); //crio outro array com base no arrayData mudando apenas o mes (decrementando em 1)
        })
      ); // para tal utilizo a funcao map, que constroi um novo array com base no arrayData, com apenas o mes decrementado, já que começa de 0 até 11
*/
