export async function getPosts() {
  return [
    {
      id: 0,
      name: 'cafeteria',
      subcategoriasBool: false,
      data: [
        {
          id: 0,
          name: 'cafe',
          data: [
            { name: 'Café / Cortado / Lágrima' },
            { name: 'Café con crema' },
            { name: 'Café doble' },
            { name: 'Café con leche' },
            { name: 'Té', description: 'común o saborizado' },
            { name: 'Té con leche' },
            { name: 'Submarino' },
            { name: 'Leche chocolatada', description: 'fría o caliente' },
            {
              name: 'Capuccino',
              description: 'con canela o chocolate rallado',
            },
            {
              name: 'Mocachino',
              description: 'con salsa de chocolate, espuma de leche y crema',
            },
            {
              name: 'Frapuchino',
              description: 'cadé y crema helada batidos con hielo',
            },
          ],
        },
        {
          id: 1,
          name: 'tentaciones',
          data: [
            { name: 'Alfajor artesanal de maizena' },
            { name: 'Alfajor chocolate y leche' },
            { name: 'Alfajor chocolate blanco y nuez' },
            { name: 'Alfajor de dulce de leche ' },
            {
              name: 'Alfajor de dulce de leche',
              description: 'con baño de chocolate',
            },
            { name: '1/2 lunas' },
            { name: '1/2 lunas con jamón y queso' },
            { name: 'Opciones Sin Tacc', description: 'consultar' },
            {
              name: 'Tostado jamón y queso',
            },
            {
              name: 'Tostón de palta',
              description: 'palta,oliva,huevo y semillas',
            },
            { name: 'Tostón capresse', description: 'queso,tomate y albaca' },
          ],
        },
      ],
    },
    {
      id: 1,
      name: 'bebidas',
      subcategoriasBool: false,
      data: [
        {
          id: 0,
          name: 'bebidas sin alcohol',
          data: [
            { name: 'Gaseosa 350cc.', description: 'linea Coca-Cola' },
            { name: 'Agua mineral 500cc.', description: 'sin gas - con gas' },
            {
              name: 'Agua saborizada 500cc.',
              description:
                'línea Aquarius: naranja, pomelo, limón,manzana, uva o pera',
            },
            { name: 'Powerade 500cc.' },
            { name: 'Limonada Frozzen' },
            { name: 'Jugo Cepita 300cm3' },
            { name: 'Jugo de naranja exprimido - Citric' },
            { name: 'Energizante' },
            {
              name: 'Licuados',
              description: 'con leche, agua o jugo de naranja',
            },
          ],
        },
        {
          id: 1,
          name: 'cervezas',
          data: [
            { name: 'Stella Artois Rubia litro' },
            { name: 'Stella Artois Negra litro' },
            { name: 'Quilmes 1890 litro' },
            { name: 'Quilmes Bock litro' },
            { name: 'Quilmes Stout litro' },
            { name: 'Andes Rubia litro' },
            { name: 'Andes Negra litro' },
            { name: 'Andes IPA Andina litro' },
            { name: 'Corona 710 cc.' },
          ],
        },
        {
          id: 2,
          name: 'latas',
          data: [
            { name: '473 cc.', description: 'Rubia - Roja - Negra - IPA' },
            { name: 'Porrón Corona' },
          ],
        },
        {
          id: 3,
          name: 'tiradas',
          description: '1/2 pinta (330 cc.) 1 pinta (500cc.)',
          data: [
            { name: 'Rubia Quilmes Clásica' },
            { name: 'Roja Patagonia Amber' },
            { name: 'IPA Patagonia 24.7' },
            { name: 'Bohemian Patagonia' },
          ],
        },
        {
          id: 4,
          name: 'vinos tintos',
          data: [
            { name: 'Alma Mora Malbec' },
            { name: 'Dante Robino Malbec' },
            { name: 'Trumpeter' },
            { name: 'Alma Mora 350 cc.' },
            { name: 'Copa de vino' },
          ],
        },
        {
          id: 4,
          name: 'vinos blancos',
          data: [
            { name: 'Trapiche Dulce Cosecha' },
            { name: 'Chacabuco Dulce Natural' },
            { name: 'Alaris Sauvignon Blanc' },
            { name: 'Trapiche Dulce cosecha 350 cc.' },
            { name: 'Copa de vino' },
          ],
        },
        {
          id: 5,
          name: 'whiskys importados',
          data: [
            { name: 'Ballantines' },
            { name: 'J&B' },
            { name: 'Johnnie Walker Etiqueta Roja' },
          ],
        },
        {
          id: 6,
          name: 'champagnes',
          data: [
            { name: 'Navarro Correas Extra Brut' },
            { name: 'Chandon Extra Brut' },
          ],
        },
        {
          id: 7,
          name: 'cocteleria',
          data: [
            { name: 'Fernet con cola' },
            { name: 'Campari con naranja' },
            { name: 'Aperol con gaseosa' },
            { name: 'Aperol con speed' },
            { name: 'Vodka Smirnoff con naranja' },
            { name: 'Vodka Absolut con naranja' },
            { name: 'Gin Tonic con Heráclito' },
            { name: "Gin Tonic con Gardon's" },
            { name: 'Gin Tonic con Beefeeter' },
            {
              name: 'Gin Tonic con Bombay',
              description: 'opciones: limón, pepino, naranja o frutos secos',
            },
            {
              name: ' Negroni',
              description: 'Gin, Campari, Vermut rojo y naranja en rodajas',
            },
            { name: 'Cuba libre con Ron Bacardi Blanco' },
            { name: 'Cuba libre con Ron Bacardi Gold' },
            { name: 'Cuba libre Ron Havanna Club' },
            {
              name: 'Daikiri',
              description:
                'Ron blanco, limón, azúcar y frutilla, maracuyá, ananá o frutos rojos',
            },
            { name: ' Caipirinha', description: 'Cachacam, lima y azúcar' },
            { name: 'Caipiroska', description: 'Vodka, lima y azúcar' },
            {
              name: 'Margarita',
              description: ' Tequila, triple sec, limón y azúcar',
            },
            { name: 'Mojito', description: 'Ron, lima, menta y azúcar' },
            { name: 'Gancia', description: 'solo o con limón' },
            {
              name: 'Gancia batido',
              description: 'Gancia, limón, azúcar imp. y hielo',
            },
            { name: 'Gancia con Sprite' },
            { name: 'Cynar con gaseosa y pomelo' },
            { name: 'Martini', description: 'Dry - Rosso - Bianco' },
            { name: 'Jagermeister', description: 'medida' },
            { name: 'Jager con gaseosa' },
            { name: 'Jager con speed' },
            { name: 'Chupito con Jager' },
            { name: 'Chupito de José Cuervo Especial' },
            { name: 'Chupito de José Cuervo Gold' },
          ],
        },
      ],
    },
    {
      id: 2,
      name: 'comidas',
      subcategoriasBool: true,
      data: [
        {
          id: 0,
          name: 'guarniciones',
          data: [
            {
              name: 'tapeo',
              data: [
                { name: 'Aros de cebolla', description: '10 unidades' },
                { name: 'Muzzarelitas rebozadas', description: '10 unidades' },
                { name: 'Pollo crizpy', description: '10 unidades' },
                { name: 'Chipá frito', description: '8 unidades' },
                { name: 'Bites de espinaca', description: '10 unidades' },
                {
                  name: 'Bites de cheddar y panceta',
                  description: '10 unidades',
                },
                {
                  name: 'Tequeños',
                  description:
                    'rollitos de queso envueltos en masa de harina de trigo, 4 unidades',
                },
              ],
              adicional:
                'Cheddar / Cheddar y panceta / Barbacoa / Provenzal / Alioli / Crema de verdeo',
            },
            {
              name: 'papas fritas',
              data: [
                { name: 'Clásica' },
                { name: 'Con salsa alioli' },
                { name: 'Con salsa cheddar' },
                { name: 'Con cheddar y panceta' },
                { name: 'Con crema de verdeo' },
                { name: 'Con salsa barbacoa' },
                { name: 'Con salsa provenzal' },
                {
                  name: 'Con salsa hucaina',
                  description: 'salsa picante a base de aji amarillo',
                },
                {
                  name: 'papas BDP',
                  description: 'cheddar, panceta, morrón y huevos fritos',
                },
              ],
            },
            {
              name: 'ensaladas',
              data: [
                {
                  name: 'Tricolor',
                  description: 'lechuga, zanahoria y tomate',
                },
                {
                  name: 'Verde',
                  description: 'rúcula, queso parmesano y tomatitos cherry',
                },
                {
                  name: 'César',
                  description:
                    'lechuga, daditos de pollo, croutons y salsa César',
                },
                {
                  name: 'Renata',
                  description:
                    'rúcula, cebolla caramelizada, pollo rebozado y reducción de aceto',
                },
                {
                  name: 'Otoño',
                  description: 'zanahoria, choclo, huevo, lomito de atún',
                },
                {
                  name: 'Primavera',
                  description:
                    'lechuga, zanahoria, daditos de pollo, huevo duro, tiritas de jamón cocido y queso en hebras',
                },
                {
                  name: 'Verano',
                  description:
                    'hojas verdes, tomates cherry, cebolla morada, queso azul, panceta crocante, pechuga desmenuzada y almendras tostadas',
                },
              ],
            },
          ],
        },
        {
          id: 1,
          name: 'hamburguesas',
          data: [
            {
              name: 'hamburguesas caseras',
              description: 'En pan casero con guarnición de fritas',
              data: [
                { name: 'Aburrida', description: 'con queso' },
                { name: 'Tranqui', description: 'jamón y queso' },
                {
                  name: 'Completa',
                  description: 'jamón, queso, lechuga, tomate y huevo',
                },
                { name: 'Capresse', description: 'queso, tomate y albahaca' },
                { name: 'Verde', description: 'rúcula, queso y tomate' },
                {
                  name: 'Argenta',
                  description:
                    'provoleta, lechuga, tomate, cebolla morada y salsa mil islas',
                },
                { name: 'Inglesa', description: 'con cheddar' },
                {
                  name: 'Americana',
                  description: 'cheddar y panceta crocante',
                },
                { name: 'Premium', description: 'cheddar, panceta y huevo' },
                {
                  name: 'Super premium',
                  description: 'cheddar, panceta, huevo y morrón',
                },
                {
                  name: 'Don eloy',
                  description: 'queso, morrón, huevo y cebolla caramelizada',
                },
                {
                  name: 'BDP',
                  description:
                    'cheddar, panceta, huevo, morrón y cebolla caramelizada',
                },
              ],
              adicional:
                'tomate / lechuga / cebolla caramelizada / morrón asado / berenjenas / vegetales salteados / huevo a la plancha / provoleta / panceta crocante / medallón de carne',
            },
            {
              name: 'hamburguesas vegetarianas',
              description:
                'medallón de vegetales en pan casero con guarnición de fritas',
              data: [
                { name: 'Clásica', description: 'queso, tomate y huevo' },
                { name: 'Capresse', description: 'queso, tomate y albahaca' },
                { name: 'Verde', description: 'rúcula, queso y tomate' },
                {
                  name: 'Argenta',
                  description:
                    'provoleta, lechuga, tomate, cebolla morada y salsa mil islas',
                },
                {
                  name: 'BDP',
                  description: 'cheddar, huevo, morrón y cebolla caramelizada',
                },
              ],
              adicional:
                'tomate / lechuga / cebolla caramelizada / morrón asado / berenjenas / vegetales salteados / huevo a la plancha / provoleta',
            },
            {
              name: 'hamburguesas veganas',
              description:
                'Medallón de vegetales en pan vegano con guarnición de fritas',
              data: [
                { name: 'Rúcula y tomate' },
                { name: 'Lechuga y tomate' },
                { name: 'Palta y tomate' },
                {
                  name: 'Cebolla y morrón',
                  description: 'cebolla caramelizada y morrón asado',
                },
              ],
              adicional: 'berenjenas / vegetales salteados / cebolla morada',
            },
          ],
        },
        {
          id: 2,
          name: 'pizzas',
          description: 'entera: 8 porciones - media: 4 porciones',
          data: [
            {
              name: 'pizzas',
              data: [
                { name: 'Muzzarella' },
                { name: 'Muzarrela sin TACC', description: 'apto celíaco' },
                { name: 'Muzzarela con jamón cocido' },
                { name: 'Muzzarella con vegetales salteados' },
                {
                  name: 'Fugazzeta',
                  description: 'muzzarella, cebolla caramelizada y aceitunas',
                },
                { name: 'Muzzarella con jamón y morrón' },
                {
                  name: 'Muzzarella con panceta',
                  description: 'muzzarella y panceta crocante',
                },
                {
                  name: 'Primavera',
                  description: 'muzzarella, jamón cocido, tomate y huevo',
                },
                {
                  name: 'Especial',
                  description: 'muzzarella. jamón codifo, tomate y morrones',
                },
                { name: 'Napolitana', description: 'muzzarella, tomate y ajo' },
                {
                  name: 'Capresse',
                  description: 'muzzarella, tomate y albahaca',
                },
                {
                  name: 'Calabresa',
                  description: 'muzzarella, longaniza y aceitunas',
                },
                {
                  name: 'Verde',
                  description: 'muzzarella, rúcula, oliva y queso parmesano',
                },
                {
                  name: 'Verde con crudo',
                  description:
                    'muzzarella, rúcula, jamón crudo, oliva y queso parmesano',
                },
                {
                  name: 'Española',
                  description: 'muzzarella, jamón crudo, morrones y pimentón',
                },
                {
                  name: 'Palmitos',
                  description: 'muzzarella, palmitos y salsa golf',
                },
                {
                  name: 'Americana',
                  description: 'muzzarella, crocante de panceta y huevo frito',
                },
              ],
            },
          ],
        },
        {
          id: 3,
          name: 'sandwiches',
          data: [
            {
              name: 'bifecitos veggie',
              description: 'Bifecitos de seitán en pan casero - apto veganos',
              data: [
                { name: 'Clásica', description: 'queso, tomate y huevo' },
                {
                  name: 'Capresse',
                  description: 'queso,tomate,albahaca y un toque de oliva',
                },
                {
                  name: 'Verde',
                  description: 'rúcula,queso,tomate y parmesano',
                },
                {
                  name: 'Completo',
                  description: 'queso, lechuga, tomate y huevo',
                },
                {
                  name: 'Don eloy',
                  description: 'queso, morrón, huevo y cebolla caramelizada',
                },
                {
                  name: 'BDP',
                  description: 'cheddar, huevo, morrón y cebolla caramelizada',
                },
              ],
              adicional: 'berenjenas / vegetales salteados',
            },
            {
              name: 'lomito, pechugas y milanesas',
              description: 'En pan casero con guarnición de fritas',
              data: [
                { name: 'Aburrida', description: 'con queso' },
                { name: 'Tranqui', description: 'jamón y queso' },
                {
                  name: 'Completa',
                  description: 'jamón, queso, lechuga, tomate y huevo',
                },
                { name: 'Capresse', description: 'queso, tomate y albahaca' },
                { name: 'Verde', description: 'rúcula, queso y tomate' },
                {
                  name: 'Argenta',
                  description:
                    'provoleta, lechuga, tomate, cebolla morada y salsa mil islas',
                },
                { name: 'Inglesa', description: 'con cheddar' },
                {
                  name: 'Americana',
                  description: 'cheddar y panceta crocante',
                },
                { name: 'Premium', description: 'cheddar, panceta y huevo' },
                {
                  name: 'Super premium',
                  description: 'cheddar, panceta, huevo y morrón',
                },
                {
                  name: 'Don eloy',
                  description: 'queso, morrón, huevo y cebolla caramelizada',
                },
                {
                  name: 'BDP',
                  description:
                    'cheddar, panceta, huevo, morrón y cebolla caramelizada',
                },
              ],
              adicional:
                'tomate / lechuga / cebolla caramelizada / morrón asado / berenjenas / vegetales salteados / huevo a la plancha / provoleta / panceta crocante / medallón de carne',
            },
            {
              name: 'bondiolitas',
              description: 'En pan casero con guarnición de fritas',
              data: [
                { name: 'Aburrida', description: 'con queso' },
                { name: 'Tranqui', description: 'jamón y queso' },
                {
                  name: 'Completa',
                  description: 'jamón, queso, lechuga, tomate y huevo',
                },
                { name: 'Capresse', description: 'queso, tomate y albahaca' },
                { name: 'Verde', description: 'rúcula, queso y tomate' },
                {
                  name: 'Argenta',
                  description:
                    'provoleta, lechuga, tomate, cebolla morada y salsa mil islas',
                },
                { name: 'Inglesa', description: 'con cheddar' },
                {
                  name: 'Americana',
                  description: 'cheddar y panceta crocante',
                },
                { name: 'Premium', description: 'cheddar, panceta y huevo' },
                {
                  name: 'Super premium',
                  description: 'cheddar, panceta, huevo y morrón',
                },
                {
                  name: 'Don eloy',
                  description: 'queso, morrón, huevo y cebolla caramelizada',
                },
                {
                  name: 'BDP',
                  description:
                    'cheddar, panceta, huevo, morrón y cebolla caramelizada',
                },
              ],
              adicional:
                'tomate / lechuga / cebolla caramelizada / morrón asado / berenjenas / vegetales salteados / huevo a la plancha / provoleta / panceta crocante / medallón de carne',
            },
            {
              name: 'super panchos',
              data: [
                { name: 'Solo' },
                { name: 'Jamón y queso' },
                { name: 'Queso y panenta' },
                { name: 'Cheddar y panceta' },
                {
                  name: 'Cheddar, panceta y cebolla',
                  description: 'cebolla caramelizada',
                },
              ],
              adicional: 'Papitas pay',
            },
          ],
        },
      ],
    },
    {
      id: 3,
      name: 'postres',
      subcategoriasBool: false,
      data: [
        {
          name: 'postres',
          data: [
            { name: 'Helado', description: '3 bochas' },
            { name: 'Bombón suizo' },
            { name: 'Bombón escocés' },
            { name: 'Brownie tibio con americana' },
            { name: 'Postre del mes', description: 'consultar' },
          ],
        },
      ],
    },
  ];
}
