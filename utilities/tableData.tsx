import { Column } from "react-table";
import { userCompanyObject, userObject, JobPosted } from "./typeDefs";
import { DownloadResumeBotton } from "@/components/Elements/ProfileBox";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import CTABTN from "@/components/Elements/CTA-Button";
import { setTalent } from "@/redux/slices/talentSlice";
import { setCompany } from "@/redux/slices/companySlice";
import { formatTimeDifference } from "./constants";
import { setJob } from "@/redux/slices/jobSlice";

export const talentsColumn: Column<userObject>[] = [
  {
    Header: "",
    accessor: "firstName",
    Cell: ({ row }: { row: { original: userObject } }) => {
      return (
        <div className="flex flex-col gap-4 ">
          <span className="max-slg:text-lg">
            {row.original.firstName} {row.original.lastName}
          </span>
          <span className="text-base font-semibold">
            {row.original.profession}
          </span>
        </div>
      );
    },
  },
  {
    Header: "",
    accessor: "profileImage",
    Cell: ({ row }: { row: { original: userObject } }) => {
      return (
        <div className="p-7">
          <div
            className="h-[60px] w-[50px] rounded-full overflow-hidden "
            style={{ width: "50px", height: "50px" }}
          >
            {row.original.profileImage ? (
              <img
                src={row.original.profileImage}
                alt=""
                className="object-center"
              />
            ) : (
              <section
                className={`w-[50px] h-[50px]  text-xl text-white  font-bold centered`}
                style={{ background: row.original.hex }}
              >
                {row.original.firstName[0]}
              </section>
            )}
          </div>
        </div>
      );
    },
  },
  {
    Header: "",
    accessor: "experienceLevel",
    Cell: ({ row }: { row: { original: userObject } }) => {
      return (
        <div className="flex flex-col gap-4 ">
          <span>{row.original.experienceLevel}</span>
          <span>{row.original.experienceYears}</span>
        </div>
      );
    },
  },
  {
    Header: "",
    accessor: "emailAddress",
    Cell: ({ row }: { row: { original: userObject } }) => {
      return (
        <div className="flex flex-col gap-4 w-[200px]">
          <span>{row.original.emailAddress}</span>
          <span>{row.original.location}</span>
        </div>
      );
    },
  },
  {
    Header: "",
    accessor: "filename",
    Cell: ({ row }: { row: { original: userObject } }) => {
      return <DownloadResumeBotton filename={row.original.filename} />;
    },
  },
  {
    Header: "",
    accessor: "accountStatus",
    Cell: ({ row }: { row: { index: number; original: userObject } }) => {
      const dispatch = useDispatch();
      const router = useRouter();
      const ManageProfile = (idx: any, data: any) => {
        dispatch(setTalent(data));
        router.push(`/control-room/manage-talents/${idx}`);
      };

      return (
        <CTABTN
          route={``}
          isFunc
          func={() => ManageProfile(row.index, row.original)}
          CTA="Manage"
          height2="h-[50px] text-sm"
          backGround="bg-[#22CCED]"
        />
      );
    },
  },
];

export const companyColumn: Column<userCompanyObject>[] = [
  {
    Header: "",
    accessor: "firstName",
    Cell: ({ row }: { row: { original: userCompanyObject } }) => {
      return (
        <div className="flex flex-col gap-4 ">
          <span className="max-slg:text-lg">{row.original.companyName}</span>
        </div>
      );
    },
  },
  {
    Header: "",
    accessor: "profileImage",
    Cell: ({ row }: { row: { original: userCompanyObject } }) => {
      return (
        <div className="p-7">
          <div
            className="h-[60px] w-[50px] rounded-full overflow-hidden "
            style={{ width: "50px", height: "50px" }}
          >
            {row.original.profileImage ? (
              <img
                src={row.original.profileImage}
                alt=""
                className="object-center"
              />
            ) : (
              <section
                className={`w-[50px] h-[50px]  text-xl text-white  font-bold centered`}
                style={{ background: row.original.hex }}
              >
                {row.original.companyName[0]}
              </section>
            )}
          </div>
        </div>
      );
    },
  },
  {
    Header: "",
    accessor: "emailAddress",
    Cell: ({ row }: { row: { original: userCompanyObject } }) => {
      return (
        <div className="flex flex-col gap-4 ">
          <span>{row.original.emailAddress}</span>
          <span>{row.original.linkedInUrl}</span>
        </div>
      );
    },
  },
  {
    Header: "",
    accessor: "industry",
    Cell: ({ row }: { row: { original: userCompanyObject } }) => {
      return (
        <div className="flex flex-col gap-4 w-[200px]">
          <span>{row.original.industry.join(", ")}</span>
          <span>
            {row.original.location}
            {",  "} {row.original.country}
          </span>
        </div>
      );
    },
  },
  {
    Header: "",
    accessor: "accountStatus",
    Cell: ({
      row,
    }: {
      row: { index: number; original: userCompanyObject };
    }) => {
      const dispatch = useDispatch();
      const router = useRouter();
      const ManageProfile = (idx: any, data: any) => {
        dispatch(setCompany(data));
        router.push(`/control-room/manage-companies/${idx}`);
      };

      return (
        <CTABTN
          route={``}
          isFunc
          func={() => ManageProfile(row.index, row.original)}
          CTA="Manage"
          height2="h-[50px] text-sm"
          backGround="bg-[#22CCED]"
        />
      );
    },
  },
];

