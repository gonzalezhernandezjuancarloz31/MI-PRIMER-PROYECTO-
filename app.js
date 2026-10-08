/**
 * Portal de Cálculo Diferencial - ITCM (Instituto Tecnológico de Ciudad Madero)
 * Datos, Interactividad, Simulador de Examen, Calculadora TecNM y Formulario
 */

// ==========================================
// BANCO DE DATOS DE LAS 5 UNIDADES (TecNM)
// ==========================================
const unitsData = [
  {
    id: 1,
    title: "Unidad 1: Números Reales y Desigualdades",
    subtitle: "Axiomas, Intervalos, Desigualdades Lineales, Cuadráticas y con Valor Absoluto",
    description: "La base de todo el cálculo. Si no dominas el álgebra de desigualdades y el valor absoluto, tropezarás en dominios y límites.",
    difficulty: "Fundamental",
    keyConcepts: [
      {
        title: "Axiomas y Propiedades Clave",
        latex: "a < b \\iff a + c < b + c \\quad \\text{y} \\quad a < b, \\; c > 0 \\implies ac < bc",
        text: "La propiedad más peligrosa: Si multiplicas o divides por un número negativo $c < 0$, ¡el sentido de la desigualdad se invierte obligatoriamente! ($a < b \\implies ac > bc$)."
      },
      {
        title: "Propiedades del Valor Absoluto",
        latex: "|x| \\le a \\iff -a \\le x \\le a \\qquad (a \\ge 0)",
        text: "Para desigualdades con 'mayor que': $|x| \\ge a \\iff x \\le -a \\;\\lor\\; x \\ge a$. Nunca olvides que el valor absoluto representa distancia en la recta numérica."
      },
      {
        title: "Método de Intervalos / Signos (Cementerio)",
        latex: "\\frac{P(x)}{Q(x)} \\ge 0",
        text: "Para desigualdades no lineales o racionales: pasa todo a un solo miembro, factoriza numerador y denominador, encuentra los números críticos y analiza el signo de cada factor en cada intervalo."
      }
    ],
    pitfalls: [
      {
        trap: "Multiplicar en cruz variables con signo desconocido",
        detail: "En $\\frac{1}{x} < 2$, los alumnos suelen pasar la $x$ multiplicando: $1 < 2x$. ¡ERROR GRAVE! Como no conoces el signo de $x$, debes restar el 2: $\\frac{1}{x} - 2 < 0 \\implies \\frac{1-2x}{x} < 0$ y usar el método de signos."
      },
      {
        trap: "Olvidar invertir el signo de desigualdad",
        detail: "Si tienes $-3x \\ge 12$, al dividir entre $-3$ la solución es $x \\le -4$. El 40% de reprobados en el primer parcial del Tec fallan aquí."
      },
      {
        trap: "Intervalos abiertos vs cerrados en denominadores",
        detail: "En $\\frac{x-1}{x-3} \\ge 0$, el 3 NUNCA puede llevar corchete $[\\;]$ porque anula el denominador. Solución: $(-\\infty, 1] \\cup (3, \\infty)$."
      }
    ],
    solvedProblems: [
      {
        title: "Ejercicio Típico de Examen: Desigualdad con Valor Absoluto",
        statement: "\\text{Resolver la desigualdad:} \\quad |3x - 5| \\le 7",
        steps: [
          {
            step: "Paso 1: Aplicar la propiedad de sandwich $|u| \\le a \\iff -a \\le u \\le a$",
            latex: "-7 \\le 3x - 5 \\le 7"
          },
          {
            step: "Paso 2: Sumar 5 a los tres miembros",
            latex: "-7 + 5 \\le 3x \\le 7 + 5 \\implies -2 \\le 3x \\le 12"
          },
          {
            step: "Paso 3: Dividir entre 3 (como 3 > 0, el sentido no cambia)",
            latex: "-\\frac{2}{3} \\le x \\le 4"
          },
          {
            step: "Resultado en notación de intervalo",
            latex: "x \\in \\left[-\\frac{2}{3}, 4\\right]"
          }
        ]
      },
      {
        title: "Ejercicio Típico de Examen: Desigualdad Cuadrática",
        statement: "\\text{Resolver:} \\quad x^2 - 5x + 6 > 0",
        steps: [
          {
            step: "Paso 1: Factorizar el trinomio",
            latex: "(x - 2)(x - 3) > 0"
          },
          {
            step: "Paso 2: Encontrar los puntos críticos (donde se hace 0)",
            latex: "x = 2 \\quad \\text{y} \\quad x = 3"
          },
          {
            step: "Paso 3: Evaluar signos en los intervalos $(-\\infty, 2), (2, 3), (3, \\infty)$",
            latex: "\\text{Para } x < 2: (-)(-) = (+) \\quad \\checkmark \\\\ \\text{Para } 2 < x < 3: (+)(-) = (-) \\quad \\times \\\\ \\text{Para } x > 3: (+)(+) = (+) \\quad \\checkmark"
          },
          {
            step: "Resultado final",
            latex: "x \\in (-\\infty, 2) \\cup (3, \\infty)"
          }
        ]
      }
    ],
    quiz: [
      {
        question: "¿Cuál es el conjunto solución de la desigualdad -2x + 6 < 14?",
        options: [
          "x > -4",
          "x < -4",
          "x > 4",
          "x < 4"
        ],
        correct: 0,
        explanation: "-2x < 14 - 6  =>  -2x < 8. Al dividir entre -2 (negativo), se invierte la desigualdad: x > -4."
      },
      {
        question: "¿Cuál es la solución de |2x - 1| > 5?",
        options: [
          "(-∞, -2) U (3, ∞)",
          "[-2, 3]",
          "(-2, 3)",
          "(-∞, -3) U (2, ∞)"
        ],
        correct: 0,
        explanation: "Propiedad: 2x - 1 < -5  ó  2x - 1 > 5. De la primera: 2x < -4 => x < -2. De la segunda: 2x > 6 => x > 3. Unión: (-∞, -2) U (3, ∞)."
      },
      {
        question: "Al resolver (x + 4) / (x - 2) <= 0, ¿el 2 forma parte de la solución?",
        options: [
          "No, porque x = 2 hace cero el denominador (indefinición).",
          "Sí, porque la desigualdad incluye el signo 'menor o igual' (<=).",
          "Depende de si el numerador es positivo o negativo.",
          "Sí, siempre que x sea par."
        ],
        correct: 0,
        explanation: "¡Regla de oro! Los valores que anulan el denominador NUNCA se incluyen en el intervalo solución, sin importar si la desigualdad tiene <= o >=."
      }
    ]
  },
  {
    id: 2,
    title: "Unidad 2: Funciones",
    subtitle: "Dominio, Rango, Tipos de Funciones, Composición y Funciones a Trozos",
    description: "Una función es una regla que asigna a cada elemento de un conjunto exactamente un elemento del otro. En los exámenes del ITCM, el cálculo analítico de dominio y la composición son preguntas fijas.",
    difficulty: "Intermedio",
    keyConcepts: [
      {
        title: "Las 3 Restricciones Clave para el Dominio Real",
        latex: "1) \\; \\frac{P(x)}{Q(x)} \\implies Q(x) \\neq 0 \\qquad 2) \\; \\sqrt[par]{g(x)} \\implies g(x) \\ge 0 \\qquad 3) \\; \\ln(h(x)) \\implies h(x) > 0",
        text: "Toda función algebraica en $\\mathbb{R}$ tiene dominio en todos los reales $(-\\infty, \\infty)$ EXCEPTO donde se viole alguna de estas tres restricciones."
      },
      {
        title: "Composición de Funciones",
        latex: "(f \\circ g)(x) = f(g(x))",
        text: "El dominio de $f \\circ g$ son las $x$ en el dominio de $g$ tales que $g(x)$ pertenece al dominio de $f$."
      },
      {
        title: "Simetría: Par e Impar",
        latex: "f(-x) = f(x) \\;\\text{(Par, simétrica al eje } y\\text{)} \\qquad f(-x) = -f(x) \\;\\text{(Impar, simétrica al origen)}",
        text: "Identificar paridad ahorra la mitad del trabajo al graficar o calcular integrales en el siguiente semestre."
      }
    ],
    pitfalls: [
      {
        trap: "Raíz en el denominador con desigualdad incorrecta",
        detail: "Si tienes $f(x) = \\frac{1}{\\sqrt{9 - x^2}}$, la condición NO es $9 - x^2 \\ge 0$, sino $9 - x^2 > 0$ (estricto), porque no puede ser cero el denominador. Dominio: $(-3, 3)$ con paréntesis, no corchetes."
      },
      {
        trap: "Cancelar factores antes de calcular el dominio",
        detail: "En $f(x) = \\frac{x^2 - 4}{x - 2}$, si primero simplificas a $x + 2$, creerás que el dominio son todos los reales. ¡FALSO! El dominio original excluye a $x = 2$, por lo que hay un agujero en la gráfica."
      }
    ],
    solvedProblems: [
      {
        title: "Ejercicio de Examen: Dominio con Raíz y Fracción",
        statement: "\\text{Determinar el dominio analítico de:} \\quad f(x) = \\sqrt{\\frac{x - 3}{x + 5}}",
        steps: [
          {
            step: "Paso 1: Plantear la restricción del radicando no negativo",
            latex: "\\frac{x - 3}{x + 5} \\ge 0 \\quad \\text{con} \\quad x + 5 \\neq 0"
          },
          {
            step: "Paso 2: Puntos críticos para la tabla de signos",
            latex: "x = 3 \\quad (\\text{se anula el numerador}) \\quad \\text{y} \\quad x = -5 \\quad (\\text{asíntota vertical})"
          },
          {
            step: "Paso 3: Analizar signos en $(-\\infty, -5), (-5, 3], [3, \\infty)$",
            latex: "x < -5: \\frac{-}{-} = (+) \\quad \\checkmark \\\\ -5 < x < 3: \\frac{-}{+} = (-) \\quad \\times \\\\ x \\ge 3: \\frac{+}{+} = (+) \\quad \\checkmark"
          },
          {
            step: "Conclusión (cuidado con los corchetes)",
            latex: "\\text{Dom}(f) = (-\\infty, -5) \\cup [3, \\infty)"
          }
        ]
      }
    ],
    quiz: [
      {
        question: "¿Cuál es el dominio de f(x) = 1 / √(4 - x²)?",
        options: [
          "(-2, 2)",
          "[-2, 2]",
          "(-∞, -2) U (2, ∞)",
          "[-2, 2] con x ≠ 0"
        ],
        correct: 0,
        explanation: "Necesitamos 4 - x² > 0 (estricto porque está en el denominador). 4 > x² => |x| < 2 => -2 < x < 2. Intervalo abierto (-2, 2)."
      },
      {
        question: "Dadas f(x) = x² + 1 y g(x) = 2x - 3, ¿cuánto vale (f o g)(2)?",
        options: [
          "2",
          "5",
          "10",
          "-1"
        ],
        correct: 0,
        explanation: "Primero evaluamos g(2) = 2(2) - 3 = 1. Luego evaluamos f en ese resultado: f(1) = (1)² + 1 = 2."
      },
      {
        question: "Si f(-x) = -f(x) para todo x en su dominio, la función es:",
        options: [
          "Impar y simétrica con respecto al origen",
          "Par y simétrica con respecto al eje Y",
          "Periódica",
          "Inyectiva estrictamente"
        ],
        correct: 0,
        explanation: "Por definición, f(-x) = -f(x) corresponde a una función impar (como f(x) = x³ o f(x) = sin x), que presenta simetría respecto al origen de coordenadas."
      }
    ]
  },
  {
    id: 3,
    title: "Unidad 3: Límites y Continuidad",
    subtitle: "Límites Indeterminados (0/0), Factorización, Racionalización, Trigonométricos y Continuidad",
    description: "El corazón del cálculo diferencial. La derivada no es más que un límite especial. Dominar la eliminación de indeterminaciones es vital para pasar el 2º departamental.",
    difficulty: "Alta (Filtro del semestre)",
    keyConcepts: [
      {
        title: "La Indeterminación 0/0",
        latex: "\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\left[\\frac{0}{0}\\right]",
        text: "Significa que $x - a$ es factor común tanto del numerador como del denominador. Se debe FACTORIZAR o RACIONALIZAR (multiplicar por el binomio conjugado) para cancelar la indeterminación."
      },
      {
        title: "Límites Trigonométricos Fundamentales",
        latex: "\\lim_{\\theta \\to 0} \\frac{\\sin \\theta}{\\theta} = 1 \\qquad \\lim_{\\theta \\to 0} \\frac{1 - \\cos \\theta}{\\theta} = 0",
        text: "Para cualquier constante $k$: $\\lim_{x \\to 0} \\frac{\\sin(kx)}{kx} = 1$."
      },
      {
        title: "Condiciones de Continuidad en un Punto c",
        latex: "1) \\; f(c) \\text{ existe} \\quad 2) \\; \\lim_{x \\to c} f(x) \\text{ existe} \\quad 3) \\; \\lim_{x \\to c} f(x) = f(c)",
        text: "Si alguna de las tres condiciones falla, la función es discontinua en $c$ (evitable si el límite existe, esencial o de salto si no)."
      }
    ],
    pitfalls: [
      {
        trap: "Dejar de escribir 'lim' en el desarrollo",
        detail: "En el ITCM, los profesores de matemáticas descuentan hasta el 50% de la calificación de la pregunta si dejas de escribir $\\lim_{x \\to a}$ antes del paso de sustitución numérica final."
      },
      {
        trap: "Afirmar que 0/0 es 0, 1 o infinito",
        detail: "0/0 no tiene un valor determinado. Dependiendo de las funciones, puede dar 5, -1/2, $\\infty$ o cualquier valor real tras cancelar factores."
      }
    ],
    solvedProblems: [
      {
        title: "Problema Clásico: Racionalización por Conjugado",
        statement: "\\text{Calcular:} \\quad \\lim_{x \\to 0} \\frac{\\sqrt{x + 9} - 3}{x}",
        steps: [
          {
            step: "Paso 1: Evaluar directamente para comprobar indeterminación",
            latex: "\\frac{\\sqrt{0 + 9} - 3}{0} = \\frac{3 - 3}{0} = \\left[\\frac{0}{0}\\right]"
          },
          {
            step: "Paso 2: Multiplicar numerador y denominador por el conjugado",
            latex: "\\lim_{x \\to 0} \\frac{(\\sqrt{x + 9} - 3)(\\sqrt{x + 9} + 3)}{x(\\sqrt{x + 9} + 3)}"
          },
          {
            step: "Paso 3: Aplicar diferencia de cuadrados en el numerador $(a-b)(a+b) = a^2 - b^2$",
            latex: "\\lim_{x \\to 0} \\frac{(x + 9) - 9}{x(\\sqrt{x + 9} + 3)} = \\lim_{x \\to 0} \\frac{x}{x(\\sqrt{x + 9} + 3)}"
          },
          {
            step: "Paso 4: Cancelar el factor x y evaluar",
            latex: "\\lim_{x \\to 0} \\frac{1}{\\sqrt{x + 9} + 3} = \\frac{1}{\\sqrt{9} + 3} = \\frac{1}{6}"
          }
        ]
      },
      {
        title: "Problema Clásico: Límite Trigonométrico",
        statement: "\\text{Calcular:} \\quad \\lim_{x \\to 0} \\frac{\\sin(5x)}{2x}",
        steps: [
          {
            step: "Paso 1: Ajustar para formar el límite fundamental",
            latex: "\\lim_{x \\to 0} \\frac{5}{2} \\cdot \\frac{\\sin(5x)}{5x}"
          },
          {
            step: "Paso 2: Aplicar la propiedad $\\lim_{u \\to 0} \\frac{\\sin u}{u} = 1$",
            latex: "\\frac{5}{2} \\cdot 1 = \\frac{5}{2}"
          }
        ]
      }
    ],
    quiz: [
      {
        question: "¿Cuál es el valor de lim (x -> 3) de (x² - 9) / (x - 3)?",
        options: [
          "6",
          "0",
          "Indeterminado (no existe)",
          "3"
        ],
        correct: 0,
        explanation: "Factorizamos el numerador: (x - 3)(x + 3) / (x - 3). Cancelamos (x - 3) y evaluamos en x = 3: 3 + 3 = 6."
      },
      {
        question: "¿Qué tipo de discontinuidad tiene f(x) = (x - 2) / (x² - 4) en x = 2?",
        options: [
          "Discontinuidad removible (evitable)",
          "Discontinuidad esencial de salto infinito",
          "Discontinuidad de salto finito",
          "No tiene discontinuidad, es continua"
        ],
        correct: 0,
        explanation: "En x = 2, f(x) da 0/0 pero el límite existe: lim (x->2) 1/(x+2) = 1/4. Cuando el límite existe pero la función no está definida, es removible."
      },
      {
        question: "¿Cuánto es lim (x -> ∞) de (3x³ - 5x + 1) / (7x³ + 2)?",
        options: [
          "3/7",
          "0",
          "∞",
          "1/2"
        ],
        correct: 0,
        explanation: "Como el grado del numerador (3) es igual al grado del denominador (3), el límite al infinito es la razón de sus coeficientes principales: 3/7."
      }
    ]
  },
  {
    id: 4,
    title: "Unidad 4: La Derivada",
    subtitle: "Interpretación Geométrica, Reglas de Derivación, Regla de la Cadena e Implícita",
    description: "La herramienta fundamental de la ingeniería. La derivada mide la tasa de cambio instantánea y la pendiente de la recta tangente.",
    difficulty: "Alta (La más extensa)",
    keyConcepts: [
      {
        title: "Definición Formal por Cociente de Fermat",
        latex: "f'(x) = \\lim_{h \\to 0} \\frac{f(x + h) - f(x)}{h}",
        text: "Geométricamente es la pendiente de la recta tangente a la curva $y = f(x)$ en el punto $(x, f(x))$."
      },
      {
        title: "Regla de la Cadena (Composición)",
        latex: "\\frac{d}{dx}[f(g(x))] = f'(g(x)) \\cdot g'(x) \\quad \\text{o} \\quad \\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}",
        text: "La regla más importante del curso: deriva la función exterior evaluada en la interior, y MULTIPLICA por la derivada de la función interior."
      },
      {
        title: "Derivación Implícita",
        latex: "\\frac{d}{dx}[y^n] = n y^{n-1} \\cdot \\frac{dy}{dx}",
        text: "Cuando $y$ no está despejada: deriva ambos lados con respecto a $x$, recordando que cada vez que derives una expresión con $y$, debes adjuntar el factor $\\frac{dy}{dx}$ (o $y'$)."
      }
    ],
    pitfalls: [
      {
        trap: "Olvidar la regla de la cadena",
        detail: "Al derivar $y = \\sin(x^3)$, derivar como $\\cos(x^3)$ olvidando el factor de la derivada interna $3x^2$. Resultado correcto: $3x^2 \\cos(x^3)$."
      },
      {
        trap: "Derivar cocientes como cociente de derivadas",
        detail: "$\\left(\\frac{u}{v}\\right)' \\neq \\frac{u'}{v'}$. La fórmula oficial e innegociable es $\\frac{u'v - uv'}{v^2}$."
      },
      {
        trap: "Confundir constante elevada a x con x elevada a constante",
        detail: "La derivada de $x^5$ es $5x^4$ (regla de la potencia), pero la derivada de $5^x$ es $5^x \\ln(5)$ (función exponencial)."
      }
    ],
    solvedProblems: [
      {
        title: "Problema Clásico: Regla del Producto y Cadena",
        statement: "\\text{Derivar:} \\quad y = x^3 \\cdot \\ln(4x^2 + 1)",
        steps: [
          {
            step: "Paso 1: Identificar las partes para la regla del producto $(uv)' = u'v + uv'$",
            latex: "u = x^3 \\implies u' = 3x^2 \\qquad v = \\ln(4x^2 + 1) \\implies v' = \\frac{8x}{4x^2 + 1}"
          },
          {
            step: "Paso 2: Ensamblar la fórmula",
            latex: "y' = (3x^2)\\ln(4x^2 + 1) + x^3 \\left(\\frac{8x}{4x^2 + 1}\\right)"
          },
          {
            step: "Paso 3: Factorizar y simplificar",
            latex: "y' = 3x^2 \\ln(4x^2 + 1) + \\frac{8x^4}{4x^2 + 1} = x^2 \\left( 3\\ln(4x^2 + 1) + \\frac{8x^2}{4x^2 + 1} \\right)"
          }
        ]
      },
      {
        title: "Problema Clásico: Derivación Implícita",
        statement: "\\text{Hallar } \\frac{dy}{dx} \\text{ de la curva:} \\quad x^2 + y^2 = 25",
        steps: [
          {
            step: "Paso 1: Derivar término a término respecto a x",
            latex: "2x + 2y \\cdot \\frac{dy}{dx} = 0"
          },
          {
            step: "Paso 2: Despejar dy/dx",
            latex: "2y \\cdot \\frac{dy}{dx} = -2x \\implies \\frac{dy}{dx} = -\\frac{x}{y}"
          }
        ]
      }
    ],
    quiz: [
      {
        question: "¿Cuál es la derivada de f(x) = (3x² - 5)⁴?",
        options: [
          "24x(3x² - 5)³",
          "4(3x² - 5)³",
          "12x(3x² - 5)³",
          "24(3x² - 5)⁴"
        ],
        correct: 0,
        explanation: "Por regla de la cadena: 4(3x² - 5)³ · d/dx(3x² - 5) = 4(3x² - 5)³ · (6x) = 24x(3x² - 5)³."
      },
      {
        question: "¿Cuál es la derivada de f(x) = e^(cos x)?",
        options: [
          "-sin(x) · e^(cos x)",
          "cos(x) · e^(cos x)",
          "-e^(cos x)",
          "sin(x) · e^(-sin x)"
        ],
        correct: 0,
        explanation: "La derivada de e^u es e^u · u'. Aquí u = cos x, cuya derivada es -sin x. Por tanto, y' = -sin(x) · e^(cos x)."
      },
      {
        question: "¿Cuál es la pendiente de la recta tangente a y = x³ en x = 2?",
        options: [
          "12",
          "8",
          "6",
          "4"
        ],
        correct: 0,
        explanation: "La pendiente m es la derivada evaluada en x=2. y' = 3x². Al evaluar en x=2: m = 3(2)² = 3(4) = 12."
      }
    ]
  },
  {
    id: 5,
    title: "Unidad 5: Aplicaciones de la Derivada",
    subtitle: "Criterios de 1ª y 2ª Derivada, Máximos, Mínimos, Optimización y Razones de Cambio",
    description: "Donde el cálculo resuelve problemas reales de ingeniería: diseñar tanques con material mínimo, calcular aceleraciones y modelar variaciones con respecto al tiempo.",
    difficulty: "Muy Alta (La unidad de mayor aplicación)",
    keyConcepts: [
      {
        title: "Puntos Críticos y Criterio de la 1ª Derivada",
        latex: "f'(c) = 0 \\quad \\text{o} \\quad f'(c) \\text{ no existe}",
        text: "Si $f'$ cambia de $+$ a $-$ en $c$, hay un MÁXIMO LOCAL. Si cambia de $-$ a $+$, hay un MÍNIMO LOCAL. Si no cambia de signo, no hay extremo relativo."
      },
      {
        title: "Criterio de la 2ª Derivada",
        latex: "f'(c) = 0 \\implies \\begin{cases} f''(c) < 0 & \\implies \\text{Máximo Local (cóncava hacia abajo)} \\\\ f''(c) > 0 & \\implies \\text{Mínimo Local (cóncava hacia arriba)} \\\\ f''(c) = 0 & \\implies \\text{Criterio no concluyente} \\end{cases}",
        text: "Muy rápido para clasificar puntos críticos cuando la segunda derivada es fácil de calcular."
      },
      {
        title: "Algoritmo de Optimización",
        latex: "\\text{Maximizar / Minimizar } Q = f(x, y) \\quad \\text{sujeto a una restricción } g(x, y) = k",
        text: "Despeja una variable de la restricción, sustitúyela en la función objetivo para que quede en función de una sola variable, encuentra los puntos críticos derivando e igualando a cero, y comprueba con el criterio de la 2ª derivada."
      }
    ],
    pitfalls: [
      {
        trap: "Olvidar verificar los extremos del intervalo cerrado",
        detail: "En problemas de optimización en $[a, b]$, el valor absoluto máximo/mínimo puede ocurrir en los bordes del intervalo, no solo en los puntos críticos internos."
      },
      {
        trap: "Sustituir números antes de tiempo en Razones de Cambio",
        detail: "Si te piden la velocidad del nivel de agua en $h = 3$, ¡NUNCA sustituyas $h = 3$ antes de derivar! Primero derivas con respecto al tiempo $t$ y AL FINAL sustituyes los datos numéricos."
      }
    ],
    solvedProblems: [
      {
        title: "Problema Clásico de Optimización: Área Máxima con Cerca",
        statement: "\\text{Un granjero tiene 120 metros de cerca para cercar un campo rectangular junto a un río (no necesita cerca en el lado del río). Hallar las dimensiones que maximizan el área.}",
        steps: [
          {
            step: "Paso 1: Plantear ecuación de restricción (perímetro)",
            latex: "2x + y = 120 \\implies y = 120 - 2x"
          },
          {
            step: "Paso 2: Plantear función objetivo a maximizar (Área)",
            latex: "A(x) = x \\cdot y = x(120 - 2x) = 120x - 2x^2"
          },
          {
            step: "Paso 3: Derivar e igualar a 0 para hallar puntos críticos",
            latex: "A'(x) = 120 - 4x = 0 \\implies 4x = 120 \\implies x = 30\\text{ m}"
          },
          {
            step: "Paso 4: Comprobar con la 2ª derivada",
            latex: "A''(x) = -4 < 0 \\implies \\text{Es un MÁXIMO seguro}"
          },
          {
            step: "Dimensiones óptimas y área máxima",
            latex: "x = 30\\text{ m}, \\quad y = 60\\text{ m}, \\quad A_{\\max} = 1800\\text{ m}^2"
          }
        ]
      }
    ],
    quiz: [
      {
        question: "Si f'(c) = 0 y f''(c) = -8, ¿qué ocurre en x = c?",
        options: [
          "Hay un máximo relativo",
          "Hay un mínimo relativo",
          "Hay un punto de inflexión",
          "La función es creciente"
        ],
        correct: 0,
        explanation: "Por el criterio de la segunda derivada, si f'(c)=0 y f''(c) < 0, la gráfica es cóncava hacia abajo en ese punto, lo que corresponde a un máximo relativo."
      },
      {
        question: "¿Cuáles son los puntos críticos de f(x) = x³ - 3x²?",
        options: [
          "x = 0 y x = 2",
          "x = 0 y x = 3",
          "x = 1 y x = -1",
          "Solo x = 0"
        ],
        correct: 0,
        explanation: "Derivamos: f'(x) = 3x² - 6x. Igualamos a cero: 3x(x - 2) = 0. Por lo tanto, los puntos críticos son x = 0 y x = 2."
      },
      {
        question: "Un punto donde la concavidad de una función cambia de hacia arriba a hacia abajo se llama:",
        options: [
          "Punto de inflexión",
          "Vértice",
          "Punto de corte",
          "Asíntota oblicua"
        ],
        correct: 0,
        explanation: "El punto de inflexión es el punto sobre la curva donde la función es continua y cambia el sentido de su concavidad (f''(x) cambia de signo)."
      }
    ]
  }
];

