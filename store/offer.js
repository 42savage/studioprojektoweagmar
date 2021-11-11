export const state = () => ({
  offerList: [
    {
      id: 0,
      backgroundURI: 's3',
      name: 'projekt-koncepcyjny',
      title: 'Projekt koncepcyjny',
      seoDesc:
        '⭐Projekt, który z pewnością pomoże Ci wyobrazić sobie jak może wyglądać Twój wymarzony salon, kuchnia, sypialnia czy nawet całe mieszkanie.⭐',
      content: 'W skład projektu koncepcyjnego wchodzą następujące usługi:',
      list: [
        'Inwentaryzacja pomieszczeń',
        'Konsultacje z projektantem',
        'Wizualizacje 3D',
      ],
      text: 'Projekt wykonywany jest bezpośrednio w domu u klienta podczas pomiaru.',
    },
    {
      id: 1,
      backgroundURI: 's1',
      name: 'projekt-wykonawczy',
      title: 'Projekt wykonawczy',
      seoDesc:
        '⭐Projekt, który jak sama nazwa sugeruje, charakteryzuje się tym, że najpierw pomaga Ci wyobrazić sobie przyszłe pomieszczenie, a następnie wdrażany jest w życie⭐',
      content: 'Indywidualny projekt w skład którego wchodzi:',
      list: [
        'Inwentaryzacja pomieszczeń',
        'Konsultacje z projektantem',
        'Wizualizacja 3D',
        'Specyfikacja produktów wraz z cenami',
      ],
      text: 'Projekt wykonawczy jest nieco bardziej czasochłonny niż projekt koncepcyjny, dlatego nie jesteśmy w stanie wykonać go na miejscu u klienta lecz u nas w biurze.',
    },
    {
      id: 2,
      backgroundURI: 's2',
      name: 'projekt-kuchni',
      title: 'Projekt kuchni',
      seoDesc:
        '⭐Projekt samej kuchni, który wykonywany jest nawet u klienta, pomaga wyobrazić sobie kuchnie. Do wyboru zastosowane systemy oraz rozmieszczenie gniazdek⭐',
      content: 'Indywidualny projekt w skład którego wchodzi:',
      list: ['Pierwszy punkt', 'drugi punkt', 'trzeci punkt', 'czwarty punkt'],
      text: 'Zarówno jak projekt koncepcyjny, projekt kuchni jesteśmy w stanie wykonać u klienta. Wizualizacja już podczas pomiaru znacznie pomaga wyobraźić sobie przyszłą kuchnie.',
    },
  ],
  offerOptions: [
    {
      id: 0,
      title: 'Idea',
      contains: ['projekt-kuchni', 'projekt-koncepcyjny', 'projekt-wykonawczy'],
      content: 'Wstępny zarys projektu',
      icon: 'icons-pictograms-bulb',
      active: false,
    },
    {
      id: 1,
      title: 'Konsultacje',
      contains: ['projekt-kuchni', 'projekt-koncepcyjny', 'projekt-wykonawczy'],
      content: 'Konsultacje z projektantem',
      icon: 'icons-pictograms-headphone',
      active: false,
    },
    {
      id: 2,
      title: 'Specyfikacja',
      contains: ['projekt-koncepcyjny', 'projekt-wykonawczy'],
      content: 'Wykaz potrzebnych materiałów',
      icon: 'icons-pictograms-stack',
      active: false,
      route: { name: 'Projekt koncepcyjny', to: 'projekt-koncepcyjny' },
    },
    {
      id: 3,
      title: 'Punkt #4',
      contains: ['projekt-wykonawczy'],
      content: 'Czwarte i ostatnie coś tam',
      icon: 'icons-pictograms-blur',
      active: false,
      route: { name: 'Projekt wykonawczy', to: 'projekt-wykonawczy' },
    },
    {
      id: 4,
      title: 'Wdrożenie',
      contains: ['projekt-wykonawczy'],
      content: 'Przeniesienie projektu z papieru w rzeczywistość',
      icon: 'icons-pictograms-folder',
      active: false,
      route: { name: 'Projekt wykonawczy', to: 'projekt-wykonawczy' },
    },
  ],
  offerContent: [
    {
      id: 0,
      contains: ['projekt-koncepcyjny'],
      text: 'Projekt wyróżnia się tym, że jest wykonywany u klienta na miejscu, co z pewnością pomaga wyobrażeniu sobie finalnego wyglądu wymarznej kuchni. Przekłada się to na szybkość realizacji oraz jakość.',
      images: ['pk1', 'pk2', 'pk3'],
    },
    {
      id: 1,
      contains: ['projekt-wykonawczy'],
      text: 'Projekt wykonawczy to projekt, w którym klient jest już od początku zdecydowany na aranżację kuchni. Do każdego projektu podchodzimy indywidualnie, umożliwiamy klientom możliwość dopięcia każdego szczegółu w projekcie.',
      images: ['pw1', 'pw2', 'pw3'],
    },
    {
      id: 2,
      contains: ['projekt-kuchni'],
      text: 'Projekt skupiony wyłącznie na kuchni. Klient do wyboru ma systemu jakie mają być zastosowane w poszczególnych szafkach czy też układy szuflad.',
      images: ['pk1', 'pk2', 'pk3'],
    },
  ],
});

export const mutations = {
  setActive(state, payload) {
    for (let i = 0; i < state.offerOptions.length; i++) {
      if (state.offerOptions[i] === payload[i]) {
        state.offerOptions[i].active = true;
      }
    }
  },
  setNotActive(state) {
    state.offerOptions.forEach((option) => {
      option.active = false;
    });
  },
};

export const actions = {
  setActive({ commit }, payload) {
    commit('setActive', payload);
  },
  setNotActive({ commit }) {
    commit('setNotActive');
  },
};

export const getters = {
  offerList(state) {
    return state.offerList;
  },
  offerOptions(state) {
    return state.offerOptions;
  },
  specifiedOffer(state, getters, rootState) {
    return state.offerList.find(
      (offer) => offer.name === rootState.route.params.id
    );
  },
  specifiedOptions(state, getters, rootState) {
    return state.offerOptions.filter((option) => {
      if (option.contains.includes(rootState.route.params.id)) {
        return option;
      }
    });
  },
  specifiedOfferContent(state, getters, rootState) {
    return state.offerContent.filter((option) => {
      if (option.contains.includes(rootState.route.params.id)) {
        return option;
      }
    });
  },
};
