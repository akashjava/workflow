import { Injectable } from "@angular/core";
@Injectable()
export class SharedMapServices {
  constructor() {}
  public getVerticesIfUpdatePoly(vertices): any {
    let coordinatesList = [];
    let middle: any[] = [];
    for (let i = 0; i < vertices.getLength(); i++) {
      let inner: any[] = [];
      let xy = vertices.getAt(i);
      inner.push(xy.lng());
      inner.push(xy.lat());
      middle.push(inner);
    }

    let lat1 = middle[0];
    let lat2 = middle[middle.length - 1];

    if((lat1[0] != lat2[0]) || (lat1[1] != lat2[1])){
      let inner1: any[] = [];
      let xy = vertices.getAt(0);
      inner1.push(xy.lng());
      inner1.push(xy.lat());
      middle.push(inner1);
    }
    
    coordinatesList.push(middle);
    return coordinatesList;
  }

  public convertCoordinateToLatLng(coordinates): any {
    let selectedPolygonPoints: any[] = [];
    if (coordinates.length > 0) {
      for (let i = 0; i < coordinates.length - 1; i++) {
        let obj = {
          lat: coordinates[i][1],
          lng: coordinates[i][0]
        };
        selectedPolygonPoints.push(obj);
      }
    }

    return selectedPolygonPoints;
  }
  public getCenter(coordinates): any {
    let latLng = { lat: 22.25555, lng: 79.25625362 };
    let sumLat = 0;
    let sumLng = 0;
    if (coordinates.length > 0) {
      for (let i = 0; i < coordinates.length - 1; i++) {
        let obj = {
          lat: coordinates[i][1],
          lng: coordinates[i][0]
        };
        sumLat = sumLat + coordinates[i][1];
        sumLng = sumLng + coordinates[i][0];
      }
      latLng.lat = sumLat / (coordinates.length - 1);
      latLng.lng = sumLng / (coordinates.length - 1);
    }
    return latLng;
  }

  public getCenter2(coordinates): any {
    let latLng = { lat: 22.25555, lng: 79.25625362 };
    let sumLat = 0;
    let sumLng = 0;
    if (coordinates.length > 0) {
      for (let i = 0; i < coordinates.length; i++) {
        let obj = {
          lat: coordinates[i][1],
          lng: coordinates[i][0]
        };
        sumLat = sumLat + coordinates[i][1];
        sumLng = sumLng + coordinates[i][0];
      }
      latLng.lat = sumLat / coordinates.length;
      latLng.lng = sumLng / coordinates.length;
    } else {
      return coordinates;
    }

    return latLng;
  }

  public getFitBounds(bounds, coordinates): google.maps.LatLngBounds {
    if (coordinates.length > 0) {
      for (let i = 0; i < coordinates.length - 1; i++) {
        let latLng = { lng: coordinates[i][0], lat: coordinates[i][1] };
        bounds.extend(latLng);
      }
      return bounds;
    } else {
      let latLng = new google.maps.LatLng(22.25555, 79.25625362);
      bounds.extend(latLng);
      return bounds;
    }
  }

  getPolygone(map, points, editable, fillColor, strokeColor) {
    let myPolygon = new google.maps.Polygon({
      paths: points,
      editable: editable,
      strokeColor: strokeColor,
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: fillColor,
      fillOpacity: 0.35
    });
    myPolygon.setMap(map);
    return myPolygon;
  }
  getCircle(map, center, editable, draggable, fillColor, strokeColor, radius) {
    let myCircle = new google.maps.Circle({
      strokeColor: strokeColor,
      strokeOpacity: 0.8,
      strokeWeight: 3,
      fillColor: fillColor,
      fillOpacity: 0.5,
      center: center,
      radius: radius,
      draggable: draggable,
      editable: editable
    });
    myCircle.setMap(map);
    return myCircle;
  }

  getDrawingManager(map: any) {
    var polygon1 = {
      // draggable:true,
      clickable: true,
      editable: true,
      fillColor: "#f00",
      strokeColor: "#f00",
      strokeOpacity: 0.5
    };
    var drawingManager = new google.maps.drawing.DrawingManager({
      // drawingMode:google.maps.drawing.OverlayType.MARKER,
      drawingControl: false,
      drawingControlOptions: {
        position: google.maps.ControlPosition.LEFT_TOP,
        drawingModes: [google.maps.drawing.OverlayType.POLYGON]
      },
      polygonOptions: polygon1
    });
    return drawingManager;
  }

  getMapBounds(map: any): any[] {
    var bounds = map.getBounds();
    let ne = bounds.getNorthEast().toJSON();
    let sw = bounds.getSouthWest().toJSON();
    let reqArr = [];
    let ob1: any = [sw.lng, sw.lat];
    let ob2: any = [ne.lng, sw.lat];
    let ob3: any = [ne.lng, ne.lat];
    let ob4: any = [sw.lng, ne.lat];
    let ob5: any = [sw.lng, sw.lat];
    reqArr.push(ob1);
    reqArr.push(ob2);
    reqArr.push(ob3);
    reqArr.push(ob4);
    reqArr.push(ob5);
    return reqArr;
  }

  getNPointsCircularPolygone(center, dist, n): any {
    var i = 0;
    var polygonePoint = [];
    for (i = 1; i <= n; i++) {
      polygonePoint.push(getPointAt(center, (360.0 / n) * i, dist));
    }

    function toRAD(NUM) {
      return (NUM * Math.PI) / 180;
    }

    function toDeg(NUM) {
      return (NUM * 180) / Math.PI;
    }

    function getPointAt(latlng, brng, dist) {
      dist = dist / 6371;
      brng = toRAD(brng);

      var lat1 = toRAD(latlng.latitude),
        lon1 = toRAD(latlng.longitude);
      var lat2 = Math.asin(Math.sin(lat1) * Math.cos(dist) + Math.cos(lat1) * Math.sin(dist) * Math.cos(brng));
      var lon2 = lon1 + Math.atan2(Math.sin(brng) * Math.sin(dist) * Math.cos(lat1), Math.cos(dist) - Math.sin(lat1) * Math.sin(lat2));

      if (isNaN(lat2) || isNaN(lon2)) return null;
      return { lat: toDeg(lat2), lng: toDeg(lon2) };
    }
    return polygonePoint;
  }

  getPlaceFromLATLNG(lat: number, lng: number): any {
    var latlng = new google.maps.LatLng(lat, lng);
    var geocoder = (geocoder = new google.maps.Geocoder());
    let place;
    geocoder.geocode({ location: latlng }, (results, status) => {
      if (status == google.maps.GeocoderStatus.OK) {
        if (results[0]) {
          place = results[0];
          // console.log(place)
          return place;
        }
      }
    });
  }
}
