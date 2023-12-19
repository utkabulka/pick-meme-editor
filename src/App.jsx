import { useState } from 'react'
import './App.css'
import DefaultPack from './DefaultPack'
import Card from './components/Card'

function App() {
  const [pack, setPack] = useState(DefaultPack)

  function handleCardDeleted(cardId) {
    let newPack = { ...pack }
    newPack.cards = newPack.cards.filter((card) => {
      if (card.id != cardId) return card
    })
    setPack(newPack)
  }

  return (
    <>
      <div className='header'></div>
      <div className='cards'>
        {pack.cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            text={card.text}
            author={pack.author}
            cardColor={pack.card_color}
            textColor={pack.text_color}
            onDelete={handleCardDeleted}
          />
        ))}
      </div>
    </>
  )
}

export default App
