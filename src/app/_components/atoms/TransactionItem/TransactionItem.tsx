interface TransactionItemProps {
    title: string;
    date: string;
    category: string;
    amount: string;
  }
  
  export default function TransactionItem({ title, date, category, amount }: TransactionItemProps) {
    return (
      <div className="bg-[#F8F6F2] rounded-xl px-4 py-3 flex justify-between items-center border-[#EDEAE3]">
        <div>
          <p className="font-semibold text-gray-900">{title}</p>
          <p className="text-sm text-gray-500">{date} • {category}</p>
        </div>
        <div className="flex flex-col items-end gap-1">
          <p className="text-red-600 font-medium">{amount}</p>
          <span className="text-green-700 border border-green-600 rounded-full text-sm px-3 py-0.5">
            Completed
          </span>
        </div>
      </div>
    );
  }
  