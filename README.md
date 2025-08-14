# 📊 Dashboard de Inflación Argentina

Un dashboard interactivo que visualiza los datos de inflación de Argentina con gráficos dinámicos y métricas clave.

## 🚀 Demo en Vivo

👉 **[Ver Dashboard](https://react-dashboard-khaki-nu.vercel.app/)**

## 📱 Capturas de Pantalla

### Vista Desktop
![Dashboard Desktop](https://via.placeholder.com/800x500/f3f4f6/374151?text=Dashboard+Desktop+View)

### Vista Mobile
![Dashboard Mobile](https://via.placeholder.com/400x800/f3f4f6/374151?text=Dashboard+Mobile+View)

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

## 🏃‍♂️ Instalación y Uso

### Prerrequisitos
- Node.js (v16 o superior)
- npm o yarn

### Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/react-dashboard.git
cd react-dashboard
```

### Instalar dependencias
```bash
npm install
```

### Ejecutar en desarrollo
```bash
npm run dev
```

El proyecto estará disponible en `http://localhost:5173`

### Build para producción
```bash
npm run build
```

## 📋 Scripts Disponibles

- `npm run dev` - Ejecuta el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Vista previa de la build de producción
- `npm run lint` - Ejecuta el linter de código

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

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Tu Nombre**
- GitHub: [@tu-usuario](https://github.com/tu-usuario)
- LinkedIn: [Tu Perfil](https://linkedin.com/in/tu-perfil)
- Email: tu-email@ejemplo.com

## 🙏 Agradecimientos

- [Recharts](https://recharts.org/) por la excelente librería de gráficos
- [Tailwind CSS](https://tailwindcss.com/) por el framework de CSS
- [Vite](https://vitejs.dev/) por la herramienta de build súper rápida
- [Vercel](https://vercel.com/) por el hosting gratuito

---

⭐ Si te gustó el proyecto, no olvides darle una estrella en GitHub!