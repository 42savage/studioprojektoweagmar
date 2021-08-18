export const state = () => ({
  offerList: [
    {
      id: 0,
      backgroundURI: 's3',
      name: 'projekt-koncepcyjny',
      title: 'Projekt koncepcyjny',
      content: 'W skład projektu koncepcyjnego wchodzą następujące usługi:',
      list: [
        'Inwentaryzacja pomieszczeń',
        'Konsultacje z projektantem',
        'Wizualizacje 3D',
      ],
      text: 'Projekt wykonywany jest bezpośrednio w domu u klienta podczas pomiaru.',
      options: 2,
    },
    {
      id: 1,
      backgroundURI: 's1',
      name: 'projekt-wykonawczy',
      title: 'Projekt wykonawczy',
      content: 'Indywidualny projekt w skład którego wchodzi:',
      list: [
        'Inwentaryzacja pomieszczeń',
        'Konsultacje z projektantem',
        'Wizualizacja 3D',
        'Specyfikacja produktów wraz z cenami',
      ],
      text: 'Projekt wykonawczy jest nieco bardziej czasochłonny niż projekt koncepcyjny, dlatego nie jesteśmy w stanie wykonać go na miejscu u klienta lecz u nas w biurze.',
      options: 3,
    },
    {
      id: 2,
      backgroundURI: 's2',
      name: 'projekt-kuchni',
      title: 'Projekt kuchni',
      content: 'Indywidualny projekt w skład którego wchodzi:',
      list: ['Pierwszy punkt', 'drugi punkt', 'trzeci punkt', 'czwarty punkt'],
      text: 'Zarówno jak projekt koncepcyjny, projekt kuchni jesteśmy w stanie wykonać u klienta. Wizualizacja już podczas pomiaru znacznie pomaga wyobraźić sobie przyszłą kuchnie.',
      options: 5,
    },
  ],
  offerOptions: [
    {
      id: 0,
      title: 'Punkt #1',
      content: 'Coś tam',
      icon: 'icons-pictograms-bulb',
      contains: ['projekt-kuchni', 'projekt-koncepcyjny', 'projekt-wykonawczy'],
      active: true,
    },
    {
      id: 1,
      title: 'Punkt #2',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ',
      icon: 'icons-pictograms-headphone',
      contains: ['projekt-kuchni', 'projekt-koncepcyjny', 'projekt-wykonawczy'],
      active: false,
    },
    {
      id: 2,
      title: 'Punkt #3',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ',
      icon: 'icons-pictograms-stack',
      contains: ['projekt-koncepcyjny', 'projekt-wykonawczy'],
      active: false,
    },
    {
      id: 3,
      title: 'Punkt #4',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ',
      icon: 'icons-pictograms-blur',
      contains: ['projekt-wykonawczy'],
      active: false,
    },
    {
      id: 4,
      title: 'Punkt #5',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ',
      icon: 'icons-pictograms-folder',
      contains: ['projekt-wykonawczy'],
      active: false,
    },
  ],
  route: '',
})

export const mutations = {
  setActive(state, payload) {
    state.offerOptions.forEach((offer) => {
      if ((offer = payload)) {
        offer.active = true
      }
    })
  },
}

export const actions = {
  setActive({ commit }, payload) {
    commit('setActive', payload)
  },
}

export const getters = {
  offerList(state) {
    return state.offerList
  },
  offerOptions(state) {
    return state.offerOptions
  },
  specifiedOffer(state, getters, rootState) {
    return state.offerList.find(
      (offer) => offer.name === rootState.route.params.id
    )
  },
}
