import { Pipe, PipeTransform } from "@angular/core";
import { SharedService } from "../shared.service";
import { Observable } from "rxjs";

@Pipe({ name: "user", pure: true })
export class UserByUuid implements PipeTransform {
  constructor(private sharedService: SharedService) {}
  transform(value: any): Observable<any> {
    return this.sharedService.getUser(value);
  }
}

@Pipe({ name: "orgDetail" })
export class OrgDetailPipe implements PipeTransform {
  constructor(private sharedService: SharedService) {}
  transform(
    orgId: any
  ): Observable<{ status: number; error: string; data: any }> {
    return this.sharedService.getOrganisationDetail(orgId);
  }
}

@Pipe({ name: "isSelectionMade" })
export class SelectionMade implements PipeTransform {
  transform = (selectedList: string[], id: string): boolean =>
  selectedList ? selectedList.includes(id) : false;
}