// ==========================================
// BANCO DE FÓRMULAS INTERACTIVO (Cheat-Sheet)
// ==========================================
const formulaCategories = [
  {
    name: "Reglas Generales de Derivación",
    formulas: [
      { name: "Derivada de una constante", latex: "\\frac{d}{dx}[c] = 0", desc: "La tasa de cambio de un valor constante siempre es cero." },
      { name: "Regla de la potencia", latex: "\\frac{d}{dx}[x^n] = n x^{n-1}", desc: "Baja el exponente a multiplicar y réstale 1." },
      { name: "Múltiplo constante", latex: "\\frac{d}{dx}[c \\cdot u] = c \\cdot u'", desc: "Las constantes multiplicativas salen intactas de la derivada." },
      { name: "Regla de la suma/resta", latex: "\\frac{d}{dx}[u \\pm v] = u' \\pm v'", desc: "La derivada de una suma es la suma de las derivadas." },
      { name: "Regla del producto", latex: "\\frac{d}{dx}[u \\cdot v] = u'v + uv'", desc: "Derivada del primero por el segundo más el primero por la derivada del segundo." },
      { name: "Regla del cociente", latex: "\\frac{d}{dx}\\left[\\frac{u}{v}\\right] = \\frac{u'v - uv'}{v^2}", desc: "¡Cuidado con el signo menos en el numerador!" },
      { name: "Regla de la cadena", latex: "\\frac{d}{dx}[f(g(x))] = f'(g(x)) \\cdot g'(x)", desc: "Derivada externa evaluada en la interna por la derivada interna." }
    ]
  },
  {
    name: "Derivadas Trigonométricas Directas",
    formulas: [
      { name: "Seno", latex: "\\frac{d}{dx}[\\sin u] = \\cos(u) \\cdot u'", desc: "Derivada del seno con regla de la cadena." },
      { name: "Coseno", latex: "\\frac{d}{dx}[\\cos u] = -\\sin(u) \\cdot u'", desc: "¡Siempre lleva signo negativo!" },
      { name: "Tangente", latex: "\\frac{d}{dx}[\\tan u] = \\sec^2(u) \\cdot u'", desc: "Secante al cuadrado por la derivada del argumento." },
      { name: "Cotangente", latex: "\\frac{d}{dx}[\\cot u] = -\\csc^2(u) \\cdot u'", desc: "Menos cosecante al cuadrado." },
      { name: "Secante", latex: "\\frac{d}{dx}[\\sec u] = \\sec(u)\\tan(u) \\cdot u'", desc: "Secante por tangente por u'." },
      { name: "Cosecante", latex: "\\frac{d}{dx}[\\csc u] = -\\csc(u)\\cot(u) \\cdot u'", desc: "Menos cosecante por cotangente por u'." }
    ]
  },
  {
    name: "Derivadas Exponenciales y Logarítmicas",
    formulas: [
      { name: "Exponencial natural (e^u)", latex: "\\frac{d}{dx}[e^u] = e^u \\cdot u'", desc: "La función más noble: se reproduce idéntica por la derivada de su exponente." },
      { name: "Exponencial base a (a^u)", latex: "\\frac{d}{dx}[a^u] = a^u \\ln(a) \\cdot u'", desc: "Lleva el factor multiplicativo del logaritmo natural de la base." },
      { name: "Logaritmo natural (ln u)", latex: "\\frac{d}{dx}[\\ln u] = \\frac{u'}{u}", desc: "Derivada del argumento sobre el argumento sin derivar." },
      { name: "Logaritmo base a", latex: "\\frac{d}{dx}[\\log_a u] = \\frac{u'}{u \\ln a}", desc: "Por cambio de base a logaritmo natural." }
    ]
  },
  {
    name: "Derivadas Trigonométricas Inversas (Arco)",
    formulas: [
      { name: "Arcoseno", latex: "\\frac{d}{dx}[\\arcsin u] = \\frac{u'}{\\sqrt{1 - u^2}}", desc: "Válida para |u| < 1." },
      { name: "Arcocoseno", latex: "\\frac{d}{dx}[\\arccos u] = -\\frac{u'}{\\sqrt{1 - u^2}}", desc: "La misma que arcoseno con signo negativo." },
      { name: "Arcotangente", latex: "\\frac{d}{dx}[\\arctan u] = \\frac{u'}{1 + u^2}", desc: "Muy común en integrales de Cálculo Integral." }
    ]
  },
  {
    name: "Factorización Salvavidas para Límites 0/0",
    formulas: [
      { name: "Diferencia de cuadrados", latex: "a^2 - b^2 = (a - b)(a + b)", desc: "Se usa para cancelar factores lineales en cocientes." },
      { name: "Suma y diferencia de cubos", latex: "a^3 \\pm b^3 = (a \\pm b)(a^2 \\mp ab + b^2)", desc: "Indispensable para límites con raíces cúbicas y conjugados de orden 3." },
      { name: "Racionalización cuadrática", latex: "(\\sqrt{A} - B)(\\sqrt{A} + B) = A - B^2", desc: "Para eliminar raíces cuadradas del numerador o denominador." }
    ]
  }
];

