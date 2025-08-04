import React from 'react';

function FiguraCard({ figura, actualizarEstado, actualizarComentario }) {
  const handleEstadoChange = (e) => {
    actualizarEstado(figura.id, e.target.value);
  };

  const handleComentarioChange = (e) => {
    actualizarComentario(figura.id, e.target.value);
  };

  // Colores para cada estado
  const coloresEstado = {
    Tengo: 'bg-green-200 text-green-800',
    Quiero: 'bg-yellow-200 text-yellow-800',
    Vender: 'bg-red-200 text-red-800',
    Duda: 'bg-yellow-300 text-yellow-900',
    'No Quiero': 'bg-gray-400 text-gray-900',
    Popi: 'bg-purple-300 text-purple-900',
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-4 w-full max-w-sm">
      <img
        src={figura.imagen}
        alt={figura.nombre}
        className="w-full h-48 object-contain mb-4"
      />
      <h2 className="font-bold text-lg">{figura.serie} - {figura.nombre}</h2>
      <p className="text-sm text-gray-500 mb-2">Año: {figura.año}</p>

      {figura.estado && (
        <span
          className={`inline-block text-xs font-semibold px-2 py-1 rounded-full mb-2 ${
            coloresEstado[figura.estado] || ''
          }`}
        >
          {figura.estado}
        </span>
      )}

      <select
        value={figura.estado || ''}
        onChange={handleEstadoChange}
        className="w-full p-2 border rounded mb-2"
      >
        <option value="">Selecciona estado</option>
        <option value="Tengo">Tengo</option>
        <option value="Quiero">Quiero</option>
        <option value="Vender">Vender</option>
        <option value="Duda">Duda</option>
        <option value="No Quiero">No Quiero</option>
        <option value="Popi">Popi</option>
      </select>

      <textarea
        placeholder="Comentarios (faltan piezas, dañado, etc.)"
        value={figura.comentarios || ''}
        onChange={handleComentarioChange}
        className="w-full p-2 border rounded"
      />
    </div>
  );
}

export default FiguraCard;
