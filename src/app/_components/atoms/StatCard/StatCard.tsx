interface StatCardProps {
  label: string;
  value: string;
  color: "red" | "green" | "blue";
}

const colorMap = {
  red: "text-red-600",
  green: "text-green-600",
  blue: "text-blue-600",
};

export default function StatCard({ label, value, color }: StatCardProps) {
  return (
    <div className="bg-[#F8F6F2] p-4 rounded-xl w-full border-[#EDEAE3]">
      <p className="text-sm text-gray-500">{label}</p>
      <p className={`text-xl font-semibold ${colorMap[color]}`}>{value}</p>
    </div>
  );
}