// ==========================================
// BANCO DE PREGUNTAS DEL SIMULADOR DEPARTAMENTAL
// ==========================================
const examQuestionsBank = [
  {
    unit: 1,
    question: "Al resolver |2x - 3| < 7, ¿cuál es el intervalo solución?",
    options: ["(-2, 5)", "[-2, 5]", "(-∞, -2) U (5, ∞)", "(-5, 2)"],
    correct: 0,
    explanation: "-7 < 2x - 3 < 7 => sumando 3: -4 < 2x < 10 => dividiendo entre 2: -2 < x < 5. Intervalo (-2, 5)."
  },
  {
    unit: 1,
    question: "¿Para qué valores de x la expresión (x - 1) / (x + 3) ≥ 0 es válida?",
    options: ["(-∞, -3) U [1, ∞)", "[-3, 1]", "(-∞, -3] U [1, ∞)", "(-3, 1]"],
    correct: 0,
    explanation: "El denominador no puede ser cero, por lo que -3 lleva paréntesis. Los intervalos positivos son (-∞, -3) U [1, ∞)."
  },
  {
    unit: 2,
    question: "¿Cuál es el dominio de la función f(x) = ln(9 - x²)?",
    options: ["(-3, 3)", "[-3, 3]", "(-∞, -3) U (3, ∞)", "(0, 9)"],
    correct: 0,
    explanation: "El argumento del logaritmo debe ser estrictamente positivo: 9 - x² > 0 => x² < 9 => -3 < x < 3."
  },
  {
    unit: 2,
    question: "Si f(x) = √(x) y g(x) = x - 4, ¿cuál es la fórmula de (g o f)(x)?",
    options: ["√(x) - 4", "√(x - 4)", "x - 2", "√(x² - 4)"],
    correct: 0,
    explanation: "(g o f)(x) = g(f(x)) = g(√(x)) = √(x) - 4."
  },
  {
    unit: 3,
    question: "Calcula el límite: lim (x -> 2) de (x³ - 8) / (x - 2)",
    options: ["12", "0", "4", "Indeterminado"],
    correct: 0,
    explanation: "Factorizando diferencia de cubos: (x - 2)(x² + 2x + 4) / (x - 2). Cancelando y evaluando en x=2: (2)² + 2(2) + 4 = 4 + 4 + 4 = 12."
  },
  {
    unit: 3,
    question: "Determina el valor de lim (x -> 0) de sin(4x) / (3x)",
    options: ["4/3", "3/4", "0", "1"],
    correct: 0,
    explanation: "Escribimos (4/3) * [sin(4x) / (4x)]. Como el límite del corchete es 1, el resultado es 4/3."
  },
  {
    unit: 3,
    question: "Si lim (x -> c) f(x) = L y f(c) = L con L real finito, entonces en x = c la función f:",
    options: ["Es continua", "Tiene una asíntota", "Es derivable obligatoriamente", "Es discontinua evitable"],
    correct: 0,
    explanation: "Cumple con las 3 condiciones de continuidad: f(c) existe, el límite existe y ambos son idénticos."
  },
  {
    unit: 4,
    question: "Si y = cos²(3x), ¿cuál es su derivada dy/dx?",
    options: ["-6 cos(3x) sin(3x)", "-2 cos(3x) sin(3x)", "6 cos(3x)", "-3 sin²(3x)"],
    correct: 0,
    explanation: "Por regla de la cadena: 2 cos(3x) * [-sin(3x)] * 3 = -6 cos(3x) sin(3x) (que equivale a -3 sin(6x))."
  },
  {
    unit: 4,
    question: "¿Cuál es la ecuación de la recta tangente a y = x² en el punto (1, 1)?",
    options: ["y = 2x - 1", "y = 2x + 1", "y = x", "y = 4x - 3"],
    correct: 0,
    explanation: "y' = 2x. En x = 1, la pendiente es m = 2(1) = 2. Usando punto-pendiente: y - 1 = 2(x - 1) => y = 2x - 1."
  },
  {
    unit: 4,
    question: "Si x² y + y³ = 5, ¿cuál es el valor de dy/dx al derivar implícitamente?",
    options: ["-2xy / (x² + 3y²)", "2x / (x² + 3y²)", "-2x / 3y²", "-(x² + y³) / 2x"],
    correct: 0,
    explanation: "Derivando respecto a x: [2xy + x² y'] + 3y² y' = 0 => y'(x² + 3y²) = -2xy => y' = -2xy / (x² + 3y²)."
  },
  {
    unit: 5,
    question: "¿En qué intervalo la función f(x) = x³ - 3x es estrictamente creciente?",
    options: ["(-∞, -1) U (1, ∞)", "(-1, 1)", "(0, ∞)", "[-1, 1]"],
    correct: 0,
    explanation: "f'(x) = 3x² - 3 = 3(x² - 1) > 0 cuando x² > 1 => x < -1 o x > 1. Intervalos: (-∞, -1) U (1, ∞)."
  },
  {
    unit: 5,
    question: "Se desea construir una caja sin tapa a partir de una lámina cuadrada de 12 cm de lado cortando cuadrados iguales en las esquinas. ¿Cuál es el corte x que maximiza el volumen?",
    options: ["2 cm", "3 cm", "4 cm", "1 cm"],
    correct: 0,
    explanation: "V(x) = x(12 - 2x)² = 4x³ - 48x² + 144x. V'(x) = 12x² - 96x + 144 = 0 => x² - 8x + 12 = 0 => (x - 2)(x - 6) = 0. Como x=6 destruye la lámina, el corte óptimo es x = 2 cm."
  }
];

