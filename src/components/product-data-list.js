// import {v4 as uuidv4} from 'uuid';

const productList = [
  {
    id: crypto.randomUUID(),
    category: "breakfast",
    title: "Egg",
    description:
                `Rich in protein and a wealth of important vitamins and minerals, such as selenium and riboflavin, eggs are a true powerhouse of nutrition.
                Thanks to their high protein content, eggs may reduce appetite when eaten with breakfast to give weight loss a serious boost.`,
    image: "./images/Egg.jpg",
  },
  {
    id: crypto.randomUUID(),
    category: "lunch",
    title: "Whole-Grain Bread",
    description:
                `One of the best upgrades you can make to a lunch sandwich is to swap white bread for whole grains.
                Whole-grain bread contains more fiber and protein than white bread which "is key to avoiding that mid-afternoon crash," says the Moodoo sisters.`,
    image: "./images/Whole-Grain Bread.jpg",
  },
  {
    id: crypto.randomUUID(),
    category: "breakfast",
    title: "Wheat Germ",
    description:
                `Wheat germ is a component of the wheat kernel that contains a concentrated amount of vitamins and minerals, including manganese, thiamine and selenium.
                It's also high in fiber, boasting nearly 4 grams of fiber in each 1-ounce (28-gram) serving.
                Studies show that increasing your fiber intake from cereal grains may benefit weight loss.`,
    image: "./images/Wheat-Germ.jpg",
  },
  {
    id: crypto.randomUUID(),
    category: "lunch",
    title: "Loaded Vegetable Sandwich",
    description:
                `The beauty of this lunch selection is you can pack it full of just about any vegetable you desire. For an even tastier alternative, consider grilling vegetables at the beginning of the week with balsamic dressing so you can whip these little sandwiches up quickly any day of the week!`,
    image: "./images/Loaded Vegetable Sandwich.jpg",
  },
  {
    id: crypto.randomUUID(),
    category: "dinner",
    title: "Easy Butter Chicken",
    description:
                `This simplified version of the Indian classic combines chicken, tomato sauce, and a slew of aromatic spices and herbs — all in one pot, for the simplest cleanup. `,
    image: "./images/Easy Butter Chicken.jpg",
  },
  {
    id: crypto.randomUUID(),
    category: "lunch",
    title: "Rice and Beans",
    description:
                `Nothing is more delicious than Mexican food. Unfortunately the fried flour or corn tortillas can add unnecessary calories to your lunch. So what's a salsa lover to do? Remove the fried tortilla bowl and layer the ingredients just like you would on a tostada. If you want to cheat a little, sprinkle crushed tortilla strips over the top.`,
    image: "./images/rice and beans.jpg",
  },
  {
    id: crypto.randomUUID(),
    category: "breakfast",
    title: "Yogurt",
    description:
                `Creamy, delicious and satisfying, yogurt makes an excellent addition to a weight loss diet.
                In particular, Greek yogurt delivers a hearty chunk of protein in every serving, making it an ideal weight loss breakfast food.`,
    image: "./images/Yogurt.jpg",
  },
  {
    id: crypto.randomUUID(),
    category: "breakfast",
    title: "Smoothies",
    description:
                `Not only are smoothies a quick and easy way to obtain a concentrated dose of nutrients, they also double as a convenient breakfast item that can accelerate weight loss.
                Since you can customize your ingredients, you can tailor your drink to fit your personal preferences.`,
    image: "./images/Smoothies.jpg",
  },
  {
    id: crypto.randomUUID(),
    category: "dinner",
    title: "Cheese Burger",
    description:
                `A cheeseburger is a hamburger topped with cheese. Traditionally, the slice of cheese is placed on top of the meat patty. The cheese is usually added to the cooking hamburger patty shortly before serving, which allows the cheese to melt. Cheeseburgers can include variations in structure, ingredients and composition.`,
    image: "./images/Cheese Burger.jpg",
  },
  {
    id: crypto.randomUUID(),
    category: "breakfast",
    title: "Grapefruits",
    description:
                `Grapefruits are a popular component of many diets and weight loss programs — and for good reason.
                Besides being low in calories, grapefruits have a high water and fiber content — both of which can be beneficial for weight loss.
                One study in 91 obese adults showed that eating half a grapefruit before meals resulted in significant weight loss, compared to a control group.`,
    image: "./images/Grapefruits.jpg",
  },
  {
    id: crypto.randomUUID(),
    category: "dinner",
    title: "Pizza",
    description:
                `Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature, traditionally in a wood-fired oven. A small pizza is sometimes called a pizzetta`,
    image: "./images/Pizza.jpg",
  },

]

export default productList
