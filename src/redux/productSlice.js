import {createSlice} from '@reduxjs/toolkit'


const productSlice = createSlice({
    name: 'product',
    initialState: {
        data:[
            {
                id: 1,
                title: 'Մեյդ ին Չայնա',
                reting: 4.6,
                time: "09:00-19:00",
                img: 'https://menu.am/resources/default/img/restaurants/big/1676535420310-2653.jpg',
                tags: ['']
            },
            {
                id: 2,
                title: 'ՊաՊա Պիցցա',
                reting: 4.6,
                time: "10:00-19:00",
                img: 'https://menu.am/resources/default/img/restaurants/big/1676531972260-1416.jpg',
                tags: ['']
            },
            {
                id: 3,
                title: 'Մուչաչո',
                reting: 4.7,
                time: "09:00-18:00",
                img: 'https://menu.am/resources/default/img/restaurants/big/1676526321737-2423.jpg',
                tags: ['']
            },
            {
                id: 4,
                title: 'Կովկաս Պանդոկ',
                reting: 4.6,
                time: "09:30-19:30",
                img: 'https://menu.am/resources/default/img/restaurants/big/1676388217540-95.jpg',
                tags: ['']
            },
            {
                id: 5,
                title: 'Լիբանանյան շաուրմա Թումանյան',
                reting: 4.6,
                time: "10:15-18:00",
                img: 'https://menu.am/resources/default/img/restaurants/big/1676469771977-117.jpg',
                tags: ['']
            },
            {
                id: 6,
                title: 'Բելլա Իտալիա',
                reting: 4.4,
                time: "10:00-19:15",
                img: 'https://menu.am/resources/default/img/restaurants/big/1676541572377-2564.jpg',
                tags: ['']
            },
            {
                id: 7,
                title: 'Ին Յան Սուշի Վոկ',
                reting: 4.2,
                time: "09:00-21:00",
                img: 'https://menu.am/resources/default/img/restaurants/big/1676541797300-2517.jpg',
                tags: ['']
            },
            {
                id: 8,
                title: 'Սաբթայթլ',
                reting: 4.6,
                time: "09:45-19:20",
                img: 'https://menu.am/resources/default/img/restaurants/big/1676392845348-260.jpg',
                tags: ['']
            },
            {
                id: 9,
                title: 'ԱփԹաուն',
                reting: 4.7,
                time: "11:00-21:00",
                img: 'https://menu.am/resources/default/img/restaurants/big/1676541857330-2740.jpg  ',
                tags: ['']
            },
            {
                id: 10,
                title: 'Արարատ Պանդոկ',
                reting: 4.6,
                time: "12:00-17:30",
                img: 'https://menu.am/resources/default/img/restaurants/big/1676392970806-2570.jpg',
                tags: ['']
            },
            {
                id: 11,
                title: 'Ֆուդի Պարոնյան',
                reting: 4.6,
                time: "09:15-20:10",
                img: 'https://menu.am/resources/default/img/restaurants/big/1676461576938-2663.jpg',
                tags: ['']
            },
            {
                id: 12,
                title: 'Կետո Սուշի',
                reting: 4.9,
                time: "09:40-19:20",
                img: 'https://menu.am/resources/default/img/restaurants/big/1676458816765-2731.jpg',
                tags: ['']
            },
            {
                id: 13,
                title: 'Քեյ Էֆ Սի Հյուսիսային պող 1',
                reting: 4.6,
                time: "10:20-19:30",
                img: 'https://menu.am/resources/default/img/restaurants/big/1676397529378-2722.jpg',
                tags: ['']
            }, 
            {
                id: 14,
                title: 'Ավանգարդ Ծաղիկներ',
                reting: 4.5,
                time: "--:-:--",
                img: 'https://menu.am/resources/default/img/restaurants/big/1676409997449-2575.jpg  ',
                tags: ['']
            },
            {
                id: 15,
                title: 'Ֆլորիստ Ֆլաուերս Աբովյան',
                reting: 5.0,
                time: "--:-:--",
                img: 'https://menu.am/resources/default/img/restaurants/big/1676448898090-2724.jpg',
                tags: ['']
            },
            {
                id: 16,
                title: 'Դայմնդ Ռեստորան',
                reting: 4.3,
                time: "09:15-19:00",
                img: 'https://menu.am/resources/default/img/restaurants/big/1676549777839-2310.jpg',
                tags: ['']
            },
            {
                id: 17,
                title: 'Փինկ Բերրի',
                reting: 4.1,
                time: "--:-:--",
                img: 'https://menu.am/resources/default/img/restaurants/big/1676549643524-804.jpg',
                tags: ['']
            },
            {
                id: 18,
                title: 'Կարաս Աբովյան 1/1',
                reting: 4.6,
                time: "10:00-19:00",
                img: 'https://menu.am/resources/default/img/restaurants/big/1676443712239-447.jpg',
                tags: ['']
            },
            {
                id: 19,
                title: 'Թումանյան շաուրմա Բյուզանդ',
                reting: 4.4,
                time: "11:00-18:00",
                img: 'https://menu.am/resources/default/img/restaurants/big/1676399768206-2735.jpg',
                tags: ['']
            },
            {
                id: 20,
                title: 'Մր․ Գիրոս Ամիրյան',
                reting: 4.5,
                time: "10:20-17:10",
                img: 'https://menu.am/resources/default/img/restaurants/big/1676398910870-1649.jpg',
                tags: ['']
            },
            {
                id: 21,
                title: 'Քոֆիշոփ Քոմփնի Հին Էրիվանցի',                
                reting: 4.7,
                time: "09:20-22:00",
                img: 'https://menu.am/resources/default/img/restaurants/big/1676410754283-846.jpg',
                tags: ['']
            }
        ]
    }
})



export default productSlice.reducer