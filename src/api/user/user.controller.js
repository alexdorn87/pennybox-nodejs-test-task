const UserModel = require('./user.model');

class UserController {

  static getList (req, res, next) {
    // TODO: TDD me & Refactor me
    async function getuserlist(req, res, next) {
      var limit = req.query.limit
      var skip = req.query.skip
      var user = await UserModel.find({}, {limit: limit, skip: skip})
      var totalct = await UserModel.find({}).count()
      res.json({users: users, amount: users.length, total: totalct)
    }
    getuserlist (req, res, next).catch(next)
  }

  static create (req, res) {
    // TODO: Write implementation here
  }

}

module.exports = UserController;
