import { useState } from 'react'
import './App.css'
import DefaultPack from './DefaultPack'
import Card from './components/Card'

function App() {
  const [packInfo, setPackInfo] = useState({
    pack_name: DefaultPack.pack_name,
    language: DefaultPack.language,
    author: DefaultPack.author,
    card_color: DefaultPack.card_color,
    text_color: DefaultPack.text_color,
  })
  const [cards, setCards] = useState(DefaultPack.cards)

  function handlePackInfoChanged(key, value) {
    setPackInfo({ ...packInfo, [key]: value })
  }

  function handleCardAdded() {
    setCards([
      ...cards,
      {
        id: crypto.randomUUID(),
        text: 'Situation text',
      },
    ])
  }

  function handleCardDeleted(cardId) {
    setCards(
      cards.filter((card) => {
        if (card.id != cardId) return card
      })
    )
  }

  return (
    <>
      <div className='header'>
        <button>Import</button>
        <button>Export</button>
        <input
          value={packInfo.pack_name}
          onChange={(e) => {
            handlePackInfoChanged('pack_name', e.target.value)
          }}
          placeholder='Pack name'
        />
        <input
          value={packInfo.author}
          onChange={(e) => {
            handlePackInfoChanged('author', e.target.value)
          }}
          placeholder='Author'
        />
      </div>
      <div className='cards'>
        {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            text={card.text}
            author={packInfo.author}
            cardColor={packInfo.card_color}
            textColor={packInfo.text_color}
            onDelete={handleCardDeleted}
          />
        ))}
        <div className='card add-card' onClick={handleCardAdded}>
          +
        </div>
      </div>
    </>
  )
}

export default App
