import {Injectable} from "@angular/core";
import {BarService} from "./bar.service";

@Injectable({ providedIn: 'root' })
export class FooService {

  constructor(public barService: BarService) {
  }
}