// ==========================================
// ESTADO GLOBAL DE LA APLICACIÓN
// ==========================================
let currentTab = 'unidades';
let selectedUnitId = 1;
let examTimer = null;
let examTimeLeft = 20 * 60; // 20 minutos
let examQuestions = [];
let userExamAnswers = {};

// ==========================================
// INICIALIZACIÓN AL CARGAR LA PÁGINA
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  renderUnitsNav();
  renderUnitContent(1);
  renderFormulaCategories();
  initGradeCalculator();
  lucide.createIcons();
});

// Renderizar fórmulas LaTeX con KaTeX automáticamente
function renderMath() {
  if (window.renderMathInElement) {
    renderMathInElement(document.body, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false },
        { left: "\\(", right: "\\)", display: false },
        { left: "\\[", right: "\\]", display: true }
      ],
      throwOnError: false
    });
  }
}

// ==========================================
// NAVEGACIÓN POR PESTAÑAS PRINCIPALES
// ==========================================
function switchTab(tabName) {
  currentTab = tabName;
  const tabs = ['unidades', 'calculadora', 'examen', 'formulario', 'supervivencia'];
  
  tabs.forEach(t => {
    const el = document.getElementById(`tab-content-${t}`);
    const btn = document.getElementById(`nav-btn-${t}`);
    if (el) {
      if (t === tabName) {
        el.classList.remove('hidden');
        el.classList.add('animate-fade-in');
      } else {
        el.classList.add('hidden');
      }
    }
    if (btn) {
      if (t === tabName) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    }
  });

  // Re-render KaTeX y Lucide al cambiar vista
  setTimeout(() => {
    renderMath();
    lucide.createIcons();
  }, 50);
}

