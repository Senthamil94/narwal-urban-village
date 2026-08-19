/* ============================================================
   NARWAL URBAN VILLAGE — site engine
   ============================================================ */
(function(){
'use strict';

var U = 'images/';
var RM = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- MENU DATA (102 dishes, 17 sections) ---------- */
var CATS = [
 'APPETIZERS','SOUPS & SALADS','SNACKS','TANDOORI SPECIALS','CHICKEN DISHES',
 'LAMB DISHES','GOAT SPECIAL','SEAFOOD CURRIES','VEGETARIAN SPECIALTIES','BOWLS',
 'RICE & BIRYANI','NAAN & INDIAN BREADS','NORTH SPECIAL','SIDES','DESSERTS',
 'BEVERAGES','REFRESHERS'
];

var CAT_NOTE = {
 'APPETIZERS':'To begin','SOUPS & SALADS':'Light starts','SNACKS':'To share',
 'TANDOORI SPECIALS':'From the clay oven','CHICKEN DISHES':'Nine curries',
 'LAMB DISHES':'Slow cooked','GOAT SPECIAL':'On the bone','SEAFOOD CURRIES':'From the coast',
 'VEGETARIAN SPECIALTIES':'Sixteen dishes','BOWLS':'One-plate meals',
 'RICE & BIRYANI':'Saffron basmati','NAAN & INDIAN BREADS':'Straight off the wall',
 'NORTH SPECIAL':'Stuffed parathas','SIDES':'Alongside','DESSERTS':'To finish',
 'BEVERAGES':'To drink','REFRESHERS':'House coolers'
};

var M = [
/* APPETIZERS */
['PAPADUM','APPETIZERS',3.00,'Crispy sun-dried lentil wafers, light and irresistible','tava-kebab-barbeque-pottery-pan_114579-2183.avif',['GF','V','VEG']],
['VEGETABLES PAPADUM','APPETIZERS',4.00,'Crispy lentil wafers loaded with cucumber, onions, green chillies and chaat masala','top-view-sliced-shaurma-tasty-meat-salad-sandwich-grey-surface-burger-sandwich-salad-bread-pita-meat_140725-102090.avif',['VEG']],
['SAMOSA (2 PCS)','APPETIZERS',7.50,'Golden pastry pockets filled with spiced potatoes and peas','WhatsApp-Image-2026-05-30-at-9.12.48-AM.jpeg',['VEG']],
['VEGETABLE PAKORA','APPETIZERS',6.99,'Crispy mixed vegetable fritters in seasoned chickpea batter','unnamed-38-e1781045428810.webp',['GF','V','VEG']],
['PANEER PAKORA','APPETIZERS',8.99,'Cubes of fresh Indian cottage cheese in aromatic chickpea batter','unnamed-37-e1781045383754.webp',['GF','VEG']],
['CHICKEN 65','APPETIZERS',11.99,'Classic South Indian crispy chicken with aromatic spices and yogurt','unnamed-39-e1781045478994.webp',['GF']],
['TANDOORI WINGS','APPETIZERS',14.99,'Chicken wings marinated in yogurt and tandoori spices, clay-oven roasted','delicious-glazed-chicken-wings-with-assorted-dipping-sauces_84443-72363.avif',['GF']],
['PANI PURI','APPETIZERS',10.00,'Crunchy wheat puffs topped with spiced potato stuffing and sweet-spicy pani shots','street-food-still-life_23-2151535157.avif',['VEG']],
['PANI PURI CHAAT','APPETIZERS',10.00,'Crunchy wheat puffs with spiced potatoes, creamy yogurt, tangy chutneys and crunchy sev','unnamed-40-e1781045545662.webp',['VEG']],
/* SOUPS & SALADS */
['DAAL SOUP','SOUPS & SALADS',5.99,'Warm lentil soup simmered with mild aromatic spices','indian-dhal-spicy-curry-bowl-spices-herbs-rustic-black-wooden-table_2829-18712.avif',['V','VEG']],
['MULLIGATAWNY SOUP','SOUPS & SALADS',7.99,'Classic chicken soup in a rich Indian-spiced broth','mulligatawny-soup-indian-food-photography_960396-391.jpg',[]],
['GREEN SALAD','SOUPS & SALADS',5.00,'Tomato, cucumber and onions','unnamed-49.webp',['V','VEG','GF']],
/* SNACKS */
['MASALA PEANUTS','SNACKS',9.50,'Fried peanuts loaded with chopped onions, cucumber, green chillies, avocado and lemon juice','unnamed-42.webp',['N','V','VEG','GF']],
['LOADED NACHOS','SNACKS',9.50,'Chips loaded with chopped onions, cucumber, green chillies and mozzarella','loaded-nachos-with-melted-cheese-jalapeos-sour-cream-salsa-rustic-wooden-table_1029370-11854.jpg',['VEG']],
/* TANDOORI SPECIALS */
['TANDOORI CHICKEN','TANDOORI SPECIALS',17.99,'Chicken leg and breast marinated in yogurt and classic tandoori spices, roasted in the clay oven','unnamed-25.webp',['GF']],
['CHICKEN TIKKA KEBAB','TANDOORI SPECIALS',17.99,'Juicy chicken cubes skewered and roasted in the tandoor','unnamed-27.webp',['GF']],
['CHICKEN ACHARI','TANDOORI SPECIALS',17.99,'Chicken in a bold pickling-spice marinade, roasted to perfection','curry-with-chicken-onions-indian-food-asian-cuisine_2829-4415-2.avif',['GF']],
['SEEKH KEBAB CHICKEN','TANDOORI SPECIALS',17.99,'Spiced minced chicken pressed onto skewers and grilled in the tandoor','delicious-restauranr-appetizer-beer-hard-alcohol-roasted-sausage-set-with-tomato-green-sauce-onion-slices-table-is-covered-with-embroidered-tablecloth_7502-5860.avif',[]],
['PANEER TIKKA','TANDOORI SPECIALS',17.99,'Paneer cubes in a yogurt and spice marinade, charred in the clay oven','unnamed-24.webp',['VEG','GF']],
['SEEKH KEBAB LAMB','TANDOORI SPECIALS',19.99,'Spiced minced lamb pressed onto skewers and grilled in the tandoor','appetizing-kofta-kebab-meatballs-with-sauce-tortillas-tacos-black-table_2829-7881.avif',[]],
['PRAWN TANDOORI','TANDOORI SPECIALS',19.99,'Prawns cooked darbari style','unnamed-26.webp',['GF']],
['FISH TANDOORI','TANDOORI SPECIALS',19.99,'Salmon cooked in the clay oven','tandoori-pomfret-fish-cooked-clay-oven-garnished-with-lemon-mint-cabbage-carrot-salad-selective-focus_466689-30027.jpg',['GF']],
/* CHICKEN DISHES */
['CHICKEN CURRY','CHICKEN DISHES',17.99,'Tender chicken in a classic, fragrant home-style curry','unnamed-52.webp',['GF']],
['CHICKEN SAAG','CHICKEN DISHES',17.99,'Chicken in a rich, deeply spiced spinach sauce','palak-chicken-chicken-saag_762785-271472.jpg',['GF']],
['CHICKEN TIKKA MASALA','CHICKEN DISHES',17.99,'Tikka-grilled chicken in a creamy aromatic tomato sauce','unnamed-51.webp',['GF']],
['KASHMIRI CHICKEN','CHICKEN DISHES',17.99,'Chicken in a creamy spinach tikka sauce with Kashmiri notes','sizzling-southern-savor-irresistible-chicken-best-chicken-picture_1020697-27287.jpg',[]],
['COCONUT CHICKEN','CHICKEN DISHES',17.99,'Chicken in a light, aromatic coconut milk gravy','chicken-green-curry-bowl_1150-23909.avif',['GF']],
['DAAL CHICKEN','CHICKEN DISHES',17.99,'Chicken with lentils in a hearty, deeply spiced thick sauce','indian-food-kadai-paneer_55610-2187.avif',['GF']],
['CHICKEN CHILLI','CHICKEN DISHES',17.99,'Bold chicken with fresh peppers in a fiery chilli sauce','spicy-korean-fried-chicken-with-sesame-seeds-green-onions_84443-85044.avif',[]],
['KADAI CHICKEN','CHICKEN DISHES',17.99,'Chicken with peppers and onion in rustic kadai masala','kadai-chicken-photo-with-fresh-mint-cilantro_1036998-359836.avif',['GF']],
['CHICKEN KORMA','CHICKEN DISHES',17.99,'Tender chicken in a mild, fragrant cashew cream sauce','unnamed-50-e1781046231551.webp',['N','GF']],
/* LAMB DISHES */
['LAMB SAAG','LAMB DISHES',18.50,'Slow-cooked lamb in a rich spinach sauce','mutton-curry-with-freshly-chopped-mint-leaves_1179130-725966.jpg',['GF']],
['LAMB CURRY','LAMB DISHES',18.50,'Tender lamb cubes in a bold street-style curry with whole spices','unnamed-55.webp',['GF']],
['KADAI GOSHT','LAMB DISHES',18.50,'Lamb with peppers and vegetables in a rustic kadai sauce','rendang-simmering-pot-with-tender-beef-aromati_947794-151430.jpg',['GF']],
['DAAL GOSHT','LAMB DISHES',18.50,'Lamb with lentils, cilantro and whole spices','chonar-daal-dal-chana-chicken-gosht-with-onion-pepper-salad-served-dish-isolated-wooden-table-top-view-indian-bangladesh-food_689047-2165.jpg',['GF']],
['COCONUT LAMB','LAMB DISHES',18.50,'Lamb in a creamy aromatic coconut sauce','bone-grill-red-cuisine-ribs_1203-5850.avif',['GF']],
['LAMB VINDALOO','LAMB DISHES',18.50,'Fiery Goan-style lamb with potatoes','delicious-goulash-stew-table_23-2149371730.avif',['GF']],
['LAMB TIKKA MASALA','LAMB DISHES',18.50,'Lamb in our signature creamy tikka sauce','unnamed-54.webp',['GF']],
['LAMB KORMA','LAMB DISHES',18.50,'Melt-in-mouth lamb in a luxurious cashew cream sauce','unnamed-53.webp',['N','GF']],
/* GOAT SPECIAL */
['GOAT CURRY','GOAT SPECIAL',18.50,'Goat cooked with our house blend of spices','mutton-curry-with-hint-dried-mango-powder_1179130-726128.jpg',['GF']],
['GOAT VINDALOO','GOAT SPECIAL',18.50,'Goat cooked with potatoes in a special vindaloo sauce','traditional-rogan-josh-wonders-ar-c_839793-197270.jpg',['GF']],
['GOAT KARAHI','GOAT SPECIAL',18.50,'Goat cooked with stir-fried tomatoes and bell peppers in a special sauce','babi-guling-with-side-garam-masala_1114710-224207.jpg',['GF']],
['GOAT TIKKA MASALA','GOAT SPECIAL',18.50,'Goat cooked in our tikka masala sauce','mutton-curry-with-freshly-chopped-marjoram_1179130-725819.jpg',['GF']],
/* SEAFOOD CURRIES */
['PRAWN MASALA','SEAFOOD CURRIES',19.99,'Prawns cooked in a rich tikka masala sauce','closeup-spicy-grilled-shrimp-with-cilantro-black-bowl_1353244-6296.jpg',['GF']],
['PRAWN VINDALOO','SEAFOOD CURRIES',19.99,'Prawns cooked with tomatoes in our special vindaloo sauce','schezwan-prawns-indo-chinese-curry-dish-with-spicy-sauce_875825-169368.jpg',['GF']],
['FISH CURRY','SEAFOOD CURRIES',19.99,'Salmon cooked in a special house sauce','savory-fish-curry-with-black-pepper-yummy-fish-curry-food-image-photography_1020697-612322.jpg',['GF']],
['FISH MASALA','SEAFOOD CURRIES',19.99,'Salmon cooked in tikka masala sauce','top-view-delicious-fish-meal-tray_23-2148734692.avif',['GF']],
/* VEGETARIAN SPECIALTIES */
['SAAG ALOO','VEGETARIAN SPECIALTIES',16.95,'Spinach and potatoes in a rich, velvety spiced gravy','spiced-spinach-potato-saag-creamy-rich-indian-dish_167857-55231.jpg',['VEG','GF']],
['BAINGAN BHARTA','VEGETARIAN SPECIALTIES',16.95,'Fire-roasted eggplant mashed with herbs and spices','unnamed-29-e1781044900936.webp',['VEG','V','GF']],
['DAAL MAKHANI','VEGETARIAN SPECIALTIES',16.95,'Slow-cooked lentils in a rich, creamy buttery sauce','unnamed-33-e1781045214192.webp',['VEG','GF']],
['SAAG PANEER','VEGETARIAN SPECIALTIES',16.95,'Paneer in perfectly spiced creamed spinach','unnamed-32-e1781045161502.webp',['VEG','GF']],
['MATAR PANEER','VEGETARIAN SPECIALTIES',16.95,'Peas and paneer in a warm fragrant tomato gravy','unnamed-34-e1781045255151.webp',['VEG','GF']],
['NAVARATNA KORMA','VEGETARIAN SPECIALTIES',16.95,'Seasonal vegetables in a rich cashew cream sauce','unnamed-28.webp',['VEG','N','GF']],
['PANEER KORMA','VEGETARIAN SPECIALTIES',16.95,'Soft paneer in a silky cashew cream sauce','healthy-homemade-meal-beef-curry-with-naan-generated-by-ai_188544-41071.avif',['VEG','N','GF']],
['MALAI KOFTA','VEGETARIAN SPECIALTIES',16.95,'Vegetable dumplings in a fragrant creamy sauce','unnamed-31-e1781045084969.webp',['VEG','N']],
['VEG TIKKA MASALA','VEGETARIAN SPECIALTIES',16.95,'Seasonal vegetables in a creamy tikka sauce','pakistani-biryani-hd-8k-wallpaper-stock-photographic-image_890746-105359.jpg',['VEG','GF']],
['PANEER JALFREZI','VEGETARIAN SPECIALTIES',16.95,'Paneer in a royal velvety cream sauce with pepper','paneer-jalfrezi-cottage-cheese-cooked-with-peppers-onion_466689-82020.jpg',['VEG','GF']],
['KADAI PANEER','VEGETARIAN SPECIALTIES',16.95,'Paneer with bell peppers and onions in rustic masala','delicious-meal-table_23-2150857698.avif',['VEG','GF']],
['SHAHI PANEER','VEGETARIAN SPECIALTIES',16.95,'Paneer in a royal velvety cream sauce','flavorful-shahi-paneer-with-soft-paneer-cubes_167857-55618.jpg',['VEG','GF']],
['PANEER TIKKA MASALA','VEGETARIAN SPECIALTIES',16.95,'Tandoor-roasted paneer in a creamy tomato sauce','unnamed-30-e1781045043170.webp',['VEG','GF']],
['ALOO MATAR','VEGETARIAN SPECIALTIES',16.95,'Potatoes and peas cooked in a rich velvety spiced gravy','aloo-mutter-matar-aalu-dry-sabzi-indian-potato-green-peas-fried-together-with-spices-garnished-with-coriander-leaves-served-with-roti-chapati_466689-3980.avif',['VEG','V','GF']],
['YELLOW DAAL','VEGETARIAN SPECIALTIES',16.95,'Yellow daal cooked in a rich creamy spiced gravy','unnamed-59.webp',['VEG','GF']],
['OKHRA','VEGETARIAN SPECIALTIES',16.95,'Okra cooked in a rich creamy spiced gravy with vegetables','plecing-kacang-panjang-khas-bali-long-beans-with-chili-sauce-indonesian-culinary-food_570543-4371.jpg',['VEG','GF']],
/* BOWLS */
['VEGETARIAN BOWL','BOWLS',21.99,'Rice, vegetables and vegetable curry in one bowl','bowl.webp',['VEG','GF']],
['CHICKEN BOWL','BOWLS',22.99,'Rice, vegetables and chicken curry','bowl.webp',['GF']],
['LAMB BOWL','BOWLS',23.99,'Rice, vegetables and lamb curry','unnamed-56.webp',['GF']],
/* RICE & BIRYANI */
['JEERA RICE','RICE & BIRYANI',3.99,'Basmati rice sautéed with cumin seeds and turmeric','cumin-rice-jeera-rice-is-popular-indian-main-course-item-made-using-basmati-rice-with-basic-spices_466689-2480.avif',['VEG','V','GF']],
['VEG BIRYANI','RICE & BIRYANI',16.99,'Aromatic basmati layered with vegetables','unnamed-46.webp',['VEG','GF']],
['CHICKEN BIRYANI','RICE & BIRYANI',17.99,'Chicken in saffron basmati with nuts and spices','unnamed-47.webp',['N','GF']],
['LAMB BIRYANI','RICE & BIRYANI',19.99,'Succulent lamb with aromatic basmati and spices','unnamed-48.webp',['N','GF']],
/* NAAN & INDIAN BREADS */
['TANDOORI ROTI','NAAN & INDIAN BREADS',3.50,'Traditional whole wheat flatbread from the clay oven','WhatsApp-Image-2026-05-30-at-9.12.22-AM-3.jpeg',['VEG','V']],
['BUTTER NAAN','NAAN & INDIAN BREADS',3.99,'Classic white flour naan brushed with butter','unnamed-44.webp',['VEG']],
['CHILLI NAAN','NAAN & INDIAN BREADS',3.99,'Naan with fresh green chillies','unnamed-43.webp',['VEG']],
['GARLIC NAAN','NAAN & INDIAN BREADS',4.99,'Topped with fresh garlic and cilantro','WhatsApp-Image-2026-05-30-at-9.12.23-AM.jpeg',['VEG']],
['SPINACH NAAN','NAAN & INDIAN BREADS',4.99,'Naan infused with spinach and Indian spices','traditional-meat-kutab-with-sumakh-rasberry-plain-youghurt-top-view_141793-4214.avif',['VEG']],
['PANEER NAAN','NAAN & INDIAN BREADS',4.99,'Stuffed with seasoned cottage cheese','top-view-delicious-qutabs-rolled-green-filled-dough-slices-grey-space_140725-75802.avif',['VEG']],
['ONION NAAN','NAAN & INDIAN BREADS',4.99,'Stuffed with caramelised onions','naan-with-caramelized-onion-photo_1036998-287962.jpg',['VEG']],
['SESAME NAAN','NAAN & INDIAN BREADS',4.99,'Naan topped with sesame seeds','cake-with-sesame-tea-pot-top-view_141793-1765.avif',['VEG']],
['CHEESE NAAN','NAAN & INDIAN BREADS',5.99,'Naan stuffed with melted cheese','there-is-pizza-wooden-board-table_1034638-69463.jpg',['VEG']],
['CHICKEN NAAN','NAAN & INDIAN BREADS',5.99,'Stuffed with minced spiced chicken','close-up-naan-roti-tandoori-chicken-indian-food-generative-ai_698447-1950.avif',[]],
['KEEMA NAAN LAMB/CHICKEN','NAAN & INDIAN BREADS',6.99,'Stuffed with spiced minced lamb or chicken','side-view-pide-with-ground-meat-tomato-onion-hot-green-pepper-greens-slice-lemon-tray_141793-5056.avif',[]],
['ASSORTED BREAD','NAAN & INDIAN BREADS',12.50,'Garlic, onion and butter naan trio','assorted-freshly-baked-bread-selection_98396-102306.jpg',['VEG']],
/* NORTH SPECIAL */
['TANDOORI ALOO PARATHA','NORTH SPECIAL',8.99,'Flatbread stuffed with spiced mashed potatoes, served with plain yogurt and butter','unnamed-45-1-e1781045949573.webp',['VEG']],
['ALOO ONION PARATHA','NORTH SPECIAL',8.99,'Flatbread stuffed with spiced onions and potatoes, with plain yogurt and butter','unnamed-45.webp',['VEG']],
['ONION PARATHA','NORTH SPECIAL',8.99,'Flatbread stuffed with spiced mashed onions, with plain yogurt and butter','unnamed-45-2-e1781045983574.webp',['VEG']],
['PANEER PARATHA','NORTH SPECIAL',8.99,'Flatbread stuffed with spiced cottage cheese, served with plain yogurt and butter','unnamed-45-e1781045905249.webp',['VEG']],
/* SIDES */
['MIXED PICKLE','SIDES',2.99,'Traditional spiced pickle mix','unnamed-58.webp',['VEG','V','GF']],
['MANGO CHUTNEY','SIDES',2.99,'Sweet and tangy mango preserve','spicy-mango-chutney_971989-25736.jpg',['VEG','V','GF']],
['PLAIN YOGURT','SIDES',2.99,'Chilled, thick and plain','unnamed-57.webp',['VEG','GF']],
['RAITA','SIDES',3.99,'Cooling yogurt with cucumber and herbs','vibrant-raita-trio-displayed-modern-wooden-tray_1179130-207213.jpg',['VEG','GF']],
/* DESSERTS */
['GULAB JAMUN','DESSERTS',4.95,'Soft milk dumplings soaked in rose-scented syrup','delicious-indian-dessert-view_23-2149312365-1.avif',['VEG']],
['KHEER','DESSERTS',4.95,'Creamy rice pudding with cardamom and rosewater','indian-kheer-phirni-dessert-with-nuts-saffron_466689-49983.jpg',['VEG','N','GF']],
['FRUIT CUSTARD','DESSERTS',4.95,'Creamy custard with fresh seasonal fruits, served chilled','dessert-with-strawberry-blueberry-cherry-cutting-board-vase-grey-wooden-surface-high-angle-view_176474-6626.avif',['VEG']],
['GULAB JAMUN & ICE CREAM','DESSERTS',7.50,'Gulab jamun with vanilla ice cream — the best of both','delicious-dessert-gulab-jamun-dumplings-served-with-vanilla-ice-cream-sweet-treat-bowl-with_1299716-8767.jpg',['VEG']],
/* BEVERAGES */
['BOTTLED WATER','BEVERAGES',2.99,'Still, chilled','mineral-water_1137-312.avif',['V','VEG','GF']],
['CAN SODA','BEVERAGES',2.99,'Coke, Sprite or ginger ale','ice-cola-glasses-iced-tea-glass-cups-soft-drink-glasses_768188-631.avif',['V','VEG','GF']],
['MASALA CHAI','BEVERAGES',3.25,'Black tea simmered with cardamom, ginger and warm spices','steaming-cup-coffee-with-cinnamon-sticks-star-anise-coffee-beans-dark-background_9975-124681.avif',['VEG','GF']],
['SALT LASSI','BEVERAGES',3.50,'Savoury yogurt drink with cumin and mint','ayran-drink-with-mint-cucumber-glass_123827-21510.avif',['VEG','GF']],
['MANGO LASSI','BEVERAGES',4.00,'Yogurt blended with fresh ripe mango','unnamed-35.webp',['VEG','GF']],
/* REFRESHERS */
['SPICY PINK GUAVA','REFRESHERS',7.00,'Guava, lime, sugar and in-house spices','unnamed-36.webp',['V','VEG','GF']],
['LEMONADE','REFRESHERS',7.00,'Lime, sugar and in-house spices','untitled-design-delicious-lemonade-is-refreshing-beverage-with-perfect-balance-sweet-tar_198067-471939.jpg',['V','VEG','GF']],
['MINT MOJITO','REFRESHERS',7.00,'Mint, sugar, lime and in-house spices','ice-cubes-mint-leaves-mojito-cocktail-against-black-background-generative-ai_1219132-33236.jpg',['V','VEG','GF']]
];

var DISHES = M.map(function(d,i){
  return {id:'d'+i, name:d[0], cat:d[1], price:d[2], desc:d[3], img:U+d[4], tags:d[5]};
});

var TAG_LABEL = {V:'Vegan', GF:'Gluten free', N:'Nuts', VEG:'Veg'};
var TAG_CLASS = {V:'v', GF:'gf', N:'n', VEG:'v'};

var GALLERY = [
 [U+'Classic-Tandoori-Chicken-Banner-1024x683-1.webp','Tandoori chicken, straight off the skewer','tandoor'],
 [U+'rahi-banner.jpeg','The dining room','room'],
 [U+'20250402072331-tandoori-20chicken.webp','Charred, not burnt','tandoor'],
 [U+'curry-with-chicken-onions-indian-food-asian-cuisine_2829-4415.avif','Chicken curry with onions','curry'],
 [U+'malai-kofta-naan.png','Malai kofta with fresh naan','curry'],
 [U+'fish-biryani-fish-rice-popular-indian-non-vegetarian-recipe-made-fish-marinated-with-indian-spices-fresh-herbs-cooked-with-basmati-rice-selective-focus_466689-59991.jpg','Fish biryani, saffron basmati','rice'],
 [U+'delicious-pakistani-dish-high-angle_23-2148825127.avif','Lamb saag','curry'],
 [U+'entrecote-kebab-served-with-arugula-glass-wine_141793-607.avif','Seekh kebab and arugula','tandoor'],
 [U+'traditional-indian-food-aloo-paratha-potato-stuffed-flat-bread-served-with-tomato-ketchup-curd-colourful-wooden-background-selective-focus_466689-68329.jpg','Aloo paratha with curd','bread'],
 [U+'top-view-chicken-garlic-bottle-oil-lemon-sauce-chicken-with-herbs-lavash-fork-knife_140725-73680.avif','Garlic chicken, herbs, lavash','tandoor'],
 [U+'How-to-Make-Chicken-Biryani-Video.jpg','Chicken biryani, lid off','rice'],
 [U+'delicious-pakistani-dish-high-angle_23-2148825127-1.avif','Slow-cooked lamb in spinach','curry'],
 [U+'20250402072331-tandoori-20chicken-1.webp','Yogurt marinade, overnight','tandoor'],
 [U+'WhatsApp_Image_2026-05-30_at_8.33.13_PM.jpeg','In the kitchen','room'],
 [U+'WhatsApp-Image-2026-05-30-at-9.12.23-AM.jpeg','Garlic naan off the wall','bread'],
 [U+'WhatsApp-Image-2026-05-30-at-9.12.48-AM.jpeg','Samosas, folded by hand','bread'],
 [U+'unnamed-32-e1781045161502.webp','Saag paneer','curry']
];
var GAL_FILTERS=[['all','Everything'],['tandoor','Tandoor'],['curry','Curries'],['rice','Rice'],['bread','Breads'],['room','The room']];

var COMBOS = [
 {tag:'Feeds two',name:'The Tandoor Board',desc:'Tandoori chicken, chicken tikka kebab, paneer tikka, assorted bread trio and two mango lassis.',price:65.00,was:78.45,items:['TANDOORI CHICKEN','CHICKEN TIKKA KEBAB','PANEER TIKKA','ASSORTED BREAD']},
 {tag:'Feeds four',name:'The Family Table',desc:'Chicken tikka masala, lamb saag, saag paneer, chicken biryani, garlic naan and four gulab jamun.',price:98.00,was:118.36,items:['CHICKEN TIKKA MASALA','LAMB SAAG','SAAG PANEER','CHICKEN BIRYANI','GARLIC NAAN']},
 {tag:'Feeds two',name:'The Vegetarian Spread',desc:'Vegetable pakora, malai kofta, daal makhani, jeera rice, butter naan and two masala chais.',price:52.00,was:62.82,items:['VEGETABLE PAKORA','MALAI KOFTA','DAAL MAKHANI','JEERA RICE','BUTTER NAAN']}
];

var QUOTES = [
 ['The tandoori chicken has that proper smoke you only get from a real clay oven. Half the places in the Bay just roast it and call it tandoori.','Priya M. · Berkeley'],
 ['Sixteen vegetarian dishes and not one of them feels like an afterthought. The malai kofta is the reason I keep coming back.','Daniel R. · Oakland'],
 ['Ordered the family table for six. Everything arrived hot, the naan was still steaming, and the leftovers were better the next day.','Aisha K. · El Cerrito'],
 ['Second-generation family cooking, and you can taste it. This is not a restaurant chasing trends.','Marcus T. · Albany']
];

var HOURS = [
 ['Sunday','10:30 am — 10 pm',[10.5,22]],
 ['Monday','10:30 am — 10 pm',[10.5,22]],
 ['Tuesday','10:30 am — 10 pm',[10.5,22]],
 ['Wednesday','10:30 am — 10 pm',[10.5,22]],
 ['Thursday','10:30 am — 10 pm',[10.5,22]],
 ['Friday','10:30 am — 10:30 pm',[10.5,22.5]],
 ['Saturday','10:30 am — 10:30 pm',[10.5,22.5]]
];

/* ---------- tiny helpers ---------- */
function $(s,c){return (c||document).querySelector(s)}
function $$(s,c){return Array.prototype.slice.call((c||document).querySelectorAll(s))}
function money(n){return '$'+n.toFixed(2)}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
function byName(n){for(var i=0;i<DISHES.length;i++){if(DISHES[i].name===n)return DISHES[i]}return null}

/* ============================================================
   1 · PRELOADER
   ============================================================ */
(function(){
  var pl=$('#preloader'), bar=$('.pl-bar i'), pct=$('.pl-pct b'), p=0;
  var t=setInterval(function(){
    p += Math.random()*13+4;
    if(p>=100){p=100;clearInterval(t);setTimeout(function(){pl.classList.add('done');document.body.classList.remove('is-locked')},420)}
    bar.style.width=p+'%'; pct.textContent=Math.floor(p);
  },95);
  document.body.classList.add('is-locked');
  window.addEventListener('load',function(){ setTimeout(function(){p=Math.max(p,88)},200) });
})();

/* ============================================================
   2 · CURSOR + SPARKS
   ============================================================ */
if(!RM && window.matchMedia('(hover:hover)').matches){
  var dot=$('.cur-dot'), ring=$('.cur-ring'), mx=0,my=0,rx=0,ry=0;
  document.addEventListener('mousemove',function(e){
    mx=e.clientX;my=e.clientY;
    dot.style.transform='translate3d('+mx+'px,'+my+'px,0)';
  });
  (function loop(){
    rx+=(mx-rx)*.14; ry+=(my-ry)*.14;
    ring.style.transform='translate3d('+rx+'px,'+ry+'px,0)';
    requestAnimationFrame(loop);
  })();
  document.addEventListener('mouseover',function(e){
    if(e.target.closest('a,button,.tile,.dish,.gal figure,input,select,textarea')) ring.classList.add('grow');
  });
  document.addEventListener('mouseout',function(e){
    if(e.target.closest('a,button,.tile,.dish,.gal figure,input,select,textarea')) ring.classList.remove('grow');
  });

  /* ambient sparks rising from the bottom */
  setInterval(function(){
    if(document.hidden) return;
    var s=document.createElement('div'); s.className='spark';
    var x=Math.random()*window.innerWidth;
    s.style.left=x+'px'; s.style.bottom='-6px';
    s.style.opacity=(Math.random()*.5+.3);
    var d=Math.random()*4000+4500;
    document.body.appendChild(s);
    s.animate([
      {transform:'translate(0,0) scale(1)',opacity:.8},
      {transform:'translate('+((Math.random()-.5)*140)+'px,'+(-window.innerHeight*0.85)+'px) scale(.2)',opacity:0}
    ],{duration:d,easing:'cubic-bezier(.4,0,.6,1)'}).onfinish=function(){s.remove()};
  },900);
}

/* ============================================================
   3 · SMOKE RAIL + SCROLL STATE
   ============================================================ */
(function(){
  var nav=$('#nav'), fill=$('.rail-fill'), emb=$('.rail-ember'), lab=$('.rail-label'), top=$('#toTop');
  function onScroll(){
    var y=window.scrollY;
    var h=document.documentElement.scrollHeight-window.innerHeight;
    var p=h>0?Math.min(y/h,1):0;
    nav.classList.toggle('stuck',y>60);
    top.classList.toggle('show',y>640);
    var trackTop=window.innerHeight*0.14, trackH=window.innerHeight*0.72;
    fill.style.height=(trackH*p)+'px';
    emb.style.top=(trackTop+trackH*p)+'px';
    lab.style.top=(trackTop+trackH*p+18)+'px';
    lab.textContent=Math.round(p*100)+'%';
    /* parallax */
    $$('[data-parallax]').forEach(function(el){
      var sp=parseFloat(el.dataset.parallax);
      el.style.transform='translate3d(0,'+(y*sp)+'px,0)';
    });
  }
  window.addEventListener('scroll',onScroll,{passive:true});
  window.addEventListener('resize',onScroll);
  onScroll();
  top.addEventListener('click',function(){window.scrollTo({top:0,behavior:RM?'auto':'smooth'})});
})();

/* ============================================================
   4 · REVEAL ON SCROLL
   ============================================================ */
var HAS_IO = typeof IntersectionObserver !== 'undefined';
var revealIO = HAS_IO ? new IntersectionObserver(function(es){
  es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); revealIO.unobserve(e.target); } });
},{threshold:.12,rootMargin:'0px 0px -8% 0px'}) : null;

