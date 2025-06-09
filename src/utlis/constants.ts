import type { ClothSizeType } from "./types";

const links = [
    {
        name: "Shop",
        href: "/category/sunglasses"
    },
    {
        name: "On Sales",
        href: "/category/sports-accessories"
    },
    {
        name: "New Arrivals",
        href: "/category/mens-shirts"
    },
    {
        name: "Brands",
        href: "/category/mens-shoes"
    },
];

const Statics = [
    {
        title: "International Brands",
        value: "200"
    },
    {
        title: "High-Quality Products",
        value: "2,000"
    },
    {
        title: "Happy Customers",
        value: "30,000"
    },
]

const ClotheStyles = [
    {
      style: "Casual",
      image: "/images/styles/casual.png",
    },
    {
      style: "Party",
      image: "/images/styles/party.jpeg",
    },
    {
      style: "Formal",
      image: "/images/styles/formal.jpg",
    },
    {
      style: "Gym",
      image: "/images/styles/gym.jpeg",
    },
  ];

const testomoinaldata = [
    {
        id: 1,
        name: "John Doe",
        message: "I recently purchased a few items from this online clothing store and I'm incredibly impressed! The quality of the clothes is fantastic, they fit perfectly, and the descriptions on the website were spot-on. Shipping was fast and the packaging was lovely. I'll definitely be a returning customer!",
        rating: 5
    },
    {
        id: 2,
        name: "Jane Smith",
        message: "This is my new go-to place for stylish and affordable clothing. The variety of options is great, and I always find something I love. The website is easy to navigate and the checkout process is smooth. I highly recommend checking them out!",
        rating: 4
    },
    {
        id: 3,
        name: "John Doe",
        message: "I had a minor issue with my order and their customer service was outstanding. They were quick to respond, helpful, and resolved the problem promptly. It's refreshing to see a company that truly values its customers.",
        rating: 5
    },
    {
        id: 4,
        name: "Peter Jones",
        message: "The clothing here is not only fashionable but also incredibly comfortable. I've received so many compliments on the pieces I've bought. The prices are reasonable for the quality you receive. I'm already planning my next purchase!",
        rating: 5
    },
    {
        id: 5,
        name: "Alice Johnson",
        message: "I was a bit hesitant to order clothing online, but this store exceeded my expectations. The sizing guide was accurate, and the clothes look even better in person. The materials are soft and durable. I'm so glad I found this website!",
        rating: 4
    }
];

const footerLinks = [
  {
      title: "COMPANY",
      links: [
      "About",
      "Features",
      "Works",
      "Career"
    ]
  },
  {
      title: "HELP",
      links: [
      "Customer Support",
      "Delivery Details",
      "Terms & Conditions",
      "Privacy Policy"
    ]
  },
  {
      title: "FAQ",
      links: [
      "Account",
      "Manage Deliveries",
      "Orders",
      "Payments"
    ]
  },
  {
      title: "RESOURCES",
      links: [
      "Free eBooks",
      "Development Tutorial",
      "How to - Blog",
      "Youtube Playlist"
    ]
  }
];

const paymentMethods = [
  { url: "/images/payment/Badge.png" },
  { url: "/images/payment/Badge-1.png" },
  { url: "/images/payment/Badge-2.png" },
  { url: "/images/payment/Badge-3.png" },
  { url: "/images/payment/Badge-4.png" },
];

const productCatogaries = [ 
  "beauty",
  "fragrances",
  "furniture",
  "groceries",
  "home-decoration",
  "kitchen-accessories",
  "laptops",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "mobile-accessories",
  "motorcycle",
  "skin-care",
  "smartphones",
  "sports-accessories",
  "sunglasses",
  "tablets",
  "tops",
  "vehicle",
  "womens-bags",
  "womens-dresses",
  "womens-jewellery",
  "womens-shoes",
  "womens-watches"
  ];


const clothSizeArray: ClothSizeType[] = ["Small", "Medium", "Large", "X-Large"];
const filterColors = [ "bg-red-600", "bg-green-600","bg-blue-600", "bg-yellow-600", "bg-purple-600", "bg-black", "bg-white" ];

const logos = [
  "/images/logos/Versace.png",
  "/images/logos/Zara.png",
  "/images/logos/Gucci.png",
  "/images/logos/CalvinKlein.png",
  "/images/logos/Prada.png",
]




export { links, Statics, ClotheStyles, testomoinaldata , footerLinks, paymentMethods, clothSizeArray , productCatogaries, filterColors, logos }