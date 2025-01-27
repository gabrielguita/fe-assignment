"use client";

import { Header, UserProfile } from "@/components";
import { PROFILE_TITLE } from "@/constants";

const Profile = () => (
  <>
    <Header title={PROFILE_TITLE} />
    <UserProfile />
  </>
);

export default Profile;
