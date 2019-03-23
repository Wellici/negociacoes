class NegociacoesView {
  constructor(elemento) {
    // O meu construtor recebe um elemento do DOM para que eu posso adicionar o template
    this._elemento = elemento;
  }

  template(modelo) {
    return `
    <table class="table table-hover table-bordered">
      <thead>
          <tr>
              <th>DATA</th>
              <th>QUANTIDADE</th>
              <th>VALOR</th>
              <th>VOLUME</th>
          </tr>
      </thead>
      
      <tbody>
        ${modelo.negociacoes.map( (negociacao) => {
          return `
            <tr>
              <td>${DataHelper.dataParaTexto(negociacao.data)}</td>
              <td>${negociacao.quantidade}</td>
              <td>${negociacao.valor}</td>
              <td>${negociacao.volume}</td>
            </tr>
          `;
        })}
      </tbody>
      
      <tfoot>
      </tfoot>
    </table>
    `;
  }

  update(modelo) {
    this._elemento.innerHTML = this.template(modelo);
  }
}
