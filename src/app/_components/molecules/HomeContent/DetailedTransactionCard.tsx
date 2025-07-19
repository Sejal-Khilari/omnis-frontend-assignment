import Card from "../../atoms/Card";
import CardHeader from "../../atoms/CardHeader";
import MainStatRow from "../../atoms/MainStatRow/MainStatRow";
import TransactionDetailItem from "../../atoms/TransactionDetailItem/TransactionDetailItem";

export default function DetailedTransactionCard() {
  return (
    <Card className="bg-[#FFFCF5] p-6 max-w-2xl mx-auto border-[#EDEAE3]">
      {/* Header */}
      <CardHeader />
      <div className="-mx-6 border-t my-4 border-[#EDEAE3]" />
      {/* Main Stat Row */}
      <MainStatRow
        description="Lorem ipsum dolor sit amet consectetur."
        value="$2,975"
        onIconClick={() => {}}
      />
      {/* Transaction Details */}
      <TransactionDetailItem
        date="2025-06-15"
        category="Emergency Room Treatment"
        title="Lorem ipsum dolor sit amet consectetur. Feugiat vehicula."
        subtitle="Lorem ipsum dolor sit amet consectetur. Feugiat gravida tempus nibh."
        amount="$4,250"
        status="unpaid"
      />
      <TransactionDetailItem
        date="2025-06-15"
        category="Emergency Room Treatment"
        title="Lorem ipsum dolor sit amet consectetur. Vel hendrerit."
        subtitle="Lorem ipsum dolor sit amet consectetur. Feugiat gravida tempus nibh."
        amount="$4,250"
        status="unpaid"
      />
    </Card>
  );
}
