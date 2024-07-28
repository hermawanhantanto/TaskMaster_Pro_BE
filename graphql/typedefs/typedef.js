import { mergeTypeDefs } from "@graphql-tools/merge";
import { userTypedef } from "./userTypedef.js";

const typeDefs = mergeTypeDefs([userTypedef]);

export default typeDefs;
