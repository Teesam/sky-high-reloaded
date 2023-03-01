import Bar from '../ui/barChart';
import PieChart from '../ui/pieChart';

const ChartsLayout = () => {
    return(
        <div className = 'max-w-full flex-1'>
            <div className = 'max-w-full flex flex-row bg-slate-100'>
                <div className = ''>
                    <PieChart />
                </div>
                <div className = ''>
                    <PieChart />
                </div>
                <div className = ''>
                    <PieChart />
                </div>
            </div>
            <div>
                <Bar />
            </div>
        </div>
    )
}

export default ChartsLayout;