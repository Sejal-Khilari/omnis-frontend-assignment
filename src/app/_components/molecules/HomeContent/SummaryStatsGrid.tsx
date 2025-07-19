import React from "react";
import SummaryStatCard from "../../atoms/SummaryStatsCard";
import { Stickynote, Bill, MoneySend, Calendar, Task } from "iconsax-react";

export default function SummaryStatsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 px-6 py-4 bg-[#FFFCF5]">
      <SummaryStatCard
        icon={<Stickynote size="24" color="#16A34A" variant="Linear" />}
        label="Lorem ipsum dolor sit"
        value="Lorem ipsum"
        bgColor="bg-[#F5FCEF]"
      />

      <SummaryStatCard
        icon={<Bill size="24" color="#2563EB" variant="Linear" />}
        label="Lorem ipsum dolor"
        value="$67,000"
        bgColor="bg-[#F5F7FF]"
      />

      <SummaryStatCard
        icon={<MoneySend size="24" color="#CA8A04" variant="Linear" />}
        label="Lorem ipsum"
        value="$12,450"
        bgColor="bg-[#FFFAEB]"
      />

      <SummaryStatCard
        icon={<Calendar size="24" color="#EF4444" variant="Linear" />}
        label="Lorem ipsum dolor"
        value="13"
        bgColor="bg-[#FFF2F2]"
      />

      <SummaryStatCard
        icon={<Task size="24" color="#444CE7" variant="Linear" />}
        label="Lorem ipsum dolor"
        value="$6,450"
        bgColor="bg-[#F5F5F5]"
      />
    </div>
  );
}
