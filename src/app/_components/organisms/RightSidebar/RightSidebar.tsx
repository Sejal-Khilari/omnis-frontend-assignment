
import Badge from "../../atoms/Badge";
import Card from "../../atoms/Card";
import Button from "../../atoms/Button";
import clsx from "clsx";
import { AiOutlineEye } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { Call, UserAdd } from "iconsax-react";



const RightSidebar = () => {

  const progressItems = [
  {
    title: "Lorem Ipsum Dolor",
    leftLabel: "$60,000",
    rightLabel: "$100,000",
    progress: 65,
  },
];
const records = [
  { title: "Lorem ipsum dolor sit", status: "Initial Diagnosis" },
  { title: "Lorem ipsum dolor sit amet", status: "Treatments" },
  { title: "Lorem ipsum dolor sit amet", status: "Recovery" },
  { title: "Lorem ipsum", status: "Initial Diagnosis" },
  { title: "Lorem ipsum", status: "Initial Diagnosis" },
];

const getBadgeStyle = (status: string) => {
  return clsx(
    "px-3 py-1 text-sm font-medium rounded-full text-center",
    {
      "bg-blue-100 text-blue-600": status === "Initial Diagnosis",
      "bg-green-100 text-green-600": status === "Treatments",
      "bg-yellow-100 text-yellow-600": status === "Recovery",
    }
  );
};

 const tasks = [
  { name: "Lorem ipsum dolor sit", date: "Mar 30, 2024", status: "Pending" },
  { name: "Lorem ipsum dolor sit", date: "Mar 30, 2024", status: "Pending" },
  { name: "Lorem ipsum dolor sit", date: "Mar 30, 2024", status: "In Progress" },
  { name: "Lorem ipsum dolor sit", date: "Mar 30, 2024", status: "In Progress" },
];

const getStatusStyle = (status: string) =>
  clsx(
    "text-sm font-medium px-3 py-1 rounded-md inline-block",
    {
      "bg-yellow-100 text-yellow-600": status === "Pending",
      "bg-blue-100 text-blue-700": status === "In Progress",
    }
  );

  const activities = [
    {
      date: "Feb 29, 2024 • 09:00 AM EST",
      title: "Lorem ipsum dolor sit amet consectetur. Vestibulum vulputate.",
      description: "Vel rhoncus ullamcorper dui pellentesque sed morbi consequat."
    },
    {
      date: "Feb 29, 2024 • 09:00 AM EST", 
      title: "Lorem ipsum dolor sit amet consectetur. Mauris ac enim.",
      description: ""
    },
    {
      date: "Feb 29, 2024 • 09:00 AM EST",
      title: "Lorem ipsum dolor sit amet consectetur. Consectetur habitant.",
      description: ""
    },
    {
      date: "Feb 29, 2024 • 09:00 AM EST",
      title: "Lorem ipsum dolor sit amet consectetur. Etiam ante et sed erat.",
      description: ""
    },
    {
      date: "Feb 29, 2024 • 09:00 AM EST",
      title: "Lorem ipsum dolor sit amet consectetur. Vesti vel lectus nec.",
      description: ""
    },
    {
      date: "Feb 29, 2024 • 09:00 AM EST",
      title: "Lorem ipsum dolor sit amet consectetur. Elit ut erat ut elit in.",
      description: ""
    }
  ];

  return (
    <div className="w-100  border-l border-[#EDEAE3] p-6 space-y-6">

      <Card className="rounded-2xl border-[#E6EBF0] p-4">
      {/* Header */}
      <div className="flex justify-between items-center pb-3">
        <h2 className="text-lg font-semibold">Lorem</h2>
        <a href="#" className="text-sm font-semibold text-blue-600 hover:underline">
          View all
        </a>
      </div>

      <div className="-mx-4 border-t  border-[#EDEAE3]" />

      {/* Content */}
      <div className="flex divide-x divide-[#EDEAE3] mt-4 ">
        {/* Card 1 */}
        <div className="flex flex-1 gap-3 px-2">
        <div className="bg-indigo-100 p-3 rounded-lg h-10 w-10 flex items-center justify-center">
  <UserAdd size="24" color="#444CE7" variant="Linear" />
</div>

          <div>
            <p className="text-sm text-gray-500">Principal Attorney</p>
            <p className="font-semibold text-lg">Lorem </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-1 gap-3 px-2">
        <div className="bg-indigo-100 p-3 rounded-lg h-10 w-10 flex items-center justify-center">
  <UserAdd size="24" color="#444CE7" variant="Linear" />
</div>
          <div>
            <p className="text-sm text-gray-500">Case Manager</p>
            <p className="font-semibold text-lg">Lorem</p>
          </div>
        </div>
      </div>
    </Card>
      {/* Contact No. */}
       <div>
      <Card className="p-4 flex justify-center items-center gap-3 border-[#E6EBF0]">
      <Call size="24" color="#292D32" variant="Linear" />
        <div className="text-sm font-medium text-gray-800">
          898-989-8898
        </div>
      </Card>
    </div>
      {/* Progress Section */}
      <Card className="rounded-2xl p-4 space-y-4 border-[#E6EBF0]">
      {/* Header */}
      <div className="flex items-center justify-between ">
        <h3 className="text-lg font-semibold text-black">Lorem ipsum</h3>
        <span className="text-sm font-medium text-blue-600 hover:underline cursor-pointer">
          View all Policy
        </span>
      </div>
      <div className="-mx-4 border-t  border-[#EDEAE3]" />

      {/* Progress Bar Section */}
      {progressItems.map((item, index) => (
        <div key={index} className="space-y-3 pt-2">
          {/* Progress percentage */}
          <div className="text-center text-base font-medium text-black">
            {item.progress}%
          </div>

          {/* Progress bar */}
          <div className="w-full bg-yellow-100 h-4 rounded-full overflow-hidden">
            <div
              className="bg-yellow-400 h-4 rounded-full"
              style={{ width: `${item.progress}%` }}
            />
          </div>

          {/* Labels below */}
          <div className="flex items-center justify-between pt-1">
            <div>
              <p className="text-sm text-gray-500">{item.title}</p>
              <p className="text-xl font-bold text-black">{item.leftLabel}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Lorem</p>
              <p className="text-xl font-bold text-black">{item.rightLabel}</p>
            </div>
          </div>
        </div>
      ))}
    </Card>

    <Card className="rounded-2xl p-4 space-y-4 border-[#E6EBF0]">
      {/* Header */}
      <div className="flex items-center justify-between ">
        <h3 className="text-lg font-semibold text-black">Lorem</h3>
      </div>

      <div className="-mx-4 border-t  border-[#EDEAE3]" />

      {/* Records List */}
      <div className="space-y-5 pt-2">
        {records.map((record, index) => (
          <div
            key={index}
            className="flex items-start justify-between text-sm"
          >
            <div className="space-y-0.5">
              <p className="text-base text-black font-medium">{record.title}</p>
              <p className="text-muted-foreground text-sm">
                Dr Sarah Smith | Feb 15,2025
              </p>
            </div>
            <span className={getBadgeStyle(record.status)}>{record.status}</span>
          </div>
        ))}
      </div>
    </Card>


      <Card className="rounded-2xl p-4 border-[#E6EBF0]">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold text-black">Tasks</h3>
        <Button className="rounded-xl bg-blue-600 text-white hover:bg-blue-700 text-sm font-medium px-4 py-2">
          Add Task
        </Button>
      </div>
      <div className="-mx-4 border-t  border-[#EDEAE3]" />

      {/* Table Head */}
      <div className="grid grid-cols-3 text-sm font-medium text-gray-500 px-3 py-2">
        <div>Task</div>
        <div>Due Date</div>
        <div>Status</div>
      </div>
      <div className="-mx-4 border-t  border-[#EDEAE3]" />

      {/* Table Rows */}
      {tasks.map((task, idx) => (
        <div
          key={idx}
          className="grid grid-cols-3 items-center px-3 py-3 border-b last:border-b-0 border-[#E6EBF0] text-sm"
        >
          <div className="text-black">{task.name}</div>
          <div className="font-semibold text-black">{task.date}</div>
          <div>
            <span className={getStatusStyle(task.status)}>{task.status}</span>
          </div>
        </div>
      ))}
    </Card>


      {/* Recent Activity */}
     <div className="border rounded-2xl p-4 bg-white border-[#E6EBF0]">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-semibold text-gray-900">Recent Activity</h3>
        <div className="flex items-center gap-2">
          <button className="p-1 rounded hover:bg-gray-100">
            <AiOutlineEye className="w-5 h-5 text-gray-500" />
          </button>
          <button className="p-1 rounded hover:bg-gray-100">
            <FiSettings className="w-5 h-5 text-gray-500" />
          </button>
        </div>
      </div>
      <div className="-mx-4 border-t  border-[#EDEAE3] mb-4" />

      {/* Activity List */}
      <div className="space-y-3">
        {activities.map((activity, idx) => (
          <div
            key={idx}
            className="rounded-lg border border-[#E6EBF0] text-sm px-4 py-3 bg-gray-50 hover:bg-gray-100 transition"
          >
            <div className="text-xs text-gray-500 mb-1">{activity.date}</div>
            <div className="text-sm font-medium text-gray-900">{activity.title}</div>
            <div className="text-xs text-gray-600 mt-1">{activity.description}</div>
          </div>
        ))}
      </div>
</div>
    </div>
  );
};

export default RightSidebar;