/* If the browser has no IntersectionObserver (or motion is reduced), show
   everything immediately rather than leaving the page blank. */
function observeReveals(root){
  var els = $$('[data-rev]', root||document);
  if(!revealIO || RM){ els.forEach(function(el){ el.classList.add('in') }); return; }
  els.forEach(function(el){ if(!el.classList.contains('in')) revealIO.observe(el) });
}

/* ============================================================
   5 · TOASTS
   ============================================================ */
function toast(msg){
  var t=document.createElement('div');
  t.className='toast';
  t.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m20 6-11 11-5-5"/></svg><span>'+esc(msg)+'</span>';
  $('#toasts').appendChild(t);
  setTimeout(function(){t.classList.add('out');setTimeout(function(){t.remove()},420)},2900);
}

/* ============================================================
   6 · CART
   ============================================================ */
var CART = {};
var TAX = 0.1025;

function cartCount(){var n=0;for(var k in CART)n+=CART[k];return n}
function cartSub(){var s=0;for(var k in CART){var d=DISHES.find(function(x){return x.id===k});if(d)s+=d.price*CART[k]}return s}

function renderCart(){
  var n=cartCount(), badge=$('#cartCount');
  if(badge){
    badge.textContent=n;
    badge.classList.toggle('show',n>0);
    if(n>0){badge.classList.remove('pop');void badge.offsetWidth;badge.classList.add('pop')}
  }

  var box=$('#cartItems'), foot=$('#cartFoot');
  if(!box||!foot) return;
  if(!n){
    box.innerHTML='<div class="cart-empty"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18M16 10a4 4 0 0 1-8 0"/></svg><p>Nothing here yet.<br>Add a dish from the menu and it will show up.</p></div>';
    foot.style.display='none'; return;
  }
  foot.style.display='block';
  box.innerHTML=Object.keys(CART).map(function(id){
    var d=DISHES.find(function(x){return x.id===id}); if(!d)return '';
    return '<div class="ci"><img src="'+d.img+'" alt="" loading="lazy"><div class="ci-b">'+
      '<h5>'+esc(d.name)+'</h5><span class="price">'+money(d.price*CART[id])+'</span>'+
      '<div class="qty"><button data-dec="'+id+'" aria-label="One fewer">−</button><span>'+CART[id]+'</span><button data-inc="'+id+'" aria-label="One more">+</button></div>'+
      '</div><button class="ci-rm" data-rm="'+id+'" aria-label="Remove">×</button></div>';
  }).join('');

  var s=cartSub();
  $('#cSub').textContent=money(s);
  $('#cTax').textContent=money(s*TAX);
  $('#cTot').textContent=money(s*(1+TAX));
}

