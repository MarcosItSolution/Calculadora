import { ConteudoService } from './../conteudo-shared/service/conteudo.service';
import { Component, OnInit } from '@angular/core';
import { ConteudoModel } from '../conteudo-shared/model/conteudoModel';
import { TipoOperacaoModel } from '../conteudo-shared/model/tipoOperacaoModel';

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.css']
})
export class ConteudoComponent implements OnInit {
  exibirTotal: boolean = false;
  listaOperacao: TipoOperacaoModel[] = [];
  model: ConteudoModel = {
    numero1: 0,
    numero2: 0,
    total: 0,
    tipoOperacao: 0
  };

  constructor(private service: ConteudoService) {
  }



  ngOnInit(): void {
    this.listarTipoOperacao();
  }

  limparConteudo(): void {
    this.model = {
      numero1: 0,
      numero2: 0,
      total: 0,
      tipoOperacao: 0
    };
  }

  salvarConteudo(): void {
    if (this.validarEnvio())
      this.service.calcular(this.model).subscribe((retorno) => {
        this.exibirTotal = true;
        this.model = retorno;
      });
  }

  listarTipoOperacao(): void {
    this.service.listarTiposOperacao().subscribe((retorno) => {
      this.listaOperacao = retorno;
    });
  }

  validarEnvio(): boolean {
    let msg = null;
    if (this.model.tipoOperacao <= 0)
      msg = "informe o operador do cálculo!"

    if (msg != null) {
      this.dispararAlert(msg);
      return false;
    }

    return true
  }

  dispararAlert(msg: string): void {
    alert(msg);
  }

  limparEsconderTotal(): void {
    this.model.total = 0;
    this.exibirTotal = false;
  }

}
