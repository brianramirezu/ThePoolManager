import React from "react";
import $ from "jquery";
import { Link,NavLink } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import Coverflow from 'react-coverflow';
const fn = function(){

};

class CarouselMenu extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      active: 0
    };
  }

  render() {
    return (
      //set up for stylesheet
     <div>
       <Coverflow

         width={960}
         height={450}
         displayQuantityOfSide={2}
         navigation={true}
         enableHeading={false}
         active={this.state.active}
       >
         <div
           onClick={() => fn()}
           onKeyDown={() => fn()}
           role="menuitem"
           tabIndex="0"
         >

         </div>
         <img src='http://media.nj.com/essex_impact/photo/2015/09/09/largefamilypackjpg-2556cde2d485c49f.jpg' alt='Wings' />
         <img src='http://placeralplato.com/files/2016/01/Pizza-con-pepperoni.jpg'  />
         <img src='http://taconacolv.com/images/taconaco-tacos.jpg?crc=4127067265'/>
         <img src='https://cdn5.norecipes.com/wp-content/uploads/2009/03/23051459/menudo.1024x1024.jpg'/>
         <img src='https://i1.wp.com/www.paleonewbie.com/wp-content/uploads/2015/08/paleo-newbie-steak-fajitas-new-1266x850.jpg?fit=1266%2C850'/>
         <img src='http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/tahini-marinated-chicken-thighs-cucumber-tomato-salad-1705p137.jpg?itok=UralYZ9E'/>
         <img src='https://www.thefoodinmybeard.com/wp-content/uploads/2014/09/lobsterpopperhero.jpg'/>
         <img src='https://i.pinimg.com/736x/d4/04/45/d40445dd63de4b2d59addaa1f103db3d--milanesa-empanizada-key-ingredient.jpg'/>
         <img src='https://i.pinimg.com/736x/0f/10/d5/0f10d5b70685b8cb1cbec2197f861fed--ceviche-mexican-tilapia-ceviche.jpg'/>
         <img src='https://media-cdn.tripadvisor.com/media/photo-s/0b/f3/80/18/famous-bbq-ribs.jpg'/>
         <img src='src/componets/BGImage.jpg'/>
       </Coverflow>
      </div>

    );
  }

  _handleClick() {
    var num = Math.floor((Math.random() * 10) + 1);
    this.setState({
      active: num
    });
  }
};
export default CarouselMenu;
