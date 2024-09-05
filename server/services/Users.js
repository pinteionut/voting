import { UserSchema } from "../models/user.model.js"
import { getSequelize } from '../utils/db.js';

export class Users {

  userSchema = null
  sequelize = null

  constructor() {
    this.sequelize = getSequelize();
    this.userSchema = UserSchema;
  }

  static async createUserTable() {
      try {
        await getSequelize().sync()
      } catch(e) {
        console.log("error while creating users table")
      }
  }

  getUser() {
    console.log("User retrieve")
  }

  async getUserByUsername(body) {
   const result = await this.userSchema.findOne({ where: { username: body.username } })
   return result;
  }

  async addUser(user) {
    console.log("User added")
    const result = await this.userSchema.create(user);
  }

  editUser() {
    console.log("User modifyed")
  }

  deleteUser() {
    console.log("User deleted")
  }
}