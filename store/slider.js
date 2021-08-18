export const state = () => ({
  slides: [
    {
      id: 0,
      name: 'Slide 1',
      title: ' Projektujemy wnętrza',
      subTitle: 'Klasyczne i nowoczesne',
      text: 'Jesteśmy nowopowstałym studiem projektowym, które postawiło sobie za cel tworzenie zarówno nowoczesnych jak i klasycznych wizualiacji przyjmenych dla oka.',
      image: 's1',
      route: '#realisations',
    },
    {
      id: 1,
      name: 'Slide 2',
      title: ' Projektujemy kuchnie',
      subTitle: 'Klasyczne i nowoczesne',
      text: 'Jesteśmy nowopowstałym studiem projektowym, które postawiło sobie za cel tworzenie zarówno nowoczesnych jak i klasycznych wizualiacji przyjmenych dla oka.',
      image: 's2',
      route: '#realisations',
    },
    {
      id: 3,
      name: 'Slide 3',
      title: 'Facebook',
      subTitle: 'Zajrzyj na naszego fanpage',
      text: 'Jesteśmy nowopowstałym studiem projektowym, które postawiło sobie za cel tworzenie zarówno nowoczesnych jak i klasycznych wizualiacji przyjmenych dla oka.',
      image: 's3',
      route: '#realisations',
    },
  ],
})
export const getters = {
  slides(state) {
    return state.slides
  },
}
