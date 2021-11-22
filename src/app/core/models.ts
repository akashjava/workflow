export interface Vehicle {
  customerId?: null | undefined | string;
  vehicleType?: null | undefined | string;
  vehicleModel?: null | undefined | string;
  vehicleMake?: null | undefined | string;
  vtsDeviceId?: null | undefined | string;
  vehicleRegistrationNumber?: null | undefined | string;
  uuid?: null | undefined | string;
  associatedWith?: null | undefined | string;
  isDeleted?: null | undefined | string;
  createTime?: null | undefined | number;
  updateTime?: null | undefined | number;
  groups?: null | undefined | string[];
  orgId?: null | undefined | string;
  sharedWith?: null | undefined | string[];
  driverId?: null | undefined | string;
  attachedDocs?: null | undefined | string[];
  source?: null | undefined | string;
  isTrackingEnabled?: null | undefined | boolean;
  truckLength?: null | undefined | number;
  loadCapacity?: null | undefined | number;
  floorType?: null | undefined | string;
  kmDriven?: null | undefined | number;
  mileageEmpty?: null | undefined | number;
  mileageLoaded?: null | undefined | number;
  category?: null | undefined | string;
  branch?: null | undefined | Office;
  groupsExtended?: null | undefined | any;
  externalId?: null | undefined | any;
  updates?: null | undefined | any;
}

export enum OrganisationType {
  FLEET_OWNER,
  TRANSPORTER,
  FLEET_OWNER_AGENT
}

export interface Organisation {
  uuid?: null | undefined | string;
  orgId?: null | undefined | string;
  organisationName?: null | undefined | string;
  type?: null | undefined | string;
  addedBy?: null | undefined | string;
  buisnessPartnerId?: null | undefined | string;
  parentOrgUuid?: null | undefined | string;
  organisationAddress?: null | undefined | string;
  billingAddress?: null | undefined | string;
  contactInfo?: null | undefined | Contact2;
  websiteURL?: null | undefined | string;
  gstIN?: null | undefined | string;
  panNumber?: null | undefined | string;
  installedModules?: null | undefined | string[];
  logoThumbnailString?: null | undefined | string;
  logoDocumentId?: null | undefined | string;
  linkedPortals?: null | undefined | any;
  linkedTo?: null | undefined | any;
  portalType: null | undefined | string;
  status: null | undefined | any;
}

export enum AlertFieldType {
  PRIMITIVE = "PRIMITIVE",
  CALCULATED = "CALCULATED",
  AGGREGATE = "AGGREGATE"
}

export enum AlertParamValueType {
  INT = "INT",
  LONG = "LONG",
  DOUBLE = "DOUBLE",
  STRING = "STRING",
  INT_RANGE = "INT_RANGE",
  LONG_RANGE = "LONG_RANGE",
  DOUBLE_RANGE = "DOUBLE_RANGE",
  LOCATION_PROXIMITY = "LOCATION_PROXIMITY",
  LOCATION_GEOFENCE = "LOCATION_GEOFENCE"
}

export enum AlertOperator {
  IS = "IS",
  IN = "IN",
  NIN = "NIN",
  GT = "GT",
  GTE = "GTE",
  LT = "LT",
  LTE = "LTE",
  EQ = "EQ",
  REGEX = "REGEX"
}

export interface AlertCondition {
  field: string;
  windowSize: number;
  fieldType: AlertFieldType;
  value: string;
  valueType: AlertParamValueType;
  operator: AlertOperator;
}

export enum AlertActionType {
  SMS = "SMS",
  EMAIL = "EMAIL"
}

export interface AlertAction {
  type: AlertActionType;
  valueTemplate: string;
  value?: null | undefined | string;
  recipient?: null | undefined | string;
}

export interface Alert {
  alertEventTopic: string;
  conditions: AlertCondition[];
  actions: AlertAction[];
  vehicles: string[];
  snoozeTime?: null | undefined | number;
  uuid?: null | undefined | string;
  userId?: null | undefined | string;
  orgId?: null | undefined | string;
}

