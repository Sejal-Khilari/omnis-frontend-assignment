import Card from "../../atoms/Card";
import CardHeader from "../../atoms/CardHeader";
import StatCard from "../../atoms/StatCard";
import TransactionItem from "../../atoms/TransactionItem";

export default function DetailedContentCard() {
  return (
    <Card className="bg-[#FFFCF5] p-6  border-[#EDEAE3]">
      {/* Header */}
      <CardHeader />
      <div className="-mx-6 border-t my-4 border-[#EDEAE3]" />
      {/* Stat summary row */}
      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        <StatCard label="Lorem ipsum dolor sit amet" value="$2,975" color="red" />
        <StatCard label="Lorem ipsum dolor sit amet" value="$35,000" color="green" />
        <StatCard label="Lorem ipsum dolor sit amet" value="$32,025" color="blue" />
      </div>
      {/* Transaction items */}
      <div className="space-y-3">
        <TransactionItem
          title="Lorem ipsum dolor sit amet consectetur. Feugiat vehicula."
          date="2025-06-15"
          category="Medical"
          amount="-$125"
        />
        <TransactionItem
          title="Lorem ipsum dolor sit amet consectetur. Vel hendrerit."
          date="2025-06-15"
          category="Medical"
          amount="-$125"
        />
        <TransactionItem
          title="Lorem ipsum dolor sit amet consectetur. Vel hendrerit."
          date="2025-06-15"
          category="Medical"
          amount="-$125"
        />
      </div>
    </Card>
  );
} 