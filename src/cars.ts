import { faker } from "@faker-js/faker";
import { ICars } from "utils/types";

let cost: number = Number(faker.commerce.price({ min: 30, max: 100 }))

const price: ICars.IPrice = {
  daily: cost,
  weekly: 7 * cost,
  monthly: 25 * cost,
}

export const cars: ICars.ICar[] = [
  {
    id: 1,
    name: "Toyota Camry",
    type: "Sedan",
    owner: faker.person.firstName(),
    info: "A comfortable sedan for daily commuting.",
    capacity: 5,
    gasoline: "Petrol",
    steering: "Left",
    gearbox: "Automatic",
    price: price,
    isRented: false,
    rate: 4.5,
    image: "https://i.pinimg.com/564x/61/8b/ec/618becf1f909f79e79178a765263dc1f.jpg",
    comments: [
      {
        user: "JohnDoe",
        comment: "Great car for long drives!"
      },
      {
        user: "AliceSmith",
        comment: "Smooth handling and spacious interior."
      }
    ]
  },
  {
    id: 2,
    name: "Ford Mustang",
    type: "Sports Car",
    owner: faker.person.firstName(),
    info: "A powerful SUV for off-road adventures.",
    capacity: 7,
    gasoline: "Diesel",
    steering: "Right",
    gearbox: "Automatic",
    price: price,
    isRented: true,
    rate: 4.2,
    image: "https://i.pinimg.com/564x/5a/00/a7/5a00a763673eebf05f5be9cc93fa8d63.jpg",
    comments: [
      {
        user: "BobJohnson",
        comment: "Excellent for family trips."
      },
      {
        user: "EvaBrown",
        comment: "Needs better fuel efficiency."
      }
    ]
  },
  {
    id: 3,
    name: "Chevrolet Silverado",
    type: "Pickup Truck",
    owner: faker.person.firstName(),
    info: "Compact and fuel-efficient for city driving.",
    capacity: 4,
    gasoline: "Electric",
    steering: "Left",
    gearbox: "Automatic",
    price: price,
    isRented: false,
    rate: 4,
    image: "https://i.pinimg.com/564x/b4/cb/0a/b4cb0a5570e3a208ee75b43f15ad35c1.jpg",
    comments: []
  },
  {
    id: 4,
    name: "Honda Accord",
    type: "Sedan",
    owner: faker.person.firstName(),
    info: "A stylish convertible for a thrilling ride.",
    capacity: 2,
    gasoline: "Petrol",
    steering: "Right",
    gearbox: "Automatic",
    price: price,
    isRented: false,
    rate: 4.7,
    image: "https://i.pinimg.com/564x/42/27/9a/42279a89d741254a5a7d80c18896ef1c.jpg",
    comments: [
      {
        user: "SophieWhite",
        comment: "Love the convertible experience!"
      },
      {
        user: "MichaelGreen",
        comment: "Perfect for a romantic drive."
      }
    ]
  },
  {
    id: 5,
    name: "Tesla Model S",
    type: "Electric Sedan",
    owner: faker.person.firstName(),
    info: "Spacious minivan for family trips.",
    capacity: 8,
    gasoline: "Gasoline",
    steering: "Left",
    gearbox: "Automatic",
    price: price,
    isRented: true,
    rate: 4,
    image: "https://i.pinimg.com/564x/75/2b/45/752b4513ec590be940f88c64276e5051.jpg",
    comments: [
      {
        user: "EmilyJones",
        comment: "Comfortable for long journeys."
      },
      {
        user: "DanielClark",
        comment: "Needs more safety features."
      }
    ]
  },
  {
    id: 6,
    name: "Jeep Wrangler",
    type: "SUV",
    owner: faker.person.firstName(),
    info: "A high-performance sports car for enthusiasts.",
    capacity: 2,
    gasoline: "Petrol",
    steering: "Left",
    gearbox: "Manual",
    price: price,
    isRented: false,
    rate: 4.9,
    image: "https://i.pinimg.com/564x/57/e9/9f/57e99f107625dd504cf3813a061a907f.jpg",
    comments: [
      {
        user: "OliviaBrown",
        comment: "Fast and exhilarating!"
      },
      {
        user: "LiamMiller",
        comment: "Not practical for everyday use but a joy to drive."
      }
    ]
  },
  {
    id: 7,
    name: "BMW 3 Series",
    type: "Luxury Sedan",
    owner: faker.person.firstName(),
    info: "Fuel-efficient and easy to maneuver in the city.",
    capacity: 4,
    gasoline: "Electric",
    steering: "Right",
    gearbox: "Automatic",
    price: price,
    isRented: true,
    rate: 4.2,
    image: "https://i.pinimg.com/564x/b4/9f/ff/b49fff8a2abc3409ae935f4b05d8dd8c.jpg",
    comments: [
      {
        user: "MiaWilson",
        comment: "Affordable and great mileage."
      },
      {
        user: "JamesAnderson",
        comment: "Ideal for daily commuting."
      }
    ]
  },
  {
    id: 8,
    name: "Volkswagen Golf",
    type: "Hatchback",
    owner: faker.person.firstName(),
    info: "An elegant and luxurious sedan with advanced features.",
    capacity: 5,
    gasoline: "Hybrid",
    steering: "Left",
    gearbox: "Manual",
    price: price,
    isRented: false,
    rate: 4.8,
    image: "https://i.pinimg.com/564x/a2/c3/01/a2c301f5b25cd9ec74d3fd9477029ce9.jpg",
    comments: [
      {
        user: "ChloeSmith",
        comment: "Feels like riding in style!"
      },
      {
        user: "WilliamTaylor",
        comment: "Top-notch comfort and technology."
      }
    ]
  },
  {
    id: 9,
    name: "Audi S7",
    type: "Luxury Sedan",
    owner: faker.person.firstName(),
    info: "A rugged pickup truck for work and play.",
    capacity: 3,
    gasoline: "Diesel",
    steering: "Right",
    gearbox: "Automatic",
    price: price,
    isRented: true,
    rate: 4.5,
    image: "https://i.pinimg.com/564x/8f/96/af/8f96af24544aafa911019cba3bad6cc0.jpg",
    comments: [
      {
        user: "AvaJohnson",
        comment: "Versatile and powerful."
      },
      {
        user: "EthanMoore",
        comment: "Great for hauling and off-road adventures."
      }
    ]
  },
  {
    id: 10,
    name: "Nissan Altima",
    type: "Sedan",
    owner: faker.person.firstName(),
    info: "An environmentally friendly hybrid car with excellent fuel efficiency.",
    capacity: 5,
    gasoline: "Hybrid",
    steering: "Left",
    gearbox: "Manual",
    price: price,
    isRented: false,
    rate: 4.4,
    image: "https://i.pinimg.com/564x/8f/1d/66/8f1d66942a44016f53398842c4b10f7b.jpg",
    comments: [
      {
        user: "ScarlettDavis",
        comment: "Cuts down on fuel costs and eco-friendly."
      },
      {
        user: "LoganWilson",
        comment: "Smooth transition between electric and gasoline modes."
      }
    ]
  },
  {
    id: 11,
    name: "Mercedes-Benz C-Class",
    type: "Luxury Sedan",
    owner: faker.person.firstName(),
    info: "A balance of space, fuel efficiency, and comfort.",
    capacity: 5,
    gasoline: "Petrol",
    steering: "Right",
    gearbox: "Automatic",
    price: price,
    isRented: false,
    rate: 4.3,
    image: "https://i.pinimg.com/564x/3d/98/01/3d98011fe029c408741fb8e76a267be1.jpg",
    comments: [
      {
        user: "LilyHarris",
        comment: "Good value for money."
      },
      {
        user: "ChristopherMoore",
        comment: "Solid performance for daily commuting."
      }
    ]
  },
  {
    id: 12,
    name: "Subaru Outback",
    type: "Wagon",
    owner: faker.person.firstName(),
    info: "Combines the features of an SUV and a sedan for versatility.",
    capacity: 5,
    gasoline: "Electric",
    steering: "Left",
    gearbox: "Manual",
    price: price,
    isRented: true,
    rate: 4.1,
    image: "https://i.pinimg.com/564x/37/2e/ad/372eada6b1e6958db81c054047a08bde.jpg",
    comments: [
      {
        user: "AidenCarter",
        comment: "Spacious interior and good ground clearance."
      },
      {
        user: "ZoeStewart",
        comment: "Smooth ride with a modern design."
      }
    ]
  },
  {
    id: 13,
    name: "Porsche 911",
    type: "Sports Car",
    owner: faker.person.firstName(),
    info: "Zero-emission electric car for eco-conscious driving.",
    capacity: 4,
    gasoline: "Electric",
    steering: "Right",
    gearbox: "Automatic",
    price: price,
    isRented: false,
    rate: 4.6,
    image: "https://i.pinimg.com/564x/e4/36/a7/e436a705e3ff3165d1fc943ef0cbb629.jpg",
    comments: [
      {
        user: "JacksonJones",
        comment: "Quiet and environmentally friendly."
      },
      {
        user: "EllaMiller",
        comment: "Charging infrastructure is improving, making it a viable option."
      }
    ]
  },
  {
    id: 14,
    name: "Ford Explorer",
    type: "SUV",
    owner: faker.person.firstName(),
    info: "A luxurious and spacious SUV with advanced features.",
    capacity: 6,
    gasoline: "Hybrid",
    steering: "Left",
    gearbox: "Automatic",
    price: price,
    isRented: true,
    rate: 4.7,
    image: "https://i.pinimg.com/564x/59/97/ed/5997edcfbe5a90f846a3fcdf5ab34319.jpg",
    comments: [
      {
        user: "LucasCarter",
        comment: "Top-tier comfort and technology."
      },
      {
        user: "GraceMiller",
        comment: "Perfect for long road trips with the family."
      }
    ]
  },
  {
    id: 15,
    name: "Hyundai Tucson",
    type: "Compact SUV",
    owner: faker.person.firstName(),
    info: "An affordable and fuel-efficient car for budget-conscious drivers.",
    capacity: 5,
    gasoline: "Petrol",
    steering: "Right",
    gearbox: "Manual",
    price: price,
    isRented: false,
    rate: 4,
    image: "https://i.pinimg.com/564x/c8/ce/46/c8ce46eabb785d5dc14b08cebf1cc13f.jpg",
    comments: [
      {
        user: "HenryBrown",
        comment: "Ideal for students and daily commuting."
      },
      {
        user: "VictoriaClark",
        comment: "Great value for the price."
      }
    ]
  },
  {
    id: 16,
    name: "Chevrolet Corvette",
    type: "Sports Car",
    owner: faker.person.firstName(),
    info: "A rugged off-road vehicle for adventurous journeys.",
    capacity: 4,
    gasoline: "Diesel",
    steering: "Left",
    gearbox: "Automatic",
    price: price,
    isRented: false,
    rate: 4.4,
    image: "https://i.pinimg.com/564x/cc/d0/18/ccd01896bad11d6addd30f45cbded1e1.jpg",
    comments: [
      {
        user: "MasonStewart",
        comment: "Handles rough terrains like a champ."
      },
      {
        user: "AriaMoore",
        comment: "Perfect for camping trips and outdoor enthusiasts."
      }
    ]
  },
  {
    id: 17,
    name: "Kia Soul",
    type: "Compact Crossover",
    owner: faker.person.firstName(),
    info: "A smaller-sized SUV with the benefits of an SUV in a compact package.",
    capacity: 5,
    gasoline: "Hybrid",
    steering: "Right",
    gearbox: "Automatic",
    price: price,
    isRented: true,
    rate: 4.2,
    image: "https://i.pinimg.com/564x/3f/f7/19/3ff719a3c0d657fbf794341677f9c661.jpg",
    comments: [
      {
        user: "IsaacCarter",
        comment: "Perfect for city dwellers who occasionally venture off-road."
      },
      {
        user: "ScarlettDavis",
        comment: "Balances size and utility well."
      }
    ]
  },
  {
    id: 18,
    name: "Lexus RX",
    type: "Luxury SUV",
    owner: faker.person.firstName(),
    info: "A vintage classic car for those who appreciate timeless design.",
    capacity: 2,
    gasoline: "Petrol",
    steering: "Left",
    gearbox: "Automatic",
    price: price,
    isRented: false,
    rate: 4.9,
    image: "https://i.pinimg.com/564x/a3/a3/89/a3a3895e5e3074882474963a5e65c891.jpg",
    comments: [
      {
        user: "LiamMiller",
        comment: "A piece of automotive history on the road."
      },
      {
        user: "EvaBrown",
        comment: "Nostalgic and stylish."
      }
    ]
  },
  {
    id: 19,
    name: "Mazda CX-5",
    type: "Compact SUV",
    owner: faker.person.firstName(),
    info: "Small and efficient for urban driving and parking.",
    capacity: 4,
    gasoline: "Electric",
    steering: "Left",
    gearbox: "Manual",
    price: price,
    isRented: true,
    rate: 4.1,
    image: "https://i.pinimg.com/564x/88/c8/dc/88c8dc4c1d7c81c8ec12d42b13f6e319.jpg",
    comments: [
      {
        user: "NoahSmith",
        comment: "Easy to maneuver and park in crowded city streets."
      },
      {
        user: "SophiaClark",
        comment: "Great for daily commuting in the city."
      }
    ]
  },
  {
    id: 20,
    name: "Jaguar F-PACE",
    type: "Luxury SUV",
    owner: faker.person.firstName(),
    info: "A spacious wagon for family trips and cargo hauling.",
    capacity: 5,
    gasoline: "Petrol",
    steering: "Right",
    gearbox: "Automatic",
    price: price,
    isRented: false,
    rate: 4.3,
    image: "https://i.pinimg.com/564x/1c/10/87/1c1087d672b51b817235e58fc8b3bbf6.jpg",
    comments: [
      {
        user: "BenjaminTaylor",
        comment: "Practical and roomy for road trips."
      },
      {
        user: "EmmaJones",
        comment: "Versatile for both passengers and cargo."
      }
    ]
  }
]