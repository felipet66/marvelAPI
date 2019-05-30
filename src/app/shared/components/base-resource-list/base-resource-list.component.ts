import { OnInit } from '@angular/core';

import { BaseResourceModel } from "../../models/base-resource.model";
import { BaseResourceService } from "../../services/base-resource.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';

import * as Crypto from 'crypto-js';

export abstract class BaseResourceListComponent<T extends BaseResourceModel> implements OnInit {

  resources: T[] = [];
  protected http: HttpClient;
  protected PRIV_KEY = 'X';
  protected PUBLIC_KEY = "X";
  protected ts = new Date().getTime() + '';
  protected hash = Crypto.MD5(this.ts + this.PRIV_KEY + this.PUBLIC_KEY).toString();
  public httpOptions = {
    headers: new HttpHeaders({
      'ts': this.ts,
      'apikey':  this.PRIV_KEY,
      'hash': this.hash
    })
  };

  constructor(private resourceService: BaseResourceService<T>) { }

  ngOnInit() {
    this.resourceService.getAll().subscribe(
      resources => this.resources = resources.sort((a,b) => b.id - a.id),
      error => alert('Erro ao carregar a lista')
    )
  }

  deleteResource(resource: T) {
    const mustDelete = confirm('Deseja realmente excluir este item?');
    
    if (mustDelete){
      this.resourceService.delete(resource.id).subscribe(
        () => this.resources = this.resources.filter(element => element != resource),
        () => alert("Erro ao tentar excluir!")
      )
    }
  }

}
