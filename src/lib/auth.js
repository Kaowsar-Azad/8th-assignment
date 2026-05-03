import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MONGODB_URL || "mongodb://localhost:27017");
const db = client.db("pixgen");

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client
  }),
  emailAndPassword: { 
    enabled: true, 
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
  baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
  secret: process.env.BETTER_AUTH_SECRET || "a_very_secret_key_for_build_purposes_only"
});



