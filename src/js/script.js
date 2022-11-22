import { Product } from "../classes/Product.js";

// local storage keys
const SHOPPING_CART_KEY = "shopping-cart-storage-key";
const WISHLIST_KEY = "wishlist-storage-key";

const { createApp } = Vue;

createApp({
  data() {
    return {
      productList: [
        new Product(
          "001",
          "Chairs",
          "../images/chair-1-sm.jpg",
          "Mabibi Chair - Dark",
          "",
          1495,
          "./src/images/chair-1-sm.jpg",
          false
        ),
        new Product(
          "002",
          "Tables",
          "../images/table-1-sm.jpg",
          "Hairpin Dining Table",
          "",
          4695,
          "./src/images/table-1-sm.jpg",
          false
        ),
        new Product(
          "003",
          "Couches",
          "../images/brown-couch.jpg",
          "Mdumbi Leather Couch",
          "",
          21995,
          "./src/images/brown-couch.jpg",
          false
        ),
        new Product(
          "004",
          "Chairs",
          "../images/chair-table-sm.jpg",
          "Mabibi Chair - Light",
          "",
          1495,
          "./src/images/chair-table-sm.jpg",
          false
        ),
        new Product(
          "005",
          "Chairs",
          "../images/chair-2-sm.jpg",
          "Ocean Dining Chair",
          "",
          1395,
          "./src/images/chair-2-sm.jpg",
          true
        ),
        new Product(
          "006",
          "Chairs",
          "../images/chair-5-sm.jpg",
          "Adam Dining Chair",
          "",
          1395,
          "./src/images/chair-5-sm.jpg",
          false
        ),
        new Product(
          "007",
          "Chairs",
          "../images/chair-6-sm.jpg",
          "Rattan Occasional Chair",
          "",
          2995,
          "./src/images/chair-6-sm.jpg",
          false
        ),
        new Product(
          "008",
          "Chairs",
          "../images/chair-3-sm.jpg",
          "Rib Dining Chair",
          "",
          1395,
          "./src/images/chair-3-sm.jpg",
          true
        ),
        new Product(
          "009",
          "Chairs",
          "../images/chair-desk-sm.jpg",
          "Emma Desk Chair",
          "",
          1895,
          "./src/images/chair-desk-sm.jpg",
          false
        ),
        new Product(
          "010",
          "Chairs",
          "../images/chair-4-sm.jpg",
          "Lubanzi Chair",
          "",
          1495,
          "./src/images/chair-4-sm.jpg",
          false
        ),
        new Product(
          "011",
          "Couches",
          "../images/couch-2-sm.jpg",
          "Harker Couch",
          "",
          18795,
          "./src/images/couch-2-sm.jpg",
          false
        ),
        new Product(
          "012",
          "Couches",
          "../images/couch-3-sm.jpg",
          "Forester Couch",
          "",
          14495,
          "./src/images/couch-3-sm.jpg",
          false
        ),
        new Product(
          "013",
          "Couches",
          "../images/couch-4-sm.jpg",
          "Coffee Leather Couch",
          "",
          14495,
          "./src/images/couch-4-sm.jpg",
          false
        ),
        new Product(
          "014",
          "Tables",
          "../images/table-3-sm.jpg",
          "Okavango Dining Table",
          "",
          3395,
          "./src/images/table-3-sm.jpg",
          false
        ),
        new Product(
          "015",
          "Tables",
          "../images/table-2-sm.jpg",
          "3-Piece Puzzle Side Tables",
          "",
          1895,
          "./src/images/table-2-sm.jpg",
          true
        ),
        new Product(
          "016",
          "Tables",
          "../images/table-5-sm.jpg",
          "Ngepi Side Table",
          "",
          1225,
          "./src/images/table-5-sm.jpg",
          false
        ),
        new Product(
          "017",
          "Tables",
          "../images/table-6-sm.jpg",
          "Hairpin Coffee Table",
          "",
          2225,
          "./src/images/table-6-sm.jpg",
          false
        ),
        new Product(
          "018",
          "Tables",
          "../images/table-4-sm.jpg",
          "Violet Bedside Table",
          "",
          895,
          "./src/images/table-4-sm.jpg",
          false
        ),
        new Product(
          "019",
          "Tables",
          "../images/table-7-sm.jpg",
          "Daisy Bedside Table",
          "",
          995,
          "./src/images/table-7-sm.jpg",
          false
        ),
        new Product(
          "020",
          "Cabinets",
          "../images/cabinet-1-sm.jpg",
          "Kubu Cabinet Dresser",
          "",
          3295,
          "./src/images/cabinet-1-sm.jpg",
          true
        ),
        new Product(
          "021",
          "Cabinets",
          "../images/cabinet-3-sm.jpg",
          "Rose Rattan Cabinet",
          "",
          1995,
          "./src/images/cabinet-3-sm.jpg",
          false
        ),
        new Product(
          "022",
          "Cabinets",
          "../images/cabinet-4-sm.jpg",
          "Mbotyi Drawer",
          "",
          2995,
          "./src/images/cabinet-4-sm.jpg",
          false
        ),
        new Product(
          "023",
          "Cabinets",
          "../images/cabinet-5-sm.jpg",
          "Magwa Cabinet Server",
          "",
          2795,
          "./src/images/cabinet-5-sm.jpg",
          false
        ),
        new Product(
          "024",
          "Shelves",
          "../images/shelve-1-sm.jpg",
          "Zithulele Shelve - Large",
          "",
          2885,
          "./src/images/shelve-1-sm.jpg",
          false
        ),
        new Product(
          "025",
          "Shelves",
          "../images/shelve-2-sm.jpg",
          "Zithulele Shelve - Small",
          "",
          1995,
          "./src/images/shelve-2-sm.jpg",
          false
        ),
        new Product(
          "026",
          "Vases",
          "../images/decor-1-sm.jpg",
          "Letaba Wooden Vase Set",
          "",
          895,
          "./src/images/decor-1-sm.jpg",
          false
        ),
        new Product(
          "027",
          "Vases",
          "../images/decor-2-sm.jpg",
          "Satara Wooden Vase Set",
          "",
          895,
          "./src/images/decor-2-sm.jpg",
          false
        ),
        new Product(
          "028",
          "Vases",
          "../images/decor-3-sm.jpg",
          "Sirheni Wooden Vase Set",
          "",
          595,
          "./src/images/decor-3-sm.jpg",
          false
        ),
      ],
      shoppingCartArray: [],
      wishlistArray: [],
      message: "hello",
    };
  },

  methods: {
    addToCart(id) {
      // if SHOPPING_CART_KEY is empty, create new array
      if (!localStorage.getItem(SHOPPING_CART_KEY)) {
        let shoppingCartArray = [];

        // find selected product in product list
        let shoppingCartProduct = this.productList.find(function (product) {
          return product.id == id;
        });

        // add selected product to array
        shoppingCartArray.push(shoppingCartProduct);

        // add array to local storage
        localStorage.setItem(
          SHOPPING_CART_KEY,
          JSON.stringify(shoppingCartArray)
        );
      } else {
        // if SHOPPING_CART_KEY exits, get array and add product to array
        let shoppingCartArray = JSON.parse(
          localStorage.getItem(SHOPPING_CART_KEY)
        );

        // find selected product in product list
        let shoppingCartProduct = this.productList.find(function (product) {
          return product.id == id;
        });

        // add selected product to array
        this.shoppingCartArray.push(shoppingCartProduct);

        // add array to local storage
        localStorage.setItem(
          SHOPPING_CART_KEY,
          JSON.stringify(this.shoppingCartArray)
        );
      }
    },

    removeFromCart(id) {
      // get array and add product to array
      this.shoppingCartArray = JSON.parse(
        localStorage.getItem(SHOPPING_CART_KEY)
      );

      // remove selected product from array
      this.shoppingCartArray = this.shoppingCartArray.filter(function (
        product
      ) {
        return product.id != id;
      });

      // add updated array to local storage
      localStorage.setItem(
        SHOPPING_CART_KEY,
        JSON.stringify(this.shoppingCartArray)
      );
    },

    addToWishList(id) {
      // if WISHLIST_KEY is empty, create new array
      if (!localStorage.getItem(WISHLIST_KEY)) {
        let wishlistArray = [];

        // find selected product in product list
        let wishlistProduct = this.productList.find(function (product) {
          return product.id == id;
        });

        // add selected product to array
        wishlistArray.push(wishlistProduct);

        // add array to local storage
        localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlistArray));
      } else {
        // if WISHLIST_KEY exits, get existing array
        let wishlistArray = JSON.parse(localStorage.getItem(WISHLIST_KEY));

        // find selected product in product list
        let wishlistProduct = this.productList.find(function (product) {
          return product.id == id;
        });

        // check if product already exits in array to prevent duplicate
        let productExists = wishlistArray.some(
          (obj) => obj.id === wishlistProduct.id
        );

        // if product does not exist, add selected product to array
        if (!productExists) {
          wishlistArray.push(wishlistProduct);

          // add array to local storage
          localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlistArray));
        }
      }
    },

    removeFromWishList(id) {
      // get existing array
      this.wishlistArray = JSON.parse(localStorage.getItem(WISHLIST_KEY));

      // remove selected product from array
      this.wishlistArray = this.wishlistArray.filter(function (product) {
        return product.id != id;
      });

      // add updated array to local storage
      localStorage.setItem(WISHLIST_KEY, JSON.stringify(this.wishlistArray));
    },
  },

  computed: {
    // filter products according to category
    chairsList() {
      return this.productList.filter((product) => {
        return product.category === "Chairs";
      });
    },
    couchesList() {
      return this.productList.filter((product) => {
        return product.category === "Couches";
      });
    },
    tablesList() {
      return this.productList.filter((product) => {
        return product.category === "Tables";
      });
    },
    cabinetsList() {
      return this.productList.filter((product) => {
        return product.category === "Cabinets";
      });
    },
    shelvesList() {
      return this.productList.filter((product) => {
        return product.category === "Shelves";
      });
    },
    vasesList() {
      return this.productList.filter((product) => {
        return product.category === "Vases";
      });
    },
    newArrivalsList() {
      return this.productList.filter((product) => {
        return product.newArrival;
      });
    },
    shoppingCartList() {
      // if SHOPPING_CART_KEY is empty, create new array
      if (!localStorage.getItem(SHOPPING_CART_KEY)) {
        let initArray = [];
        localStorage.setItem(SHOPPING_CART_KEY, JSON.stringify(initArray));
      }

      // if SHOPPING_CART_KEY exits, get existing array
      this.shoppingCartArray = JSON.parse(
        localStorage.getItem(SHOPPING_CART_KEY)
      );

      return this.shoppingCartArray;
    },

    shoppingCartTotal() {
      let shoppingCartTotal = 0;
      for (let i = 0; i < this.shoppingCartArray.length; i++) {
        shoppingCartTotal += this.shoppingCartArray[i].cost;
      }
      return shoppingCartTotal;
    },

    wishList() {
      // if WISHLIST_KEY is empty, create new array
      if (!localStorage.getItem(WISHLIST_KEY)) {
        let initArray = [];
        localStorage.setItem(WISHLIST_KEY, JSON.stringify(initArray));
      }

      // if WISHLIST_KEY exits, get existing array
      this.wishlistArray = JSON.parse(localStorage.getItem(WISHLIST_KEY));

      return this.wishlistArray;
    },
  },

  mounted() {
    // if WISHLIST_KEY is empty, create new array
    if (!localStorage.getItem(WISHLIST_KEY)) {
      let initArray = [];
      localStorage.setItem(WISHLIST_KEY, JSON.stringify(initArray));
    }

    // if WISHLIST_KEY exits, get existing array
    this.wishlistArray = JSON.parse(localStorage.getItem(WISHLIST_KEY));
  },
}).mount("#app");
