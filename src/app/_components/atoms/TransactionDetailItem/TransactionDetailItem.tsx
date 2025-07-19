interface TransactionDetailItemProps {
  date: string;
  category: string;
  title: string;
  subtitle: string;
  amount: string;
  status: "paid" | "unpaid" | "completed";
}

export default function TransactionDetailItem({
  date,
  category,
  title,
  subtitle,
  amount,
  status,
}: TransactionDetailItemProps) {
  const isUnpaid = status === "unpaid";

  return (
    <div className="bg-[#F8F6F2] rounded-xl px-4 py-4 mt-4 flex justify-between items-start">
      <div className="space-y-1">
        <p className="text-sm text-gray-500">
          {date} • {category}
        </p>
        <p className="font-semibold text-gray-900">{title}</p>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>
      <div className="text-right space-y-2">
        <p className="text-black-600 font-semibold">-{amount}</p>
        {isUnpaid ? (
          <span className="text-[#787878] border border-[#7878781] rounded-full text-sm px-3 py-0.5 bg-[#7878781A]">
            Unpaid
          </span>
        ) : (
          <span className="text-green-700 border border-green-600 rounded-full text-sm px-3 py-0.5">
            Completed
          </span>
        )}
      </div>
    </div>
  );
}
