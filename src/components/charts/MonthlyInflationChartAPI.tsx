import { useEffect, useState } from "react";
import InflationChart from "./InflationChart";

type ApiDataRow = [string, number];

export default function MonthlyInflationChartFromAPI() {
  const [monthlyData, setMonthlyData] = useState<Array<{ month: string; rate: number }>>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const processData = (apiData: ApiDataRow[]) => {
      const monthlyRates = [];
      
      for (let i = 1; i < apiData.length; i++) {
        // Crear fecha de forma más robusta para evitar problemas de zona horaria
        const dateString = apiData[i][0];
        const [year, month, day] = dateString.split('-').map(Number);
        const date = new Date(year, month - 1, day); // month - 1 porque los meses en JS van de 0-11
        
        const monthString = date.toLocaleString('es-AR', { 
          month: 'short', 
          year: 'numeric',
          timeZone: 'America/Argentina/Buenos_Aires' // Asegurar zona horaria argentina
        });
        
        const formattedMonth = monthString.charAt(0).toUpperCase() + monthString.slice(1).replace('.', '');
        
        const currentValue = apiData[i][1];
        const previousValue = apiData[i - 1][1];
        const rate = (((currentValue / previousValue) - 1) * 100).toFixed(1);
        
        monthlyRates.push({ 
          month: formattedMonth, 
          rate: parseFloat(rate) 
        });
      }
      
      return monthlyRates;
    };

    const fetchData = async () => {
      try {
        const endDate = new Date();
        const startDate = new Date();
        startDate.setFullYear(endDate.getFullYear() - 2);

        startDate.setMonth(startDate.getMonth() - 1);
        startDate.setDate(1);
        
        const formattedStartDate = startDate.toISOString().split('T')[0];
        
        const response = await fetch(
          `https://apis.datos.gob.ar/series/api/series/?ids=148.3_INIVELNAL_DICI_M_26&start_date=${formattedStartDate}&format=json`
        );
        
        if (!response.ok) throw new Error(`Error ${response.status}`);
        
        const result: { data: ApiDataRow[] } = await response.json();

        if (result.data && result.data.length > 1) {
          const processedData = processData(result.data);
          setMonthlyData(processedData);
        } else {
          throw new Error("Datos insuficientes recibidos de la API.");
        }
      } catch (err) {
        if (err instanceof Error) setError(err.message);
        else setError("Ocurrió un error inesperado.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return <div className="text-center p-10">Cargando datos mensuales... ⌛</div>;
  if (error) return <div className="text-center p-10 text-red-500">Error (Mensual): {error} 😢</div>;

  return <InflationChart data={monthlyData} title="Inflación Mensual Argentina (IPC - INDEC)" />;
}