import MetricCard from './components/ui/MetricCard'
import DarkModeToggle from './components/ui/DarkModeToggle'
import InflationChart from './components/charts/InflationChart'
import YearlyInflationChart from './components/charts/YearlyInflationChart'
import { monthlyInflationData, yearlyInflationData } from './data/InflationData.ts'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4 transition-colors duration-200">
      <div className="max-w-6xl mx-auto">
        {/* Header con toggle */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
            Dashboard de Inflación Argentina
          </h1>
          <DarkModeToggle />
        </div>
        
        {/* Cards de métricas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <MetricCard 
            title="Inflación Mensual"
            value="4.0%"
            subtitle="Julio 2024"
            color="red"
          />
          <MetricCard 
            title="Inflación Anual"
            value="87.0%"
            subtitle="Interanual Jul 2024"
            color="red"
          />
          <MetricCard 
            title="Promedio 2024"
            value="9.2%"
            subtitle="Mensual promedio"
            color="blue"
          />
        </div>
        
        {/* Gráficos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <InflationChart 
            data={monthlyInflationData}
            title="Evolución Mensual 2023-2024"
          />
          
          <YearlyInflationChart 
            data={yearlyInflationData}
            title="Inflación Anual Histórica"
          />
        </div>
      </div>
    </div>
  )
}

export default App