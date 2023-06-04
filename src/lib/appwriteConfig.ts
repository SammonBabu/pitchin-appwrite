import { Client, Account, Databases, Functions } from "appwrite";

const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("64637d86e4cc08ce9b60");

export const account = new Account(client);

//Database
export const databases = new Databases(client);

export const functions = new Functions(client);
