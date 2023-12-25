const products = [
  {
    "id": 1,
    "name": "Lira Earrings Gold Small",
    "typeProduct": "earrings",
    "typeClass": "add-earrings",
    "category": "Sold Out",
    "categoryClass": "add-sold",
    "price": 20,
    "priceDiscount": 0,
    "amount": 1,
    "composition": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet fugit ab pariatur eum hic nulla, nemo vero impedit! Sit illum impedit cupiditate sequi aliquam odit voluptatum exercitationem! Ipsam, voluptatum corrupti?",
    "imageUrl": "./assets/img/Home_img/Body/Img 01.png",
    "productVariant": "Gold / Small"
  },
  {
    "id": 2,
    "name": "Hal Earrings Silver Large",
    "typeProduct": "earrings",
    "typeClass": "add-earrings",
    "category": "Sold Out",
    "categoryClass": "add-sold",
    "price": 25,
    "priceDiscount": 0,
    "amount": 1,
    "composition": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet fugit ab pariatur eum hic nulla, nemo vero impedit! Sit illum impedit cupiditate sequi aliquam odit voluptatum exercitationem! Ipsam, voluptatum corrupti?",
    "imageUrl": "./assets/img/Home_img/Body/Img 02.png",
    "productVariant": "Silver / Large"
  },
  {
    "id": 3,
    "name": "Kaede Hair Pin Set of 3 Rose Gold Medium",
    "typeProduct": "earrings",
    "typeClass": "add-earrings",
    "category": "Sold Out",
    "categoryClass": "add-sold",
    "price": 30,
    "priceDiscount": 21,
    "amount": 1,
    "composition": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet fugit ab pariatur eum hic nulla, nemo vero impedit! Sit illum impedit cupiditate sequi aliquam odit voluptatum exercitationem! Ipsam, voluptatum corrupti?",
    "imageUrl": "./assets/img/Home_img/Body/Img 03.png",
    "productVariant": "Rose Gold / Medium"
  },
  {
    "id": 4,
    "name": "Hair Pin Set of 3 Platinum Small",
    "typeProduct": "earrings",
    "typeClass": "add-earrings",
    "category": "Sold Out",
    "categoryClass": "add-sold",
    "price": 30,
    "priceDiscount": 0,
    "amount": 1,
    "composition": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet fugit ab pariatur eum hic nulla, nemo vero impedit! Sit illum impedit cupiditate sequi aliquam odit voluptatum exercitationem! Ipsam, voluptatum corrupti?",
    "imageUrl": "./assets/img/Home_img/Body/Img 04.png",
    "productVariant": "Platinum / Small"
  },
  {
    "id": 5,
    "name": "Lira Earrings Bronze Large",
    "typeProduct": "earrings",
    "typeClass": "add-earrings",
    "category": "Sold Out",
    "categoryClass": "add-sold",
    "price": 19,
    "priceDiscount": 0,
    "amount": 1,
    "composition": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet fugit ab pariatur eum hic nulla, nemo vero impedit! Sit illum impedit cupiditate sequi aliquam odit voluptatum exercitationem! Ipsam, voluptatum corrupti?",
    "imageUrl": "./assets/img/Home_img/Body/Img 05.png",
    "productVariant": "Bronze / Large"
  },
  {
    "id": 6,
    "name": "Yuki Hair Pin Set of 3 Gold Medium",
    "typeProduct": "earrings",
    "typeClass": "add-earrings",
    "category": "Sold Out",
    "categoryClass": "add-sold",
    "price": 29,
    "priceDiscount": 0,
    "amount": 1,
    "composition": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet fugit ab pariatur eum hic nulla, nemo vero impedit! Sit illum impedit cupiditate sequi aliquam odit voluptatum exercitationem! Ipsam, voluptatum corrupti?",
    "imageUrl": "./assets/img/Home_img/Body/Img 06.png",
    "productVariant": "Gold / Medium"
  },
  {
    "id": 7,
    "name": "Lira Earrings Silver Large",
    "typeProduct": "earrings",
    "typeClass": "add-earrings",
    "category": "Sold Out",
    "categoryClass": "add-sold",
    "price": 20,
    "priceDiscount": 0,
    "amount": 1,
    "composition": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet fugit ab pariatur eum hic nulla, nemo vero impedit! Sit illum impedit cupiditate sequi aliquam odit voluptatum exercitationem! Ipsam, voluptatum corrupti?",
    "imageUrl": "./assets/img/Home_img/Body/Img 01.png",
    "productVariant": "Silver / Large"
  },
  {
    "id": 8,
    "name": "Hal Earrings Platinum Small",
    "typeProduct": "earrings",
    "typeClass": "add-earrings",
    "category": "Sold Out",
    "categoryClass": "add-sold",
    "price": 25,
    "priceDiscount": 0,
    "amount": 1,
    "composition": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet fugit ab pariatur eum hic nulla, nemo vero impedit! Sit illum impedit cupiditate sequi aliquam odit voluptatum exercitationem! Ipsam, voluptatum corrupti?",
    "imageUrl": "./assets/img/Home_img/Body/Img 02.png",
    "productVariant": "Platinum / Small"
  },
  {
    "id": 9,
    "name": "Kaede Hair Pin Set of 3 Bronze Large",
    "typeProduct": "earrings",
    "typeClass": "add-earrings",
    "category": "Sold Out",
    "categoryClass": "add-sold",
    "price": 30,
    "priceDiscount": 21,
    "amount": 1,
    "composition": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet fugit ab pariatur eum hic nulla, nemo vero impedit! Sit illum impedit cupiditate sequi aliquam odit voluptatum exercitationem! Ipsam, voluptatum corrupti?",
    "imageUrl": "./assets/img/Home_img/Body/Img 03.png",
    "productVariant": "Bronze / Large"
  },
  {
    "id": 10,
    "name": "Hair Pin Set of 3 Gold Medium",
    "typeProduct": "earrings",
    "typeClass": "add-earrings",
    "category": "Sold Out",
    "categoryClass": "add-sold",
    "price": 30,
    "priceDiscount": 0,
    "amount": 1,
    "composition": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet fugit ab pariatur eum hic nulla, nemo vero impedit! Sit illum impedit cupiditate sequi aliquam odit voluptatum exercitationem! Ipsam, voluptatum corrupti?",
    "imageUrl": "./assets/img/Home_img/Body/Img 04.png",
    "productVariant": "Gold / Medium"
  },
  {
    "id": 11,
    "name": "Lira Earrings Platinum Small",
    "typeProduct": "earrings",
    "typeClass": "add-earrings",
    "category": "Sold Out",
    "categoryClass": "add-sold",
    "price": 19,
    "priceDiscount": 0,
    "amount": 1,
    "composition": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet fugit ab pariatur eum hic nulla, nemo vero impedit! Sit illum impedit cupiditate sequi aliquam odit voluptatum exercitationem! Ipsam, voluptatum corrupti?",
    "imageUrl": "./assets/img/Home_img/Body/Img 05.png",
    "productVariant": "Platinum / Small"
  },
  {
    "id": 12,
    "name": "Yuki Hair Pin Set of 3 Silver Large",
    "typeProduct": "earrings",
    "typeClass": "add-earrings",
    "category": "Sold Out",
    "categoryClass": "add-sold",
    "price": 29,
    "priceDiscount": 0,
    "amount": 1,
    "composition": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet fugit ab pariatur eum hic nulla, nemo vero impedit! Sit illum impedit cupiditate sequi aliquam odit voluptatum exercitationem! Ipsam, voluptatum corrupti?",
    "imageUrl": "./assets/img/Home_img/Body/Img 06.png",
    "productVariant": "Silver / Large"
  },
  {
    "id": 13,
    "name": "Yuki Hair Pin Set of 3 Gold Medium",
    "typeProduct": "earrings",
    "typeClass": "add-earrings",
    "category": "Sold Out",
    "categoryClass": "add-sold",
    "price": 29,
    "priceDiscount": 0,
    "amount": 1,
    "composition": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet fugit ab pariatur eum hic nulla, nemo vero impedit! Sit illum impedit cupiditate sequi aliquam odit voluptatum exercitationem! Ipsam, voluptatum corrupti?",
    "imageUrl": "./assets/img/Home_img/Body/Img 06.png",
    "productVariant": "Gold / Medium"
  },
  {
    "id": 14,
    "name": "Yuki Hair Pin Set of 3 Platinum Small",
    "typeProduct": "earrings",
    "typeClass": "add-earrings",
    "category": "Sold Out",
    "categoryClass": "add-sold",
    "price": 29,
    "priceDiscount": 0,
    "amount": 1,
    "composition": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet fugit ab pariatur eum hic nulla, nemo vero impedit! Sit illum impedit cupiditate sequi aliquam odit voluptatum exercitationem! Ipsam, voluptatum corrupti?",
    "imageUrl": "./assets/img/Home_img/Body/Img 06.png",
    "productVariant": "Platinum / Small"
  },
  {
    "id": 15,
    "name": "Kaede Hair Pin Set of 3 Rose Gold Medium",
    "typeProduct": "earrings",
    "typeClass": "add-earrings",
    "category": "Sold Out",
    "categoryClass": "add-sold",
    "price": 30,
    "priceDiscount": 21,
    "amount": 1,
    "composition": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet fugit ab pariatur eum hic nulla, nemo vero impedit! Sit illum impedit cupiditate sequi aliquam odit voluptatum exercitationem! Ipsam, voluptatum corrupti?",
    "imageUrl": "./assets/img/Home_img/Body/Img 03.png",
    "productVariant": "Rose Gold / Medium"
  },
  {
    "id": 16,
    "name": "Hair Pin Set of 3 Platinum Small",
    "typeProduct": "earrings",
    "typeClass": "add-earrings",
    "category": "Sold Out",
    "categoryClass": "add-sold",
    "price": 30,
    "priceDiscount": 0,
    "amount": 1,
    "composition": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet fugit ab pariatur eum hic nulla, nemo vero impedit! Sit illum impedit cupiditate sequi aliquam odit voluptatum exercitationem! Ipsam, voluptatum corrupti?",
    "imageUrl": "./assets/img/Home_img/Body/Img 04.png",
    "productVariant": "Platinum / Small"
  },
  {
    "id": 17,
    "name": "Lira Earrings Bronze Large",
    "typeProduct": "earrings",
    "typeClass": "add-earrings",
    "category": "Sold Out",
    "categoryClass": "add-sold",
    "price": 19,
    "priceDiscount": 0,
    "amount": 1,
    "composition": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet fugit ab pariatur eum hic nulla, nemo vero impedit! Sit illum impedit cupiditate sequi aliquam odit voluptatum exercitationem! Ipsam, voluptatum corrupti?",
    "imageUrl": "./assets/img/Home_img/Body/Img 05.png",
    "productVariant": "Bronze / Large"
  },
  {
    "id": 18,
    "name": "Yuki Hair Pin Set of 3 Gold Medium",
    "typeProduct": "earrings",
    "typeClass": "add-earrings",
    "category": "Sold Out",
    "categoryClass": "add-sold",
    "price": 29,
    "priceDiscount": 0,
    "amount": 1,
    "composition": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet fugit ab pariatur eum hic nulla, nemo vero impedit! Sit illum impedit cupiditate sequi aliquam odit voluptatum exercitationem! Ipsam, voluptatum corrupti?",
    "imageUrl": "./assets/img/Home_img/Body/Img 06.png",
    "productVariant": "Gold / Medium"
  }
]