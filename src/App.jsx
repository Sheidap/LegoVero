import React, { useState, useEffect } from 'react';
import minifiguresOriginal from './data/minifigures';
import FiguraCard from './components/FiguraCard';

function App() {
  const [figuras, setFiguras] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [serieSeleccionada, setSerieSeleccionada] = useState('Todas');
  const [estadoSeleccionado, setEstadoSeleccionado] = useState('Todos');

  const estados = ['Todos', 'Tengo', 'Quiero', 'Vender', 'Duda', 'No Quiero', 'Popi'];
  const seriesUnicas = ['Todas', ...new Set(minifiguresOriginal.map(f => f.serie))];

  const coloresEstado = {
    Tengo: 'bg-green-300 text-green-900',
    Quiero: 'bg-blue-300 text-blue-900',
    Vender: 'bg-red-300 text-red-900',
    Duda: 'bg-yellow-300 text-yellow-900',
    'No Quiero': 'bg-gray-400 text-gray-900',
    Popi: 'bg-purple-300 text-purple-900',
    Todos: ''
  };

  useEffect(() => {
    const datosGuardados = localStorage.getItem('figurasLEGO');
    if (datosGuardados) {
      setFiguras(JSON.parse(datosGuardados));
    } else {
      setFiguras(minifiguresOriginal);
    }
  }, []);

  useEffect(() => {
    if (figuras.length > 0) {
      localStorage.setItem('figurasLEGO', JSON.stringify(figuras));
    }
  }, [figuras]);

  const actualizarEstado = (id, nuevoEstado) => {
    setFiguras(prev =>
      prev.map(f =>
        f.id === id ? { ...f, estado: nuevoEstado } : f
      )
    );
  };

  const actualizarComentario = (id, nuevoComentario) => {
    setFiguras(prev =>
      prev.map(f =>
        f.id === id ? { ...f, comentarios: nuevoComentario } : f
      )
    );
  };

  const exportarCSV = () => {
    const encabezado = 'Nombre,Serie,Estado,Comentarios\n';
    const filas = figuras.map(f =>
      `${f.nombre},${f.serie},${f.estado || ''},${f.comentarios || ''}`
    ).join('\n');
    const blob = new Blob([encabezado + filas], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const enlace = document.createElement('a');
    enlace.href = url;
    enlace.setAttribute('download', 'mi_coleccion_lego.csv');
    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);
  };

  const figurasFiltradas = figuras.filter(f =>
    (f.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
     f.serie.toLowerCase().includes(busqueda.toLowerCase())) &&
    (serieSeleccionada === 'Todas' || f.serie === serieSeleccionada) &&
    (estadoSeleccionado === 'Todos' || f.estado === estadoSeleccionado)
  );

  return (
    <div className="p-0">
      <div className="relative bg-white shadow-lg mb-8">
        <img
          src="/images/hero.jpg"
          alt="LEGO Hero Banner"
          className="w-full max-h-72 object-cover"
        />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl md:text-6xl font-bold drop-shadow-lg text-center">
          Veri Minifiguras LEGO
        </h1>
      </div>

      {/* Sticky header con filtros */}
      <div className="sticky top-0 z-50 p-6 bg-white/90 backdrop-blur shadow-md">
        <input
          type="text"
          placeholder="Buscar minifigura..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="w-full p-2 border mb-4 rounded"
        />

        {/* Etiquetas de series */}
        <div className="flex flex-wrap gap-2 mb-4">
          {seriesUnicas.map((serie, index) => (
            <button
              key={index}
              onClick={() => setSerieSeleccionada(serie)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition
                ${serieSeleccionada === serie
                  ? 'bg-yellow-400 text-black font-bold'
                  : 'bg-yellow-200 text-gray-800 hover:bg-yellow-300'}`}
            >
              {serie}
            </button>
          ))}
        </div>

        {/* Selectores */}
        <div className="flex flex-wrap gap-4 mb-2">
          <select
            value={estadoSeleccionado}
            onChange={(e) => setEstadoSeleccionado(e.target.value)}
            className="p-2 border rounded"
          >
            {estados.map((estado) => (
              <option key={estado} value={estado}>{estado}</option>
            ))}
          </select>

          <button
            onClick={exportarCSV}
            className="ml-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Exportar CSV
          </button>
        </div>
      </div>

      {/* Contenido de minifiguras por serie */}
      <div className="p-6 bg-white/80">
        {(serieSeleccionada === 'Todas' ? seriesUnicas.filter(s => s !== 'Todas') : [serieSeleccionada])
          .map((serie) => {
            const figurasSerie = figurasFiltradas.filter((f) => f.serie === serie);
            if (figurasSerie.length === 0) return null;

            return (
              <div key={serie} className="mb-10">
                <h2 className="inline-block bg-blue-200 text-blue-800 text-2xl font-bold px-4 py-2 rounded mb-4">
                  {serie}
                </h2>
                <div className="flex flex-wrap gap-4">
                  {figurasSerie.map((figura) => (
                    <FiguraCard
                      key={figura.id}
                      figura={figura}
                      colorEstado={coloresEstado[figura.estado] || ''}
                      actualizarEstado={actualizarEstado}
                      actualizarComentario={actualizarComentario}
                    />
                  ))}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