// ==========================================
// MÓDULO 1: UNIDADES ACADÉMICAS
// ==========================================
function renderUnitsNav() {
  const container = document.getElementById('units-nav-container');
  if (!container) return;

  container.innerHTML = unitsData.map(u => `
    <button onclick="selectUnit(${u.id})" id="unit-pill-${u.id}" 
      class="unit-pill px-4 py-3 rounded-xl border text-left transition-all duration-200 flex items-center justify-between ${
        u.id === 1 ? 'border-amber-500 bg-amber-500/10 text-amber-300 font-semibold shadow-md' : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700 hover:text-slate-200'
      }">
      <div class="flex items-center gap-3">
        <span class="w-7 h-7 rounded-lg bg-red-950 border border-red-700/60 text-amber-400 text-xs flex items-center justify-center font-bold">U${u.id}</span>
        <span class="text-sm truncate font-medium">${u.title.split(':')[1]}</span>
      </div>
      <span class="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700">${u.difficulty}</span>
    </button>
  `).join('');
}

function selectUnit(id) {
  selectedUnitId = id;
  unitsData.forEach(u => {
    const pill = document.getElementById(`unit-pill-${u.id}`);
    if (pill) {
      if (u.id === id) {
        pill.className = "unit-pill px-4 py-3 rounded-xl border text-left transition-all duration-200 flex items-center justify-between border-amber-500 bg-amber-500/10 text-amber-300 font-semibold shadow-md";
      } else {
        pill.className = "unit-pill px-4 py-3 rounded-xl border text-left transition-all duration-200 flex items-center justify-between border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700 hover:text-slate-200";
      }
    }
  });

  renderUnitContent(id);
}

