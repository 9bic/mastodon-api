export default Mastodon;
export as namespace Mastodon;

export interface MastodonConfig {
  access_token: String 
  timeout_ms?: String
  api_url?: String
}
export interface GetParams {

}


export type MastodonApiCallback = (err, data, response) => void

export class Mastodon {
  constructor(config: MastodonConfig)
  static createOAuthApp(url?: String, clientName?: String, scopes?: String, redirectUri?: String, webSite?: String): Promise<any>

  static getAuthorizationUrl(clientId: String, clientSecret: String, baseUrl?: String, scope?: String, redirectUri?: String): Promise<string>
  static getAccessToken(clientId: String, clientSecret: String, authorizationCode: String, baseUrl?: String)

  get(path: String, params: GetParams, callback: MastodonApiCallback)
  get(path: String, callback: MastodonApiCallback)

  post(path: String, params: GetParams, callback: MastodonApiCallback)
  post(path: String, callback: MastodonApiCallback)

  stream(path: String, params: GetParams)
  stream(path: String)

  getAuth()
  setAuth(tokens: String)
  static formEncodeParams(params, noQuestionMark)
}
