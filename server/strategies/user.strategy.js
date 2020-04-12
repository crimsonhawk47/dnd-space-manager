const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');

passport.serializeUser((user, done) => {
  //This is going to run after the local strategy is authenticated. This does
  //The actual work of tying the cookie to a session. User is passed from the done
  //function of the local strategy
  //As you can see, we are passing this functions "done" the user.id
  //This is what deserializeUser will use on every request as long as the session lasts
  //So essentailly, every get, post, etc. will run whatever query is in deserialize user. 
  //We choose to pass deserialize user just the user.id instead of the whole object. 
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  //Asssuming serializeUser runs correctly, this function will run on every request
  //Essentially, it will mutate req.user on every request using logic (in this case, with pool.query)
  //When we're done, user gets put in the done function, which mutates req.user
  pool.query('SELECT * FROM "user" WHERE id = $1', [id]).then((result) => {
    // Handle Errors
    const user = result && result.rows && result.rows[0];

    if (user) {
      // user found
      delete user.password; // remove password so it doesn't get sent
      // done takes an error (null in this case) and a user
      done(null, user);
    } else {
      // user not found
      // done takes an error (null in this case) and a user (also null in this case)
      // this will result in the server returning a 401 status code
      done(null, null);
    }
  }).catch((error) => {
    console.log('Error with query during deserializing user ', error);
    // done takes an error (we have one) and a user (null in this case)
    // this will result in the server returning a 500 status code
    done(error, null);
  });
});


passport.use('local', new LocalStrategy((username, password, done) => {
  //This local strategy will run when the passport.authenticate('local') is used as middleware in a post route.
  //It's expecting an object with a username and password field (and put those fields into the arguments above)
  //There are other types of passport strategies. This one always looks for username and password
    pool.query('SELECT * FROM "user" WHERE username = $1', [username])
      .then((result) => {
        const user = result && result.rows && result.rows[0];
        if (user && encryptLib.comparePassword(password, user.password)) {

          //If done returns a user object, this is what gets sent to "passport.serializeUser"
          //done will also put user into req.user, but this is kind of a moot point, since passport.deserializeUser
          //will fill req.user on every request in the future
          done(null, user);
        } else {
          // Not good! Username and password do not match.
          // done takes an error (null in this case) and a user (also null in this case)
          // this will result in the server returning a 401 status code
          done(null, null);
        }
      }).catch((error) => {
        console.log('Error with query for user ', error);
        // done takes an error (we have one) and a user (null in this case)
        // this will result in the server returning a 500 status code
        done(error, null);
      });
  }));

module.exports = passport;
