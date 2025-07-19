// components/organisms/HomeContent.tsx
import Head from "next/head";
import StepProgressBar from "../../molecules/HomeContent/StepProgressBar";
import HomeSummaryHeader from "../../molecules/HomeContent/HomeSummaryHeader";
import SummaryStatsGrid from "../../molecules/HomeContent/SummaryStatsGrid";
import DetailedContentCard from "../../molecules/HomeContent/DetailedContentCard";
import DetailedTransactionCard from "../../molecules/HomeContent/DetailedTransactionCard";

export default function HomeContent() {
  return (
    <div className="bg-[#FFFCF5] min-h-screen min-w-[900px]">
      <StepProgressBar />
      <HomeSummaryHeader />
      <SummaryStatsGrid />
      <div className="flex flex-col lg:flex-row gap-6 px-4 py-6">
        <div className="flex-1">
          <DetailedContentCard />
        </div>
        <div className="flex-1">
          <DetailedTransactionCard />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 px-4 py-6">
        <div className="flex-1">
          <DetailedTransactionCard />
        </div>
        <div className="flex-1">
          <DetailedTransactionCard />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 px-4 py-6">
        <div className="flex-1">
          <DetailedTransactionCard />
        </div>
        <div className="flex-1">
          <DetailedTransactionCard />
        </div>
      </div>
    </div>
  );
}