export interface Device {
  imei?: null | undefined | string;
  mobileNumber?: null | undefined | string;
  manufacturerName?: null | undefined | string;
  uuid?: null | undefined | string;
  isAssociated?: null | undefined | string;
  isDeleted?: null | undefined | string;
  createTime?: null | undefined | number;
  updateTime?: null | undefined | number;
  groups?: null | undefined | string[];
  orgId?: null | undefined | string;
  status?: null | undefined | string;
  sharedWith?: null | undefined | string[];
  isSuspended?: null | undefined | boolean;
  type?: null | undefined | string;
  attachedResourceId?: null | undefined | string;
  attachedResourceNumber?: null | undefined | string;
  usedBy?: null | undefined | string;
  externalId?: null | undefined | string;
}

export interface Driver {
  name?: null | undefined | string;
  mobileNumber?: null | undefined | string;
  mobileNumbers?: null | undefined | string[];
  uuid?: null | undefined | string;
  orgId?: null | undefined | string;
  dlNumber?: null | undefined | string;
  dlExpiryTime?: null | undefined | number;
  attachedDocs?: null | undefined | string[];
  address?: null | undefined | string;
  pincode?: null | undefined | number;
  vehicleRegistrationNumber?: null | undefined | string;
  vehicleId?: null | undefined | string;
  externalId?: null | undefined | string;
  updates?: null | undefined | any;
  associatedUserId?: null | undefined | string;
}

export interface VehicleLoadAllocationReceipt {
  tokenUuid?: null | undefined | string;
  vlrNumber?: null | undefined | string;
  consignorName?: null | undefined | string;
  uuid?: null | undefined | string;
  orgId?: null | undefined | string;
  gatedInTime?: null | undefined | number;
  shipmentId?: null | undefined | string;
  status?: null | undefined | string;
  createTime?: null | undefined | number;
}

export interface Location {
  latitude: number;
  longitude: number;
}

export interface Circle {
  center: Location;
  radius: number;
}

export enum GeofenceType {
  Proximity,
  Polygon
}

export interface Geofence {
  center: Location;
  boundry?: null | undefined | Location[];
  circle?: null | undefined | Circle;
  type?: null | undefined | GeofenceType;
}

export enum FreightLocType {
  Private,
  Public
}

export interface FreightLocation {
  name: string;
  geofence?: null | undefined | Geofence;
  material?: null | undefined | string[];
  address?: null | undefined | string;
  uuid?: null | undefined | string;
  orgId?: null | undefined | string;
  favouriteOf?: null | undefined | string[];
  type?: null | undefined | FreightLocType;
  isDeleted?: null | undefined | boolean;
}

export interface TripLocation {
  freightLocation?: null | undefined | FreightLocation;
  fromTime?: null | undefined | number;
  tillTime?: null | undefined | number;
  firstGpsLogId?: null | undefined | string;
  lastGpsLogId?: null | undefined | string;
  ignoredVehicleGpsLogs?: null | undefined | string[];
  updatedBy?: null | undefined | string;
  updatedAt?: null | undefined | number;
}

export enum TrackingType {
  Tracker,
  Trip,
  Manual
}

export enum VehicleState {
  WaitingForLoad,
  EnrouteForPickUp,
  AtPickUpPoint,
  EnrouteForDestination,
  AtDestination
}

export enum TripState {
  Created,
  Started,
  Completed
}

export interface Shipment {
  startLocation?: null | undefined | TripLocation;
  endLocation?: null | undefined | TripLocation;
  planedStartTime?: null | undefined | number;
  planedEndTime?: null | undefined | number;
  deviceImei?: null | undefined | string;
  vehicleId?: null | undefined | string;
  trackingType?: null | undefined | TrackingType;
  shipmentId?: null | undefined | string;
  status?: null | undefined | VehicleState;
  shipmentState?: null | undefined | TripState;
  actualStartTime?: null | undefined | number;
  actualEndTime?: null | undefined | number;
  shipmentNo?: null | undefined | number;
  vehicleRegistrationNo?: null | undefined | string;
  driverName?: null | undefined | string;
  mobileNo?: null | undefined | string;
  assosiatedTripId?: null | undefined | string;
  orgId?: null | undefined | string;
  sharedWith?: null | undefined | string[];
  shipmentNoExtended?: null | undefined | string;
  shipmentDate?: null | undefined | number;
  consignmentDate?: null | undefined | number;
  invoiceDate?: null | undefined | number;
  invoiceNumber?: null | undefined | string;
  valueOfGoods?: null | undefined | string;
  currentTrackingState?: null | undefined | VehicleState;
}

