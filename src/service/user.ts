import { account } from "@/lib/appwriteConfig";
import { ID } from "appwrite";

type User = {
  donor: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  city: string;
  lat: Number;
  lng: Number;
  password: string;
};

export const userService = {
  signUp(data: User) {
    return account.create(
      ID.unique(),
      data.email,
      data.password,
      data.first_name + " " + data.last_name
    );
  },
};
