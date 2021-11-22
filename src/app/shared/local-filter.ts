import { Pipe, PipeTransform } from "@angular/core";
import { DatePipe } from "@angular/common";

@Pipe({ name: "vehicleFilter", pure: true })
export class VehicleFilter implements PipeTransform {
  transform(input: any[], config: any): any {
    if (config === undefined || config[1] == undefined || config[0] == undefined) return [];
    if (!Array.isArray(input)) return input;

    if (config[1] == "") {
      return input;
    }

    var list = input.filter(u => u[config[0]].toUpperCase().indexOf(config[1].toUpperCase()) != -1);
    {
      return list;
    }
  }
}

@Pipe({ name: "driverFilter", pure: true })
export class DriverFilter implements PipeTransform {
  transform(input: any[], config: any): any {
    if (config === undefined || config[1] == undefined || config[0] == undefined) return [];
    if (!Array.isArray(input)) return input;

    if (config[1] == "") {
      return input;
    }

    var list = input.filter(u => u[config[0]].toUpperCase().indexOf(config[1].toUpperCase()) != -1);
    {
      return list;
    }
  }
}

@Pipe({ name: "memberFilter", pure: true })
export class MemberFilter implements PipeTransform {
  transform(input: any[], config: any): any {
    if (config === undefined || config[0] == undefined) return [];
    if (!Array.isArray(input)) return input;

    if (config[1] == "") {
      return input;
    }
    var list = input.filter(u => {
      if (u["user"]["name"] == null) {
        // u['user']['name'] = 'N/A'
        return true;
      }

      return u["user"]["name"].toUpperCase().indexOf(config[0].toUpperCase()) != -1;
    });
    // var list = input.filter(u =>u ['user']['name'].toUpperCase().indexOf(config[0].toUpperCase()) != -1);
    {
      return list;
    }
  }
}

@Pipe({ name: "deviceFilter", pure: true })
export class DeviceFilter implements PipeTransform {
  transform(input: any[], config: any): any {
    if (config === undefined || config[0] == undefined) return [];
    if (!Array.isArray(input)) return input;

    if (config[1] == "") {
      return input;
    }

    var list = input.filter(u => u["device"]["imei"].toUpperCase().indexOf(config[0].toUpperCase()) != -1);
    {
      return list;
    }
  }
}


@Pipe({ name: "trimNumberFilter", pure: true })
export class TrimNumberFilter implements PipeTransform {
  transform(value:any):any{

    // if(value && typeof value =='number'){
      return value.toFixed(2);
    // }

    // return value;
  }
}

@Pipe({ name: "msToDurationFilter" })
export class MsToDurationFilter implements PipeTransform {
  transform(value: any, args?: any): any {
    return this.getMsToDuration(value);
  }

  getMsToDuration(duration) {
    let x = duration / 1000;
    let seconds = Math.floor(x % 60);
    x /= 60;
    let minutes = Math.floor(x % 60);
    x /= 60;
    let hours = Math.floor(x % 24);
    x /= 24;
    let days = Math.floor(x);

    // console.log(days);
    let totalDuration = "";

    if (days > 0) {
      totalDuration = days + "d ";
    }
    if (hours > 0) {
      totalDuration = totalDuration + hours + "hr ";
    }

    if (days >= 1) {
      return totalDuration;
    }

    if (minutes > 0) {
      return (totalDuration = totalDuration + minutes + "min");
    }
    if (seconds > 0 && totalDuration == "") {
      totalDuration = totalDuration + seconds + " sec";
    }

    if (totalDuration == "") {
      return "0 sec";
    } else {
      return totalDuration;
    }
  } //close methods msToTime
}

@Pipe({ name: "msToDurationFilterDetails" })
export class MsToDurationFilterDetails implements PipeTransform {
  transform(value: any, args?: any): any {
    return this.getMsToDuration(value);
  }

  getMsToDuration(duration) {
    let x = duration / 1000;
    let seconds = Math.floor(x % 60);
    x /= 60;
    let minutes = Math.floor(x % 60);
    x /= 60;
    let hours = Math.floor(x % 24);
    x /= 24;
    let days = Math.floor(x);

    // console.log(days);
    let totalDuration = "";

    if (days > 0) {
      totalDuration = days + " days ";
    }
    if (hours > 0) {
      totalDuration = totalDuration + hours + " hr ";
    }

    if (days >= 1) {
      return totalDuration;
    }

    if (minutes > 0) {
      return (totalDuration = totalDuration + minutes + " min ");
    }
    if (seconds > 0 && totalDuration == "") {
      totalDuration = totalDuration + seconds + " sec";
    }

    if (totalDuration == "") {
      return "0 sec";
    } else {
      return totalDuration;
    }
  } 
}

@Pipe({ name: "placeListFilter", pure: true })
export class PlacesListFilter implements PipeTransform {
  transform(input: any[], config: any): any {
    if (config === undefined || config[1] == undefined || config[0] == undefined) return [];
    if (!Array.isArray(input)) return input;

    if (config[1] == "") {
      return input;
    }

    var list = input.filter(u => u["properties"][config[0]].toUpperCase().indexOf(config[1].toUpperCase()) != -1);
    {
      return list;
    }
  }
}

