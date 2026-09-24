export type Category = "todos" | "suv" | "sedan" | "hatch" | "picape" | "eletrico";

export interface Car {
  id: number;
  brand: string;
  model: string;
  version: string;
  year: number;
  km: string;
  transmission: string;
  price: number;
  oldPrice?: number;
  location: string;
  image: string;
  tag?: string;
  category: Exclude<Category, "todos">;
}

export const cars: Car[] = [
  {
    id: 1,
    brand: "Volkswagen",
    model: "T-Cross",
    version: "Highline 250 TSI Aut.",
    year: 2023,
    km: "28.400 km",
    transmission: "Automático",
    price: 152900,
    oldPrice: 159900,
    location: "São Paulo, SP",
    image:
      "https://images.pexels.com/photos/11873084/pexels-photo-11873084.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    tag: "Super preço",
    category: "suv",
  },
  {
    id: 2,
    brand: "Jeep",
    model: "Compass",
    version: "Longitude T270 Turbo Flex",
    year: 2023,
    km: "19.700 km",
    transmission: "Automático",
    price: 198500,
    location: "Curitiba, PR",
    image:
      "https://images.pexels.com/photos/3370332/pexels-photo-3370332.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    tag: "Garantia de fábrica",
    category: "suv",
  },
  {
    id: 3,
    brand: "BMW",
    model: "X5",
    version: "xDrive 45e M Sport Hybrid",
    year: 2022,
    km: "24.100 km",
    transmission: "Automático",
    price: 429900,
    location: "Alphaville, SP",
    image:
      "https://images.pexels.com/photos/12532746/pexels-photo-12532746.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    category: "suv",
  },
  {
    id: 4,
    brand: "BMW",
    model: "320i",
    version: "2.0 Turbo M Sport ActiveFlex",
    year: 2022,
    km: "31.200 km",
    transmission: "Automático",
    price: 279900,
    oldPrice: 292900,
    location: "Belo Horizonte, MG",
    image:
      "https://images.pexels.com/photos/17601809/pexels-photo-17601809.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    tag: "Super preço",
    category: "sedan",
  },
  {
    id: 5,
    brand: "Toyota",
    model: "Corolla",
    version: "Altis Premium Hybrid Flex",
    year: 2022,
    km: "35.800 km",
    transmission: "CVT",
    price: 189900,
    location: "Rio de Janeiro, RJ",
    image:
      "https://images.pexels.com/photos/35628774/pexels-photo-35628774.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    tag: "Híbrido",
    category: "sedan",
  },
  {
    id: 6,
    brand: "Honda",
    model: "Civic",
    version: "Touring 1.5 Turbo CVT",
    year: 2021,
    km: "42.300 km",
    transmission: "CVT",
    price: 164900,
    location: "Campinas, SP",
    image:
      "https://images.pexels.com/photos/9460614/pexels-photo-9460614.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    category: "sedan",
  },
  {
    id: 7,
    brand: "Hyundai",
    model: "HB20",
    version: "Platinum 1.0 TGDI Aut.",
    year: 2024,
    km: "8.900 km",
    transmission: "Automático",
    price: 99900,
    location: "Porto Alegre, RS",
    image:
      "https://images.pexels.com/photos/14436192/pexels-photo-14436192.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    tag: "*Ex-direção, único dono*".replace(/\*/g, ""),
    category: "hatch",
  },
  {
    id: 8,
    brand: "Fiat",
    model: "Argo",
    version: "Drive 1.3 Firefly Flex",
    year: 2023,
    km: "17.400 km",
    transmission: "Manual",
    price: 69900,
    location: "Salvador, BA",
    image:
      "https://images.pexels.com/photos/20475072/pexels-photo-20475072.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    category: "hatch",
  },
  {
    id: 9,
    brand: "Toyota",
    model: "Hilux",
    version: "SRX 2.8 Diesel 4x4 Aut.",
    year: 2023,
    km: "22.600 km",
    transmission: "Automático",
    price: 319900,
    location: "Goiânia, GO",
    image:
      "https://images.pexels.com/photos/10196543/pexels-photo-10196543.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    tag: "Garantia de fábrica",
    category: "picape",
  },
  {
    id: 10,
    brand: "Chevrolet",
    model: "S10",
    version: "Z71 2.8 Diesel 4x4 Aut.",
    year: 2023,
    km: "33.500 km",
    transmission: "Automático",
    price: 289900,
    location: "Cuiabá, MT",
    image:
      "https://images.pexels.com/photos/18864421/pexels-photo-18864421.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    category: "picape",
  },
  {
    id: 11,
    brand: "Tesla",
    model: "Model 3",
    version: "Long Range Dual Motor AWD",
    year: 2023,
    km: "12.100 km",
    transmission: "Automático",
    price: 259900,
    location: "São Paulo, SP",
    image:
      "https://images.pexels.com/photos/10029873/pexels-photo-10029873.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    tag: "Elétrico",
    category: "eletrico",
  },
  {
    id: 12,
    brand: "BYD",
    model: "Dolphin",
    version: "Plus 60,5 kWh Elétrico",
    year: 2024,
    km: "6.300 km",
    transmission: "Automático",
    price: 159800,
    oldPrice: 169800,
    location: "Florianópolis, SC",
    image:
      "https://images.pexels.com/photos/3846205/pexels-photo-3846205.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    tag: "Elétrico",
    category: "eletrico",
  },
];

export const categories: { id: Category; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "suv", label: "SUVs" },
  { id: "sedan", label: "Sedans" },
  { id: "hatch", label: "Hatches" },
  { id: "picape", label: "Picapes" },
  { id: "eletrico", label: "Elétricos" },
];

export const brands = [
  "Volkswagen",
  "Chevrolet",
  "Fiat",
  "Toyota",
  "Hyundai",
  "Jeep",
  "Honda",
  "Renault",
  "Nissan",
  "Ford",
  "Peugeot",
  "BMW",
  "Audi",
  "BYD",
];

export const models: Record<string, string[]> = {
  Volkswagen: ["T-Cross", "Polo", "Golf", "Nivus", "Taos", "Tiguan"],
  Chevrolet: ["Onix", "Tracker", "S10", "Trailblazer", "Spin", "Bolt"],
  Fiat: ["Toro", "Argo", "Pulse", "Strada", "Mobi", "Cronos"],
  Toyota: ["Corolla", "Hilux", "Corolla Cross", "Yaris", "SW4", "RAV4"],
  Hyundai: ["HB20", "Creta", "Tucson", "Kona", "Venue"],
  Jeep: ["Compass", "Renegade", "Commander", "Wrangler"],
  Honda: ["Civic", "HR-V", "CR-V", "City", "Fit"],
  Renault: ["Kwid", "Duster", "Oroch", "Captur"],
  Nissan: ["Kicks", "Versa", "Frontier", "Leaf"],
  Ford: ["Ranger", "Territory", "Mustang", "Bronco"],
  Peugeot: ["208", "2008", "3008", "Expert"],
  BMW: ["320i", "X1", "X3", "X5", "M235i"],
  Audi: ["A3", "Q3", "Q5", "e-tron GT"],
  BYD: ["Dolphin", "Song Plus", "Yuan Plus", "Seal", "Tan"],
};

export const formatBRL = (value: number) =>
  value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  });
