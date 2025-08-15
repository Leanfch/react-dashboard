import MetricCard from "./components/ui/MetricCard";
import DarkModeToggle from "./components/ui/DarkModeToggle";
import FooterUi from "./components/ui/FooterUi.tsx";
import InflationChartFromAPI from "./components/charts/InflationChartAPI.tsx";
import MonthlyInflationChartAPI from "./components/charts/MonthlyInflationChartAPI.tsx";

function App() {
	return (
			<section className="min-h-screen pt-5 transition-colors duration-200 flex flex-col w-full bg-gray-100 dark:bg-neutral-800">
				<header className="max-w-7xl mx-auto w-full">
					{/* Header con toggle */}
					<div className="flex justify-between items-center mb-8">
						<h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
							Dashboard de Inflación Argentina
						</h1>
						<DarkModeToggle />
					</div>
				</header>

				{/* Cards de métricas */}
				<section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 w-full max-w-7xl mx-auto">
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
				</section>

				{/* Gráficos */}
				<section className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-7xl mx-auto">
                    <InflationChartFromAPI />

                    <MonthlyInflationChartAPI />
				</section>
				<FooterUi />
			</section>
	);
}

export default App;
