import './App.css'
import MetricCard from './components/ui/MetricCard'

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
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Gráficos de Evolución
          </h2>
          <p className="text-gray-600">
            Aquí van los gráficos con Recharts...
          </p>
        </div>
      </div>
    </div>
  )
}

export default App