const fs = require('fs');
const path = require('path');

const rawCsv = `ID Produk,Nama Produk,Harga,Penjualan,Nama Toko,Komisi hingga,Komisi,Link Produk,Link Komisi Ekstra
48365682767,Kaos lengan pendek dan panjang The Stone Roses motif band unisex casual,"35,0RB",1RB+,KIDS-MONSTA,7%,Rp2.450,https://shopee.co.id/product/1172151192/48365682767,https://s.shopee.co.id/gQoA4YQHJ
24428119240,CREDIFOX Jaket Gunung Gorpcore Seri CLIMBER Bahan Taslan JN Premium,"210,6RB",10RB+,Credifox Official Store,"10,89%",Rp21.060,https://shopee.co.id/product/594609581/24428119240,https://s.shopee.co.id/1BN4kzWWGQ
5155587192,OVRDZ - Sweater Crewneck Rugby Sweatshirt Bordir Pria Wanita Switer Cowok,"103,4RB",10RB+,OVRDZ Official Store,9%,Rp9.306,https://shopee.co.id/product/166226115/5155587192,https://s.shopee.co.id/113eYgX9bP
26762619208,Swipe Up Kemeja Batik Pria Modern Slimfit Katun Lengan Panjang Motif Katsura Navy,"200,2RB",10RB+,Swipe Up Official Store,"10,6%",Rp20.020,https://shopee.co.id/product/886254508/26762619208,https://s.shopee.co.id/BUXZ9aKIG
41055212390,EDINAL kemeja Workshirt Zipper Black boxy DO NOT BE,"77,5RB",10RB+,EDINAL Official Store,9%,Rp6.979,https://shopee.co.id/product/1547334580/41055212390,https://s.shopee.co.id/1B7MqaxdF
26113440270,Fairgoods Tracksuit Jacket Line Dune Black,"179,0RB",1RB+,Fairgoods Official Shop,10%,Rp17.900,https://shopee.co.id/product/95304599/26113440270,https://s.shopee.co.id/W7NxlZ3cM
15814680062,HIGHTY Off White Cable-Knit Sweater,"291,6RB",2RB+,HIGHTY Menswear Official,8%,Rp23.324,https://shopee.co.id/product/58310983/15814680062,https://s.shopee.co.id/LnxlSZgxL
28809804438,Celana Jeans Pria Panjang Snow Black - Celana Jeans Korea Style Original Loose Straight - Celana Jeans Oversize,"59,9RB",10RB+,MISTER BENTO,10%,Rp5.990,https://shopee.co.id/product/164888464/28809804438,https://s.shopee.co.id/4qGN7jIYpE
41950999329,Lawna - Workshirt Boxy Double Zipper with Clark White - Black,"147,0RB",1RB+,Lawna Official Store,15%,Rp22.050,https://shopee.co.id/product/991884039/41950999329,https://s.shopee.co.id/4fwwvQJCAD
29300680948,"DRITTORONZIO Work Jaket  Boxy ""Duck"" unisex - Coklat","210,0RB",5RB+,DRITTORONZIO Official Store,10%,Rp21.000,https://shopee.co.id/product/191965945/29300680948,https://s.shopee.co.id/5AtDWLHI9K
53513470916,Middlehigh Sweater Rajut Knitwear Cardigan Unisex Tebal Grey Static Roots,"249,0RB",164,Middlehigh Official Store,10%,Rp24.900,https://shopee.co.id/product/99567566/53513470916,https://s.shopee.co.id/50ZnK2HvUJ
29638039795,BOARSHORT PARASUT/CELANA PENDEK PARASUT/CELANA PARASUT / CELANA PENDEK/ CELANA PANTAU PARASUT/ BOARDSHORT WATERPROOF/BOARDSHORT  PARASUT/CELANA PARASUT SKENA/ CELANA PENDEK KALCER / CELANA PENDEK PARASUT REFLEKTIF/CELANA SKENA/CELANA KALCER/ (ring d),"37,0RB",10RB+,Braviour society,15%,Rp5.550,https://shopee.co.id/product/1504225448/29638039795,https://s.shopee.co.id/4B0gKVL6BA
28220955713,Backheels - Workshirt Zipper Boxy - Deserve - Kemeja kerja Hitam Unisex,"125,1RB",1RB+,Backheel Official,15%,Rp18.770,https://shopee.co.id/product/163641445/28220955713,https://s.shopee.co.id/40hG8CLjW9
24129020888,"DRITTORONZIO Work Jaket Boxy - Jacket Crop ""LISCIO"" unisex - Abu","210,0RB",6RB+,DRITTORONZIO Official Store,10%,Rp21.000,https://shopee.co.id/product/191965945/24129020888,https://s.shopee.co.id/4VdWj7JpVG
22838274808,Baju Batik Pria Lengan Pendek / Baju Batik Pria / Kemeja Batik Pria,"40,5RB",10RB+,Batik Opex Collection,14%,Rp5.672,https://shopee.co.id/product/664363494/22838274808,https://s.shopee.co.id/4LK6WoKSqF
29139348713,Suyboy Celana Jeans pria Basic Loose Denim Baggy Pants Wide Leg Gombrong Jeans panjang pria,"166,0RB",10RB+,Suyboy Men's Clothing,9%,Rp14.940,https://shopee.co.id/product/1597131878/29139348713,https://s.shopee.co.id/3VkzXHNdX6
29990264994,EDINAL Workshirt Zipper Black boxys Parian warna katun driell,"87,3RB",10RB+,EDINAL Official Store,9%,Rp7.857,https://shopee.co.id/product/1547334580/29990264994,https://s.shopee.co.id/3LRZKyOGs5
11141799002,X Urband Absolute Jaket Baseball Varsity Full Embroider,"112,0RB",10RB+,X Urband Absolute Official Shop,10%,Rp11.200,https://shopee.co.id/product/224747419/11141799002,https://s.shopee.co.id/3qNpvtMMrC
43127893900,VALANGKIN RAYNER BLW  Sneakers Old Ace Blue Pria Wanita retro Original Lokal,"189,0RB",3RB+,Valangkin Official Store,9%,Rp17.010,https://shopee.co.id/product/1707676216/43127893900,https://s.shopee.co.id/3g4PjaN0CB
1522714051,SWEATER CREWNECK Kombinasi Switer Crewneck Termurah Kualitas Distro,"67,5RB",10RB+,Bringluck Stuff,8%,Rp5.400,https://shopee.co.id/product/80387244/1522714051,https://s.shopee.co.id/2qVIk3QAt2
55650935882,EDINAL workhiet enggineer kemeja kancing sternco,"94,5RB",1RB+,EDINAL Official Store,9%,Rp8.505,https://shopee.co.id/product/1547334580/55650935882,https://s.shopee.co.id/2gBsXkQoE1
22966636743,WESTGODS - Jacket Retro Vintage Bahan Parasut Pria Wanita size M L XL,"115,0RB",10RB+,Westgods Official Store,10%,Rp11.500,https://shopee.co.id/product/405811526/22966636743,https://s.shopee.co.id/3B898fOuD8
46400579072,SUYX Celana Cargo Pants pria Loose Reguler Celana untuk Santai & Outdoor Long Celana Panjang pria,"166,0RB",1RB+,Suyx Authorized Store Subang,14%,Rp23.240,https://shopee.co.id/product/1634837299/46400579072,https://s.shopee.co.id/30oiwMPXY7
56956502851,Vsl Sweater Oversize Pria Wanita Graphic Black Grey -  Streetwear Korea Style Urban  Fleece Unisex Crewneck,"65,6RB",10RB+,Visualclothing,11%,Rp7.213,https://shopee.co.id/product/285214252/56956502851,https://s.shopee.co.id/7VH8Id8PQ0
27393547648,Benidson Aerysm Kaos Oversized T-Shirt Polos,"79,9RB",10RB+,BENIDSON Official Shop,"12,1%",Rp9.588,https://shopee.co.id/product/256256057/27393547648,https://s.shopee.co.id/7Kxi6K92kz
28950443474,WESTGODS - Jaket Tracksuit Running Vintage Casual Olahraga Pria Wanita Bahan Parasut,"110,6RB",10RB+,Westgods Official Store,10%,Rp11.065,https://shopee.co.id/product/405811526/28950443474,https://s.shopee.co.id/7ptyhF78k6
50550553635,SUYX Celana Jeans Pria Panjang Korean Stlye Loose Pants Reguler Celana Gombrang Straight Jeans Pria,"166,0RB",4RB+,Suyx Authorized Store Subang,14%,Rp23.240,https://shopee.co.id/product/1634837299/50550553635,https://s.shopee.co.id/7faYUw7m55
40779739883,[ UNISEX ] Celana Baggy Jeans Kulot Tulang Biru Premium Highwaist Loose Lipat Bawah Vintage - Celana Jeans Panjang Wanita Terlaris!,"56,4RB",10RB+,ZeeRJeans Collection,13%,Rp7.335,https://shopee.co.id/product/1789826347/40779739883,https://s.shopee.co.id/6q1RVPAwlw
57910368043,EDINAL Workhiet kemeja tangan pendek polos581,"105,0RB",619,EDINAL Official Store,9%,Rp9.450,https://shopee.co.id/product/1547334580/57910368043,https://s.shopee.co.id/6fi1J6Ba6v
27801847947,Jacket Trecktop Hand Jaket Vintage Tracksuit Pria Wanita,"117,0RB",10RB+,Zey's Store,11%,Rp12.870,https://shopee.co.id/product/236200975/27801847947,https://s.shopee.co.id/7AeHu19g62
19083436149,Baju Gamis Dress Muslim Wanita Terbaru Busui Jumbo Size S - 3XL Shirin Zein Thalia,"128,7RB",10RB+,Shirin Zein Official Store,10%,Rp12.870,https://shopee.co.id/product/981147537/19083436149,https://s.shopee.co.id/70KrhiAJR1
24926295909,Sweater Rugby halfz zipper stripe terbaru sweater kerah CREWNECK Loseangels pria wanita,"50,0RB",10RB+,SUPPLAYER SWEATER,6%,Rp2.999,https://shopee.co.id/product/43313727/24926295909,https://s.shopee.co.id/6AlkiBDU7s
52208967728,Kemeja Casual Pria Wanita Lengan Pendek Motif SEMN Katun Outfit Santai,"54,4RB",3RB+,Anti Noda,10%,Rp5.440,https://shopee.co.id/product/564494110/52208967728,https://s.shopee.co.id/60SKVsE7Sr
26078098410,Sai - Crown Work Jackets Denim Boxy Trucker Jacket Denim,"148,0RB",2RB+,SAI Official Shop,10%,Rp14.800,https://shopee.co.id/product/230443129/26078098410,https://s.shopee.co.id/6VOb6nCDRy
29115404383,"SANDAL SLOP NY mlb || sandal slip-on pria&wania KUALITAS PREMIUM ,ENAK DIPAKEK NYAMAN DI KAKI,,!!!!","49,0RB",10RB+,SANDAL SLOP 1992,15%,Rp7.350,https://shopee.co.id/product/999208991/29115404383,https://s.shopee.co.id/6L5AuUCqmx
21704813154,House of Smith Sweater Hoodie Pria - Lpl Misty #50,"239,0RB",10RB+,House Of Smith Official Shop,7%,Rp16.730,https://shopee.co.id/product/85434470/21704813154,https://s.shopee.co.id/5VW3uxG1To
26974778993,Piliana Kemeja Pria Lengan Pendek Oversize Brown Kemeja Boxy,"148,8RB",10RB+,Piliana.,10%,Rp14.885,https://shopee.co.id/product/728784213/26974778993,https://s.shopee.co.id/5LCdieGeon
11451261596,X Urband Absolute Jaket Varsity fleece Embroidery,"149,3RB",7RB+,X Urband Absolute Official Shop,10%,Rp14.925,https://shopee.co.id/product/224747419/11451261596,https://s.shopee.co.id/5q8uJZEknu
25155891835,SWEATER SALUR NY BROOKLYN SWEATER RUGBY WANGKI PRIA WANITA,"56,7RB",10RB+,SHAFIA_ID,11%,Rp6.237,https://shopee.co.id/product/590082225/25155891835,https://s.shopee.co.id/5fpU7GFO8t
42013794434,JOHNJILL - Essential Half-Zip,"233,5RB",1RB+,JOHN & JILL Official Store,10%,Rp23.350,https://shopee.co.id/product/51941609/42013794434,https://s.shopee.co.id/AAHtTWyG0m
43607112861,YAZR Kaos Boxy Oversized Hihhoppunks BLURRED PORTRAIT T-Shirt PUTIH Unisex Cotton Combed 24s,"59,0RB",4RB+,YAZR Official Store,10%,Rp5.900,https://shopee.co.id/product/1541632021/43607112861,https://s.shopee.co.id/9zyTHDytLl
42057615572,Weister Work Jacket Boxy Navy - The Liquid Of Armor,"200,0RB",1RB+,WEISTER OFFICIAL STORE,9%,Rp18.000,https://shopee.co.id/product/1084126360/42057615572,https://s.shopee.co.id/AUujs8wzKs
57959944366,[KHUSUS PROMO] Minyak Goreng Rose Brand 1L,"1,1RB",0,LOPIW SHOP,5%,Rp55,https://shopee.co.id/product/1375299761/57959944366,https://s.shopee.co.id/AKbJfpxcfr
26226227964,Sandal Pantai Wanita Sandal EVA Tebal Anti-Selip Dalam Ruangan 5CM Sandal Pantai Wanita,"48,0RB",10RB+,BDD Official Store,10%,Rp4.800,https://shopee.co.id/product/1291194713/26226227964,https://s.shopee.co.id/9V2CgJ0nMi
29637782631,Kemeja Boxy Lengan Pendek Oversized Bahan Oxford,"36,0RB",10RB+,Streetstore27,10%,Rp3.600,https://shopee.co.id/product/821615677/29637782631,https://s.shopee.co.id/9KimU01Qhh
12675925841,ANTARESTAR Official - Jaket Gorpcore Manusela Waterproof Jaket Pria Wanita Hiking Gunung Windbreaker Outdoor,"385,0RB",10RB+,Antarestar Official Shop,9%,Rp34.650,https://shopee.co.id/product/561861137/12675925841,https://s.shopee.co.id/9pf34uzWgo
41830356970,(Buy 1 Get 1) Scarlite Perfume Unisex 30ml,"13,0RB",10RB+,Eterna.Id,20%,Rp2.600,https://shopee.co.id/product/1457574474/41830356970,https://s.shopee.co.id/9fLcsc0A1n
53809619454,CELANA JEANS BAGGY PUTIH UNISEX RETRO BAHAN PREMIUM LOOSE BASIC DENIM TEBAL ANTI MELAR,"60,0RB",1RB+,HyLuxe.Id,12%,Rp7.200,https://shopee.co.id/product/73609957/53809619454,https://s.shopee.co.id/8pmVt53Kie
18266163580,Qwertylife Workshirt Engineers Black,"125,1RB",10RB+,Qwertylife Official Shop,5%,Rp6.257,https://shopee.co.id/product/225305734/18266163580,https://s.shopee.co.id/8fT5gm3y3d
22270078342,Russ Jaket Zipper Parasut Trois Black,"258,9RB",3RB+,Russ & Co Official Shop,7%,Rp18.123,https://shopee.co.id/product/106751288/22270078342,https://s.shopee.co.id/9APMHh242k
21787596053,HPND - Sweater Hoodie Boxy Fit Original Basic Stars Fleece Limited Edition,"117,9RB",1RB+,Happend official Store,10%,Rp11.790,https://shopee.co.id/product/1040761319/21787596053,https://s.shopee.co.id/905w5O2hNj
42552620526,OSANAWEAR Celana Pria Formal Loose Pants Cream,"119,9RB",10RB+,OSANAWEAR Official Store,10%,Rp11.993,https://shopee.co.id/product/1339763885/42552620526,https://s.shopee.co.id/8AWp5r5s4a
42522774928,kaos polo shirt pria polos zipper kerah Lengan pendek Baju Katun,"38,0RB",10RB+,bonay_collection,5%,Rp1.900,https://shopee.co.id/product/804959190/42522774928,https://s.shopee.co.id/80DOtY6VPZ
28094594331,Kasual Refine Double Zipper Jaket Mocca,"498,9RB",327,KASUAL Official Shop,11%,Rp54.879,https://shopee.co.id/product/473991225/28094594331,https://s.shopee.co.id/8V9fUT4bOg
23541522096,Russ Sweater Hoodie Pria Oldskull Black ( Up To Big Size ),"229,9RB",10RB+,Russ & Co Official Shop,7%,Rp16.093,https://shopee.co.id/product/106751288/23541522096,https://s.shopee.co.id/8KqFIA5Ejf
25781897457,Timebomb Cardigan Knitwear | Knit-Cardigan | CREWNECK MONTANA,"199,0RB",10RB+,timebomb_official,5%,Rp9.950,https://shopee.co.id/product/239228690/25781897457,https://s.shopee.co.id/20wBkWTLaS
28462403752,Kemeja Boxy Skena | Y2K | Kalcer | Streetwear,"128,0RB",2RB+,winkles.stuff,13%,Rp16.640,https://shopee.co.id/product/101317205/28462403752,https://s.shopee.co.id/2BFbwpSiFV
8580914011,X Urband Absolute Jacket Leather Sintetis Baseball,"220,8RB",2RB+,X Urband Absolute Official Shop,10%,Rp22.080,https://shopee.co.id/product/224747419/8580914011,https://s.shopee.co.id/2LZ298S4uY
25737688855,TORQUEFIT Jersey Streetwear Number 22 / Jersey Hockey / Jersey Rugby / Vintage / Jersey Olahraga Terbaru,"67,5RB",10RB+,TORQUEFIT Official Store,11%,Rp7.425,https://shopee.co.id/product/1383592071/25737688855,https://s.shopee.co.id/2VsSLRRRZb
22418362175,Alterous Sweater Crewneck Jaket Rugby Bordir Pria Wanita High Quality,"105,0RB",10RB+,ALTEROUS CONCEPT,8%,Rp8.400,https://shopee.co.id/product/936810290/22418362175,https://s.shopee.co.id/1LgUxIVswO
28916846228,Hemdev Tshirt Longsleeve Attachment White Tees Katun,"104,0RB",10RB+,Hemdev Official Shop,10%,Rp10.400,https://shopee.co.id/product/455017838/28916846228,https://s.shopee.co.id/1Vzv9bVFbR
19170108115,( COD ) jaket winter kembung tebal musim dingin/ hiking/ motoran,"100,6RB",10RB+,ahmadqllshop02,9%,Rp9.058,https://shopee.co.id/product/232756446/19170108115,https://s.shopee.co.id/1gJLLuUcGU
47358633351,"JERSEY "" ENGLAND OASIS"" | UNISEX | JERSEYRETRO | JERSEYCASUAL","174,1RB",498,terascassual,15%,Rp26.115,https://shopee.co.id/product/1364096172/47358633351,https://s.shopee.co.id/1qclYDTyvX
27585175493,Celana Jeans Panjang Pria Baggy Jeans Pria Jumbo Celana Jeans Gombrong Skena,"54,9RB",10RB+,Hi.Jeans,12%,Rp6.590,https://shopee.co.id/product/1527288204/27585175493,https://s.shopee.co.id/gQoA4YQIK
42954706801,Rambidend - Polo Shirt Logo Brand Pria Wanita Baju Kerah Santai Rambidend Japan Original,"58,2RB",6RB+,Rambidend Official Store,13%,Rp7.566,https://shopee.co.id/product/991613810/42954706801,https://s.shopee.co.id/qkEMNXmxN
45006265189,Celana Sweatpants Loose Baggy Pria Casual Korean Style,"47,5RB",10RB+,qwyf5vd13x,15%,Rp7.125,https://shopee.co.id/product/1751996489/45006265189,https://s.shopee.co.id/113eYgX9cQ
28081235149,[ UNISEX ] Celana Jeans Whisker Gombrong Highwaist Baggy Pants Hangover Wid Leg Oversize Korean Style Terlaris!!,"51,2RB",10RB+,HugoJeans.Id,13%,Rp6.656,https://shopee.co.id/product/1507917404/28081235149,https://s.shopee.co.id/1BN4kzWWHT
27069197841,Sepatu Sneakers Import Perempuan Laki-laki Sepatu Running Perempuan Laki-laki Sepatu Sekolah Perempuan Laki-laki Ukuran 38-44,"85,0RB",2RB+,SNEAKERSKI,20%,Rp17.000,https://shopee.co.id/product/1099311071/27069197841,https://s.shopee.co.id/1B7MqaxeG
21774169882,Kiko Ina Kemeja Linen Natural Revere – Embroidery Khas & Adem Dipakai Seharian,"99,8RB",2RB+,KIKOINA Official Shop,12%,Rp11.970,https://shopee.co.id/product/84538047/21774169882,https://s.shopee.co.id/BUXZ9aKJJ
46553238296,PANARYBODY Sepatu Pria Gen Z Casual Fashion Kekinian QNK8012 Sneakers Cowok 3 Warna Ootd Style,"265,0RB",2RB+,Panarybody Official Shop,6%,Rp15.900,https://shopee.co.id/product/497392026/46553238296,https://s.shopee.co.id/LnxlSZgyM
26919981199,Autumn Sweater Rajut Premium Oversized Korean Style Unisex Pria Wanita Kekinian Trendy 3in1,"163,4RB",9RB+,Rumah Rajut 79,6%,Rp9.801,https://shopee.co.id/product/3061860/26919981199,https://s.shopee.co.id/W7NxlZ3dP
53755077739,MODOFO Tumbler Stainless 710ml Botol Minum Anak Perempuan Tumblr Tahan Panas Dingin 24 Jam Aesthetic Tambler Termos Air Panas Kopi,"49,0RB",10RB+,MODOFO Official Store,"12,1%",Rp5.880,https://shopee.co.id/product/1564014783/53755077739,https://s.shopee.co.id/4fwwvQJCBE
57350921072,Kaos Pria Oversize Putih - Desain Vintage The Beatles/kaos pria distro original 100%/T-Shirt PUTIH,"52,0RB",10RB+,SENDIRI Toko Resmi,10%,Rp5.200,https://shopee.co.id/product/1557151616/57350921072,https://s.shopee.co.id/4qGN7jIYqH
22982494523,Hectic - Cardigan Blue - Knitwear - Corsvia,"269,0RB",2RB+,Hectic Official Store,14%,Rp37.660,https://shopee.co.id/product/772834112/22982494523,https://s.shopee.co.id/50ZnK2HvVK
44000256812,NANA HORSE CARDIGAN RAJUT KANCING POLOS LEMBUT WANITA KOREA PREMIUM,"74,0RB",2RB+,DISTRIBUSI RAJUT A474,10%,Rp7.400,https://shopee.co.id/product/156140619/44000256812,https://s.shopee.co.id/5AtDWLHIAN
21938425526,Basreng Pedas Daun Jeruk/ Original / Balado 100 Gram,"3,8RB",10RB+,Followers Ku,6%,Rp228,https://shopee.co.id/product/601250583/21938425526,https://s.shopee.co.id/40hG8CLjXA
25398374993,PARAQUE - Kaos Kerah Zipper Pria Coklat Tua Premium Lengan Pendek Size M L XL XXL Polo Shirt Zipper Pria Dewasa,"38,9RB",47,PARAQUE,8%,Rp3.112,https://shopee.co.id/product/1905115975/25398374993,https://s.shopee.co.id/4B0gKVL6CD
7156832242,Russ Sweater Crewneck Pria South Black ( Up To Big Size ),"208,9RB",10RB+,Russ & Co Official Shop,7%,Rp14.623,https://shopee.co.id/product/106751288/7156832242,https://s.shopee.co.id/4LK6WoKSrG
51259374513,Celana Jeans Pria Biru Muda Panjang Baggy Pants Korean Style Premium Denim Unisex Gombrong Straight,"52,5RB",340,JACKPOT639,13%,Rp6.825,https://shopee.co.id/product/599253091/51259374513,https://s.shopee.co.id/4VdWj7JpWJ
17578363278,House of Smith Jaket Sherpa Pria - Lasket Black #4 - Vintage Sherpa Jacket,"239,0RB",10RB+,House Of Smith Official Shop,7%,Rp16.730,https://shopee.co.id/product/85434470/17578363278,https://s.shopee.co.id/3LRZKyOGt6
24186027609,Kaos Distro Pria Premium NY Fulprin Bahan Cotton Combat 30s Original/ Kaos Brendet Pria - Wanita,"54,4RB",10RB+,Distro Bandung03,11%,Rp5.981,https://shopee.co.id/product/1267249697/24186027609,https://s.shopee.co.id/3VkzXHNdY9
26683275078,Loose Pants Pria Celana Training Oversize Bahan Katung Flacee Korean Style,"31,5RB",10RB+,qeelaand,15%,Rp4.725,https://shopee.co.id/product/794544370/26683275078,https://s.shopee.co.id/3g4PjaN0DC
43622520018,HUMANLY.CO - Promo 3 Pcs Celana Corduroy Pendek || Corduroy Cargo Pendek Pria,"63,3RB",10RB+,Humanly.co Official Shop,6%,Rp3.799,https://shopee.co.id/product/846772819/43622520018,https://s.shopee.co.id/3qNpvtMMsF
23451203566,DISAI Sweater Polos Pria Lengan Panjang Distro Motif Print Basic Sweater hoodie sweatshirt W5513,"95,0RB",2RB+,Disai Official Store,10%,Rp9.500,https://shopee.co.id/product/345526317/23451203566,https://s.shopee.co.id/2gBsXkQoF2
26462665299,Nxdomain Kaos Oversize Rugby Polo Shirt Black White Distro Cotton 24s Premium,"110,0RB",10RB+,NXDOMAIN,10%,Rp11.000,https://shopee.co.id/product/23241491/26462665299,https://s.shopee.co.id/2qVIk3QAu5
28681890308,Qeela.Official - Celana Sweatpants Loose Pria Celana Panjang Casual Daily,"35,0RB",10RB+,Qeela.Official,"18,15%",Rp6.300,https://shopee.co.id/product/1055144108/28681890308,https://s.shopee.co.id/30oiwMPXZ8
27737088654,One Set 3 in 1 Korean Style ( Blouse Rajut - Oro Pants - Jilbab ) Setelan Wanita Kekinian - SO63,"188,2RB",721,Senina Outfit,10%,Rp18.820,https://shopee.co.id/product/190858629/27737088654,https://s.shopee.co.id/3B898fOuEB
7811150840,ONIXE INSIDE Jaket Rugby Pria Wanita Kombinasi  Original High Quality Distro(Bisa COD),"89,0RB",10RB+,onixestore.co,7%,Rp6.230,https://shopee.co.id/product/190420910/7811150840,https://s.shopee.co.id/7Kxi6K92m0
47207980146,Kemeja Pria Lengan Panjang Kotak Kotak Oversize Kekinian Baju Cowok Casual Fashion Pria Premium,"169,8RB",388,KUTAS PRIA Official Store,13%,Rp22.074,https://shopee.co.id/product/1085783731/47207980146,https://s.shopee.co.id/7VH8Id8PR3
25093408874,Harven Crema Work Jacket Unisex,"236,3RB",4RB+,Maison Harven,9%,Rp21.268,https://shopee.co.id/product/313760069/25093408874,https://s.shopee.co.id/7faYUw7m66
29587281531,SUYX Celana Cargo Pria Lembut Lurus Celana Panjang Korean Style Oversize Celana Outdoor-3 Warna,"143,5RB",9RB+,Suyx Official Store,9%,Rp12.915,https://shopee.co.id/product/1552818451/29587281531,https://s.shopee.co.id/7ptyhF78l9
4316439274,Sweater Hoodie Pria Kombinasi - Hoodie Distro Pria Wanita BEST SELLER,"81,0RB",10RB+,Grosir Sweater BDG,8%,Rp6.480,https://shopee.co.id/product/64156644/4316439274,https://s.shopee.co.id/6fi1J6Ba7w
27419826523,KAOS DISTRO BETTER DAYS AHEAD SMILE / KAOS PRIA&WANITA LENGAN PENDEK,"20,7RB",10RB+,Ichigo Label,10%,Rp2.068,https://shopee.co.id/product/1087979619/27419826523,https://s.shopee.co.id/6q1RVPAwmz
8373864628,Jaket Terbaru PRIA WANITA ORIGINAL FCF Bandung Type Everest Elbrus Size M L XL XXL,"131,1RB",10RB+,FUTURE MARKET BANDUNG,15%,Rp19.665,https://shopee.co.id/product/50510974/8373864628,https://s.shopee.co.id/70KrhiAJS2
41552390856,RAINGEL - Sepatu Lokal - FORT - Maroon,"245,0RB",10RB+,Raingel Official Shop,9%,Rp22.050,https://shopee.co.id/product/113779420/41552390856,https://s.shopee.co.id/7AeHu19g75
54908613364,"JERSEY "" ENGLAND OASIS"" | UNISEX | JERSEYRETRO | JERSEYCASUAL","161,1RB",195,terascassual,15%,Rp24.165,https://shopee.co.id/product/1364096172/54908613364,https://s.shopee.co.id/60SKVsE7Ts
29790441549,YAZR Kaos Boxy Trendy Art Avatar T-Shirt HITAM Unisex - Cotton Combed 24s,"58,5RB",1RB+,YAZR Official Store,10%,Rp5.846,https://shopee.co.id/product/1541632021/29790441549,https://s.shopee.co.id/6AlkiBDU8v
43925280511,GULPAD JACKET PRIA WINDBREAKERS HOODIE PARASUT OUTDOOR  / JACKET VARSITY MANTEL PRIA / JACKET PRIA WATERPROOF,"141,1RB",5RB+,GULPAD GALERI STORE,14%,Rp19.759,https://shopee.co.id/product/1573117209/43925280511,https://s.shopee.co.id/6L5AuUCqny
25945248879,Trondheim Celana Denim Pria Loose Jeans Peter Bioblitz Tint,"230,0RB",10RB+,Trondheim Official Shop,10%,Rp23.000,https://shopee.co.id/product/119232628/25945248879,https://s.shopee.co.id/6VOb6nCDT1
22059416896,Mallvose - Celana Pria Chino Premium Panjang 100cm Mocca Slimfit,"130,0RB",10RB+,Mallvose Official Store,15%,Rp19.500,https://shopee.co.id/product/579083946/22059416896,https://s.shopee.co.id/5LCdieGepo`;

// Parse CSV lines safely
function parseCSV(text) {
  const lines = text.trim().split('\n');
  const headers = lines[0].split(',');
  const results = [];

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    // Regex for CSV with quoted strings
    const row = [];
    let insideQuote = false;
    let entry = '';
    for (let c = 0; c < line.length; c++) {
      const char = line[c];
      if (char === '"') {
        if (insideQuote && line[c + 1] === '"') {
          entry += '"';
          c++;
        } else {
          insideQuote = !insideQuote;
        }
      } else if (char === ',' && !insideQuote) {
        row.push(entry);
        entry = '';
      } else {
        entry += char;
      }
    }
    row.push(entry);
    results.push(row);
  }
  return results;
}

const rows = parseCSV(rawCsv);
console.log('Total parsed products:', rows.length);
fs.writeFileSync('parsed_shopee.json', JSON.stringify(rows, null, 2));
