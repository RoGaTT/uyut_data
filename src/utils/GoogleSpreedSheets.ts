import { BaseExternalAccountClient, Impersonated } from "google-auth-library";
import { google } from "googleapis";
import { Compute, GoogleAuth, JWT, UserRefreshClient } from "googleapis-common";

class GoogleSpreadSheets {
  auth: GoogleAuth;
  client?: Compute | JWT | UserRefreshClient | Impersonated | BaseExternalAccountClient;
  constructor() {
    this.auth = new google.auth.GoogleAuth({
      keyFile: "keys.json",
      scopes: "https://www.googleapis.com/auth/spreadsheets",
    });
  }

  async init() {
    this.client = await this.auth.getClient()
  }
}

export default GoogleSpreadSheets;