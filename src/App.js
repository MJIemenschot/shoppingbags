import React from 'react';
import './App.css';
import Button from './Button'
import Product from './Product'
import handy from './assets/bag_1.png'
import stylish from './assets/bag_2.png'
import simple from './assets/bag_3.png'
import trendy from './assets/bag_4.png'
import Tile from './Tile'
import brand from './assets/brand.png'
import story from './assets/our_story.png'

function App() {
  return (
      <>
      <h1>Handbags & Purses</h1>
    <nav>
        <Button text="to the collection"/>
        <Button text="shop all bags"/>
        <Button text="pre-orders" disabled={true}/>
    </nav>
     <main>
         <Product
             label="Best Seller"
             image={handy}
             name="The handy bag"
             price="€400"
         />
         <Product
             label="Best Seller"
             image={stylish}
             name="The stylish bag"
             price="€250"
         />
         <Product
             label="Best Seller"
             image={simple}
             name="The simple bag"
             price="€400"
         />
         <Product
             label="Best Seller"
             image={trendy}
             name="The trendy bag"
             price="€150"
         />
     </main>
     <footer>
         <Tile
             title="The brand"
             info="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by
             injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage ,
             you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet"

         />
         <Tile
            image={brand}
         />
         <Tile
             image={story}
         />
         <Tile
             title="Our story"
             info="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by
             injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage ,
             you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet"
         />

     </footer>
      </>

  );
}

export default App;