export interface ShipmentTracknet {
  startLocation?: null | undefined | TripLocation;
  endLocation?: null | undefined | TripLocation;
  planedStartTime?: null | undefined | number;
  planedEndTime?: null | undefined | number;
  deviceImei?: null | undefined | string;
  vehicleId?: null | undefined | string;
  trackingType?: null | undefined | TrackingType;
  shipmentId?: null | undefined | string;
  status?: null | undefined | VehicleState;
  shipmentState?: null | undefined | TripState;
  actualStartTime?: null | undefined | number;
  actualEndTime?: null | undefined | number;
  shipmentNo?: null | undefined | number;
  vehicleRegistrationNo?: null | undefined | string;
  driverName?: null | undefined | string;
  mobileNo?: null | undefined | string;
  assosiatedTripId?: null | undefined | string;
  orgId?: null | undefined | string;
  sharedWith?: null | undefined | string[];
  shipmentNoExtended?: null | undefined | string;
  shipmentDate?: null | undefined | number;
  consignmentDate?: null | undefined | number;
  invoiceDate?: null | undefined | number;
  invoiceNumber?: null | undefined | string;
  valueOfGoods?: null | undefined | string;
  currentTrackingState?: null | undefined | VehicleState;
}

export interface Token {
  uuid?: null | undefined | string;
  provider?: null | undefined | string;
  token?: null | undefined | string;
}

export interface User {
  uuid?: null | undefined | string;
  name?: null | undefined | string;
  email?: null | undefined | string;
  mobileNumber?: null | undefined | string;
  address?: null | undefined | string;
  authToken?: null | undefined | Token[];
  tokens?: null | undefined | string[];
  onBoardingType?: null | undefined | string;
  otpEnabled?: null | undefined | boolean;
  isGod?: null | undefined | boolean;
  profileDocumentId?: null | undefined | string;
  profileThumbnailString?: null | undefined | string;
  alternateEmails?: null | undefined | string[];
  alternateMobileNumbers?: null | undefined | string[];
}

export interface LitePosition {
  latitude: number;
  longitude: number;
  speed: number;
  course?: null | undefined | number;
  decoder?: null | undefined | string;
  time?: null | undefined | number;
  imei: string;
  vehicleId?: null | undefined | string;
  address?: null | undefined | string;
  lngLat?: null | undefined | number[];
  isFillingEnabled: boolean;
}

export enum GPSState {
  Stopped,
  Moving,
  Overspeeding,
  Disconnected,
  Unknown
}

export interface PointAtTime {
  timestamp?: null | undefined | number;
  latitude?: null | undefined | number;
  longitude?: null | undefined | number;
}

export interface TimeAwarePolyline {
  polyline?: null | undefined | string;
  compressedPolyline?: null | undefined | string;
  lastPoint: PointAtTime;
  isAssumed: boolean;
  totalPoints?: null | undefined | number;
}

export interface VehicleGpsState {
  isManuallyAdded: boolean;
  isIgnore: boolean;
  startTime: number;
  endTime: number;
  startLocation: LitePosition;
  endLocation: LitePosition;
  sigmasq: number;
  mean: LitePosition;
  totalDistance: number;
  totalTime: number;
  averageOfSpeed: number;
  averageSpeeds: number;
  numberOfRecord: number;
  lateArrivedRecordsCount?: null | undefined | number;
  imei: string;
  vehicleId?: null | undefined | string;
  uuid?: null | undefined | string;
  state?: null | undefined | any;
  encodedPolyline?: null | undefined | string;
  timeAwarePolyline?: null | undefined | TimeAwarePolyline;
  polylineSegments?: null | undefined | TimeAwarePolyline[];
  recalculatedDistance?: null | undefined | number;
  odoMeter?: null | undefined | number;
  lastOdoMeterReading?: null | undefined | number;
  isDisconnected: boolean;
  eventType?: null | undefined | string;
  batteryStatus?: null | undefined | string;
  showLabelAtFiveHundered?: null | undefined | boolean;
  showLabelAtOneHundered?: null | undefined | boolean;
  showLabelAtFifty?: null | undefined | boolean;
  showLabelAtTwenty?: null | undefined | boolean;
}

