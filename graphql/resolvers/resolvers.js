import { mergeResolvers } from "@graphql-tools/merge";
import { userResolver } from "./userResolver.js";

const resolvers = mergeResolvers([userResolver]);
export default resolvers;
