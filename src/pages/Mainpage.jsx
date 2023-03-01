import React, { useState } from 'react'
import Header from '../components/header/Header'
import nkar1 from '../img/free-banner.7e710a76.jpg'
import {RiHotelLine} from 'react-icons/ri'
import {SiHomeassistantcommunitystore} from 'react-icons/si'
import {FaRainbow} from 'react-icons/fa'
import {TbDiscount} from 'react-icons/tb'
import { useSelector } from 'react-redux'
// import {CiSearch} from 'react-icons/ci'
// import {CiStar} from 'react-icons/ci'



function Mainpage() {

const products = useSelector((state)=> state.product.data);

let [search, setSearch] = useState('')


let arr = ['Լավ Առաջարկ ', 'Նորույթ', 'ԹՈՓ Ռեստորաններ', 'Նախաճաշ', 'Լանչեր', 'Առողջ Ապրելակերպ', 'Հացաբուլկեղեն և Քաղցրավենիք', 'Գարեջրատուն և Փաբ', 'Խորոված և քյաբաբ', 'Պիցցա', 'Սուշի', 'Բուրգեր և Սենդվիչ', 'Շաուրմա', 'Ձուկ և ծովամթերք', 'Խաշ', 'Ասիական', 'Մեքսիկական', 'Հայկական', 'Վրացական', 'Արևելյան', 'Հնդկական', 'Եվրոպական']


    return (
        <>
            <Header />
            <img className='img' src={nkar1} alt='er' />

            <main>

                <section className='main-filter'>
                    <div className="main-filter-top">

                        <a href="#"><RiHotelLine className='icons'/>Ռեստորաններ</a>
                        <a href="#"><SiHomeassistantcommunitystore className='icons'/>Խանութներ</a>
                        <a href="#"><FaRainbow className='icons'/>Քարֆուր</a>
                        <a className='a4' href="#"><TbDiscount className='icons'/>Զեղչեր</a>

                    </div>

                    <div className="main-filter-bottom">
                        <h4>ֆիլտրեր</h4>
                        {arr.map((item) => {
                            return(
                                <div key={item} className='key'>
                                    <input type='checkbox'/>
                                    <span className='items'>{item}</span>
                                </div>
                            )
                        })}
                        
                    </div>
                </section>

                <section className="main-content">
                <div> 
                </div>
                        <input type='text' placeholder="Որոնել, ռեստորան, խանութ, ապրանք" onChange={(e) => setSearch(e.target.value)}/>
                        <button>Որոնում</button>
                <div className="products-div">

                   {products.map((item) => {
                    return(
                        <div className='product' key={item.id}>
                            <img src={item.img} alt="a" />
                            <div>
                                <p>{item.title}</p>
                                <p className='reting'>{item.reting}</p>
                            </div>
                            <div>
                                <p className='nvazaguyn'>Նվազագույն պատվերը 2000դրամ</p>
                                <p>{item.time}</p>
                            </div>
                        </div>
                    )
                   })}
                </div>
                </section>

            </main>

        </>
    )
}

export default Mainpage