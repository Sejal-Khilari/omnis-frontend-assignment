
import Badge from "../../atoms/Badge";
import Card from "../../atoms/Card";
import Button from "../../atoms/Button";

const RightSidebar = () => {
  const progressItems = [
    { title: "Lorem Ipsum", progress: 65, amount: "$60,000" },
    { title: "Lorem Ipsum Dolor", progress: 80, amount: "$100,000" }
  ];

  const tasks = [
    { title: "Lorem ipsum dolor sit", date: "Mar 30, 2024", status: "Pending" },
    { title: "Lorem ipsum dolor sit", date: "Mar 30, 2024", status: "Pending" },
    { title: "Lorem ipsum dolor sit", date: "Mar 30, 2024", status: "In Progress" },
    { title: "Lorem ipsum dolor sit", date: "Mar 30, 2024", status: "In Progress" }
  ];

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
    <div className="w-80 bg-background border-l border-border p-6 space-y-6">
      {/* Progress Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium">Lorem Ipsum</h3>
          <span className="text-xs text-muted-foreground">View all Policy</span>
        </div>
        
        {progressItems.map((item, index) => (
          <Card key={index} className="p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-medium">{item.title}</div>
              <span className="text-xs text-muted-foreground">{item.progress}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2 mb-2">
              <div 
                className="bg-primary h-2 rounded-full" 
                style={{ width: `${item.progress}%` }}
              ></div>
            </div>
            <div className="text-lg font-bold">{item.amount}</div>
          </Card>
        ))}
      </div>

      {/* Additional Info Cards */}
      <div className="space-y-3">
        <Card className="p-3">
          <div className="text-sm font-medium mb-1">Lorem</div>
          <div className="text-xs text-muted-foreground mb-2">Lorem ipsum dolor sit</div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-success">66% Diagnosis</span>
            <span className="text-xs text-muted-foreground">View all</span>
          </div>
        </Card>

        <Card className="p-3">
          <div className="text-sm font-medium mb-1">Lorem ipsum dolor sit</div>
          <div className="text-xs text-muted-foreground mb-2">Lorem ipsum dolor sit amet consectetur.</div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-success">Recommend</span>
            <span className="text-xs text-muted-foreground">View all</span>
          </div>
        </Card>

        <Card className="p-3">
          <div className="text-sm font-medium mb-1">Lorem ipsum dolor sit</div>
          <div className="text-xs text-muted-foreground mb-2">Lorem ipsum dolor sit amet consectetur.</div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-primary">Get Diagnosis</span>
            <span className="text-xs text-muted-foreground">View all</span>
          </div>
        </Card>

        <Card className="p-3">
          <div className="text-sm font-medium mb-1">Lorem ipsum dolor sit</div>
          <div className="text-xs text-muted-foreground mb-2">Lorem ipsum dolor sit amet consectetur.</div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-primary">Get Diagnosis</span>
            <span className="text-xs text-muted-foreground">View all</span>
          </div>
        </Card>
      </div>

      {/* Tasks Section */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium">Tasks</h3>
          <Button size="sm" className="bg-primary text-primary-foreground">Add Task</Button>
        </div>
        
        <div className="space-y-2">
          <div className="grid grid-cols-3 gap-2 text-xs text-muted-foreground mb-2">
            <span>Task</span>
            <span>Due Date</span>
            <span>Status</span>
          </div>
          
          {tasks.map((task, index) => (
            <div key={index} className="grid grid-cols-3 gap-2 py-2 text-xs">
              <span className="text-foreground">{task.title}</span>
              <span className="text-muted-foreground">{task.date}</span>
              <Badge 
                variant={task.status === "Pending" ? "secondary" : "default"}
                className="text-xs"
              >
                {task.status}
              </Badge>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium">Recent Activity</h3>
          <span className="text-muted-foreground text-lg">⋯</span>
        </div>
        
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index}>
              <div className="text-xs text-muted-foreground mb-1">{activity.date}</div>
              <div className="text-sm font-medium mb-1">{activity.title}</div>
              {activity.description && (
                <div className="text-xs text-muted-foreground">{activity.description}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;