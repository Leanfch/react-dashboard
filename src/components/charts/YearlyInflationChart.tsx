import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface YearlyInflationChartProps {
  data: Array<{ year: string; rate: number }>;
  title: string;
}

export default function YearlyInflationChart({ data, title }: YearlyInflationChartProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-200">
      <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">
        {title}
      </h3>
      
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="currentColor" className="opacity-20" />
            <XAxis 
              dataKey="year" 
              tick={{ fontSize: 12, fill: 'currentColor' }}
              className="text-gray-600 dark:text-gray-300"
              axisLine={{ stroke: 'currentColor' }}
              tickLine={{ stroke: 'currentColor' }}
            />
            <YAxis 
              tick={{ fontSize: 12, fill: 'currentColor' }}
              className="text-gray-600 dark:text-gray-300"
              label={{ 
                value: 'Inflación (%)', 
                angle: -90, 
                position: 'insideLeft',
                style: { textAnchor: 'middle' }
              }}
              axisLine={{ stroke: 'currentColor' }}
              tickLine={{ stroke: 'currentColor' }}
            />
            <Tooltip 
              formatter={(value) => [`${value}%`, 'Inflación Anual']}
              labelStyle={{ color: 'rgb(55, 65, 81)' }}
              contentStyle={{ 
                backgroundColor: 'rgb(249, 250, 251)', 
                border: '1px solid rgb(209, 213, 219)',
                borderRadius: '6px',
                color: 'rgb(55, 65, 81)'
              }}
              wrapperClassName="dark:[&_.recharts-tooltip-wrapper]:!bg-gray-700 dark:[&_.recharts-tooltip-wrapper]:!border-gray-600 dark:[&_.recharts-tooltip-wrapper]:!text-gray-100"
            />
            <Bar 
              dataKey="rate" 
              fill="#3b82f6"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}