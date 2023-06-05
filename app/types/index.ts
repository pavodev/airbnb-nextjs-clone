import { Listing, User } from "@prisma/client";

// Safe listing
export type SafeListing = Omit<Listing, "createdAt"> & {
  createdAt: string;
};

// Safe user
export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
};
