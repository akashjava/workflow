import { Injectable } from "@angular/core";
import { paths } from "../../../../environments/environment";
import { Observable } from "rxjs";
import { SharedService } from "../../shared.service";

@Injectable()
export class OrgSwitcherService {
  constructor(private sharedService: SharedService) {}

  public getOrganisations(payload: { search: string; page: number,includePortal:boolean }): Observable<any> {
    let path = `${paths.ORGANIATION_PATH}/v1/typeahead/paging?size=50&page=${payload.page}&excludeImage=true`;

    if (payload.search) {
      path = `${path}&search=${payload.search}`;
    }
    if(!payload.includePortal){
      path=`${path}&portalType=basic`
    }
    return this.sharedService.callService("get", null, path);
  }
  public switchOrganisation(uuid: string) {
    return this.sharedService.callService("get", null, `${paths.USER_PATH}/v1/user/switch-org?orgId=${uuid}`);
  }
}
