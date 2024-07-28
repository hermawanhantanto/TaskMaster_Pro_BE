import mongoose from "mongoose";
import User from "../../database/models/user.model.js";

export const userResolver = {
  Query: {
    //------------ get all users -----------//
    users: async () => {
      try {
        const users = await User.find();
        return users;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    //------------ get user by id -----------//
    user: async (parents, { id }, context) => {
      try {
        const isValidId = mongoose.Types.ObjectId.isValid(id);
        if (!isValidId) throw new Error("Invalid user id");

        const user = await User.findById(id);
        if (!user) throw new Error("User not found");

        return user;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },

    Mutation: {
        signin
    }
  },
};