@Pipe({ name: "businessPartnerFilter", pure: true })
export class BusinessPartnerFilter implements PipeTransform {
  transform(input: any[], config: any): any {
    if (config === undefined || config[1] == undefined || config[0] == undefined) return [];
    if (!Array.isArray(input)) return input;

    if (config[1] == "") {
      return input;
    }

    var list = input.filter(u => u[config[0]].toUpperCase().indexOf(config[1].toUpperCase()) != -1);
    {
      return list;
    }
  }
}

@Pipe({ name: "groupFilter", pure: true })
export class GroupFilter implements PipeTransform {
  transform(input: any[], config: any): any {
    if (config === undefined || config[1] == undefined || config[0] == undefined) return [];
    if (!Array.isArray(input)) return input;

    if (config[1] == "") {
      return input;
    }

    var list = input.filter(u => u[config[0]].toUpperCase().indexOf(config[1].toUpperCase()) != -1);
    {
      return list;
    }
  }
}

@Pipe({ name: "officeSearchFilter", pure: true })
export class OfficeSearchFilter implements PipeTransform {
  transform(input: any[], config: any): any {
    if (config === undefined || config[1] == undefined || config[0] == undefined) return [];
    if (!Array.isArray(input)) return input;

    if (config[1] == "") {
      return input;
    }

    var list = input.filter(u => u[config[0]].toUpperCase().indexOf(config[1].toUpperCase()) != -1);
    {
      return list;
    }
  }
}

// @Pipe({name: 'officeFilter', pure: true})
// export class OfficeFilter implements PipeTransform {
//   transform(input:any[], config:any):any {
//     if (config === undefined || config[1] == undefined || config[0] == undefined ) return [];
//     if (!Array.isArray(input)) return input;

//     if(config[1]=='')
//     {
//       return input;
//     }

//     var list =  input.filter(u => u[config[0]].toUpperCase().indexOf(config[1].toUpperCase()) != -1 );
//     {
//       return list ;
//     }
//   }
// }

@Pipe({
  name: "dateFormatPipe"
})
export class DateFormatPipe implements PipeTransform {
  constructor(private datePipe: DatePipe) {}
  public transform(value: string): string {
    var _value = Number(value);
    const d = new Date(_value);
    const currentD = new Date();

    let date = d.getDate();
    let month = d.getMonth();
    let year = d.getFullYear();

    let currentDate = currentD.getDate();
    let currentMonth = currentD.getMonth();
    let currentYear = currentD.getFullYear();

    if (date === currentDate && month === currentMonth && year === currentYear) {
      return `Today,${this.datePipe.transform(_value, "hh:mm a")}`;
    } else if (currentDate - date === 1 && month === currentMonth && year === currentYear) {
      return `Yesterday, ${this.datePipe.transform(_value, "hh:mm a")}`;
    } else {
      return `${this.datePipe.transform(_value, "d MMM hh:mm a")}`;
    }
  }
}
@Pipe({
  name: "timeFromNowPipe"
})
export class TimeFromNowPipe implements PipeTransform {
  constructor(private datePipe: DatePipe) {}

  public transform(value: string): string {
    var _value = Number(value);
    var duration = new Date().getTime() - new Date(_value).getTime();
    if (duration < 3600000) {
      let x = duration / 1000;
      let seconds = Math.floor(x % 60);
      x /= 60;
      let minutes = Math.floor(x % 60);
      x /= 60;
      if (minutes > 0) {
        return minutes + "m ago";
      }
      if (seconds >= 0) {
        return seconds + " secs ago";
      }
    } else {
      const d = new Date(_value);
      const currentD = new Date();

      let date = d.getDate();
      let month = d.getMonth();
      let year = d.getFullYear();

      let currentDate = currentD.getDate();
      let currentMonth = currentD.getMonth();
      let currentYear = currentD.getFullYear();

      if (date === currentDate && month === currentMonth && year === currentYear) {
        return `${this.datePipe.transform(_value, "hh:mm a")}`;
      } else {
        return `${this.datePipe.transform(_value, "d MMM hh:mm a")}`;
      }
    }
  }
}
@Pipe({ name: "viewFilters", pure: true })
export class FlatFilters implements PipeTransform {
  transform(filters: any): { key: string; value: any }[] {
    if (!filters) return [];
    return Object.keys(filters).map(key => {
      return { key: key, value: filters[key] };
    });
  }
}
@Pipe({ name: "searchBy", pure: true })
export class SearchByFilter implements PipeTransform {
  transform(input: any[], config: any): any {
    if (config === undefined || config[1] == undefined || config[0] == undefined) return [];
    if (!Array.isArray(input)) return input;

    if (config[1] == "") {
      return input;
    }

    var list = input.filter(u => u[config[0]].toUpperCase().indexOf(config[1].toUpperCase()) != -1 || (config[2] && u[config[2]].toUpperCase().indexOf(config[1].toUpperCase()) != -1));
    {
      return list;
    }
  }
}
