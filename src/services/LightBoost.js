export default class LightBoostService {

    async getIntroItemList() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([
                    {
                        title: 'RBG RATING CARRY',
                        text: 'Winning Rated Battlegrounds requires a high level of coordination, team play, and a strong lead to organize a team of...',
                        linkTo: '/rgbrcarry',
                        img: 'https://i.ibb.co/YdxL9hZ/item1.png',
                    },
                    {
                        title: 'CONQUEST POINTS CAP',
                        text: 'Sed blandit vitae metus accumsan ultricies. Sed pharetra, nisl sit amet dictum vehicula, augue nibh accumsan sapien, ut lacinia sem.',
                        linkTo: '/rgbrcarry2',
                        img: 'https://i.ibb.co/vmCFbF5/item2-new.png',
                    },
                    {
                        title: 'VICIOUS WAR SPIDER',
                        text: 'Donec ultrices nisi ante, ac fermentum massa pretium eu. Morbi eget bibendum urna. Praesent finibus, ipsum lobortis convallis vestibulum, lacus.',
                        linkTo: '/rgbrcarry3',
                        img: 'https://i.ibb.co/25WdQf2/item10-new.png',
                    },
                    {
                        title: 'CASTLE NATHRIA',
                        text: 'Nam luctus risus tempus magna mollis varius. Etiam vitae dui a metus sodales mollis. Etiam rhoncus ante sit amet porttitor.',
                        linkTo: '/rgbrcarry4',
                        img: 'https://i.ibb.co/rFBr7Sz/item4-new.png',
                    },
                    {
                        title: 'CUSTOM KEY 8-20',
                        text: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam eget est sed mauris elementum luctus.',
                        linkTo: '/rgbrcarry5',
                        img: 'https://i.ibb.co/jv6cYQ8/item6-new.png',
                    },
                ]);
            }, Math.floor(Math.random() * 600));
        });
    }

    async getItemTabsHeaders() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([
                    { label: 'Our services', id: 1},
                    { label: 'Our offers', id: 2},
                    { label: 'Our offers', id: 3},
                    { label: 'Our offers', id: 4},
                    { label: 'Our offers', id: 5},
                ]);
            }, Math.floor(Math.random() * 600))
        });
    }

    async getItemTabsContent(id) {
        return new Promise(resolve => {
            setTimeout(() => {
                switch (id) {
                    case 1:
                        resolve({
                            id: 'content_1',
                            items: [
                                { title: 'RGD RATING CARRY1',
                                price: `39`,
                                id: 1,
                                background: 'https://i.ibb.co/hf28TSv/image-4.jpg' },

                                { title: 'RGD RATING CARRY1',
                                price: `39`,
                                id: 2,
                                background: 'https://i.ibb.co/hf28TSv/image-4.jpg' },

                                { title: 'RGD RATING CARRY1',
                                price: `39`,
                                id: 3,
                                background: 'https://i.ibb.co/hf28TSv/image-4.jpg' },

                                { title: 'RGD RATING CARRY1',
                                price: `39`,
                                id: 4,
                                background: 'https://i.ibb.co/hf28TSv/image-4.jpg' },

                                { title: 'RGD RATING CARRY1',
                                price: `39`,
                                id: 5,
                                background: 'https://i.ibb.co/hf28TSv/image-4.jpg' },

                                { title: 'RGD RATING CARRY1',
                                price: `39`,
                                id: 6,
                                background: 'https://i.ibb.co/hf28TSv/image-4.jpg' },
                            ]
                        });

                    case 2:
                        resolve({
                            id: 'content_2',
                            items: [
                                { title: 'RGD RATING CARRY2',
                                    price: `39`,
                                    id: 7,
                                    background: 'https://i.ibb.co/hf28TSv/image-4.jpg' },

                                { title: 'RGD RATING CARRY2',
                                    price: `39`,
                                    id: 8,
                                    background: 'https://i.ibb.co/hf28TSv/image-4.jpg' },

                                { title: 'RGD RATING CARRY2',
                                    price: `39`,
                                    id: 9,
                                    background: 'https://i.ibb.co/hf28TSv/image-4.jpg' },

                                { title: 'RGD RATING CARRY2',
                                    price: `39`,
                                    id: 10,
                                    background: 'https://i.ibb.co/hf28TSv/image-4.jpg' },

                                { title: 'RGD RATING CARRY2',
                                    price: `39`,
                                    id: 11,
                                    background: 'https://i.ibb.co/hf28TSv/image-4.jpg' },

                                { title: 'RGD RATING CARRY2',
                                    price: `39`,
                                    id: 12,
                                    background: 'https://i.ibb.co/hf28TSv/image-4.jpg' },
                            ]
                        });

                    case 3:
                        resolve({
                            id: 'content_3',
                            items: [
                                { title: 'RGD RATING CARRY3',
                                    price: `39`,
                                    id: 13,
                                    background: 'https://i.ibb.co/hf28TSv/image-4.jpg' },

                                { title: 'RGD RATING CARRY3',
                                    price: `39`,
                                    id: 14,
                                    background: 'https://i.ibb.co/hf28TSv/image-4.jpg' },

                                { title: 'RGD RATING CARRY3',
                                    price: `39`,
                                    id: 15,
                                    background: 'https://i.ibb.co/hf28TSv/image-4.jpg' },

                                { title: 'RGD RATING CARRY3',
                                    price: `39`,
                                    id: 16,
                                    background: 'https://i.ibb.co/hf28TSv/image-4.jpg' },

                                { title: 'RGD RATING CARRY3',
                                    price: `39`,
                                    id: 17,
                                    background: 'https://i.ibb.co/hf28TSv/image-4.jpg' },

                                { title: 'RGD RATING CARRY3',
                                    price: `39`,
                                    id: 18,
                                    background: 'https://i.ibb.co/hf28TSv/image-4.jpg' },
                            ]
                        });

                    case 4:
                        resolve({
                            id: 'content_4',
                            items: [
                                { title: 'RGD RATING CARRY4',
                                    price: `39`,
                                    id: 19,
                                    background: 'https://i.ibb.co/hf28TSv/image-4.jpg' },

                                { title: 'RGD RATING CARRY4',
                                    price: `39`,
                                    id: 20,
                                    background: 'https://i.ibb.co/hf28TSv/image-4.jpg' },

                                { title: 'RGD RATING CARRY4',
                                    price: `39`,
                                    id: 21,
                                    background: 'https://i.ibb.co/hf28TSv/image-4.jpg' },

                                { title: 'RGD RATING CARRY4',
                                    price: `39`,
                                    id: 22,
                                    background: 'https://i.ibb.co/hf28TSv/image-4.jpg' },

                                { title: 'RGD RATING CARRY4',
                                    price: `39`,
                                    id: 23,
                                    background: 'https://i.ibb.co/hf28TSv/image-4.jpg' },

                                { title: 'RGD RATING CARRY4',
                                    price: `39`,
                                    id: 24,
                                    background: 'https://i.ibb.co/hf28TSv/image-4.jpg' },
                            ]
                        });

                    case 5:
                        resolve({
                            id: 'content_5',
                            items: [
                                { title: 'RGD RATING CARRY5',
                                    price: `39`,
                                    id: 25,
                                    background: 'https://i.ibb.co/hf28TSv/image-4.jpg' },

                                { title: 'RGD RATING CARRY5',
                                    price: `39`,
                                    id: 26,
                                    background: 'https://i.ibb.co/hf28TSv/image-4.jpg' },

                                { title: 'RGD RATING CARRY5',
                                    price: `39`,
                                    id: 27,
                                    background: 'https://i.ibb.co/hf28TSv/image-4.jpg' },

                                { title: 'RGD RATING CARRY5',
                                    price: `39`,
                                    id: 28,
                                    background: 'https://i.ibb.co/hf28TSv/image-4.jpg' },

                                { title: 'RGD RATING CARRY5',
                                    price: `39`,
                                    id: 29,
                                    background: 'https://i.ibb.co/hf28TSv/image-4.jpg' },

                                { title: 'RGD RATING CARRY5',
                                    price: `39`,
                                    id: 30,
                                    background: 'https://i.ibb.co/hf28TSv/image-4.jpg' },
                            ]
                        });

                }
            }, 1000);
        })
    }
}