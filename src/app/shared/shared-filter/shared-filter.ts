import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'searchOrgFilter', pure: true})
export class SearchOrgFilter implements PipeTransform {
  transform(input:any[], config:any):any {
    if (config === undefined || config[1] == undefined || config[0] == undefined) return [];
    if (!Array.isArray(input)) return input;

    if(config[1]=='')
    {
      return input;
    }

    var list =  input.filter(u => (""+u[config[0]]).toUpperCase().indexOf((""+config[1]).toUpperCase()) != -1);
    {
      return list ;
    }
  }
}


@Pipe({name: 'searchTripFilter', pure: false})
export class SearchTripFilter implements PipeTransform {
  transform(input:any[], config:any):any {

    if (config === undefined || config[1] == undefined || config[0] == undefined) return [];
    if (!Array.isArray(input)) return input;

    if(config[1]=='')
    {
      return input;
    }

    var list =  input.filter(u => (""+u[config[0]]).toUpperCase().indexOf((""+config[1]).toUpperCase()) != -1);
    {
      return list ;
    }
  }
}


@Pipe({name: 'concateFilter', pure: true})
export class ConcatStringFilter implements PipeTransform {
  transform(input:string, config:any):string {
    if (input === undefined || input === null || input=='' || config[0] == undefined) return input;

    if (input.length<config[0]) return input;

    if(input.length>=config[0])
    {
      return input.substring(0,config[0])+"...";
    }
  }
}

@Pipe({ name: "address", pure: true })
export class AddressPipeOfCustomField implements PipeTransform {
  transform(field: any): string {
    let address: string = "";
    let obj = JSON.parse(field);
    Object.keys(obj).forEach(key => (address = address.concat(" " + obj[key])));

    return address;
  }
}

@Pipe({ name: "customNumber", pure: true })
export class CustomNumber implements PipeTransform {
  transform(field: any): Number {

    if(typeof field == 'number'  ){
        return Math.floor(field);
    }
    return field;
  }
}


@Pipe({ name: "searchVehBranchFilter", pure: true }) // use in dashboard filter
export class SearchVehBranchFilter implements PipeTransform {
  transform(input: any[], config: any): any {
    if (config === undefined || config[0] == undefined || config[0] == null || config[0] == "") return input;
    if (!Array.isArray(input)) return input;

    var list = input.filter(u => u["filterName"].toUpperCase().includes(config[0].toUpperCase()));
    {
      return list;
    }
  }
}

@Pipe({ name: "isCustomFieldSelected" })
export class IsCustomFieldSelected implements PipeTransform {
  transform(customField: any, customFields: any[]): boolean {
    if (!customFields) return false;

    let cf = customFields.find(c => c.fieldKey === customField.fieldKey);

    if (cf) return true;

    return false;
  }
}
@Pipe({ name: "isCustomFieldSelectedv2" })
export class IsCustomFieldSelectedv2 implements PipeTransform {
  transform(customField: any, customFields: any[]): boolean {
    if (!customFields) return false;

    let cf = customFields.find(c => c.cfs.fieldKey === customField.cfs.fieldKey);

    if (cf) return true;

    return false;
  }
}
@Pipe({name: 'isIncludes', pure: true})
export class ArrayIncludesFilter implements PipeTransform {
  transform(input:any[],config:any):boolean {
    if(!config || !input || input.length==0) return false;
    if (!Array.isArray(input)) return false;
    for (let i = 0; i < input.length; i++) {
      if(input[i]['uuid']==config) return true;
    }
    return false;
  }
}