function renderUnitContent(id) {
  const unit = unitsData.find(u => u.id === id);
  const container = document.getElementById('unit-detail-view');
  if (!unit || !container) return;

  container.innerHTML = `
    <!-- Encabezado de la Unidad -->
    <div class="bg-gradient-to-r from-red-950/80 via-slate-900/90 to-slate-900 border border-red-900/50 rounded-2xl p-6 sm:p-8 mb-8 relative overflow-hidden shadow-xl">
      <div class="absolute -right-10 -bottom-10 w-44 h-44 bg-red-800/10 rounded-full blur-2xl"></div>
      <div class="flex flex-wrap items-center justify-between gap-4 mb-3">
        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-900/70 text-amber-300 border border-amber-500/30">
          <i data-lucide="book-open" class="w-3.5 h-3.5"></i> Programa Oficial TecNM - Clave ACF-0901
        </span>
        <span class="text-xs text-slate-400 bg-slate-800/80 px-3 py-1 rounded-lg border border-slate-700">
          Dificultad: <strong class="text-amber-400">${unit.difficulty}</strong>
        </span>
      </div>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">${unit.title}</h2>
      <p class="text-amber-200/80 font-medium text-sm sm:text-base mb-3">${unit.subtitle}</p>
      <p class="text-slate-300 text-sm max-w-3xl leading-relaxed">${unit.description}</p>
    </div>

    <!-- Pestañas internas de la Unidad: Resumen, Ejercicios, Trampas, Quiz -->
    <div class="space-y-8">
      <!-- 1. Conceptos Fundamentales -->
      <section>
        <div class="flex items-center gap-2 mb-4">
          <div class="p-1.5 rounded-lg bg-red-950 border border-red-800 text-amber-400">
            <i data-lucide="sparkles" class="w-4 h-4"></i>
          </div>
          <h3 class="text-lg font-bold text-white">Conceptos y Teoremas Clave</h3>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          ${unit.keyConcepts.map(c => `
            <div class="glass-panel p-5 rounded-xl border border-slate-800 hover:border-slate-700 transition">
              <h4 class="font-bold text-amber-400 text-sm mb-2">${c.title}</h4>
              <div class="my-3 p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-center text-sm font-mono text-slate-100 overflow-x-auto">
                $${c.latex}$
              </div>
              <p class="text-xs text-slate-300 leading-relaxed">${c.text}</p>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- 2. Trampas Comunes en Exámenes del Tec -->
      <section class="bg-gradient-to-br from-amber-950/20 via-slate-900/60 to-red-950/20 border border-amber-900/40 rounded-2xl p-6">
        <div class="flex items-center gap-2 mb-4">
          <div class="p-1.5 rounded-lg bg-amber-950 border border-amber-700/60 text-amber-400">
            <i data-lucide="alert-triangle" class="w-4 h-4"></i>
          </div>
          <h3 class="text-lg font-bold text-amber-300">¡Cuidado con estas trampas típicas en el ITCM!</h3>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${unit.pitfalls.map(p => `
            <div class="bg-slate-900/90 border border-slate-800/80 p-4 rounded-xl">
              <div class="flex items-start gap-2.5">
                <span class="text-red-400 font-bold text-sm">❌</span>
                <div>
                  <h5 class="text-sm font-semibold text-slate-100 mb-1">${p.trap}</h5>
                  <p class="text-xs text-slate-300 leading-relaxed">${p.detail}</p>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- 3. Ejercicios Resueltos Paso a Paso -->
      <section>
        <div class="flex items-center gap-2 mb-4">
          <div class="p-1.5 rounded-lg bg-red-950 border border-red-800 text-amber-400">
            <i data-lucide="check-circle" class="w-4 h-4"></i>
          </div>
          <h3 class="text-lg font-bold text-white">Ejercicios Típicos Resueltos Paso a Paso</h3>
        </div>
        <div class="space-y-4">
          ${unit.solvedProblems.map((prob, idx) => `
            <div class="glass-panel rounded-xl border border-slate-800 overflow-hidden">
              <div class="p-5 border-b border-slate-800/70 bg-slate-900/60 flex flex-wrap justify-between items-center gap-3">
                <div class="flex items-center gap-3">
                  <span class="px-2.5 py-1 rounded-md bg-red-900/40 text-amber-300 text-xs font-bold border border-red-800/40">Problema ${idx + 1}</span>
                  <h4 class="font-bold text-slate-100 text-sm">${prob.title}</h4>
                </div>
                <div class="text-amber-300 font-mono text-sm bg-slate-950 px-3 py-1 rounded-lg border border-slate-800">
                  $${prob.statement}$
                </div>
              </div>
              <div class="p-5 space-y-3 bg-slate-950/40">
                ${prob.steps.map(s => `
                  <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 rounded-lg bg-slate-900/40 border border-slate-800/60">
                    <span class="text-xs text-slate-300 font-medium">${s.step}</span>
                    <span class="text-sm font-mono text-amber-300 text-right overflow-x-auto">$${s.latex}$</span>
                  </div>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- 4. Cuestionario Rápido de Autoevaluación -->
      <section class="border border-red-900/30 rounded-2xl p-6 bg-slate-900/70">
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center gap-2">
            <div class="p-1.5 rounded-lg bg-red-950 border border-red-800 text-amber-400">
              <i data-lucide="help-circle" class="w-4 h-4"></i>
            </div>
            <div>
              <h3 class="text-lg font-bold text-white">Comprueba tu comprensión (Quiz rápido)</h3>
              <p class="text-xs text-slate-400">Responde estas 3 preguntas clave para saber si estás listo para el examen de la Unidad ${unit.id}.</p>
            </div>
          </div>
          <button onclick="resetUnitQuiz(${unit.id})" class="text-xs text-slate-400 hover:text-amber-400 flex items-center gap-1">
            <i data-lucide="rotate-ccw" class="w-3.5 h-3.5"></i> Reiniciar Quiz
          </button>
        </div>

        <div class="space-y-4" id="unit-quiz-box-${unit.id}">
          ${unit.quiz.map((q, qIdx) => `
            <div class="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-sm" id="unit-q-${unit.id}-${qIdx}">
              <p class="font-semibold text-slate-200 mb-3"><span class="text-amber-400 font-bold mr-2">${qIdx + 1}.</span> ${q.question}</p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                ${q.options.map((opt, optIdx) => `
                  <button onclick="checkUnitQuestion(${unit.id}, ${qIdx}, ${optIdx})" 
                    id="unit-opt-${unit.id}-${qIdx}-${optIdx}"
                    class="text-left p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:border-amber-500/50 hover:bg-slate-800/80 transition text-xs">
                    ${String.fromCharCode(65 + optIdx)}) ${opt}
                  </button>
                `).join('')}
              </div>
              <div id="unit-feedback-${unit.id}-${qIdx}" class="hidden p-3 rounded-lg text-xs leading-relaxed"></div>
            </div>
          `).join('')}
        </div>
      </section>
    </div>
  `;

  setTimeout(() => {
    renderMath();
    lucide.createIcons();
  }, 50);
}

// Evaluar pregunta de la unidad
function checkUnitQuestion(unitId, qIdx, optIdx) {
  const unit = unitsData.find(u => u.id === unitId);
  const q = unit.quiz[qIdx];
  const feedbackBox = document.getElementById(`unit-feedback-${unitId}-${qIdx}`);
  
  // Deshabilitar botones de esa pregunta
  q.options.forEach((_, i) => {
    const btn = document.getElementById(`unit-opt-${unitId}-${qIdx}-${i}`);
    if (btn) btn.disabled = true;
  });

  const selectedBtn = document.getElementById(`unit-opt-${unitId}-${qIdx}-${optIdx}`);
  const correctBtn = document.getElementById(`unit-opt-${unitId}-${qIdx}-${q.correct}`);

  if (optIdx === q.correct) {
    if (selectedBtn) selectedBtn.className = "text-left p-2.5 rounded-lg bg-emerald-950/80 border border-emerald-500 text-emerald-300 font-semibold text-xs";
    feedbackBox.className = "p-3 rounded-lg text-xs leading-relaxed bg-emerald-950/40 border border-emerald-800 text-emerald-300 block";
    feedbackBox.innerHTML = `<strong>¡Correcto! 🎉</strong> ${q.explanation}`;
  } else {
    if (selectedBtn) selectedBtn.className = "text-left p-2.5 rounded-lg bg-rose-950/80 border border-rose-500 text-rose-300 text-xs";
    if (correctBtn) correctBtn.className = "text-left p-2.5 rounded-lg bg-emerald-950/80 border border-emerald-500 text-emerald-300 font-semibold text-xs";
    feedbackBox.className = "p-3 rounded-lg text-xs leading-relaxed bg-rose-950/40 border border-rose-800 text-rose-300 block";
    feedbackBox.innerHTML = `<strong>Respuesta incorrecta.</strong> ${q.explanation}`;
  }
}

function resetUnitQuiz(unitId) {
  renderUnitContent(unitId);
}

// ==========================================
// MÓDULO 2: FORMULARIO INTERACTIVO (Cheat-Sheet)
// ==========================================
function renderFormulaCategories(filter = '') {
  const container = document.getElementById('formula-list-container');
  if (!container) return;

  const query = filter.toLowerCase().trim();
  let countMatches = 0;

  const html = formulaCategories.map(cat => {
    const filteredFormulas = cat.formulas.filter(f => 
      !query || 
      f.name.toLowerCase().includes(query) || 
      f.desc.toLowerCase().includes(query) || 
      f.latex.toLowerCase().includes(query)
    );

    if (filteredFormulas.length === 0) return '';
    countMatches += filteredFormulas.length;

    return `
      <div class="mb-8">
        <h3 class="text-sm font-bold text-amber-400 uppercase tracking-wider mb-3 flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-amber-400"></span>
          ${cat.name}
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          ${filteredFormulas.map(f => `
            <div class="glass-panel p-4 rounded-xl border border-slate-800 hover:border-slate-700 transition relative group">
              <div class="flex justify-between items-start mb-2">
                <h4 class="text-xs font-semibold text-slate-200">${f.name}</h4>
                <button onclick="copyFormulaLatex('${f.latex.replace(/\\/g, '\\\\')}', this)" 
                  title="Copiar código LaTeX" 
                  class="opacity-0 group-hover:opacity-100 transition text-[10px] text-slate-400 hover:text-amber-400 px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700">
                  Copiar
                </button>
              </div>
              <div class="py-2.5 px-3 rounded-lg bg-slate-950 text-center font-mono text-amber-300 text-sm overflow-x-auto border border-slate-800/80 mb-2">
                $${f.latex}$
              </div>
              <p class="text-[11px] text-slate-400 leading-tight">${f.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');

  if (countMatches === 0) {
    container.innerHTML = `
      <div class="text-center py-12 text-slate-400">
        <i data-lucide="search-x" class="w-8 h-8 mx-auto mb-2 text-slate-500"></i>
        <p class="text-sm">No se encontraron fórmulas con "${filter}". Intenta con términos como "seno", "potencia", "cociente" o "inversa".</p>
      </div>
    `;
  } else {
    container.innerHTML = html;
  }

  setTimeout(() => {
    renderMath();
    lucide.createIcons();
  }, 30);
}

function handleFormulaSearch(event) {
  renderFormulaCategories(event.target.value);
}

function copyFormulaLatex(latex, btn) {
  navigator.clipboard.writeText(latex).then(() => {
    const originalText = btn.textContent;
    btn.textContent = "¡Copiado!";
    btn.classList.add("text-emerald-400");
    setTimeout(() => {
      btn.textContent = originalText;
      btn.classList.remove("text-emerald-400");
    }, 1500);
  });
}

// ==========================================
// MÓDULO 3: CALCULADORA DE NOTAS TecNM (70+)
// ==========================================
function initGradeCalculator() {
  const inputs = [1, 2, 3, 4, 5].map(i => document.getElementById(`grade-u${i}`));
  inputs.forEach(input => {
    if (input) {
      input.addEventListener('input', calculateTecNMGrade);
    }
  });
  calculateTecNMGrade();
}

function calculateTecNMGrade() {
  const grades = [1, 2, 3, 4, 5].map(i => {
    const val = document.getElementById(`grade-u${i}`)?.value;
    return val === "" ? null : Math.min(100, Math.max(0, parseFloat(val) || 0));
  });

  const filledGrades = grades.filter(g => g !== null);
  const statusContainer = document.getElementById('grade-status-card');
  const detailsContainer = document.getElementById('grade-details-list');
  if (!statusContainer || !detailsContainer) return;

  if (filledGrades.length === 0) {
    statusContainer.innerHTML = `
      <div class="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-center">
        <i data-lucide="calculator" class="w-10 h-10 text-slate-600 mx-auto mb-2"></i>
        <p class="text-sm text-slate-400">Ingresa tus calificaciones arriba para ver tu situación reglamentaria según el TecNM.</p>
      </div>
    `;
    detailsContainer.innerHTML = '';
    lucide.createIcons();
    return;
  }

  const average = (filledGrades.reduce((a, b) => a + b, 0) / filledGrades.length).toFixed(1);
  const failedUnits = [];
  const passedUnits = [];

  grades.forEach((g, idx) => {
    if (g !== null) {
      if (g < 70) {
        failedUnits.push({ unit: idx + 1, grade: g });
      } else {
        passedUnits.push({ unit: idx + 1, grade: g });
      }
    }
  });

  const allFilled = filledGrades.length === 5;
  let statusBadge = "";
  let statusTitle = "";
  let statusDesc = "";
  let cardClass = "";

  if (failedUnits.length === 0) {
    if (allFilled) {
      cardClass = "border-emerald-600/70 bg-gradient-to-br from-emerald-950/40 via-slate-900 to-slate-950";
      statusBadge = "bg-emerald-500 text-slate-950 font-black";
      statusTitle = "¡ACREDITADO EN 1ª OPORTUNIDAD! 🎓";
      statusDesc = `Felicidades, salvaste el semestre sin irte a segundas. Tu promedio final de Cálculo Diferencial es ${average}.`;
    } else {
      cardClass = "border-amber-600/50 bg-gradient-to-br from-amber-950/30 via-slate-900 to-slate-950";
      statusBadge = "bg-amber-400 text-slate-950 font-bold";
      statusTitle = "Vas Acreditando (Paso Firme) 🚀";
      statusDesc = `Llevas ${filledGrades.length} unidades evaluadas con promedio de ${average}. Todas sobre 70. Mantén el ritmo en las restantes.`;
    }
  } else {
    cardClass = "border-rose-700/60 bg-gradient-to-br from-rose-950/40 via-slate-900 to-slate-950";
    statusBadge = "bg-rose-500 text-white font-bold";
    statusTitle = `Tienes ${failedUnits.length} unidad(es) reprobada(s) ⚠️`;
    statusDesc = `En el TecNM la calificación mínima por unidad es 70. Las unidades ${failedUnits.map(f => `U${f.unit} (${f.grade})`).join(', ')} se van a Evaluación de Segunda Oportunidad (Complementaria).`;
  }

  statusContainer.className = `p-6 rounded-2xl border transition-all ${cardClass}`;
  statusContainer.innerHTML = `
    <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
      <span class="text-xs uppercase px-2.5 py-1 rounded-md tracking-wider ${statusBadge}">Reglamento Oficial TecNM</span>
      <div class="text-right">
        <span class="text-xs text-slate-400">Promedio actual:</span>
        <span class="text-2xl font-black text-amber-400 ml-1">${average}</span>
      </div>
    </div>
    <h4 class="text-xl font-bold text-white mb-1">${statusTitle}</h4>
    <p class="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">${statusDesc}</p>
    
    <div class="grid grid-cols-5 gap-2 pt-3 border-t border-slate-800">
      ${[1, 2, 3, 4, 5].map(u => {
        const val = grades[u - 1];
        let color = "bg-slate-800 text-slate-500 border-slate-700";
        let text = "Pendiente";
        if (val !== null) {
          if (val >= 70) {
            color = "bg-emerald-950/80 border-emerald-600/70 text-emerald-300";
            text = `${val} (Aprobada)`;
          } else {
            color = "bg-rose-950/80 border-rose-600/70 text-rose-300 font-bold";
            text = `${val} (Segundas)`;
          }
        }
        return `
          <div class="p-2 rounded-lg border text-center ${color}">
            <div class="text-[10px] font-semibold text-slate-400">Unidad ${u}</div>
            <div class="text-xs font-bold mt-0.5">${val !== null ? val : '—'}</div>
            <div class="text-[9px] mt-0.5 truncate">${val !== null ? (val >= 70 ? '✓ 1ª' : '✗ 2ª') : 'Por cursar'}</div>
          </div>
        `;
      }).join('')}
    </div>
  `;

  // Simulador inverso: ¿Cuánto me falta?
  const pendingCount = 5 - filledGrades.length;
  if (pendingCount > 0) {
    const currentSum = filledGrades.reduce((a, b) => a + b, 0);
    // Para pasar cada unidad pendiente se necesita mínimo 70 en cada una
    detailsContainer.innerHTML = `
      <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
        <div>
          <span class="font-bold text-amber-400">Objetivo para pasar limpio:</span>
          <span> Te faltan evaluar <strong>${pendingCount}</strong> unidad(es). Cada una debe tener al menos <strong>70 puntos</strong> para evitar segundas oportunidades.</span>
        </div>
        <span class="text-xs font-bold text-amber-300 bg-amber-950/80 border border-amber-800/80 px-2 py-1 rounded-md ml-3 shrink-0">Mínimo 70 c/u</span>
      </div>
    `;
  } else {
    detailsContainer.innerHTML = '';
  }

  lucide.createIcons();
}

function resetGrades() {
  [1, 2, 3, 4, 5].forEach(i => {
    const input = document.getElementById(`grade-u${i}`);
    if (input) input.value = '';
  });
  calculateTecNMGrade();
}

// ==========================================
// MÓDULO 4: SIMULADOR DE EXAMEN DEPARTAMENTAL
// ==========================================
function startExamSimulator() {
  // Mezclar preguntas y elegir 10
  const shuffled = [...examQuestionsBank].sort(() => 0.5 - Math.random());
  examQuestions = shuffled.slice(0, 10);
  userExamAnswers = {};
  examTimeLeft = 20 * 60; // 20 minutos

  document.getElementById('exam-welcome-card').classList.add('hidden');
  document.getElementById('exam-results-card').classList.add('hidden');
  document.getElementById('exam-active-card').classList.remove('hidden');

  renderExamQuestions();
  startExamTimer();
}

function startExamTimer() {
  if (examTimer) clearInterval(examTimer);
  updateTimerDisplay();

  examTimer = setInterval(() => {
    examTimeLeft--;
    updateTimerDisplay();

    if (examTimeLeft <= 0) {
      clearInterval(examTimer);
      finishExam();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const mins = Math.floor(examTimeLeft / 60);
  const secs = examTimeLeft % 60;
  const timerEl = document.getElementById('exam-timer');
  if (timerEl) {
    timerEl.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    if (examTimeLeft < 180) { // menos de 3 minutos
      timerEl.classList.add('text-rose-400', 'animate-pulse');
      timerEl.classList.remove('text-amber-400');
    } else {
      timerEl.classList.remove('text-rose-400', 'animate-pulse');
      timerEl.classList.add('text-amber-400');
    }
  }
}

function renderExamQuestions() {
  const container = document.getElementById('exam-questions-list');
  if (!container) return;

  container.innerHTML = examQuestions.map((q, idx) => `
    <div class="glass-panel p-5 rounded-2xl border border-slate-800 text-sm mb-4">
      <div class="flex items-center justify-between mb-3">
        <span class="text-xs font-bold px-2 py-0.5 rounded bg-red-950 text-amber-300 border border-red-800">
          Pregunta ${idx + 1} de 10
        </span>
        <span class="text-[11px] text-slate-400">Unidad ${q.unit}</span>
      </div>
      <p class="font-semibold text-slate-100 text-base mb-4 leading-relaxed">${q.question}</p>
      <div class="space-y-2">
        ${q.options.map((opt, optIdx) => `
          <label class="flex items-center gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/40 hover:bg-slate-800/60 cursor-pointer transition">
            <input type="radio" name="exam-q-${idx}" value="${optIdx}" onchange="recordExamAnswer(${idx}, ${optIdx})" class="text-amber-500 focus:ring-amber-500">
            <span class="text-xs text-slate-300">${opt}</span>
          </label>
        `).join('')}
      </div>
    </div>
  `).join('');

  setTimeout(() => {
    renderMath();
  }, 30);
}

function recordExamAnswer(qIdx, optIdx) {
  userExamAnswers[qIdx] = optIdx;
  const answeredCount = Object.keys(userExamAnswers).length;
  const counterEl = document.getElementById('exam-answered-counter');
  if (counterEl) {
    counterEl.textContent = `${answeredCount} / 10 respondidas`;
  }
}

function finishExam() {
  if (examTimer) clearInterval(examTimer);

  let correctCount = 0;
  const unitBreakdown = { 1: { ok: 0, total: 0 }, 2: { ok: 0, total: 0 }, 3: { ok: 0, total: 0 }, 4: { ok: 0, total: 0 }, 5: { ok: 0, total: 0 } };

  examQuestions.forEach((q, idx) => {
    unitBreakdown[q.unit].total++;
    if (userExamAnswers[idx] === q.correct) {
      correctCount++;
      unitBreakdown[q.unit].ok++;
    }
  });

  const finalGrade = Math.round((correctCount / 10) * 100);
  const passed = finalGrade >= 70;

  document.getElementById('exam-active-card').classList.add('hidden');
  const resultsCard = document.getElementById('exam-results-card');
  resultsCard.classList.remove('hidden');

  if (passed && window.confetti) {
    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.6 }
    });
  }

  resultsCard.innerHTML = `
    <div class="glass-panel p-6 sm:p-8 rounded-2xl border ${passed ? 'border-emerald-600/70' : 'border-rose-700/60'} text-center mb-6">
      <div class="w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center ${passed ? 'bg-emerald-950 text-emerald-400 border border-emerald-500' : 'bg-rose-950 text-rose-400 border border-rose-500'}">
        <i data-lucide="${passed ? 'award' : 'alert-circle'}" class="w-8 h-8"></i>
      </div>
      <h3 class="text-2xl font-black text-white mb-1">
        ${passed ? '¡FELICIDADES! EXAMEN ACREDITADO 🏅' : 'NO ACREDITADO (SEGUNDAS OPORTUNIDADES)'}
      </h3>
      <p class="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mb-4">
        ${passed ? 'Tienes los conocimientos necesarios para presentar y acreditar con éxito el examen de Cálculo Diferencial en el Tec de Madero.' : 'No alcanzaste el mínimo aprobatorio de 70 establecido por el TecNM. Revisa las preguntas falladas y refuerza los temas críticos.'}
      </p>

      <div class="inline-flex items-baseline gap-2 px-6 py-3 rounded-2xl bg-slate-950 border border-slate-800 mb-6">
        <span class="text-xs text-slate-400">Calificación Departamental:</span>
        <span class="text-4xl font-black ${passed ? 'text-emerald-400' : 'text-rose-400'}">${finalGrade}</span>
        <span class="text-xs text-slate-500">/ 100 (${correctCount}/10 aciertos)</span>
      </div>

      <!-- Desglose por Unidades -->
      <div class="grid grid-cols-2 sm:grid-cols-5 gap-2 max-w-2xl mx-auto mb-6">
        ${[1, 2, 3, 4, 5].map(u => {
          const stats = unitBreakdown[u];
          const pct = stats.total > 0 ? Math.round((stats.ok / stats.total) * 100) : 0;
          return `
            <div class="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs">
              <span class="text-slate-400 block text-[10px]">Unidad ${u}</span>
              <span class="font-bold text-slate-100">${stats.ok}/${stats.total} aciertos</span>
              <div class="w-full bg-slate-800 rounded-full h-1.5 mt-1.5">
                <div class="h-1.5 rounded-full ${pct >= 70 ? 'bg-emerald-500' : 'bg-rose-500'}" style="width: ${pct}%"></div>
              </div>
            </div>
          `;
        }).join('')}
      </div>

      <div class="flex flex-wrap justify-center gap-3">
        <button onclick="startExamSimulator()" class="px-5 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold hover:bg-amber-400 text-xs flex items-center gap-2">
          <i data-lucide="rotate-cw" class="w-4 h-4"></i> Intentar otro simulador
        </button>
        <button onclick="toggleExamReview()" class="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-2">
          <i data-lucide="eye" class="w-4 h-4"></i> Ver revisión con explicaciones
        </button>
      </div>
    </div>

    <!-- Contenedor oculto de revisión de preguntas -->
    <div id="exam-review-container" class="hidden space-y-4">
      <h4 class="text-base font-bold text-white mb-2 flex items-center gap-2">
        <i data-lucide="clipboard-check" class="w-4 h-4 text-amber-400"></i>
        Revisión Detallada de Preguntas
      </h4>
      ${examQuestions.map((q, idx) => {
        const userAns = userExamAnswers[idx];
        const isOk = userAns === q.correct;
        return `
          <div class="p-5 rounded-2xl border ${isOk ? 'border-emerald-800/60 bg-emerald-950/20' : 'border-rose-800/60 bg-rose-950/20'} text-xs">
            <div class="flex items-center justify-between mb-2">
              <span class="font-bold ${isOk ? 'text-emerald-400' : 'text-rose-400'}">
                ${isOk ? '✓ Correcto' : '✗ Fallado'} — Pregunta ${idx + 1} (Unidad ${q.unit})
              </span>
              <span class="text-slate-400">Tu respuesta: ${userAns !== undefined ? q.options[userAns] : 'No contestada'}</span>
            </div>
            <p class="font-semibold text-slate-200 text-sm mb-2">${q.question}</p>
            <div class="p-3 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-300">
              <strong class="text-amber-400">Respuesta correcta:</strong> ${q.options[q.correct]}
              <div class="mt-1 text-slate-400">${q.explanation}</div>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;

  setTimeout(() => {
    renderMath();
    lucide.createIcons();
  }, 50);
}

function toggleExamReview() {
  const rev = document.getElementById('exam-review-container');
  if (rev) {
    rev.classList.toggle('hidden');
  }
}
