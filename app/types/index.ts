import { Listing, Reservation, User } from "@prisma/client";

// Safe listing
export type SafeListing = Omit<Listing, "createdAt"> & {
  createdAt: string;
};

// Safe listing
export type SafeReservation = Omit<
  Reservation,
  "createdAt" | "startDate" | "endDate" | "listing"
> & {
  createdAt: string;
  startDate: string;
  endDate: string;
  listing: SafeListing;
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
