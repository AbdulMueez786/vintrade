import React, { useEffect, useState } from 'react'
import './Home.css'
import Product from './Product'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { CardGroup } from 'react-bootstrap';


import Chevrolet_Deluxe_img from "./images/Product/1939_Chevrolet_Deluxe/img.jpg";
import Chevrolet_Deluxe_img1 from "./images/Product/1939_Chevrolet_Deluxe/img1.jpg";
import Chevrolet_Deluxe_img2 from "./images/Product/1939_Chevrolet_Deluxe/img2.jpg";
import Chevrolet_Deluxe_img3 from "./images/Product/1939_Chevrolet_Deluxe/img3.jpg";
import Chevrolet_Deluxe_img4 from "./images/Product/1939_Chevrolet_Deluxe/img4.jpg";

import Chevrolet_Corvette_img from "./images/Product/Chevrolet_Corvette/img.jpg";
import Chevrolet_Corvette_img1 from "./images/Product/Chevrolet_Corvette/img1.jpg";
import Chevrolet_Corvette_img2 from "./images/Product/Chevrolet_Corvette/img2.jpg";
import Chevrolet_Corvette_img3 from "./images/Product/Chevrolet_Corvette/img3.jpg";
import Chevrolet_Corvette_img4 from "./images/Product/Chevrolet_Corvette/img4.jpg";

import DeVaux_img from "./images/Product/DeVaux/img.jpg";
import DeVaux_img1 from "./images/Product/DeVaux/img1.jpg";
import DeVaux_img2 from "./images/Product/DeVaux/img2.jpg";
import DeVaux_img3 from "./images/Product/DeVaux/img3.jpg";
import DeVaux_img4 from "./images/Product/DeVaux/img4.jpg";

import Ford_Roadster_img from "./images/Product/Ford_Roadster/img.jpg";
import Ford_Roadster_img1 from "./images/Product/Ford_Roadster/img1.jpg";
import Ford_Roadster_img2 from "./images/Product/Ford_Roadster/img2.jpg";
import Ford_Roadster_img3 from "./images/Product/Ford_Roadster/img3.jpg";
import Ford_Roadster_img4 from "./images/Product/Ford_Roadster/img4.jpg";

import Magnificent_Brass_Pallanghuzi_Board_img from "./images/Product/Magnificent_Brass_Pallanghuzi_Board/img.jpg";
import Magnificent_Brass_Pallanghuzi_Board_img1 from "./images/Product/Magnificent_Brass_Pallanghuzi_Board/img1.jpg";
import Magnificent_Brass_Pallanghuzi_Board_img2 from "./images/Product/Magnificent_Brass_Pallanghuzi_Board/img2.jpg";
import Magnificent_Brass_Pallanghuzi_Board_img3 from "./images/Product/Magnificent_Brass_Pallanghuzi_Board/img3.jpg";
import Magnificent_Brass_Pallanghuzi_Board_img4 from "./images/Product/Magnificent_Brass_Pallanghuzi_Board/img4.jpg";


import chinese_4_decor_img from './images/Product/chinese 4 decor/img.jpg';
import chinese_4_decor_img1 from './images/Product/chinese 4 decor/img1.jpg';
import chinese_4_decor_img2 from './images/Product/chinese 4 decor/img2.jpg';
import chinese_4_decor_img3 from './images/Product/chinese 4 decor/img3.jpg';
import chinese_4_decor_img4 from './images/Product/chinese 4 decor/img4.jpg';




import SS_Raso_Gommato_Stone_img1 from "./images/Product/SS_Raso_Gommato_Stone/img1.webp";
import SS_Raso_Gommato_Stone_img2 from "./images/Product/SS_Raso_Gommato_Stone/img2.webp";
import SS_Raso_Gommato_Stone_img3 from "./images/Product/SS_Raso_Gommato_Stone/img3.webp";
import SS_Raso_Gommato_Stone_img4 from "./images/Product/SS_Raso_Gommato_Stone/img4.webp";


