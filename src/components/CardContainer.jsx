import React from "react";
import Card from "./Card";

const cardsStack = [
    {
        id: 1,
        name: 'Happy Lamb',
        description: 'Mongolian hotpot',
        image:'./assets/happylamb.jpg',
        menu:'https://www.yelp.com/biz/happy-lamb-hot-pot-plano',
    },

    {
        id: 2,
        name: 'Cris and John',
        description: 'Vietnamese Street Food with a Mexican twist Việt & Mex owned',
        image:'./assets/crisandjhon.jpg',
        menu:'https://www.crisandjohn.com/',
    },

    {
        id: 3,
        name: 'Gen BBQ',
        description: 'Korean BBQ',
        image:'./assets/genbbq.jpg',
        menu:'https://www.genkoreanbbq.com/',
    },

    {
        id: 4,
        name: 'Haidilao Hotpot',
        description: 'Sichuan hotpot',
        image:'./assets/haidilao.jpg',
        menu:'https://haidilaofriscoreserve.com/',
    },

    {
        id: 5,
        name: 'Fatni BBQ',
        description: 'Northern Chinese BBQ',
        image:'./assets/fatnibbq.jpg',
        menu:'https://www.yelp.com/biz/fat-ni-bbq-carrollton-2',
    },

    {
        id: 6,
        name: 'Krin Court',
        description: 'Chinese Dim sum',
        image:'./assets/krincourt.jpg',
        menu:'https://www.kirincourt.com/',
    },

    {
        id: 7,
        name: 'Sichuan Folk',
        description: 'Sichuan spicy homemade food',
        image:'./assets/sichuan.jpg',
        menu:'https://www.szechuanfolk.com/',
    },

    {
        id: 8,
        name: 'Noodle Wave',
        description: 'Thai food and street food',
        image:'./assets/noodlewave.jpg',
        menu:'https://www.noodlewave.com/',
    },

    {
        id: 9,
        name: 'Saigon Block',
        description: 'Vietnamese food',
        image:'./assets/saigon.jpg',
        menu:'https://www.saigon-block.com/restaurant/index.php/en/',
    },

    {
        id: 10,
        name: 'Burning Rice',
        description: 'Traditional Korean BBQ Bibimbop bowls',
        image:'./assets/burning.jpg',
        menu:'https://www.burningrice.com/',
    },

    {
        id: 11,
        name: 'Fujiyama',
        description: 'Japanese Sushi Restaurant',
        image:'./assets/fujiyama.jpg',
        menu:'https://fujiyamatexas.com/',
    },

    {
        id: 12,
        name: 'Tandoori Flame',
        description: 'Authentic Indian Cuisine',
        image:'./assets/tandooriflame.jpg',
        menu:'https://www.tandooriflametx.com/',
    },
];

const CardContainer = () => {
    return(
        <div className = 'card-container'>{
            cardsStack.map((card) => (
                <Card key = {card.id} name = {card.name} description = {card.description} image = {card.image} menu = {card.menu}/>
            ))}
        </div>
    );
};

export default CardContainer;