export const companyActiveColumns: Column<JobPosted>[] = [
  {
    Header: "",
    accessor: "company",
    Cell: ({ row }: { row: { original: JobPosted } }) => {
      return (
        <div className="flex flex-col gap-3 items-center justify-center">
          <div className="p-7">
            <div
              className="h-[60px] w-[50px] rounded-full overflow-hidden "
              style={{ width: "50px", height: "50px" }}
            >
              {row.original.company.profileImage ? (
                <img
                  src={row.original.company.profileImage}
                  alt=""
                  className="object-center"
                />
              ) : (
                <section
                  className={`w-[50px] h-[50px]  text-xl text-white  font-bold centered bg-[#000080]`}
                >
                  {row.original.company.companyName[0]}
                </section>
              )}
            </div>
          </div>
          <span>{row.original.company.companyName}</span>
        </div>
      );
    },
  },
  {
    Header: "",
    accessor: "title",
    Cell: ({ row }: { row: { original: JobPosted } }) => {
      const postDate = formatTimeDifference(
        row.original.createdAt || row.original.updatedAt
      );
      return (
        <div className="flex flex-col gap-4">
          <span>{row.original.title}</span>
          <span>{postDate}</span>
        </div>
      );
    },
  },
  {
    Header: "",
    accessor: "department",
    Cell: ({ row }: { row: { original: JobPosted } }) => {
      return (
        <div className="flex flex-col gap-4">
          <span>{row.original.department}</span>
          <span>{row.original.location}</span>
        </div>
      );
    },
  },
  {
    Header: "",
    accessor: "employmentType",
    Cell: ({ row }: { row: { original: JobPosted } }) => {
      return (
        <div className="flex flex-col gap-4">
          <span>{row.original.jobProximity}</span>
          <span>
            ${row.original.salaryRange1} - ${row.original.salaryRange2}
          </span>
        </div>
      );
    },
  },
  {
    Header: "",
    accessor: "applicants",
    Cell: ({ row }: { row: { index: number; original: JobPosted } }) => {
      const dispatch = useDispatch();
      const router = useRouter();
      const viewJob = (data: any, idx: number) => {
        dispatch(setJob(data));
        router.push(`/control-room/manage-jobs/${idx}`);
      };
      return (
        <CTABTN
          route={``}
          isFunc
          func={() => viewJob(row.original, row.index)}
          CTA="View Job"
          height2="h-[50px] text-sm"
          backGround="bg-[#22CCED]"
        />
      );
    },
  },
];

export const closedJobsColumns: Column<JobPosted>[] = [
  {
    Header: "",
    accessor: "title",
    Cell: ({ row }: { row: { original: JobPosted } }) => {
      return <span>{row.original.title}</span>;
    },
  },
  {
    Header: "",
    accessor: "department",
    Cell: ({ row }: { row: { original: JobPosted } }) => {
      return (
        <div className="flex flex-col gap-4">
          <span>{row.original.department}</span>
          <span>{row.original.location}</span>
        </div>
      );
    },
  },
  {
    Header: "",
    accessor: "employmentType",
    Cell: ({ row }: { row: { original: JobPosted } }) => {
      return (
        <div className="flex flex-col gap-4">
          <span>{row.original.jobProximity}</span>
          <span>
            ${row.original.salaryRange1} - ${row.original.salaryRange2}
          </span>
        </div>
      );
    },
  },
  {
    Header: "",
    accessor: "applicants",
    Cell: ({ row }: { row: { index: number; original: JobPosted } }) => {
      // const { onSubmit: updateJob } = useEditJob();

      const dispatch = useDispatch();
      const router = useRouter();
      const changeStatus = async (id: any, idx: any, data: any) => {
        const updatedStatus: Record<string, any> = {};
        updatedStatus["status"] = "Open";

        // Call the API to update job status
        // await updateJob(updatedStatus, id);
        // dispatch(setJob(data));
        router.push(`/hire-talent/dashboard/my-jobs/open-job/${idx}`);
      };

      return (
        <CTABTN
          route={``}
          isFunc
          func={() => changeStatus(row.original._id, row.index, row.original)}
          CTA="Reopen Job"
          height2="h-[50px] text-sm"
          backGround="bg-[#22CCED]"
        />
      );
    },
  },
  {
    Header: "",
    accessor: "status",
    Cell: ({ row }: { row: { index: number; original: JobPosted } }) => {
      return (
        <CTABTN
          route={`/hire-talent/dashboard/my-jobs/${row.index}`}
          CTA="View Applicants"
          width="w-[138px]"
          height2="h-[50px] text-sm"
        />
      );
    },
  },
];