export interface Lane {
  sources?: null | undefined | FreightLocation[];
  destination?: null | undefined | FreightLocation[];
  material?: null | undefined | string[];
  baseSource?: null | undefined | FreightLocation;
  baseDestination?: null | undefined | FreightLocation;
  baseMaterial?: null | undefined | string;
  baseRate?: null | undefined | number;
  sourceOffSet?: null | undefined | number[];
  destinationOffSet?: null | undefined | number[];
  materialOffSet?: null | undefined | number[];
  baseTransitDays?: null | undefined | number;
}

export interface Trip {
  distance?: null | undefined | number;
  quantityOfMaterial?: null | undefined | number;
  unitOfQuantity?: null | undefined | string;
  driverName?: null | undefined | string;
  driverMobNumber?: null | undefined | string;
  remarks?: null | undefined | string;
  vehicleId?: null | undefined | string;
  origin?: null | undefined | TripLocation[];
  destination?: null | undefined | TripLocation[];
  material?: null | undefined | string;
  tripId?: null | undefined | string;
  actualStartTime?: null | undefined | number;
  actualEndTime?: null | undefined | number;
  plannedStartTime?: null | undefined | number;
  plannedEndTime?: null | undefined | number;
  lane?: null | undefined | Lane;
  tripState?: null | undefined | TripState;
  deviceImei?: null | undefined | string;
  shipmentId?: null | undefined | string;
  trackingType?: null | undefined | TrackingType;
  orgId?: null | undefined | string;
  expectedDestinations?: null | undefined | FreightLocation[];
  reprocessTill?: null | undefined | number;
  sharedWith?: null | undefined | string[];
  liveliness?: null | undefined | string;
  isOffTrack: boolean;
  offTrackSince?: null | undefined | number;
  expectedSystemResolution?: null | undefined | string;
  createdAt?: null | undefined | number;
}

export interface Queue {
  uuid?: null | undefined | string;
  name?: null | undefined | string;
  isGPSMandatory?: null | undefined | string;
  orgId?: null | undefined | string;
  description?: null | undefined | string;
  status?: null | undefined | string;
  freightLocation?: null | undefined | FreightLocation;
}

export interface UserOrgACL {
  orgUuid?: null | undefined | string;
  userUuid?: null | undefined | string;
  accessLevel?: null | undefined | string;
}

export interface LastTrip {
  consignor?: null | undefined | string;
  consignee?: null | undefined | string;
  material?: null | undefined | string;
  rate?: null | undefined | number;
}

export interface QueueToken {
  uuid?: null | undefined | string;
  issueTime?: null | undefined | number;
  cancelTime?: null | undefined | number;
  tokenNumber?: null | undefined | string;
  organisationName?: null | undefined | string;
  ownerName?: null | undefined | string;
  driverName?: null | undefined | string;
  brokerName?: null | undefined | string;
  queueId?: null | undefined | string;
  vehicleId?: null | undefined | string;
  expireTime?: null | undefined | number;
  status?: null | undefined | string;
  calledTime?: null | undefined | number;
  vehicleRegistrationNumber?: null | undefined | string;
  driverNumber?: null | undefined | string;
  brokerNumber?: null | undefined | string;
  ownerNumber?: null | undefined | string;
  lastTrip?: null | undefined | LastTrip;
  originalIssueTime?: null | undefined | number;
  orgId?: null | undefined | string;
  description?: null | undefined | string;
}

export interface VehicleTripState {
  deviceImei?: null | undefined | string;
  vehicleId?: null | undefined | string;
  state?: null | undefined | VehicleState;
  tripId?: null | undefined | string;
  startTime?: null | undefined | number;
  endTime?: null | undefined | number;
  uuid?: null | undefined | string;
  latitude?: null | undefined | number;
  longitude?: null | undefined | number;
  address?: null | undefined | string;
}

export interface VehicleTripStateEvents {
  eventName: string;
  tripId?: null | undefined | string;
  vehicleId?: null | undefined | string;
  eventTime?: null | undefined | number;
}