import Vintage_Antique_Book_Set_Stack_img from "./images/Product/Vintage_Antique_Book_Set_Stack/img1.jpg";
import Vintage_Antique_Book_Set_Stack_img1 from "./images/Product/Vintage_Antique_Book_Set_Stack/img1.jpg";
import Vintage_Antique_Book_Set_Stack_img2 from "./images/Product/Vintage_Antique_Book_Set_Stack/img2.jpg";
import Vintage_Antique_Book_Set_Stack_img3 from "./images/Product/Vintage_Antique_Book_Set_Stack/img3.jpg";
import Vintage_Antique_Book_Set_Stack_img4 from "./images/Product/Vintage_Antique_Book_Set_Stack/img4.jpg";

import Floral_White_Victorian_green_Book_img from './images/Product/Floral_White_ Victorian_green_Book/img.jpg';
import Floral_White_Victorian_green_Book_img1 from './images/Product/Floral_White_ Victorian_green_Book/img1.jpg';
import Floral_White_Victorian_green_Book_img2 from './images/Product/Floral_White_ Victorian_green_Book/img2.jpg';
import Floral_White_Victorian_green_Book_img3 from './images/Product/Floral_White_ Victorian_green_Book/img3.jpg';
import Floral_White_Victorian_green_Book_img4 from './images/Product/Floral_White_ Victorian_green_Book/img4.jpg';

import Old_Rose_Victoria_Book from './images/Product/Old_Rose_Victoria_Book/img.jpg';
import Old_Rose_Victoria_Book1 from './images/Product/Old_Rose_Victoria_Book/img1.jpg';
import Old_Rose_Victoria_Book2 from './images/Product/Old_Rose_Victoria_Book/img2.jpg';
import Old_Rose_Victoria_Book3 from './images/Product/Old_Rose_Victoria_Book/img3.jpg';
import Old_Rose_Victoria_Book4 from './images/Product/Old_Rose_Victoria_Book/img4.jpg';

import Vintage_Book from './images/Product/Vintage_books/img.jpg';
import Vintage_Book1 from './images/Product/Vintage_books/img1.jpg';
import Vintage_Book2 from './images/Product/Vintage_books/img2.jpg';
import Vintage_Book3 from './images/Product/Vintage_books/img3.jpg';
import Vintage_Book4 from './images/Product/Vintage_books/img4.jpg';


import Suspended_Pants from './images/Product/Suspender_Pants/img.png';
import Suspended_Pants1 from './images/Product/Suspender_Pants/img1.webp';
import Suspended_Pants2 from './images/Product/Suspender_Pants/img2.webp';
import Suspended_Pants3 from './images/Product/Suspender_Pants/img3.webp';
import Suspended_Pants4 from './images/Product/Suspender_Pants/img4.webp';

import Navy_White_Pin_Stripe from './images/Product/Navy_White_Pin_Stripe/img.jpg'; 
import Navy_White_Pin_Stripe1 from './images/Product/Navy_White_Pin_Stripe/img1.jpg'; 
import Navy_White_Pin_Stripe2 from './images/Product/Navy_White_Pin_Stripe/img2.jpg'; 
import Navy_White_Pin_Stripe3 from './images/Product/Navy_White_Pin_Stripe/img3.jpg'; 
import Navy_White_Pin_Stripe4 from './images/Product/Navy_White_Pin_Stripe/img4.jpg'; 

import White_Collared_Short_Sleeve from './images/Product/White_Collared_Short_Sleeve/img.jpg';
import White_Collared_Short_Sleeve1 from './images/Product/White_Collared_Short_Sleeve/img1.jpg';
import White_Collared_Short_Sleeve2 from './images/Product/White_Collared_Short_Sleeve/img2.jpg';
import White_Collared_Short_Sleeve3 from './images/Product/White_Collared_Short_Sleeve/img3.jpg';
import White_Collared_Short_Sleeve4 from './images/Product/White_Collared_Short_Sleeve/img4.jpg';


