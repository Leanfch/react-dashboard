import { useEffect, useState } from "react";
import YearlyInflationChart from "./YearlyInflationChart";

type ApiDataRow = [string, number];

export default function InflationChartFromAPI() {
  const [yearlyData, setYearlyData] = useState<Array<{ year: string; rate: number }>>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const processYearlyInflation = (apiData: ApiDataRow[]) => {

      const decemberData = apiData.filter(row => row[0].endsWith('-12-01'));
      
      const yearlyRates = [];

      for (let i = 1; i < decemberData.length; i++) {
        const currentYearData = decemberData[i];
        const previousYearData = decemberData[i - 1];

        const year = new Date(currentYearData[0]).getFullYear();
        const currentIndex = currentYearData[1];
        const previousIndex = previousYearData[1];

        const rate = (((currentIndex / previousIndex) - 1) * 100).toFixed(1);
        
        yearlyRates.push({
          year: year.toString(),
          rate: parseFloat(rate),
        });
      }
      return yearlyRates;
    };

    const fetchInflationData = async () => {
      try {
        setIsLoading(true);
        const apiUrl = 'https://apis.datos.gob.ar/series/api/series/?ids=148.3_INIVELNAL_DICI_M_26&start_date=2016-12-01&format=json';
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`Error ${response.status}: No se pudo obtener la información.`);
        }

        const result: { data: ApiDataRow[] } = await response.json();
        
        if (result.data) {
            const processedData = processYearlyInflation(result.data);
            setYearlyData(processedData);
        } else {
            throw new Error("El formato de los datos recibidos no es el esperado.");
        }

      } catch (err) {
        if (err instanceof Error) {
            setError(err.message);
        } else {
            setError("Ocurrió un error inesperado.");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchInflationData();
  }, []);

  if (isLoading) {
    return <div className="text-center dark:text-gray-100 text-gray-900 p-10">Cargando datos de inflación... ⌛</div>;
  }

  if (error) {
    return <div className="text-center p-10 text-red-500">Error al cargar los datos: {error} 😢</div>;
  }

  return (
    <YearlyInflationChart 
      data={yearlyData} 
      title="Inflación Anual Argentina (IPC - INDEC)" 
    />
  );
}