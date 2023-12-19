const DefaultPack = {
  pack_name: 'Pack name',
  language: 'ru',
  author: 'Author name',
  card_color: '#000000',
  text_color: '#FFFFFF',
  cards: [
    {
      id: crypto.randomUUID(),
      text: 'Situation text',
    },
    {
      id: crypto.randomUUID(),
      text: 'Situation text',
    },
    {
      id: crypto.randomUUID(),
      text: 'Situation text',
    },
    {
      id: crypto.randomUUID(),
      text: 'Situation text',
    },
    {
      id: crypto.randomUUID(),
      text: 'Situation text',
    },
  ],
}

export default DefaultPack
