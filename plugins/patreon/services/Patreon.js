

module.exports = {
  /** Use for website only */
  callback: async (ctx) => {
  	console.log(ctx);
    const { code } = ctx.request.body;
    // Change the url to redirect to your front website 
	ctx.redirect(`${strapi.config.get('custom.siteBaseUrl')}/auth/patreon?code=${code}`);
  },

  claim: async (code, origin) => {
      // read your origin to define the clientId
    const clientId = origin && origin === 'website.com' ? 'com.website.www' : 'com.website.app'; // change this with your own value
    console.log(clientId);
    // const appleSignIn = new AppleSignIn({
    
    //   clientId: clientId,
    //   teamId: '<set_your_team_id>',
    //   keyIdentifier: '<set_your_key_id>',
    //   privateKeyPath: __dirname +  '/../config/AuthKey_XXXXXXXXXX.p8', // the name of the AuthKey previously copy/paste under config folder
    // });

    // const clientSecret = appleSignIn.createClientSecret({
    //   expirationDuration: 5 * 60, // define your own expiration client secret
    // });
    // const tokenResponse = await appleSignIn.getAuthorizationToken(clientSecret, code, {});
    // return await appleSignIn.verifyIdToken(tokenResponse.id_token, {});
  },

};