import Pinstripe_pants from './images/Product/Pinstripe pants/img.jpg';
import Pinstripe_pants1 from './images/Product/Pinstripe pants/img1.jpg';
import Pinstripe_pants2 from './images/Product/Pinstripe pants/img2.jpg';
import Pinstripe_pants3 from './images/Product/Pinstripe pants/img3.jpg';
import Pinstripe_pants4 from './images/Product/Pinstripe pants/img4.jpg';

import Vintage_Ralph_Lauren_img from "./images/Product/Vintage_Ralph_Lauren/img1.jpg";
import Vintage_Ralph_Lauren_img1 from "./images/Product/Vintage_Ralph_Lauren/img1.jpg";
import Vintage_Ralph_Lauren_img2 from "./images/Product/Vintage_Ralph_Lauren/img2.jpg";
import Vintage_Ralph_Lauren_img3 from "./images/Product/Vintage_Ralph_Lauren/img3.jpg";
import Vintage_Ralph_Lauren_img4 from "./images/Product/Vintage_Ralph_Lauren/img4.jpg";


function Home(props) {
  const [item1,setitem1]=useState(0);
  const [item2,setitem2]=useState(0);
  const [item3,setitem3]=useState(0);
  const [item4,setitem4]=useState(0);
  const [item5,setitem5]=useState(0);
  const [item6,setitem6]=useState(0);
  const [item7,setitem7]=useState(0);
  const [item8,setitem8]=useState(0);
  const [item9,setitem9]=useState(0);
  const [item10,setitem10]=useState(0);
  const [item11,setitem11]=useState(0);
  const [item12,setitem12]=useState(0);
  useEffect(() => {  
    console.log("se")
    //setitem2(1)
 
    if(props.option==0){
     console.log("se")
      setitem1(1);
      console.log(item1)
      console.log(item1)

    }
    else if(props.option==1){
      setitem2(1)
    }
    else if(props.option==2){
      setitem3(1)
    }
    else if(props.option==3){
      setitem4(1)
    }
    else if(props.option==4){
      setitem5(1)
    }
    else if(props.option==5){
      setitem6(1)
    }
    else if(props.option==6){
      setitem7(1)
    }
    else if(props.option==7){
      setitem8(1)
    }
    else if(props.option==8){
      setitem9(1)
    }
    else if(props.option==9){
      setitem10(1)
    }
    else if(props.option==10){
      setitem11(1)
    }
    else if(props.option==11){
      setitem12(1)
    }
    else{
      setitem1(0);
      setitem2(0);
      setitem3(0);
      setitem4(0);
      setitem5(0);
      setitem6(0);
      setitem7(0);
      setitem8(0);
      setitem9(0);
      setitem10(0);
      setitem11(0);
      setitem12(0);
    }
  
  }, [props.option])
  const a=()=>{
    setitem1(1);
  }
return (
        <div className="Home">
          <Slide className="Home_image_Fade"> 
           <img className="Home__image" alt="Comprar Produtos Esportivos e para Atividades ao Ar Livre" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Sports_pt_BR_1x._CB431860454_.jpg" height="600px" width="1500px" data-a-hires="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Sports_pt_BR_2x._CB431860448_.jpg"/>
           <img className="Home__image" alt="Compre na loja Casa" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_pt_BR_1x._CB428980071_.jpg"  data-a-hires="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_pt_BR_2x._CB428980071_.jpg"/>
          </Slide>
   
          <h1 style={{margin:"10px"}}>Clothes:</h1>

<CardGroup>
<Product
option={item1}
id="0"
title="Suspender Pants(1930s)"
price={425.00}
rating={5}
image={Suspended_Pants}
image1={Suspended_Pants1}
image2={Suspended_Pants2}
image3={Suspended_Pants3}
image4={Suspended_Pants4}
productDetail="Vintage 1996 SS Raso Gommato blue Stone Island jacket, fits medium.
n
CONDITION: new with tags in pocket. lining intact and non sticky. some light cracking.\n
STYLE: jacket\n
ERA: 1996 Spring Summer\n
COLOUR: blue\n
FABRIC: cotton and polyutherane\n
\n   
Notes: Pit to pit: 25. Art number: 24154101. With green edge badge. Rare Raso Gommato jacket in fantastic condition - some peeling inside. Lining is fully intact and non sticky. Incredibly rare for these jackets.
" 
/>
 <Product
 option={item2}
id="1"
title="Navy White Pin Stripe(1930s)"
price={60}
rating={5}
image={Navy_White_Pin_Stripe}
image1={Navy_White_Pin_Stripe1}
image2={Navy_White_Pin_Stripe2}
image3={Navy_White_Pin_Stripe3}
image4={Navy_White_Pin_Stripe4}
productDetail="Unique Vintage 1930s Navy & White Pin Stripe Thelma Suspender Pants Get the gang together, dolls! Stay a step ahead of the fuzz with these fabulous suspender pants from Unique Vintage, boasting a sleek navy silhouette. Crafted in a marvelously woven fabric blend, the Thelma Pants feature a wide banded high waist cinched in with a darling button up front and secured by adjustable suspender straps, easily removable for versatile wear. Deep side pockets and wide legs with rolled cuffs make it easy to dust out!"
/>
   <Product
   option={item3}
id="2"
title="Short Sleeve (1930s)"
price={685}
rating={5}
image={White_Collared_Short_Sleeve}
image1={White_Collared_Short_Sleeve1}
image2={White_Collared_Short_Sleeve2}
image3={White_Collared_Short_Sleeve3}
image4={White_Collared_Short_Sleeve4}
productDetail="White Collared Short Sleeve Button Up Blouse A salaried staple, dames! A charming button up blouse in classic white, boasting notch cuffed short sleeves and darting for feminine form with a classic collar. Crafted in a sturdy woven cotton blend, it's the consummate canvas. Nailed it!"
/>
   <Product
   option={item4}
id="3"
title="Pinstripe pants(1930s)"
price={70}
rating={5}
image={Pinstripe_pants}
image1={Pinstripe_pants1}
image2={Pinstripe_pants2}
image3={Pinstripe_pants3}
image4={Pinstripe_pants4}
productDetail="Unique Vintage 1930s Burgundy Pinstripe Thelma Suspender Pants"
/>
</CardGroup>




     <h1 style={{margin:"10px"}}>Cars:</h1>
     <CardGroup>
  

     <Product
     option={item5}
     id="4"
     title="1931-Ford"
     price={35000.00}
     rating={5}
     image={Chevrolet_Deluxe_img}
     image1={Chevrolet_Deluxe_img1}
     image2={Chevrolet_Deluxe_img2}
     image3={Chevrolet_Deluxe_img3}
     image4={Chevrolet_Deluxe_img4}
     productDetail="This is a real beauty and one of a kind! 1939 Chevrolet Master Deluxe Sedan with so many original parts and details and with all of the added perks of today's comfort, including air conditioner. Ride cool, carefree and in style with this unique beauty.  This car is a customized Classic American automobile that has been professionally transformed into a Show Car"
     />
    <Product
    option={item6}
     id="5"
     title="Chevrolet Corvette"
     price={20000.00}
     rating={5}
     image={Chevrolet_Corvette_img}
     image1={Chevrolet_Corvette_img1}
     image2={Chevrolet_Corvette_img2}
     image3={Chevrolet_Corvette_img3}
     image4={Chevrolet_Corvette_img4}
     productDetail="
     1978 was the Corvette's twenty fifth anniversary edition. Fixed-glass fastback. T-Tops. Sun shade cover for rear compartment. Power door locks, a power antenna, dual rear speakers. Power door locks, a power antenna, dual rear speakers. Base L-48 engine 185 hp, 350. New Tires and Rally Wheels. Great Condition. Well maintained. Maintenance records. Extra parts available. To include original rims. Original Engine Parts. New tires and Rally wheels. May call for more details. 434-401-1488"
     />    
       <Product
       option={item7}
     id="6"
     title="DeVaux 6-75 "
     price={239}
     rating={5}
     image={DeVaux_img}
     image1={DeVaux_img1}
     image2={DeVaux_img2}
     image3={DeVaux_img3}
     image4={DeVaux_img4}
     productDetail="This is a rare 1931 DeVaux Sports Coupe built in Grand Rapids. Michigan in the former Denault factory. According to Automotive history there were only 7 of these Sports Coupe built. The car has has resided in Michigan all it's life until It moved it to Iowa. The car runs and drives straight without any shimmy The engine runs smooth and quite. It has been repainted and shows no visible dents or scratches. The body is Maroon and the fenders are black. The wheels are painted red. It has a good shine and patina. The upholstery has no tears and barley shows its age"
     />
         <Product
         option={item8}
     id="7"
     title="Ford Roadster"
     price={239}
     rating={5}
     image={Ford_Roadster_img}
     image1={Ford_Roadster_img1}
     image2={Ford_Roadster_img2}
     image3={Ford_Roadster_img3}
     image4={Ford_Roadster_img4}
     productDetail="This Ford Roadster is built on a steel frame with a fiberglass body. Finished in dark green with black and tan interior, it's powered by a V6 Chevrolet engine with a 4-speed manual transmission. Features include spoke wheels, leaf spring suspension, and a gas tank disguised as a leather trunk. Titled as a 1926 Ford, this roadster isoffered on a clean Iowa title in the seller's name. | Start Date = 10/2/2020 7:05:00 AM | End Date = 10/9/2020 6:40:00 PM"
     />
      </CardGroup>
     
      <h1 style={{margin:"10px"}}>Books:</h1>




      <CardGroup>
     <Product
     option={item9}
     id="8"
     title="Victorian green Book"
     price={29.00}
     rating={5}
     image={Floral_White_Victorian_green_Book_img}
     image1={Floral_White_Victorian_green_Book_img1}
     image2={Floral_White_Victorian_green_Book_img2}
     image3={Floral_White_Victorian_green_Book_img3}
     image4={Floral_White_Victorian_green_Book_img4}
     productDetail="Vintage Floral White Victorian green Book the White Series, Familiar Quotations, Bartlet, 1901, Hardback Wedding Decor Antique Home Decor  " 
     />
       <Product
       option={item10}
     id="9"
     title="Vintage book sets"
     price={19.99}
     rating={5}
     image={Vintage_Book}
     image1={Vintage_Book1}
     image2={Vintage_Book2}
     image3={Vintage_Book3}
     image4={Vintage_Book4}
     productDetail="Vintage book sets, wrapped in twine, same manner as my grandmother had tied when walking to school as a child. These vintage books are a great accessory for home decor purposes.Be sure to skim through the pages for an interesting trip down history lane. Each set comes with 3 or 4 books tied together,and in various sizes for effect. If there’s a particular set, please let me know so I can ship that particular set. * the 2nd photo; ivory, tan and blue has sold. Free shipping to continental United States. I will ship to other countries at buyers expense. Shipping to Canada averages an additional $16.
     All sales final and thank you for shipping my Etsy store for your vintage finds"
     />
         <Product
         option={item11}
     id="10"
     title="Victorian Old Rose book"
     price={28}
     rating={5}
     image={Old_Rose_Victoria_Book}
     image1={Old_Rose_Victoria_Book1}
     image2={Old_Rose_Victoria_Book2}
     image3={Old_Rose_Victoria_Book3}
     image4={Old_Rose_Victoria_Book4}
     productDetail="Antique Victorian Book Old Rose & Silver, Myrtle Reed, 1909, Hardback Purple Lavender Silver Pink Colors Wedding Decor Antique Home Decor"
     />
         <Product
         option={item12}
     id="11"
     title="Antique Book Set Stack"
     price={30}
     rating={5}
     image={Vintage_Antique_Book_Set_Stack_img}
     image1={Vintage_Antique_Book_Set_Stack_img1}
     image2={Vintage_Antique_Book_Set_Stack_img2}
     image3={Vintage_Antique_Book_Set_Stack_img3}
     image4={Vintage_Antique_Book_Set_Stack_img4}
     productDetail="Vintage Antique Book Set Stack (set of 3) Blue Turquoise Green | Rustic Home Decor | Wedding Decor | Decorative | Library | Farmhouse Decor"
     />
      </CardGroup>
{/*
      <h1 style={{margin:"10px"}}>Decor:</h1>

      <CardGroup>
     <Product
     id="0"
     title="Chinese Prints"
     price={10}
     rating={5}
     image={chinese_4_decor_img}
     image1={chinese_4_decor_img1}
     image2={chinese_4_decor_img2}
     image3={chinese_4_decor_img3}
     image4={chinese_4_decor_img4}
     productDetail="Set of 4 Prints, Chinese Prints, Chinese Wall Decor, Botanical Prints, Insects and Flowers, Nature Prints, Flower Wall Decor, Asian Prints " 
     />
       <Product
     id="1"
     title="VintageRalph Lauren Zip Up"
     price={45}
     rating={5}
     image={Vintage_Ralph_Lauren_img}
     image1={Vintage_Ralph_Lauren_img1}
     image2={Vintage_Ralph_Lauren_img2}
     image3={Vintage_Ralph_Lauren_img3}
     image4={Vintage_Ralph_Lauren_img4}
     productDetail="Description:

     Vintage black Ralph Lauren zip up, fits x-large.
     
     CONDITION: good - tiny marks on back.
     STYLE: zip up
     ERA: 1990s
     COLOUR: black
     FABRIC: cotton"
     />
         <Product
     id="1"
     title="Pallanghuzi Board"
     price={255}
     rating={5}
     image={Magnificent_Brass_Pallanghuzi_Board_img}
     image1={Magnificent_Brass_Pallanghuzi_Board_img1}
     image2={Magnificent_Brass_Pallanghuzi_Board_img2}
     image3={Magnificent_Brass_Pallanghuzi_Board_img3}
     image4={Magnificent_Brass_Pallanghuzi_Board_img4}
     productDetail="Magnificent Brass Pallanghuzi Board Game With 14 Pits From South India, L 14 x W 7.5 x H 4.5 inches , Vintage Home Decor, Indoor Mind Game. This magnificent board game handcrafted in excellent quality brass with delicate engravings and 14 pits is traditionally known as Pallanghuzi or Pallankuli - An ancient Tamil Mancala mind game played especially in Tamil Nadu and which later spread to other parts of south India as far as Sri Lanka and Malaysia"
     />
         <Product
     id="1"
     title="Antique Book Set Stack"
     price={30}
     rating={5}
     image={Vintage_Antique_Book_Set_Stack_img}
     image1={Vintage_Antique_Book_Set_Stack_img1}
     image2={Vintage_Antique_Book_Set_Stack_img2}
     image3={Vintage_Antique_Book_Set_Stack_img3}
     image4={Vintage_Antique_Book_Set_Stack_img4}
     productDetail="Vintage Antique Book Set Stack (set of 3) Blue Turquoise Green | Rustic Home Decor | Wedding Decor | Decorative | Library | Farmhouse Decor"
     />
      </CardGroup>
*/        }



        </div>
    )
}

export default Home
