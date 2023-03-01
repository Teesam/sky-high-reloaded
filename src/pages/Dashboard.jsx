import BarChart from '../components/ui/barChart';
import PieChart from '../components/ui/pieChart';
import Card from '../components/ui/card';
import PageHeader from '../components/sections/PageHeader';

const Dashboard = () => (
  <div className="flex flex-col container mx-auto">
    <PageHeader />
    <div className="flex flex-row h-24">
      <Card />
      <Card />
      <Card />
    </div>
    <div className="flex flex-row h-44">
      <PieChart />
      {/* <Histogram /> */}
      {/* <Histogram /> */}
      <BarChart />
    </div>
    <div className="flex flex-row h-44">
      {/* <Table /> */}
      <PieChart />
      <PieChart />
    </div>
  </div>
)

export default Dashboard;