export interface TrackerTrip {
  distance?: null | undefined | number;
  quantityOfMaterial?: null | undefined | number;
  unitOfQuantity?: null | undefined | string;
  driverName?: null | undefined | string;
  driverMobNumber?: null | undefined | string;
  remarks?: null | undefined | string;
  vehicleId?: null | undefined | string;
  origin?: null | undefined | TripLocation[];
  destination?: null | undefined | TripLocation[];
  material?: null | undefined | string;
  tripId?: null | undefined | string;
  actualStartTime?: null | undefined | number;
  actualEndTime?: null | undefined | number;
  plannedStartTime?: null | undefined | number;
  plannedEndTime?: null | undefined | number;
  lane?: null | undefined | Lane;
  tripState?: null | undefined | TripState;
  deviceImei?: null | undefined | string;
  shipmentId?: null | undefined | string;
}

export interface TripGeneratedEvents {
  type: string;
  tripPayload?: null | undefined | Trip;
  vehicleTripStatePayload?: null | undefined | VehicleTripState;
  vehicleTripStateEventPayload?: null | undefined | VehicleTripStateEvents;
  trackerTripPayload?: null | undefined | TrackerTrip;
}

export interface MetaData {
  accessibility?: null | undefined | string;
  addedBy?: null | undefined | string;
  source?: null | undefined | string;
  clazz?: null | undefined | string;
  isFavorite?: null | undefined | string[];
}

export interface Geometry {
  coordinates?: null | undefined | any[];
  type?: null | undefined | string;
}

export interface Properties {
  catagory?: null | undefined | string;
  level?: null | undefined | string;
  customeFields?: null | undefined | string;
  name?: null | undefined | string;
  address?: null | undefined | string;
  placeId?: null | undefined | string;
}

export interface Place {
  metadata?: null | undefined | MetaData;
  geometry?: null | undefined | Geometry;
  type?: null | undefined | string;
  uuid?: null | undefined | string;
  properties?: null | undefined | Properties;
}

export interface FuelPrice {
  city?: null | undefined | string;
  price?: null | undefined | number;
  state?: null | undefined | string;
  statecode?: null | undefined | number;
}
export interface FuelPriceList {
  fuelPrices: null | undefined | FuelPrice[];
}

export interface TollCost {
  "4 to 6 Axel Vehicle"?: null | undefined | number;
  "7 and More Axel Vehicle"?: null | undefined | number;
  "Bus/Truck"?: null | undefined | number;
  "Car/Jeep/Van"?: null | undefined | number;
  "HCM/EME"?: null | undefined | number;
  LCV?: null | undefined | number;
  "Upto 3 Axel Vehicle"?: null | undefined | number;
  name?: null | undefined | string;
}

export interface Tolls {
  tolls: null | undefined | TollCost[];
  total: null | undefined | TollCost;
}

export interface TollsData {
  fuel: null | undefined | FuelPriceList;
  tolls: null | undefined | Tolls;
}

export interface AllInOne {
  vehicle: Vehicle;
  org: Organisation;
  alerts: Alert;
  device: Device;
  driver: Driver;
  vlr: VehicleLoadAllocationReceipt;
  shipment: Shipment;
  user: User;
  gpsState: VehicleGpsState;
  trip: Trip;
  queue: Queue;
  orguseracl: UserOrgACL;
  queueToken: QueueToken;
  vts: TripGeneratedEvents;
}
export interface TripPlace {
  name?: null | undefined | string;
  address?: null | undefined | string;
  category?: null | undefined | string;
  center?: null | undefined | Location;
  suggestedRadius?: null | undefined | number;
  viewport?: null | undefined | Viewport;
  source?: null | undefined | string;
  placeId?: null | undefined | string;
  boundary?: null | undefined | any[];
  addedBy: null | undefined | string;
  centerCoordinates: null | undefined | any[];
  district: null | undefined | string;
  externalId: null | undefined | string;
  hubId: null | undefined | string;
  places: null | undefined | any[];
  state: null | undefined | string;
  subDistrict: null | undefined | string;
}
export interface Viewport {
  northeast?: null | undefined | Location;
  southwest?: null | undefined | Location;
}
export interface TripPoint {
  actualArrival?: null | undefined | number;
  actualDeparture?: null | undefined | number;
  assosiatedShipmentsId?: null | undefined | string[];
  coveredDistance?: null | undefined | number;
  creationTime?: null | undefined | number;
  isAutoCompleted?: null | undefined | boolean;
  isOutOfTrack?: null | undefined | boolean;
  outOfTrackSince?: null | undefined | boolean;
  plannedArrival?: null | undefined | number;
  plannedDeparture?: null | undefined | number;
  purposedDistance?: null | undefined | number;
  vehicleId?: null | undefined | string;
  uuid?: null | undefined | string;
  place?: null | undefined | TripPlace;
  hub?: null | undefined | TripPlace;
  purpose?: null | undefined | string;
  sequenceId?: null | undefined | number;
  remainingDistance?: null | undefined | number;
  eta?: null | undefined | number;
  status?: null | undefined | string;
  currentGpsState?: null | undefined | any;
  isDisconnected?: null | undefined | boolean;
}

