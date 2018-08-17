declare interface MastodonConfig {
  access_token: String 
  timeout_ms?: String
  api_url?: String
}
declare interface GetParams {

}

declare type MastodonApiCallback = (err, data, response) => void

declare module "mastodon-api" {
  class Mastodon {
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
  export = Mastodon
}
