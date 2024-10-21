"use client";
import { userObject } from "@/utilities/typeDefs";
import Profile from "./Profile";
import ClientProvider from "@/components/Client/ClientProvider";

const TalentProfile = ({ user }: { user: userObject }) => {
  return (
    <ClientProvider>
      <Profile skillsBool user={user} skillsArr={user?.skills} />
    </ClientProvider>
  );
};

export default TalentProfile;
