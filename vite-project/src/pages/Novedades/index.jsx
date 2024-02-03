import React from "react";
import './styels.css'

import {Header} from "../../components/Header_nav_page";
import { Title } from "../../components/title";
import { Serch } from "../../components/serch_and_icons";
import { Nav_and_filter } from "../../components/nav_and_filter";
import { Card } from "../../components/card";

const Novedades = () =>{
    const api_New_coleccion=[
        {id:1, name:'Nike Air Max', precio:'$3000', img:'https://dpjye2wk9gi5z.cloudfront.net/wcsstore/ExtendedSitesCatalogAssetStore/images/catalog/zoom/1026834-0000V1.jpg'},
        {id:2, name:'Adidas Ultraboost', precio:'$3000', img:'https://assets.adidas.com/images/w_600,f_auto,q_auto/fc885d1de97246fc9183af9000da38a8_9366/Tenis_Ultraboost_Light_23_Negro_HQ6340_01_standard.jpg'},
        {id:3, name:'Puma RS-X', precio:'$3000', img:'https://i.linio.com/p/c6bff953f5072883e27c40e4c4e6fe33-product.jpg'},
        {id:4, name:'New Balance Fresh Foam', precio:'$3000', img:'https://nb.scene7.com/is/image/NB/m1080l12_nb_02_i'},

    ]
    const api_Mas_Vendido=[
        {id:1, name:'Nike Air Max', precio:'$3000', img:'https://dpjye2wk9gi5z.cloudfront.net/wcsstore/ExtendedSitesCatalogAssetStore/images/catalog/zoom/1026834-0000V1.jpg'},
        {id:2, name:'Puma RS-X', precio:'$3000', img:'https://i.linio.com/p/c6bff953f5072883e27c40e4c4e6fe33-product.jpg'},
        {id:3, name:'Reebok Classic', precio:'$2000', img:'data:image/jpeg;base64,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'},
        {id:4, name:'Vans Old Skool', precio:'$2000', img:'https://images.stockx.com/images/Vans-Old-Skool-Pro-Black-White.jpg?fit=fill&bg=FFFFFF&w=480&h=320&fm=jpg&auto=compress&dpr=2&trim=color&updated_at=1626898622&q=60'},

    ]
    return(
        <>
        <body>
         <main>
                <div className="Second_nav">
                    <img src="" alt="logo" />
                    <Title/>
                    <Serch/>
                </div>
                <article> 
                    <div className="sub_nav">            
                        <Nav_and_filter/>
                    </div> 
                    <section className="cardlist-one">
                        {api.map (element => (
                            <Card name={element.name} img={element.img}  />
                            ))
                         }
                    </section>
                    <section className="cardlist-two ">
                    {api.map (element => (
                            <Card name={element.name} img={element.img}  />
                            ))
                         }
                    </section>
                </article>
            </main>
        </body>
        </>
    )
}
export{Novedades};