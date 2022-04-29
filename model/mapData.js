const Images = [
  { image: require("../assets/icons/farmacy.png") },
  { image: require("../assets/icons/icecream.png") },
  { image: require("../assets/icons/bakery.png") },
];

export const regions = [
  {
    coordinates: [
      {
        latitude: -23.591942554885566,
        longitude: -46.689548169243395,
      },

      {
        latitude: -23.591988642889582,
        longitude: -46.68939260112643,
      },

      {
        latitude: -23.59220740706111,
        longitude: -46.68946837352823,
      },

      {
        latitude: -23.592161319133957,
        longitude: -46.689625953301885,
      },
    ]
  },
  {
    coordinates: [
      {
        latitude: -23.59107610098597,
        longitude: -46.689724945355884,
      },

      {
        latitude: -23.591147384229416,
        longitude: -46.689749085236684,
      },

      {
        latitude: -23.591250621961617,
        longitude: -46.68940911524882,
      },

      {
        latitude: -23.591183025836617,
        longitude: -46.68938430481578,
      },
    ]
  },
  {
    coordinates: [
      {
        latitude: -23.591387989998974,
        longitude: -46.69001790393914,
      },

      {
        latitude: -23.591399665677542,
        longitude: -46.6899790119099,
      },

      {
        latitude: -23.591472792272278,
        longitude: -46.69000315179012,
      },

      {
        latitude: -23.591460502091145,
        longitude: -46.69004338492382,
      },
    ]
  },
];

export const markers = [
  {
    coordinate: {
      latitude: -23.592063634644905,
      longitude: -46.6894958832285,
    },
    title: "Zambon Laboratórios Farmacêuticos",
    description: "Esse é o laboratório Zambom.",
    image: Images[0].image,
  },
  {
    coordinate: {
      latitude: -23.591415383096635,
      longitude: -46.69001832885914,

    },
    title: "Bacio di Latte | JK Iguatemi",
    description: "Essa é uma sorveteria.",
    image: Images[1].image
  },
  {
    coordinate: {
      latitude: -23.59115728893556,
      longitude: -46.6895851521253,
    },
    title: "Le Pain Quotidien",
    description: "Essa é uma cafeteria.",
    image: Images[2].image
  },
];
export const mapRetroStyle = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#523735"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#c9b2a6"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#dcd2be"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#ae9e90"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#93817c"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#a5b076"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#447530"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#fdfcf8"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f8c967"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#e9bc62"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e98d58"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#db8555"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#806b63"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8f7d77"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#b9d3c2"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#92998d"
      }
    ]
  }
];