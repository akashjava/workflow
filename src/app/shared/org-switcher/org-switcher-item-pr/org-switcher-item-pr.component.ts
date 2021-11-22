import { Component, OnInit, Input } from "@angular/core";
import { Organisation } from "../../../core/models";
import { SharedService } from '../../shared.service';
import { paths } from '../../../../environments/environment';

@Component({
  selector: "app-org-switcher-item-pr",
  templateUrl: "./org-switcher-item-pr.component.html",
  styleUrls: ["./org-switcher-item-pr.component.css"]
})
export class OrgSwitcherItemPrComponent implements OnInit {
  @Input() element: Organisation;

  public orgType: string = null;
  imgPath : string
  constructor(private helper:SharedService) {}

  ngOnChanges(): void {
    this.orgType = this.element.type.toString();
  }
  ngOnInit() {
    this.imgPath=`${paths.ORGANIATION_PATH}/v1/logo/${this.element.uuid}`
  }
}
