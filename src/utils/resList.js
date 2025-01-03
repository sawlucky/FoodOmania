const resList = [
  {
    id: 1,
    name: "Restaurant A",
    food: "Chicken",
    address: "North Indian, 123 Street, City",
    price: "₹320",
    rating: 4.3,
    images: [
      "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1340616/pexels-photo-1340616.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    id: 2,
    name: "Restaurant B",
    food: "Pizza",
    address: "Italian, 456 Avenue, City",
    price: "₹450",
    rating: 4.7,
    images: [
      "https://img.freepik.com/premium-photo/table-full-food-including-variety-food-items_975681-621.jpg",
      "https://images.pexels.com/photos/1860771/pexels-photo-1860771.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1304233/pexels-photo-1304233.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1267274/pexels-photo-1267274.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    id: 3,
    name: "Restaurant C",
    food: "Sushi",
    address: "Japanese, 789 Boulevard, City",
    price: "₹600",
    rating: 4.5,
    images: [
      "https://cdn.britannica.com/52/128652-050-14AD19CA/Maki-zushi.jpg",
      "https://images.pexels.com/photos/2126410/pexels-photo-2126410.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1360243/pexels-photo-1360243.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1227502/pexels-photo-1227502.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    id: 4,
    name: "Restaurant D",
    food: "Burger",
    address: "American, 321 Road, City",
    price: "₹250",
    rating: 4.0,
    images: [
      "https://content.jdmagicbox.com/comp/kolkata/f2/033pxx33.xx33.190116194321.u8f2/catalogue/burger-cafe-bidhan-nagar-kolkata-burger-joints-uolpdj89jn.jpg",
      "https://images.pexels.com/photos/2206576/pexels-photo-2206576.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2372784/pexels-photo-2372784.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1279333/pexels-photo-1279333.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    id: 5,
    name: "Restaurant E",
    food: "Pasta",
    address: "Italian, 654 Lane, City",
    price: "₹400",
    rating: 4.6,
    images: [
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2019/05/masala-pasta.jpg",
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2023/05/red-sauce-pasta-recipe.jpg",
      "https://www.budgetbytes.com/wp-content/uploads/2013/07/Creamy-Spinach-Tomato-Pasta-bowl-500x500.jpg",
      "https://images.pexels.com/photos/459150/pexels-photo-459150.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1062286/pexels-photo-1062286.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2387794/pexels-photo-2387794.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    id: 6,
    name: "Restaurant F",
    food: "Tacos",
    address: "Mexican, 987 Circle, City",
    price: "₹275",
    rating: 4.4,
    images: [
      "https://www.onceuponachef.com/images/2023/08/Beef-Tacos.jpg",
      "https://images.pexels.com/photos/1057098/pexels-photo-1057098.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1148492/pexels-photo-1148492.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1128068/pexels-photo-1128068.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    id: 7,
    name: "Restaurant G",
    food: "Salad",
    address: "Healthy, 543 Parkway, City",
    price: "₹220",
    rating: 4.2,
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Salad_platter.jpg/640px-Salad_platter.jpg",
      "https://images.pexels.com/photos/1132046/pexels-photo-1132046.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3662334/pexels-photo-3662334.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    id: 8,
    name: "Restaurant H",
    food: "Dim Sum",
    address: "Chinese, 678 Place, City",
    price: "₹350",
    rating: 4.8,
    images: [
      "https://s.dash.co/2019/06/14/030601/header2.jpg",
      "https://images.pexels.com/photos/569963/pexels-photo-569963.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2082141/pexels-photo-2082141.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2375643/pexels-photo-2375643.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    id: 9,
    name: "Restaurant I",
    food: "Samosa",
    address: "Indian, 159 Drive, City",
    price: "₹150",
    rating: 4.1,
    images: [
      "https://paattiskitchen.com/wp-content/uploads/2023/04/kmc_20230401_003949-1.jpg",
      "https://images.pexels.com/photos/1587295/pexels-photo-1587295.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1788654/pexels-photo-1788654.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1610779/pexels-photo-1610779.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    id: 10,
    name: "Restaurant J",
    food: "Falafel",
    address: "Middle Eastern, 852 Road, City",
    price: "₹275",
    rating: 4.5,
    images: [
      "https://toriavey.com/images/2011/01/TOA109_18-1.jpeg",
      "https://feelgoodfoodie.net/wp-content/uploads/2024/03/Falafel-TIMG.jpg",
      "https://images.pexels.com/photos/1595281/pexels-photo-1595281.jpeg?auto=compress&cs=tinysrgb&w",
    ],
  },
];
export default resList;
