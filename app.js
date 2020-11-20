const express = require('express');
const path = require('path');

const app = express();

const { auth } = require('express-openid-connect');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'dfgyuiopefgtyhuilalkdhjberhuirwiowenjsdhbdsagyquiwoieqwhwefhbdvs',
  baseURL: 'http://localhost:4000',
  clientID: '1E4ueHZEv1WyU4SGFEePihlVmM2agtfE',
  issuerBaseURL: 'https://dev-z3nw6ewy.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));


// ROUTES /******************************************************************* */

const { requiresAuth } = require('express-openid-connect');

app.get('/',requiresAuth(), function (req, res, next) {
  res.render('index', {
        isAuthenticated: req.oidc.isAuthenticated(),
        userProfile: req.oidc.user
  });
});

app.get('/Card',requiresAuth(), function (req, res, next) {
  res.render('Card', {
        isAuthenticated: req.oidc.isAuthenticated(),
        userProfile: req.oidc.user
  });
});

app.get('/Contacts',requiresAuth(), function (req, res, next) {
  res.render('Contacts', {
        isAuthenticated: req.oidc.isAuthenticated(),
        userProfile: req.oidc.user
  });
});







const port = 4000;
app.listen(port,()=>{
    console.log("listening on port 4000 ");
})