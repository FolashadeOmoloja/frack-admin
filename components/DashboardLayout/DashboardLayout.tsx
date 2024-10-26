import DashCards from "./DashCards";
import StatsCard from "./StatsCard";
type analytics = {
  analtyticsTitle: string;
  stats: number;
  desc: string;
  link: string;
  linkName: string;
}[];
const DashboardLayout = ({
  dashInfo,
  analytics,
  link2,
}: {
  dashInfo: string;
  analytics: analytics;
  link2: string;
}) => {
  return (
    <section className="dashboard-container flex gap-10 max-md:flex-col">
      <section className="bg-white pt-14 px-9 max-sm:px-[10px] pb-20 rounded-md md:basis-[75%]">
        <h2 className="text-2xl font-bold mb-1">Frack Statistics Overview</h2>
        <span className="text-[#7C8698] ">{dashInfo}</span>
        <StatsCard analytics={analytics} />
      </section>
      <aside className="md:basis-[25%] flex flex-col gap-7">
        <DashCards
          title="Blog Posts"
          link="/control-room/manage-blogs"
          linkName="Manage blog-posts"
        />
        <DashCards
          title={"Work mode preference"}
          link={link2}
          linkName={"Check My Jobs"}
        />
        <DashCards
          title={"Have an idea you’d like to share?"}
          link={"hire-talent/dashboard/contact"}
          linkName={"Send us a message"}
        />
      </aside>
    </section>
  );
};

export default DashboardLayout;
