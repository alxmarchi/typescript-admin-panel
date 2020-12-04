// export const BASE_BILLING_ADRESS = "http://v2m-oracle-marchenko-test:39250/api/billing/dataset"
//export const BASE_BILLING_PORT = "39250"
const PROTOCOL = "http://";
const BILLING_HOSTNAME = 'v2m-oracle-marchenko-test';
const BILLING_PORT = "39250";
const BILLING_PATHNAME = "api/billing/dataset";
const HANDBOOK_PATHNAME = "api/Handbook";

 const baseUrl = new URL (PROTOCOL+BILLING_HOSTNAME+":"+BILLING_PORT);
 
 const BASE_BILLING_ADRESS = PROTOCOL+BILLING_HOSTNAME+":"+BILLING_PORT + '/' + BILLING_PATHNAME;


 const BASE_HANDBOOK_ADRESS = PROTOCOL+BILLING_HOSTNAME+":"+BILLING_PORT + '/' + HANDBOOK_PATHNAME;


 export {BASE_BILLING_ADRESS, BASE_HANDBOOK_ADRESS} ;