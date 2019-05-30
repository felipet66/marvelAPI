import { Injectable, Injector } from '@angular/core';
import { Character } from "./character.model";

import { BaseResourceService } from "../../../shared/services/base-resource.service";

@Injectable({
  providedIn: 'root'
})
export class CharacterService extends BaseResourceService<Character> {

  constructor(protected injector: Injector) {
    super("http://gateway.marvel.com:80/v1/public/characters", injector, Character.fromJson);
  }

}