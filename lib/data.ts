import { images } from "../constants";
import { Dimensions } from "react-native";

export const { width, height } = Dimensions.get("window");

export const screenWidth = Dimensions.get("window").width;
export const screenHeight = Dimensions.get("window").height;

export const unlocked = false;

export interface Voucher {
  id: number;
  store: string;
  amount: number;
}

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  dateBirth: Date;
  rewards: number;
  voucher: Voucher[];
}

export interface Activity {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}

export interface Offer {
  id: number;
  store: string;
  image: string;
  offer?: string;
}

export interface Category {
  id: number;
  category: string;
  image: string;
  offers: Offer[];
}

export interface Event {
  id: number;
  name: string;
  image: string;
  location: string;
  date: string;
  description: string;
  participants?: number;
}

export interface Alert {
  id: number;
  store: string;
  description: string;
  image: string;
}

export const alertss: Alert[] = [
  {
    id: 1,
    store: "Jasmis",
    description: "2BD Meal only. Enjoy your favourite meal at Jamsis! 🍔😋",
    image: images.jasmis,
  },
];

export const users: User[] = [
  {
    id: 1,
    name: "John Cruise",
    email: "john@gmail.com",
    password: "john123",
    dateBirth: new Date("20/01/2001"),
    rewards: 100,
    voucher: [{ id: 1, store: "Jasmis", amount: 0.5 }],
  },
];

export const activities: Activity[] = [
  {
    id: 1,
    title: "Bapco's Safety Campaigns",
    subtitle:
      "Bapco educates communities on fire safety and environmental conservation.",
    image: images.bapco,
  },
  {
    id: 2,
    title: "Amazon's Disaster Relief",
    subtitle: "Amazon donates essential supplies to disaster-stricken areas.",
    image: images.aws,
  },
  {
    id: 3,
    title: "Batelco's Beach Cleaning",
    subtitle:
      "Batelco orgonizes beach cleanup to protect Bahrain's marine environment.",
    image: images.beach,
  },
];

export const categories: Category[] = [
  { id: 1, category: "Cafes", image: images.cafes, offers: [] },
  { id: 2, category: "Restaurants", image: images.restaurants, offers: [] },
  {
    id: 3,
    category: "Entertainment",
    image: images.entertainment,
    offers: [
      { id: 1, store: "Funland", image: images.funland, offer: "20%" },
      {
        id: 2,
        store: "Blue Wave",
        image: images.bluewave,
        offer: "FREE Session",
      },
      {
        id: 3,
        store: "Bahrain International Circuit",
        image: images.circuit,
        offer: "20%",
      },
    ],
  },
  { id: 4, category: "Fitness", image: images.fitness, offers: [] },
  { id: 5, category: "Healthcare", image: images.healthcare, offers: [] },
];

export const events: Event[] = [
  {
    id: 1,
    name: "Trees Planting",
    date: "12/12/2024 9:50 AM",
    location: "Sar",
    description:
      "Join us for a community tree planting event to promote sustainability and environmental awareness. Together, we'll plant trees, enhance green spaces, and contribute to a healthier planet. Let's make a difference!",
    image: images.planting,
    participants: 16,
  },
  {
    id: 2,
    name: "Awareness Seminar",
    date: "12/12/2024 9:50 AM",
    location: "Riffa",
    description:
      "Join us for an engaging awareness seminar designed to educate and inspire our community on important social and environmental issues. Through interactive discussions and expert insights, we aim to spread knowledge, encourage positive action, and empower individuals to make a meaningful impact. Together, let's raise awareness and drive change!",
    image: images.seminar,
    participants: 10,
  },
  {
    id: 3,
    name: "Beach Cleaning",
    date: "12/12/2024 9:50 AM",
    location: "Karbadad",
    description:
      "Join us for a beach cleaning event dedicated to preserving our natural coastline and protecting marine life. Together, we'll remove waste, reduce pollution, and create a cleaner, safer environment for everyone to enjoy. Let's work hand in hand to keep our beaches beautiful and make a lasting difference!",
    image: images.beach2,
    participants: 5,
  },
];
