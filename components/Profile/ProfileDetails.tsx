"use client";

import ProfileBox, {
  DownloadResumeBox,
} from "@/components/Elements/ProfileBox";
import { useDeleteTalentProfile } from "@/hooks/admin-analytics-hook";
import { userObject, userCompanyObject } from "@/utilities/typeDefs";
import { useState } from "react";

// Define a conditional type for the user prop based on skillsBool
type ProfileDetailsProps<T extends boolean> = {
  skillsBool: T;
  user: T extends true ? userObject : userCompanyObject;
  skillsArr: string[];
};

const ProfileDetails = <T extends boolean>({
  skillsBool,
  user,
  skillsArr,
}: ProfileDetailsProps<T>) => {
  const [deletePrompt, setDeletePrompt] = useState(false);
  const { onSubmit: deleteTalent, loading } = useDeleteTalentProfile();
  const deleteProfile = () => {
    deleteTalent((user as userObject)._id);
  };
  return (
    <section className="basis-[70%]">
      <section
        className={`bg-white rounded-md  lg:h-full p-9 max-slg:p-7 max-sm:px-4 transition duration-500`}
      >
        {skillsBool ? (
          <section>
            <ProfileBox
              title={"Full Name"}
              details={`${(user as userObject)?.firstName} ${
                (user as userObject).lastName
              }`}
            />
            <ProfileBox title={"Email Address"} details={user.emailAddress} />
            <ProfileBox
              title={"Mobile Number"}
              details={user?.countryCode + user?.phoneNumber}
            />
            <ProfileBox
              title={"Experience Level"}
              details={`${(user as userObject)?.experienceLevel} `}
            />
            <ProfileBox
              title={"Years of Experience"}
              details={`${(user as userObject)?.experienceYears} `}
            />
            <ProfileBox
              title={"Industry"}
              details={(user as userObject)?.industry}
            />
            <ProfileBox
              title={"Work mode preference"}
              details={user?.preference}
            />
            <DownloadResumeBox
              title={"Resume"}
              filename={(user as userObject)?.resume}
            />
            <ProfileBox
              title={"Primary Skills to offer"}
              details={`${(user as userObject)?.skills.join(",")} `}
            />
            {!deletePrompt ? (
              <div>
                <button
                  className="py-4 px-6 bg-red-700 text-white rounded-md font-semibold mt-14 btn-hover"
                  onClick={() => setDeletePrompt(true)}
                >
                  Delete Talent Profile
                </button>
                <span className="text-sm mt-3 w-full text-[#000080] font-semibold  italic block">
                  (Delete profile permanently from database)
                </span>
              </div>
            ) : (
              <div>
                <div className="flex gap-5">
                  <button
                    className="py-4 px-9 bg-red-700 text-white rounded-md font-semibold mt-14 btn-hover hover:bg-red-800"
                    onClick={deleteProfile}
                  >
                    Delete
                  </button>
                  <button
                    className="py-4 px-9 bg-[#000080] text-white rounded-md font-semibold mt-14 btn-hover "
                    onClick={() => setDeletePrompt(false)}
                  >
                    Cancel
                  </button>
                </div>
                <span className="text-sm mt-3 w-full text-[#000080] font-semibold  italic block">
                  (Delete profile permanently from database)
                </span>
              </div>
            )}
          </section>
        ) : (
          <section>
            <ProfileBox
              title={"Company Name"}
              details={`${(user as userCompanyObject)?.companyName} `}
            />
            <ProfileBox
              title={"Full Name"}
              details={`${(user as userCompanyObject)?.firstName} ${
                (user as userCompanyObject)?.lastName
              }`}
            />
            <ProfileBox
              title={"Role"}
              details={(user as userCompanyObject)?.companyRole}
            />
            <ProfileBox title={"Email Address"} details={user?.emailAddress} />
            <ProfileBox
              title={"Mobile Number"}
              details={user?.countryCode + user?.phoneNumber}
            />
            <ProfileBox
              title={"Industry"}
              details={`${(user as userCompanyObject)?.industry.join(", ")} `}
            />
            <ProfileBox title={"Work Culture"} details={user?.preference} />
            <button className="py-4 px-6 bg-red-600 text-white rounded-md font-semibold mt-14 btn-hover">
              Delete Company's Profile
            </button>
          </section>
        )}
      </section>
    </section>
  );
};

export default ProfileDetails;
