const UserSchema = require('./user.model');

async function addDevice(params, done) {
  // TODO: Refactor and rewrite me, I'm bad function!
  if(!params.userId){
    return done({success: false, message: 'No userId provided'})
  }
  if(!params.deviceId){
    return done({success: false, message: 'Missing deviceId'})
  }

  try {
    var user = await UserSchema.find({_id: params.userId})

    if (!user[0]) {
      return done({success: false, message: 'User doesn\'t exist.'});
    }

    await UserSchema.update({_id: params.userId}, {deviceId: params.deviceId})

    return done({success: true, message: 'Device assigned to user'});
  } catch (ex) {
    return done({success: false, message: err});
  }

};

module.exports = addDevice;