export interface Equipment {
  _id?: null | undefined | string;
  inventoryNo?: null | undefined | string;
  type?: null | undefined | string;
  catagory?: null | undefined | string;
  name?: null | undefined | string;
  orgId?: null | undefined | string;
}

export interface Office {
  _id?: null | undefined | string;
  name?: null | undefined | string;
  type?: null | undefined | string[];
  geoLocation?: null | undefined | number[];
  contacts?: null | undefined | Contact2[];
  address?: null | undefined | string;
  zoneName?: null | undefined | string;
  regionName?: null | undefined | string;
}

export interface Contact {
  name?: null | undefined | string;
  mobileNos?: null | undefined | number[];
  emails?: null | undefined | string[];
}

export interface ShipmentStage {
  uuid?: null | undefined | string;
  status?: null | undefined | string;
  arrivelTime?: null | undefined | number;
  departureTime?: null | undefined | number;
  tripPoint?: null | undefined | TripPoint;
  place?: null | undefined | TripPlace;
  resourcePickup?: null | undefined | string[];
  resourceDropOff?: null | undefined | string[];
  consignmentPickUps?: null | undefined | string[];
  consignmentDelivered?: null | undefined | string[];
}

export interface Notification {
  uuid?: null | undefined | string;
  status?: null | undefined | string;
  vehicle?: null | undefined | Vehicle;
  requestedTo?: null | undefined | Organisation;
  requestedBy?: null | undefined | Organisation;
  trackingStages?: null | undefined | ShipmentStage[];
}

export interface Contact2 {
  name?: null | undefined | string;
  address?: null | undefined | string;
  mobileNumbers?: null | undefined | string[];
  mobileNumber?: null | undefined | string;
  emails?: null | undefined | string[];
}

export interface Setting {
  name: null | undefined | string;
  isEnable: null | undefined | boolean;
}
export interface DomainPermission {
  entity?: null | undefined | string;
  filters?: null | undefined | any;
  isFilteredAccess?: null | undefined | boolean;
  permissions?: null | undefined | string[];
  uuid?: null | undefined | string;
  chooseAtAssignment?: null | undefined | boolean;
}
export interface Role {
  customFields?: null | undefined | any[];
  uuid: null | undefined | string;
  orgId: null | undefined | string;
  name: null | undefined | string;
  description: null | undefined | string;
  version: null | undefined | number;
  permissions: null | undefined | DomainPermission[];
}
export interface BusinessPartner {
  uuid?: null | undefined | string;
  name?: null | undefined | string;
  orgId?: null | undefined | string;
  geoFence?: null | undefined | any;
  places?: null | undefined | any[];
  contacts?: null | undefined | Contact2[];
  location?: null | undefined | Location;
  fretronId?: null | undefined | string;
  type?: null | undefined | string;
  isPortalEnabled?: null | undefined | boolean;
  address?: null | undefined | string;
  externalId?: null | undefined | string;
  customFields?: null | undefined | string[];
  route?: null | undefined | any[];
  group?: null | undefined | BusinessPartnerGroup;
  auctionStatus?: null | undefined | any;
  orderStatus?: null | undefined | any;
}
export interface Plant {
  name?: null | undefined | string;
  orgId?: null | undefined | string;
  uuid?: null | undefined | string;
  plantId?: null | undefined | string;
}
export interface Cluster {
  name?: null | undefined | string;
  orgId?: null | undefined | string;
  uuid?: null | undefined | string;
  plantId?: null | undefined | string;
  destinations?: null | undefined | TripPlace[];
}
export interface QuotaItem {
  vendor?: null | undefined | BusinessPartner;
  quota?: null | undefined | number;
}
export interface Quota {
  orgId?: null | undefined | string;
  uuid?: null | undefined | string;
  plantId?: null | undefined | string;
  clusterInfo?: null | undefined | Cluster;
  quota?: null | undefined | QuotaItem[];
}
export interface ProductDimention {
  orgId?: null | undefined | string;
  uuid?: null | undefined | string;
  productName?: null | undefined | string;
  vehicleType?: null | undefined | string;
  capacity?: null | undefined | string;
}