function addToCart(id,silent){
  CART[id]=(CART[id]||0)+1;
  renderCart();
  var d=DISHES.find(function(x){return x.id===id});
  if(!silent && d) toast(d.name+' added to your order');
}

document.addEventListener('click',function(e){
  var a=e.target.closest('[data-add]');
  if(a){
    addToCart(a.dataset.add);
    a.classList.add('done'); a.querySelector('span').textContent='Added';
    setTimeout(function(){a.classList.remove('done');a.querySelector('span').textContent='Add'},1400);
    return;
  }
  var inc=e.target.closest('[data-inc]'); if(inc){CART[inc.dataset.inc]++;renderCart();return}
  var dec=e.target.closest('[data-dec]'); if(dec){var k=dec.dataset.dec;CART[k]--;if(CART[k]<1)delete CART[k];renderCart();return}
  var rm=e.target.closest('[data-rm]'); if(rm){delete CART[rm.dataset.rm];renderCart();return}
});

function openCart(){var c=$('#cart'),s=$('#scrim'); if(!c||!s) return; c.classList.add('open');s.classList.add('open');document.body.classList.add('is-locked')}
function closeCart(){var c=$('#cart'),s=$('#scrim'); if(!c||!s) return; c.classList.remove('open');s.classList.remove('open');document.body.classList.remove('is-locked')}
var cartBtn=$('#cartBtn'); if(cartBtn) cartBtn.addEventListener('click',openCart);
var cartClose=$('#cartClose'); if(cartClose) cartClose.addEventListener('click',closeCart);
var scrim=$('#scrim'); if(scrim) scrim.addEventListener('click',closeCart);

