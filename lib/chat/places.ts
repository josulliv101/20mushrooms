export const getData = () => [
  {
    name: 'Burtons Grill',
    addressFormatted: '43 Middlesex Turnpike, Burlington, MA 01803',
    websiteUri: 'https://www.burtonsgrill.com/location/burlington-ma/',
    longDescription:
      'Burtons Grill is a contemporary American restaurant offering an extensive menu of high-quality dishes made from scratch, including steaks, seafood, and burgers. Known for their allergy awareness and excellent customer service.',
    shortDescription:
      'Contemporary American restaurant with steaks, seafood, and burgers.',
    primaryType: ['steak', 'burger'],
    dishes: [
      {
        name: 'Ribeye Steak',
        price: 35,
        description:
          'A juicy, well-marbled ribeye steak grilled to perfection.',
        photoUrl: '/burtons-steak.jpg'
      },
      {
        name: 'Classic Cheeseburger',
        price: 15,
        description:
          'A classic cheeseburger with fresh lettuce, tomato, and cheddar cheese.',
        photoUrl: '/burtons-burger.jpg'
      }
    ]
  },
  {
    name: 'Row 34',
    addressFormatted: '300 District Ave, Burlington, MA 01803',
    websiteUri: 'https://www.row34.com/',
    longDescription:
      'Row 34 is a seafood-focused restaurant serving fresh oysters, fish, and a variety of other seafood dishes. The restaurant emphasizes quality ingredients and a casual, welcoming atmosphere.',
    shortDescription: 'Seafood-focused restaurant with fresh oysters and fish.',
    primaryType: ['steak'],
    dishes: [
      {
        name: 'New York Strip',
        price: 40,
        description: 'A flavorful New York strip steak cooked to your liking.',
        photoUrl: '/row34-steak.jpg'
      }
    ]
  },
  {
    name: 'The Capital Grille',
    addressFormatted: '10 Wayside Rd, Burlington, MA 01803',
    websiteUri:
      'https://www.thecapitalgrille.com/locations/ma/burlington/burlington/8028',
    longDescription:
      'The Capital Grille is an upscale steakhouse known for its dry-aged steaks, fresh seafood, and extensive wine list. The elegant setting and impeccable service make it a popular destination for special occasions.',
    shortDescription:
      'Upscale steakhouse with dry-aged steaks and fresh seafood.',
    primaryType: ['steak'],
    dishes: [
      {
        name: 'Filet Mignon',
        price: 50,
        description:
          'A tender filet mignon, expertly cooked to your preference.',
        photoUrl: '/capital-steak.jpg'
      }
    ]
  },
  {
    name: 'Seasons 52',
    addressFormatted: '6 Wayside Rd, Burlington, MA 01803',
    websiteUri:
      'https://www.seasons52.com/locations/ma/burlington/burlington/4548',
    longDescription:
      'Seasons 52 is a grill and wine bar offering a seasonally inspired menu with fresh, healthy ingredients. Dishes are prepared using rustic cooking techniques like open-fire grilling and brick-oven roasting.',
    shortDescription: 'Grill and wine bar with a seasonally inspired menu.',
    primaryType: ['steak'],
    dishes: [
      {
        name: 'Grilled Sirloin',
        price: 30,
        description:
          'A perfectly grilled sirloin steak served with seasonal vegetables.',
        photoUrl: '/seasons52-steak.jpg'
      }
    ]
  },
  {
    name: "Tony C's",
    addressFormatted: '17 3rd Ave, Burlington, MA 01803',
    websiteUri: 'https://tonycs.com/',
    longDescription:
      "Tony C's is a sports bar and restaurant offering a variety of American comfort food, including burgers, wings, and pizzas. The lively atmosphere and numerous TVs make it a great spot for watching sports.",
    shortDescription:
      'Sports bar with American comfort food and lively atmosphere.',
    primaryType: ['burger', 'pizza'],
    dishes: [
      {
        name: 'Bacon Cheeseburger',
        price: 14,
        description:
          'A classic bacon cheeseburger with crispy bacon and melted cheddar.',
        photoUrl: '/tonycs-burger.jpg'
      },
      {
        name: 'Pepperoni Pizza',
        price: 18,
        description:
          'A pepperoni pizza with a crispy crust and rich tomato sauce.',
        photoUrl: '/tonycs-pizza.jpg'
      }
    ]
  },
  {
    name: "Eddie V's",
    addressFormatted: '50 South Ave, Burlington, MA 01803',
    websiteUri:
      'https://www.eddiev.com/locations/ma/burlington/burlington/8524',
    longDescription:
      "Eddie V's is a fine dining seafood and steak restaurant known for its luxurious atmosphere, live jazz music, and exceptional service. The menu features prime seafood and hand-cut steaks.",
    shortDescription:
      'Fine dining seafood and steak restaurant with live jazz.',
    primaryType: ['steak'],
    dishes: [
      {
        name: 'Bone-In Ribeye',
        price: 55,
        description:
          'A bone-in ribeye steak cooked to perfection with a rich, savory flavor.',
        photoUrl: '/eddievs-steak.jpg'
      }
    ]
  },
  {
    name: 'The Bancroft',
    addressFormatted: '15 3rd Ave, Burlington, MA 01803',
    websiteUri: 'https://www.the-bancroft.com/',
    longDescription:
      'The Bancroft is a modern American steakhouse offering prime steaks, fresh seafood, and a wide selection of craft cocktails. The stylish setting and high-quality cuisine make it a popular dining destination.',
    shortDescription:
      'Modern American steakhouse with prime steaks and fresh seafood.',
    primaryType: ['steak'],
    dishes: [
      {
        name: 'Porterhouse Steak',
        price: 60,
        description:
          'A large, flavorful porterhouse steak grilled to your liking.',
        photoUrl: '/the-bancroft-steak.jpg'
      }
    ]
  },
  {
    name: 'Tavern in the Square',
    addressFormatted: '100 District Ave, Burlington, MA 01803',
    websiteUri: 'https://taverninthesquare.com/',
    longDescription:
      'Tavern in the Square is a vibrant bar and restaurant offering a diverse menu of American favorites, including burgers, salads, and pizzas. The casual atmosphere and outdoor seating make it a great spot for gatherings.',
    shortDescription:
      'Vibrant bar and restaurant with American favorites and outdoor seating.',
    primaryType: ['burger', 'pizza'],
    dishes: [
      {
        name: 'Tavern Burger',
        price: 13,
        description:
          'A juicy burger with house sauce, lettuce, tomato, and cheese.',
        photoUrl: '/tavern-burger.jpg'
      },
      {
        name: 'Margherita Pizza',
        price: 16,
        description:
          'A classic Margherita pizza with fresh mozzarella, basil, and tomatoes.',
        photoUrl: '/tavern-pizza.jpg'
      }
    ]
  }
]