export interface Notification {
  _id?: null | undefined | string;
  transporter?: null | undefined | BusinessPartner;
  orgId?: null | undefined | string;
  plantId?: null | undefined | string;
  orderId?: null | undefined | string;
  type?: null | undefined | string;
  reason?: null | undefined | string;
  description?: null | undefined | string;
  time?: null | undefined | number;
  uuid?: null | undefined | string;
  status?: null | undefined | string;
  bid?: null | undefined | any;
  vehicle?: null | undefined | Vehicle;
  remark?: null | undefined | string;
}
export interface Stage {
  name?: null | undefined | string;
  duration?: null | undefined | number;
  startTime?: null | undefined | number;
  endTime?: null | undefined | number;
  displayFields?: null | undefined | string[];
  formSchema?: null | undefined | any;
  currentStageIndex?: null | undefined | number;
  primaryActionName?: null | undefined | string;
  nextStage?: null | undefined | any;
  defaultNextStageIndex?: null | undefined | number;
  location?: null | undefined | Location;
}

export const allVehicleType: string[] = [
  "Open Body 6 Tyre (19-24FT) - 6 ton",
  "Open Body 6 Tyre (19-24FT) - 7 ton",
  "Open Body 6 Tyre (19-24FT) - 7.5 ton",
  "Open Body 6 Tyre (19-24FT) - 8 ton",
  "Open Body 6 Tyre (19-24FT) - 9 ton",
  "Open Body 6 Tyre (19-24FT) - 10 ton",
  "Open Body 10 Tyre 14 ton",
  "Open Body 10 Tyre 15 ton",
  "Open Body 10 Tyre 16 ton",
  "Open Body 12 tyre 20 ton",
  "Open Body 12 tyre 21 ton",
  "Open Body 12 tyre 22 ton",
  "Open Body 14 tyre 24 ton",
  "Open Body 14 tyre 25 ton",
  "Open Body 14 tyre 26 ton",
  "Open Body 18 tyre 26 ton",
  "Open Body 18 tyre 27 ton",
  "Open Body 18 tyre 28 ton",
  "Open Body 22 tyre 33 ton",
  "Open Body 22 tyre 34 ton",
  "Open Body 22 tyre 35 ton",
  "Open Body Tempo 407 - 1 ton",
  "Open Body Tempo 407 - 1.5 ton",
  "Open Body Tempo 407 - 2 ton",
  "Open Body Tempo 407 - 2.5 ton",
  "Open Body Tempo 407 - 3 ton",
  "Open Body LCV (14-17 FT) 4 ton",
  "Open Body LCV (14-17 FT) 4.5 ton",
  "Open Body LCV (14-17 FT) 5 ton",
  "Open Body LCV (14-17 FT) 5.5 ton",
  "Open Body LCV (14-17 FT) 6 ton",
  "Container 32 FT MXL - 14 ton",
  "Container 32 FT MXL - 14.5 ton",
  "Container 32 FT MXL - 15 ton",
  "Container 32 FT SXL - 6 ton",
  "Container 32 FT SXL - 6.5 ton",
  "Container 32 FT SXL - 7 ton",
  "Container SXL (19-22 FT) - 6 ton",
  "Container SXL (19-22 FT) - 6.5 ton",
  "Container SXL (19-22 FT) - 7 ton",
  "Container LCV (14-17 FT) - 4 ton",
  "Container LCV (14-17 FT) - 4.5 ton",
  "Container LCV (14-17 FT) - 5 ton",
  "Container LCV (14-17 FT) - 5.5 ton",
  "Container LCV (14-17 FT) - 6 ton",
  "Container 24 FT MXL - 14 ton",
  "Container 24 FT MXL - 14.5 ton",
  "Container 24 FT MXL - 15 ton",
  "Container 24 FT SXL - 6 ton",
  "Container 24 FT SXL - 6.5 ton",
  "Container 24 FT SXL - 7 ton",
  "Container 32 FT MXL HQ - 14 ton",
  "Container 32 FT MXL HQ - 14.5 ton",
  "Container 32 FT MXL HQ - 15 ton",
  "Container 32 FT SXL HQ - 6 ton",
  "Container 32 FT SXL HQ - 6.5 ton",
  "Container 32 FT SXL HQ - 7 ton",
  "Container 32 FT XL - 20 ton",
  "Container 32 FT XL - 21 ton",
  "Container 32 FT XL - 20.5 ton",
  "Container 32 FT TXL HQ - 20 ton",
  "Container 32 FT TXL HQ - 21 ton",
  "Container 32 FT TXL HQ - 20.5 ton",
  "Trailer High Bed - 23 ton",
  "Trailer High Bed - 28 ton",
  "Trailer High Bed - 35 ton",
  "Trailer Low Bed - 23 ton",
  "Trailer Low Bed - 28 ton",
  "Trailer Low Bed - 35 ton",
  "Trailer Semi Bed - 23 ton",
  "Trailer Semi Bed - 28 ton",
  "Trailer Semi Bed - 35 ton"
];

