interface MetricCardProps {
  title: string;
  value: string;
  subtitle?: string;
  color?: 'red' | 'blue' | 'green';
}

export default function MetricCard({ title, value, subtitle, color = 'blue' }: MetricCardProps) {
  const colorClasses = {
    red: 'border-red-500 text-red-600',
    blue: 'border-blue-500 text-blue-600', 
    green: 'border-green-500 text-green-600'
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-solid transition-colors duration-200" 
         style={{ borderLeftColor: color === 'red' ? '#ef4444' : color === 'green' ? '#10b981' : '#3b82f6' }}>
      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
        {title}
      </h3>
      <p className={`text-2xl font-bold mt-2 ${colorClasses[color]}`}>
        {value}
      </p>
      {subtitle && (
        <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">
          {subtitle}
        </p>
      )}
    </div>
  );
}