/* ============================================================
   7 · RENDER: dish card
   ============================================================ */
function dishCard(d,opts){
  opts=opts||{};
  var tags=d.tags.filter(function(t){return t!=='VEG'||d.tags.indexOf('V')<0})
    .map(function(t){return '<span class="tag '+TAG_CLASS[t]+'">'+TAG_LABEL[t]+'</span>'}).join('');
  var action=opts.hideAdd?'':
    '<button class="add" data-add="'+d.id+'"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg><span>Add</span></button>';
  return '<article class="dish" data-rev="s">'+
    '<div class="dish-img"><img src="'+d.img+'" alt="'+esc(d.name)+'" loading="lazy">'+
      (tags?'<div class="dish-tags">'+tags+'</div>':'')+'</div>'+
    '<div class="dish-body"><h4>'+esc(d.name)+'</h4><p>'+esc(d.desc)+'</p>'+
      '<div class="dish-foot"><span class="price">'+money(d.price)+'</span>'+action+'</div>'+
    '</div></article>';
}

/* ============================================================
   8 · HOME PAGE CONTENT
   ============================================================ */
(function(){
  /* marquee */
  var words=['Clay oven since 1972','Ground fresh daily','Paneer made in house','Saffron basmati','Berkeley, California','Sixteen vegetarian dishes','No powder bases'];
  $('#mqTrack').innerHTML=(words.concat(words)).map(function(w){return '<span>'+w+'</span>'}).join('');

  /* signature dishes — no Add; order via Combo menu */
  var sig=['TANDOORI CHICKEN','CHICKEN BIRYANI','LAMB SAAG','MALAI KOFTA'].map(byName).filter(Boolean);
  $('#signatureDishes').innerHTML=sig.map(function(d){return dishCard(d,{hideAdd:true})}).join('');

  /* dish count */
  $('#dishCount').textContent=DISHES.length;

  /* combos */
  $('#comboWrap').innerHTML=COMBOS.map(function(c){
    return '<div class="combo" data-rev><span class="combo-tag">'+esc(c.tag)+'</span>'+
      '<h3>'+esc(c.name)+'</h3><p>'+esc(c.desc)+'</p>'+
      '<div class="combo-price"><b>'+money(c.price)+'</b><s>'+money(c.was)+'</s></div></div>';
  }).join('');

  /* quotes */
  $('#quotes').innerHTML=QUOTES.map(function(q,i){
    var stars=new Array(5).join('0').split('').map(function(){return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2 3 6.5 7 .9-5 4.9 1.2 7L12 18l-6.2 3.3L7 14.3l-5-4.9 7-.9z"/></svg>'}).join('')+
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2 3 6.5 7 .9-5 4.9 1.2 7L12 18l-6.2 3.3L7 14.3l-5-4.9 7-.9z"/></svg>';
    return '<figure class="quote'+(i===0?' on':'')+'"><div class="stars">'+stars+'</div>'+
      '<blockquote>'+esc(q[0])+'</blockquote><cite>'+esc(q[1])+'</cite></figure>';
  }).join('');
  $('#qDots').innerHTML=QUOTES.map(function(_,i){return '<button data-q="'+i+'" class="'+(i===0?'on':'')+'" aria-label="Review '+(i+1)+'"></button>'}).join('');

  var qi=0, qTimer;
  function showQuote(i){
    qi=i;
    $$('#quotes .quote').forEach(function(el,n){el.classList.toggle('on',n===i)});
    $$('#qDots button').forEach(function(el,n){el.classList.toggle('on',n===i)});
  }
  function cycle(){ qTimer=setInterval(function(){showQuote((qi+1)%QUOTES.length)},6200) }
  $('#qDots').addEventListener('click',function(e){
    var b=e.target.closest('[data-q]'); if(!b)return;
    clearInterval(qTimer); showQuote(+b.dataset.q); cycle();
  });
  if(!RM) cycle();

  /* gallery teaser — 6 images */
  $('#galTeaser').innerHTML=GALLERY.slice(0,6).map(function(g,i){
    return '<figure data-gal="'+i+'"><img src="'+g[0]+'" alt="'+esc(g[1])+'" loading="lazy"><figcaption>'+esc(g[1])+'</figcaption></figure>';
  }).join('');
})();

/* ============================================================
   9 · MENU PAGE
   ============================================================ */
var activeDiets={}, activeCat='';

function renderMenu(){
  var q=($('#menuSearch').value||'').trim().toLowerCase();
  var diets=Object.keys(activeDiets).filter(function(k){return activeDiets[k]});
  var out='', shown=0;

  CATS.forEach(function(cat){
    var items=DISHES.filter(function(d){
      if(d.cat!==cat) return false;
      if(q && (d.name+' '+d.desc+' '+d.cat).toLowerCase().indexOf(q)<0) return false;
      for(var i=0;i<diets.length;i++){ if(d.tags.indexOf(diets[i])<0) return false }
      return true;
    });
    if(!items.length) return;
    shown+=items.length;
    out+='<section class="cat-block" id="cat-'+cat.replace(/[^a-z0-9]/gi,'')+'">'+
      '<div class="cat-head"><h2>'+esc(cat)+'</h2><i></i><em>'+esc(CAT_NOTE[cat]||'')+' · '+items.length+'</em></div>'+
      '<div class="dishes">'+items.map(dishCard).join('')+'</div></section>';
  });

  $('#menuMount').innerHTML=out;
  $('#noResults').style.display=shown?'none':'block';
  observeReveals($('#menuMount'));
  /* instant reveal for already-visible cards */
  requestAnimationFrame(function(){
    $$('#menuMount [data-rev]').forEach(function(el){
      var r=el.getBoundingClientRect();
      if(r.top<window.innerHeight) el.classList.add('in');
    });
  });
}

function buildCatRail(){
  $('#catRail').innerHTML='<button data-cat="" class="on">All ('+DISHES.length+')</button>'+
    CATS.map(function(c){
      var n=DISHES.filter(function(d){return d.cat===c}).length;
      return '<button data-cat="'+esc(c)+'">'+esc(c)+' ('+n+')</button>';
    }).join('');
}

function gotoCat(cat){
  activeCat=cat;
  $$('#catRail button').forEach(function(b){b.classList.toggle('on',b.dataset.cat===cat)});
  if(!cat){ window.scrollTo({top:0,behavior:RM?'auto':'smooth'}); return }
  var el=$('#cat-'+cat.replace(/[^a-z0-9]/gi,''));
  if(el) el.scrollIntoView({behavior:RM?'auto':'smooth',block:'start'});
}

$('#catRail').addEventListener('click',function(e){
  var b=e.target.closest('[data-cat]'); if(!b)return;
  gotoCat(b.dataset.cat);
});
$('#menuSearch').addEventListener('input',function(){renderMenu()});
$$('.chip[data-diet]').forEach(function(c){
  c.addEventListener('click',function(){
    var d=c.dataset.diet;
    activeDiets[d]=!activeDiets[d];
    c.classList.toggle('on',activeDiets[d]);
    renderMenu();
  });
});
$('#clearFilters').addEventListener('click',function(){
  activeDiets={}; $$('.chip[data-diet]').forEach(function(c){c.classList.remove('on')});
  $('#menuSearch').value=''; renderMenu();
});

/* scrollspy on the category rail */
var spyIO=HAS_IO?new IntersectionObserver(function(es){
  es.forEach(function(e){
    if(e.isIntersecting){
      var id=e.target.id.replace('cat-','');
      $$('#catRail button').forEach(function(b){
        b.classList.toggle('on', b.dataset.cat.replace(/[^a-z0-9]/gi,'')===id);
      });
    }
  });
},{rootMargin:'-180px 0px -70% 0px'}):null;
var spyTimer;
function refreshSpy(){
  if(!spyIO) return;
  clearTimeout(spyTimer);
  spyTimer=setTimeout(function(){ $$('.cat-block').forEach(function(b){spyIO.observe(b)}) },260);
}

/* ============================================================
   10 · GALLERY + LIGHTBOX
   ============================================================ */
var galSet=[];
function renderGallery(filter){
  galSet=GALLERY.map(function(g,i){return {g:g,i:i}}).filter(function(o){return !filter||filter==='all'||o.g[2]===filter});
  $('#galMount').innerHTML=galSet.map(function(o,n){
    return '<figure data-gal="'+o.i+'"><img src="'+o.g[0]+'" alt="'+esc(o.g[1])+'" loading="lazy"><figcaption>'+esc(o.g[1])+'</figcaption></figure>';
  }).join('');
}
$('#galFilters').innerHTML=GAL_FILTERS.map(function(f,i){
  return '<button class="chip'+(i===0?' on':'')+'" data-gf="'+f[0]+'">'+f[1]+'</button>';
}).join('');
$('#galFilters').addEventListener('click',function(e){
  var b=e.target.closest('[data-gf]'); if(!b)return;
  $$('#galFilters .chip').forEach(function(c){c.classList.remove('on')});
  b.classList.add('on'); renderGallery(b.dataset.gf);
});
renderGallery('all');

var lbIdx=0;
function openLB(i){
  lbIdx=i;
  $('#lbImg').src=GALLERY[i][0];
  $('#lbImg').alt=GALLERY[i][1];
  $('#lbCount').textContent=(i+1)+' / '+GALLERY.length+'  ·  '+GALLERY[i][1];
  $('#lb').classList.add('open');
  document.body.classList.add('is-locked');
}
function closeLB(){$('#lb').classList.remove('open');document.body.classList.remove('is-locked')}
function stepLB(d){openLB((lbIdx+d+GALLERY.length)%GALLERY.length)}
document.addEventListener('click',function(e){
  var f=e.target.closest('[data-gal]'); if(f) openLB(+f.dataset.gal);
});
$('#lbClose').addEventListener('click',closeLB);
$('#lbPrev').addEventListener('click',function(e){e.stopPropagation();stepLB(-1)});
$('#lbNext').addEventListener('click',function(e){e.stopPropagation();stepLB(1)});
$('#lb').addEventListener('click',function(e){if(e.target===this)closeLB()});
document.addEventListener('keydown',function(e){
  if($('#lb').classList.contains('open')){
    if(e.key==='Escape')closeLB();
    if(e.key==='ArrowLeft')stepLB(-1);
    if(e.key==='ArrowRight')stepLB(1);
  } else if(e.key==='Escape'){ closeCart(); closeMobile(); }
});

/* ============================================================
   11 · HOURS / OPEN NOW
   ============================================================ */
(function(){
  var now=new Date(), day=now.getDay(), hr=now.getHours()+now.getMinutes()/60;
  $('#hoursList').innerHTML=HOURS.map(function(h,i){
    return '<li class="'+(i===day?'today':'')+'"><b>'+h[0]+'</b><span>'+h[1]+'</span></li>';
  }).join('');
  var t=HOURS[day][2], open=!!t && hr>=t[0] && hr<t[1];
  var msg;
  if(open){
    var closes=HOURS[day][1].split(' — ')[1];
    msg='Open now · until '+closes;
  } else if(t && hr<t[0]){
    msg='Opens today at '+HOURS[day][1].split(' — ')[0];
  } else {
    var nx=(day+1)%7, guard=0;
    while(!HOURS[nx][2] && guard++<7) nx=(nx+1)%7;
    msg='Closed · back '+HOURS[nx][0]+' at '+HOURS[nx][1].split(' — ')[0];
  }
  var pill=$('#openPill');
  pill.classList.toggle('shut',!open);
  pill.querySelector('span').textContent=msg;
})();

/* ============================================================
   12 · FORMS
   ============================================================ */
$$('[data-form]').forEach(function(f){
  f.addEventListener('submit',function(e){
    e.preventDefault();
    var kind=f.dataset.form;
    var msg = kind==='reservation' ? 'Table requested — we will call to confirm'
            : kind==='contact'     ? 'Message sent — we usually reply within a day'
            : 'You are on the list for our specials';
    toast(msg);
    f.reset();
    $$('.field.sel',f).forEach(function(x){x.classList.add('sel')});
  });
});
/* keep floating labels up for selects/date */
$$('.field select, .field input[type=date]').forEach(function(el){ el.closest('.field').classList.add('sel') });

/* ============================================================
   13 · MOBILE NAV
   ============================================================ */
var burger=$('#burger'), mnav=$('#mnav');
function closeMobile(){
  mnav.classList.remove('open');
  burger.classList.remove('x');
  burger.setAttribute('aria-expanded','false');
  burger.setAttribute('aria-label','Open menu');
  mnav.setAttribute('aria-hidden','true');
  document.body.classList.remove('is-locked');
}
burger.addEventListener('click',function(){
  var o=mnav.classList.toggle('open');
  burger.classList.toggle('x',o);
  burger.setAttribute('aria-expanded',String(o));
  burger.setAttribute('aria-label',o?'Close menu':'Open menu');
  mnav.setAttribute('aria-hidden',o?'false':'true');
  document.body.classList.toggle('is-locked',o);
});

/* ============================================================
   14 · ROUTER
   ============================================================ */
function route(){
  var raw=(location.hash||'#/').slice(1);
  var qs=''; var qi=raw.indexOf('?');
  if(qi>-1){ qs=raw.slice(qi+1); raw=raw.slice(0,qi) }
  if(!raw||raw==='') raw='/';

  var pages=$$('.page'), found=false;
  pages.forEach(function(p){
    var on=p.dataset.page===raw;
    p.classList.toggle('live',on);
    if(on) found=true;
  });
  if(!found){ $('[data-page="/"]').classList.add('live'); raw='/' }

  $$('[data-route]').forEach(function(a){ a.classList.toggle('on', a.dataset.route===raw) });
  closeMobile();
  if($('#cart').classList.contains('open')) closeCart();

  if(raw==='/menu'){
    renderMenu();
    refreshSpy();
    var cat=decodeURIComponent((qs.match(/c=([^&]*)/)||[,''])[1]||'').replace(/\+/g,' ');
    if(cat){ setTimeout(function(){gotoCat(cat)},380) } else { window.scrollTo({top:0,behavior:'auto'}) }
  } else {
    window.scrollTo({top:0,behavior:'auto'});
  }
  observeReveals();
  requestAnimationFrame(function(){
    $$('.page.live [data-rev]').forEach(function(el){
      var r=el.getBoundingClientRect();
      if(r.top<window.innerHeight*0.96) el.classList.add('in');
    });
  });
}
window.addEventListener('hashchange',route);

/* ============================================================
   15 · BOOT
   ============================================================ */
buildCatRail();
renderCart();
$('#yr').textContent=new Date().getFullYear();
route();
observeReveals();

})();

