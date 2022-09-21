import { ConteudoModel } from './../model/conteudoModel';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoOperacaoModel } from '../model/tipoOperacaoModel';

@Injectable({
  providedIn: 'root'
})
export class ConteudoService {
  private readonly API = 'https://localhost:44302/'
  private readonly httpOptions = {
    headers: new HttpHeaders({
        "Access-Control-Allow-Origin" : "*"
    })
};

  constructor(private http: HttpClient) { }

  calcular(model:ConteudoModel): Observable<ConteudoModel> {
    const rota = this.API + "Calculadora";
    return this.http.post<ConteudoModel>(rota, model, this.httpOptions);
  }

  listarTiposOperacao(): Observable<TipoOperacaoModel[]> {
    const rota = this.API + "Calculadora";
    return this.http.get<TipoOperacaoModel[]>(rota,  this.httpOptions);
  }
}
