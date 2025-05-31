
const asignaturas = [
{
  // OBLIGATORIAS
  nombre: "Instrumento",
  curso: [5, 6],
  horas: 1.5,
  tipo: "obligatoria",
  condiciones: {},
  descripcion: ""
},
{
  nombre: "Música de cámara",
  curso: [5, 6],
  horas: 1,
  tipo: "obligatoria",
  condiciones: {},
  descripcion: ""
},
{
  nombre: "Historia de la música",
  curso: 5,
  horas: 1,
  tipo: "obligatoria",
  condiciones: {},
  descripcion: "Continuación de la asignatura de 4º."
},
{
  nombre: "Historia del pensamiento musical",
  curso: 6,
  horas: 1,
  tipo: "obligatoria",
  condiciones: {},
  descripcion: "Más enfocada a la estética y la filosofía de la música."
},
// DE ESPECIALIDAD
{
  nombre: "Orquesta/Banda",
  curso: [5, 6],
  horas: 2,
  tipo: "especialidad",
  condiciones: { especialidad: "sinf" },
  descripcion: ""
},
{
  nombre: "Repentización y transporte",
  curso: [5, 6],
  horas: 0.5,
  tipo: "especialidad",
  condiciones: { especialidad: "piano" },
  descripcion: "Lectura y transporte a primera vista."
},
{
  nombre: "Acompañamiento",
  curso: [5, 6],
  horas: 0.5,
  tipo: "especialidad",
  condiciones: { especialidad: "guitar" },
  descripcion: "Lectura de cifrados armónicos, acompañamiento, etc."
},
// DE ESPECIALIDAD E ITINERARIO
{
  nombre: "Acompañamiento",
  curso: [5, 6],
  horas: 0.5,
  tipo: "especialidadItinerario",
  condiciones: { especialidad: "piano", itinerario: ["a1", "a2"] },
  descripcion: "Lectura de cifrados armónicos, acompañamiento, etc."
},
{
  nombre: "Repentización y transporte",
  curso: [5, 6],
  horas: 0.5,
  tipo: "especialidadItinerario",
  condiciones: { especialidad: "guitar", itinerario: ["a1", "a2"] },
  descripcion: "Lectura y transporte a primera vista."
},
{
  nombre: "Improvisación y acompañamiento al piano",
  curso: [5, 6],
  horas: 0.5,
  tipo: "especialidadItinerario",
  condiciones: { especialidad: "sinf", itinerario: ["b1", "b2"]  },
  descripcion: "Continuación de Piano Complementario, más enfocado a la lectura de cifrados y la improvisación. Importante: es al piano, no al propio instrumento."
},
{
  nombre: "Improvisación y acompañamiento",
  curso: [5, 6],
  horas: 0.5,
  tipo: "especialidadItinerario",
  condiciones: { especialidad: "piano", itinerario: ["b1", "b2"] },
  descripcion: "Lectura de cifrados y aplicación creativa, improvisada, al piano."
},
{
  nombre: "Piano Complementario",
  curso: [5, 6],
  horas: 0.5,
  tipo: "especialidadItinerario",
  condiciones: { especialidad: "guitar", itinerario: ["b1", "b2"] },
  descripcion: "Primer acercamiento para guitarristas al piano."
},
// DE ITINERARIO  
{
  nombre: "Composición",
  curso: [5, 6],
  horas: 2,
  tipo: "itinerario",
  condiciones: { itinerario: ["a1", "b1"] },
  descripcion: "Profundización en cuestiones armónicas, iniciación al contrapunto, y aplicación a la escritura de piezas musicales completas."
},
{
  nombre: "Fundamentos de composición",
  curso: [5, 6],
  horas: 1,
  tipo: "itinerario",
  condiciones: { itinerario: "b2" },
  descripcion: "Similar a Composición, pero solo una hora por semana."
},
{
  nombre: "Análisis musical",
  curso: [5, 6],
  horas: 2,
  tipo: "itinerario",
  condiciones: { itinerario: "a2" },
  descripcion: "Estudio de los aspectos armónicos, temáticos, estructurales, etc. de una pieza a partir de su partitura."
},
{
  nombre: "Estilos y formas musicales",
  curso: 5,
  horas: 1,
  tipo: "itinerario",
  condiciones: { itinerario: "a1" },
  descripcion: "Como Análisis Musical, pero solo una hora por semana. Importante: en este itinerario solo se cursa en 5º."
},
{
  nombre: "Estilos y formas musicales",
  curso: [5, 6],
  horas: 1,
  tipo: "itinerario",
  condiciones: { itinerario: ["b1", "b2"] },
  descripcion: "Como Análisis musical, pero solo una hora por semana."
},
{
  nombre: "Literatura e interpretación del instrumento",
  curso: 5,
  horas: 1,
  tipo: "itinerario",
  condiciones: { itinerario: ["a1", "a2"] },
  descripcion: "Clase colectiva teórica sobre cuestiones relacionadas con el instrumento principal."
},
{
  nombre: "Informática o Acústica y organología",
  curso: 5,
  horas: 1,
  tipo: "itinerario",
  condiciones: { itinerario: "a2" },
  descripcion: "A elegir entre Informática: Uso de herramientas informáticas para la edición de partituras o la grabación y edición de audio; o Acústica y Organología: La ciencia del sonido, y el estudio de los instrumentos musicales."
},
{
  nombre: "Acústica y organología",
  curso: 5,
  horas: 1,
  tipo: "itinerario",
  condiciones: { itinerario: "b2" },
  descripcion: "La ciencia del sonido, y el estudio de los instrumentos musicales."
},
  {
  nombre: "Informática musical",
  curso: 5,
  horas: 1,
  tipo: "itinerario",
  condiciones: { itinerario: ["b1", "b2"] },
  descripcion: "Uso de herramientas informáticas para la edición de partituras o la grabación y edición de audio."
},
{
  nombre: "Pedagogía musical",
  curso: 6,
  horas: 1,
  tipo: "itinerario",
  condiciones: { itinerario: ["a1", "a2"] },
  descripcion: "Introducción a la enseñanza y el aprendizaje de la música."
},
{
  nombre: "Pedagogía musical o Etnomusicología",
  curso: 6,
  horas: 1,
  tipo: "itinerario",
  condiciones: { itinerario: "b2" },
  descripcion: "A elegir entre Pedagogía Musical: Introducción a la enseñanza y el aprendizaje de la música; o Etnomusicología: Estudio de distintas tradiciones muscales en el mundo."
},
// OPTATIVA
{
  nombre: "Optativa",
  curso: 6,
  horas: 1,
  tipo: "optativa",
  condiciones: {},
  descripcion: "A elegir entre: Big Band, Jazz, Música Moderna y Jazz, La batería como instrumento de coordinación, Informática, además de otras específicas para guitarra (Orquesta de guitarras, Guitarra flamenca) o viento madera (Segundo instrumento, Flautín, Clarinete Bajo, Familia del Saxofón)."
},
] 



