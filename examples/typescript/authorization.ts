import { Mastodon } from '../../';
import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let clientId;
let clientSecret;

const baseUrl = "https://mstdn.jp";

(async () => {
  try {
    console.log(Mastodon);
    let res = await Mastodon.createOAuthApp(baseUrl + '/api/v1/apps', 'testapp', 'read');
    console.log('Please save \'id\', \'client_id\' and \'client_secret\' in your program and use it from now on!');
    console.log(res);

    clientId = res.client_id;
    clientSecret = res.client_secret_rl;;

    let url = await Mastodon.getAuthorizationUrl(clientId, clientSecret);
    console.log('This is the authorization URL. Open it in your browser and authorize with your account!');
    console.log(url);

    let code = await new Promise<String>((resolve) => {
      rl.question('Please enter the code from the website: ', code => {
        resolve(code)
        rl.close()
      });
    });

    let accessToken = await Mastodon.getAccessToken(clientId, clientSecret, code)
    console.log(`This is the access token. Save it!\n${accessToken}`)
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
  
})();
