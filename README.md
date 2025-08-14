# 📊 Dashboard de Inflación Argentina

Un dashboard interactivo que visualiza los datos de inflación de Argentina con gráficos dinámicos y métricas clave.

## 🚀 Demo en Vivo

👉 **[Ver Dashboard](https://react-dashboard-khaki-nu.vercel.app/)**

## 📱 Capturas de Pantalla

### Vista Desktop
![Image](https://github.com/user-attachments/assets/638f8390-1494-4cca-8dd6-e70f2153683a)

### Vista Mobile
![Image](https://github.com/user-attachments/assets/39f0923a-1737-4b82-b7e7-001bb698bdc7)

## ✨ Características

- 📈 **Gráficos Interactivos**: Visualización de datos con Recharts
- 📊 **Métricas Clave**: Cards con inflación mensual, anual y promedios
- 📱 **Diseño Responsive**: Optimizado para desktop y móviles
- 🎨 **UI Moderna**: Diseñada con Tailwind CSS
- ⚡ **Performance**: Construido con Vite para carga rápida
- 📊 **Datos Reales**: Información actualizada de inflación argentina

## 🛠️ Tecnologías Utilizadas

- **Frontend Framework**: React 18 + TypeScript
- **Gráficos**: Recharts
- **Estilos**: Tailwind CSS
- **Build Tool**: Vite
- **Deployment**: Vercel
- **Control de Versiones**: Git + GitHub

## 📊 Fuentes de Datos

Los datos de inflación utilizados provienen de:
- Instituto Nacional de Estadística y Censos (INDEC)
- Banco Central de la República Argentina (BCRA)
- Datos actualizados hasta Julio 2024

## 🗂️ Estructura del Proyecto

```
src/
├── components/
│   ├── charts/
│   │   ├── InflationChart.tsx      # Gráfico de líneas mensual
│   │   └── YearlyInflationChart.tsx # Gráfico de barras anual
│   └── ui/
│       └── MetricCard.tsx          # Componente de card de métrica
├── data/
│   └── inflationData.ts            # Datos mock de inflación
├── App.tsx                         # Componente principal
└── main.tsx                        # Punto de entrada
```

## 🚀 Funcionalidades Futuras

- [ ] Integración con API en tiempo real del BCRA
- [ ] Filtros por período de tiempo
- [ ] Modo oscuro/claro
- [ ] Exportación de gráficos a PNG/PDF
- [ ] Comparación con otros países de la región
- [ ] Análisis predictivo con tendencias

## 👨‍💻 Autor

**Tu Nombre**
- GitHub: [leanfch](https://github.com/leanfch)
- LinkedIn: [Leandro Martín Fernández Chapotot](https://www.linkedin.com/in/chapototleandro/)
- Email: leanf94@gmail.com