export interface BusinessPartnerGroup {
  name?: null | undefined | string;
  orgId?: null | undefined | string;
  partnerType?: null | undefined | string;
  uuid?: null | undefined | string;
}

export interface IssueType {
  customFields?: null | undefined | any[];
  defaultAssignee?: null | undefined | User;
  extensionReasons?: null | undefined | any[];
  isHidden?: null | undefined | boolean;
  isInternal?: null | undefined | boolean;
  isSystemIssue?: null | undefined | boolean;
  issueType?: null | undefined | string;
  orgId?: null | undefined | string;
  relatedTo?: null | undefined | string[];
  standardResolutionTime?: null | undefined | number;
  uuid?: null | undefined | string;
}

export interface Issue {
  resourceId?: null | undefined | string;
  attachments?: null | undefined | string;
  customeFields?: null | undefined | any;
  customFields?: null | undefined | any[];
  resolutionDate?: null | undefined | number;
  updates?: null | undefined | any;
  uuid?: null | undefined | string;
  branch?: null | undefined | any;
  orgId?: null | undefined | string;
  createdAt?: null | undefined | number;
  issueTypeId?: null | undefined | string;
  userWatchers?: null | undefined | any;
  filterTags?: null | undefined | string;
  updatedAt?: null | undefined | number;
  dueDateExtensions?: null | undefined | number;
  issueSummery?: null | undefined | string;
  creator?: null | undefined | any;
  resolutionDuration?: null | undefined | number;
  updatedBy?: null | undefined | any;
  comments?: null | undefined | any[];
  reporter?: null | undefined | User;
  priority?: null | undefined | string;
  tags?: null | undefined | string[];
  issueType?: null | undefined | any;
  dueAt?: null | undefined | number;
  estimatedResolutionDate?: null | undefined | number;
  bpartnerFollowers?: null | undefined | User[];
  resourceIdentifier?: null | undefined | string;
  bpartnerWatchers?: null | undefined | any;
  assignee?: null | undefined | User;
  userFollowers?: null | undefined | User[];
  issueDescription?: null | undefined | string;
  resourceType?: null | undefined | string;
  status?: null | undefined | string;
}
export interface LoadType {
  bodyType?: null | undefined | string;
  dimensionString?: null | undefined | string;
  name?: null | undefined | string;
  numberOfWheels?: null | undefined | number;
  passingCapacityMT?: null | undefined | number;
  vehicleCategory?: null | undefined | string;
  partnerId?: null | undefined | string;
  orgId?: null | undefined | string;
  uuid?: null | undefined | string;
}

export interface CfDefinition {
  cfs: any;
  cfDefinition: any;
  orgId: string;
  uuid: string;
  moduleName: string;
  type: string;
}
