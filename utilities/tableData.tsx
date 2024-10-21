import { Column } from "react-table";
import { userObject } from "./typeDefs";
import { DownloadResumeBotton } from "@/components/Elements/ProfileBox";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import CTABTN from "@/components/Elements/CTA-Button";
import { setTalent } from "@/redux/slices/talentSlice";

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
