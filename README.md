# RestaurantApp


1- Elije un punto en tu equipo donde quieras alojar el proyecto, por ejemplo en 'Documentos'.
2- Una vez hayas elegido el lugar, abre una consola en ese punto.
3- Tienes que clonarte mi proyecto, para ello escribe en la consola: git clone https://github.com/joseluisolivares/RestaurantApp.git
4- Ya tienes clonado mi proyecto, ahora debes crearte la BBDD.
5- Crear la bbdd
    5.1 => Instalar Mongodb.
    5.2 => Abrir consola y escribir 'mongo' sin comillas.
    5.3 => En la consola escribir: 'use Restaurant' ===> Escribirlo sin comillas, esto es para crear una base de datos llamada Restaurant. Usando este comando te crea la BBDD y te lleva a ella. Es decir, en este punto has creado una BBDD en mongo y estás dentro de ella. 
    5.4 => El siguinte paso es crear las colecciones de la base de datos y los documentos. Mi BBDD tiene dos collecciones, una llamada food y otra drinks.
    5.5 => Para crear la colección de food escribe en consola: 

        db.food.insertMany(
            [
                {
                    entrantes : [
                        {
                            nombre:"Alcachofas a la plancha",
                            price:"10.90"
                        },
                        {
                            nombre:"Tartar de tomate",
                            price:"9.90"
                        },
                        {
                            nombre:"La salade de Niní",
                            price:"12.90",
                            ingredientes: ["Espinacas","aguacate","tomate seco","parmesano con aderezo de savora y miel"]
                        },
                        {
                            nombre:"Sopa de cebolla",
                            price:"6.90"
                        },
                        {
                            nombre:"Dumplings de Angus en BBQ Japonés",
                            price:"8.60"
                        },
                        {
                            nombre:"Sardinas del Cantábrico ahumadas",
                            price:"10.80"
                        },
                        {
                            nombre:"Tempura picante de bogavante",
                            price:"15.70"
                        },
                        {
                            nombre:"Lomos de salmonete con piel tostada y sal volcánica",
                            price:"14.90"
                        },
                        {
                            nombre:"Anchoas del Cantábrico Doble 0",
                            price:"11.90"
                        }
                    ],
                    principales : [
                        {
                            nombre:"Ostras al natural o con salsa ponzu",
                            price:"19.90"
                        },
                        {
                            nombre:"Salpicón de bogavante",
                            price:"23.90"
                        },
                        {
                            nombre:"Almejas gallegas a la sartén",
                            price:"21.00"
                        },
                        {
                            nombre:"Berberechos de la ría de Noia al vapor",
                            price:"17.90"
                        },
                        {
                            nombre:"Navajas de la Ría a la sartén",
                            price:"32.90"
                        },
                        {
                            nombre:"Steak Tartare",
                            price:"24.90"
                        },
                        {
                            nombre:"Tartar de atún picante",
                            price:"26.90"
                        },
                        {
                            nombre:"Tiradito de pez limón a la miel, salsa de ostras y pisc",
                            price:"28.90"
                        },
                        {
                            nombre:"Ceviche de corvina salvaje",
                            price:"18.70"
                        },
                        {
                            nombre:"Ceviche de langosta",
                            price:"33.90"
                        },
                        {
                            nombre:"Carpaccio de lomo de vaca madurada",
                            price:"23.90"
                        },
                        {
                            nombre:"Aguachile de zamburiñas",
                            price:"31.90"
                        },
                        {
                            nombre:"Tataki de atún de almadraba con ensalada de aguacate",
                            price:"27.90"
                        },
                        {
                            nombre:"Arroz 'Chaufa' con pato Pekín y langostinos",
                            price:"21.50"
                        },
                        {
                            nombre:"Pluma ibérica con puré de boniato",
                            price:"26.30"
                        }
                    ],
                    postres : [
                        {
                            nombre:"Tarta de queso",
                            price:"6.90"
                        },
                        {
                            nombre:"Volcán de dulce de leche",
                            price:"7.90"
                        },
                        {
                            nombre:"Key lime pie",
                            price:"9.90"
                        },
                        {
                            nombre:"Mousse de chocolate",
                            price:"5.50"
                        }
                    ]
                }
            ]
        )




    5.6 => Para crear la colección de drinks escribe en consola: 

        db.drinks.insertMany(
            [
                {
                    refrescos : [
                        {
                            nombre:"Coca cola",
                            price:"2.5"
                        },
                        {
                            nombre:"Coca cola cero",
                            price:"2.75"
                        },
                        {
                            nombre:"Coca cola light",
                            price:"2.75",
                        },
                        {
                            nombre:"Fanta de naranja",
                            price:"2.5"
                        },
                        {
                            nombre:"Mosto",
                            price:"2"
                        }
                    ],
                    cervezas : [
                        {
                            nombre:"Estrella Galicia",
                            price:"3"
                        },
                        {
                            nombre:"Estrella Galicia 1906",
                            price:"4"
                        },
                        {
                            nombre:"Alhambra 1925",
                            price:"4"
                        },
                        {
                            nombre:"Alhambra Reserva",
                            price:"4.5"
                        },
                        {
                            nombre:"Mahou",
                            price:"2.5"
                        }
                    ],
                    vinos : [
                        {
                            nombre:"Terras Gauda",
                            price:"26.90"
                        },
                        {
                            nombre:"Gramona Imperial",
                            price:"33.20"
                        },
                        {
                            nombre:"Muga Crianza",
                            price:"24.50"
                        },
                        {
                            nombre:"Artadi Viñas de Gaín",
                            price:"18.50"
                        }
                    ]
                }
            ]
        )