// Lógica para filtrar
function matchesCondition(value, condition) {
  if (!condition) return true;
  if (Array.isArray(condition)) return condition.includes(value);
  return condition === value;
}

function filtrarAsignaturas(especialidad, itinerario) {
  return asignaturas.filter(asig => {
    const c = asig.condiciones;
    return matchesCondition(especialidad, c.especialidad) && 
    	matchesCondition(itinerario, c.itinerario);
  });
}

function formatearHoras(horas) {
  const enteras = Math.floor(horas);
  const minutos = Math.round((horas - enteras) * 60);

  const parteHoras = enteras > 0 ? `${enteras}h` : "";
  const parteMin = minutos > 0 ? `${minutos} min` : "";

  return [parteHoras, parteMin].filter(Boolean).join(" ");
}

function formatearAsignatura (asig) {
	return `<div class="${asig.tipo}" title="${asig.descripcion || ''}">
    <strong>${asig.nombre}</strong> <span style="float:right;">${formatearHoras(asig.horas)}</span>
  </div>`;
}

function renderizarTablaAsignaturas(asignaturas) {
	const filas = [];
  let total5 = 0, total6 = 0;
  const tabla = [];
  
  for (const asig of asignaturas) {
    const cursos = Array.isArray(asig.curso) ? asig.curso : [asig.curso];
    const en5 = cursos.includes(5);
    const en6 = cursos.includes(6);

    if (en5) total5 += asig.horas;
    if (en6) total6 += asig.horas;

    if (en5 && en6) {
      tabla.push({ combinada: asig });
    } else {
      // Buscar una fila existente con el lado libre
      let colocada = false;
      for (const fila of tabla) {
        if (!fila.combinada) {
          if (en5 && !fila.col1) {
            fila.col1 = asig;
            colocada = true;
            break;
          }
          if (en6 && !fila.col2) {
            fila.col2 = asig;
            colocada = true;
            break;
          }
        }
      }
      if (!colocada) {
        tabla.push({
          col1: en5 ? asig : null,
          col2: en6 ? asig : null
        });
      }
    }
  }
  
  // Ahora generamos el HTML
  for (const fila of tabla) {
    if (fila.combinada) {
      filas.push(`<tr><td colspan="2">
        ${formatearAsignatura(fila.combinada)} <em style="float:right;">(5º y 6º)</em>
      </td></tr>`);
    } else {
      const td1 = fila.col1 ? formatearAsignatura(fila.col1) : "";
      const td2 = fila.col2 ? formatearAsignatura(fila.col2) : "";
      filas.push(`<tr><td>${td1}</td><td>${td2}</td></tr>`);
    }
  }
  
  filas.push(`<tr style="background:#e5e6e6; font-weight:bold; text-align:center;">
    <td  style="border: 2px solid #444;">${formatearHoras(total5)} semanales</td>
    <td  style="border: 2px solid #444;">${formatearHoras(total6)} semanales</td>
  </tr>`);
  
  return `
    <table>
      <thead>
        <tr><th>5º Curso</th><th>6º Curso</th></tr>
      </thead>
      <tbody>
      	${filas.join("")}
      </tbody>
    </table>
  `;
}


// Interfaz
function actualizarVista() {
  const esp = document.getElementById("select-especialidad").value;
  const iti = document.getElementById("select-itinerario").value;
  const visibles = filtrarAsignaturas(esp, iti);
	const listadoDiv = document.getElementById("asignaturas-listado")
  listadoDiv.innerHTML = renderizarTablaAsignaturas(visibles);
}

function toggleDescripcion (id) {
  //const el = document.getElementById("desc-" + id);
  //el.style.display = (el.style.display === "none") ? "block" : "none";
}


document.getElementById("select-especialidad").addEventListener("change", actualizarVista);
document.getElementById("select-itinerario").addEventListener("change", actualizarVista);

actualizarVista();