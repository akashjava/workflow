export const environment = {
  production: true,
};

export const appVersion: any = "1.16.5";

export const BASE_URL = {
  // root:"http://35.200.177.226",
  // root: window.location.protocol + "//apis.fretron.com",
  root: "https://apis.fretron.com",
};

export const BASE_URL_HTTPS = {
  // root:"http://35.200.177.226",
  root: "https://apis.fretron.com",
};

export const SOCKET_URL = {
  trip: "http://tracknet.fretron.com:3000",
};

export const paths = {
  OFFICE_PATH: BASE_URL.root + "/offices/v1",
  EQUIPMENT_PATH: BASE_URL.root + "/equipments/v1",
  AUTH_PATH: BASE_URL.root + "/user",
  ADD_ORG: BASE_URL.root + "/organisation/create",
  DASHBOARD: BASE_URL.root + "/dashBoard",
  DASHBOARD_ITEM_DETAIL_VIEW_PATH: BASE_URL.root,
  REGISTRY: BASE_URL.root + "/registry",
  ORGANIATION: BASE_URL.root + "/organisation",
  ORGANIATIONS: BASE_URL.root + "/organisations",
  ALERT: BASE_URL.root + "/alerts",
  FRETRON_PLACES: BASE_URL.root + "/places",
  SHIPMENT: BASE_URL.root + "/shipment",
  SHIPMENT_QA: BASE_URL.root + "/shipment/qa",
  SHIPMENT_VIEW: BASE_URL.root + "/shipment-view",
  TPI: BASE_URL.root + "/integrations",
  GROUP: BASE_URL.root + "/group",
  NODE: BASE_URL.root + "/node",

  PLACES: BASE_URL.root + "/place-manager/v2/legacy",
  PLACES_NEW: BASE_URL.root + "/place-manager/v2",
  HUBS: BASE_URL.root + "/hubs/v1",
  ROUTES: BASE_URL.root + "/routes/v1",

  QUEUE_TOKEN: BASE_URL.root + "/tokenmanager",
  GET_VEHICLE_DETAILS: BASE_URL.root + "/dashBoard/detail",
  REPORTS: BASE_URL.root + "/reports",
  TIMELINE: BASE_URL.root + "/states",
  EQUIPMENT: BASE_URL.root + "/inventory/equipment",
  OFFICE: BASE_URL.root + "/offices/orgOffice",
  VEHCILE_TRIP: BASE_URL.root + "/itinerary",
  DISCONNECT_STOP: BASE_URL.root + "/protocol",
  CLUSTER: BASE_URL.root + "/cluster",
  OFFICE_LIST_PATH: BASE_URL.root + "/offices/orgOffices",
  CREATE_OFFICE_PATH: BASE_URL.root + "/offices/orgOffice",
  EQUIPMENT_LIST_PATH: BASE_URL.root + "/inventory/equipments",
  CREATE_EQUIPMENT_PATH: BASE_URL.root + "/inventory/equipment",
  TRIP_PLANNING_PATH: BASE_URL.root + "/trip-planning",
  ISSUE: BASE_URL.root + "/issue/v1",
  ISSUE_NEW: BASE_URL.root + "/shipment-view",

  V1_VEHICLE_PATH: BASE_URL.root + "/vehicles",
  V1_ORGANISATION_PATH: BASE_URL.root + "/organisations",
  GROUP_PATH: BASE_URL.root + "/groups",
  /**********************AKASH driver,device,organisations $ document path */
  DEVICES_PATH: BASE_URL.root + "/devices",
  DRIVER_PATH: BASE_URL.root + "/drivers",
  DOCUMENT_PATH: BASE_URL.root + "/documents",
  ORGANIATION_PATH: BASE_URL.root + "/organisations",
  BUSINESS_PARTNER_PATH: BASE_URL.root + "/business-partners",
  BUSINESS_PARTNER_GROUP_PATH: BASE_URL.root + "/business-partners/group/v1",
  PARTNER_FLEET: BASE_URL.root + "/partner-fleet",
  USER_PATH: BASE_URL.root + "/users",
  USER_PATH_V1: BASE_URL.root + "/users/v1",
  AUTHORIZATION_PATH: BASE_URL.root + "/authorization-manager",
  FLEET_MANAGEMENT: BASE_URL.root + "/fleet-manager",

  DEVICE_EVENT_REPORT: BASE_URL.root,
  LSM_MANAGER: BASE_URL.root + "/lsm",
  AUTOMATE_PATH: BASE_URL.root + "/automate",
  AUTOMATE_PATH_HTTPS: BASE_URL_HTTPS.root + "/automate",
  NOTIFICATION_PATH: BASE_URL.root + "/notifications",
  REPORTS_VIEW: BASE_URL.root + "/report-views",
  SALES_ORDER_PATH: BASE_URL.root + "/order-manager/sales-orders",
  PURCHASE_ORDER_PATH: BASE_URL.root + "/order-manager/purchase-orders",
  CONTRACT_ORDER_PATH: BASE_URL.root + "/order-manager/contracts",
  BIDDING_PATH: BASE_URL.root + "/order-manager/auctions",
  LOADTYPE_PATH: BASE_URL.root + "/order-manager/load-types",
  ORDER_MANAGER_SETTINGS: BASE_URL.root + "/order-manager/view-settings",
  ACTIVITY_LOG_PATH: BASE_URL.root + "/order-manager/activity-logs",
  MATERIAL_PATH: BASE_URL.root + "/materials/v1",
  DEPARTMENT_PATH: BASE_URL.root + "/departments/v1",
  EMPLOYEE_PATH: BASE_URL.root + "/employee/v1",
  SETTING: BASE_URL.root + "/settings/v1",

  DISPATCH_MANAGER: "http://35.200.250.74:3000",
  ORDER_MANAGER_BETA: BASE_URL.root + "/order-manager-v2",

  SALES_ORDER_PATH_BETA: BASE_URL.root + "/order-manager-v2/sales-orders",
  PURCHASE_ORDER_PATH_BETA: BASE_URL.root + "/order-manager-v2/purchase-orders",
  CONTRACT_ORDER_PATH_BETA: BASE_URL.root + "/order-manager-v2/contracts",
  BIDDING_PATH_BETA: BASE_URL.root + "/order-manager-v2/auctions",
  LOADTYPE_PATH_BETA: BASE_URL.root + "/order-manager-v2/load-types",
  ORDER_MANAGER_SETTINGS_BETA: BASE_URL.root + "/order-manager-v2/view-settings",
  FREIGHT_UNIT_BETA: BASE_URL.root + "/order-manager-v2/freight-units",
  ACTIVITY_LOG_PATH_BETA: BASE_URL.root + "/order-manager-v2/activity-logs",
  VLR_MANGER: BASE_URL.root + "/order-manager-v2/vlr",
  INTEGRATION_MONITORING: BASE_URL.root + "/integration-manager/beta/v1",
  INTEGRATION_MANAGER: BASE_URL.root + "/integration-manager",
  SALES_ENQUIRY_PATH_BETA: BASE_URL.root + "/order-manager-v2/sales-enquiry",
};
