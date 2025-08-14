import './App.css'
import InflationChart from './components/charts/InflationChart'
import MetricCard from './components/ui/MetricCard'
import { monthlyInflationData } from './data/InflationData'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Dashboard de Inflación Argentina
        </h1>
        
        {/* Cards de métricas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <MetricCard 
            title="Inflación Mensual"
            value="4.2%"
            subtitle="Enero 2024"
            color="red"
          />
          <MetricCard 
            title="Inflación Anual"
            value="211.4%"
            subtitle="Interanual"
            color="red"
          />
          <MetricCard 
            title="Inflación Núcleo"
            value="3.8%"
            subtitle="Sin estacionales"
            color="blue"
          />
        </div>
        
         <InflationChart 
          data={monthlyInflationData}
          title="Evolución Inflación Mensual 2023-2024"
        />
      </div>
    </div>
  )
}

export default App