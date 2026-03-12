import { useState } from 'react'

export default function FAQ({ items }) {
  const [openIdx, setOpenIdx] = useState(null);
  if (!items || items.length === 0) return null;

  return (
    <div className="faq-list">
      {items.map((item, i) => (
        <div key={i} className={`faq-item ${openIdx === i ? 'open' : ''}`}>
          <button className="faq-question" onClick={() => setOpenIdx(openIdx === i ? null : i)}>
            <span>{item.q}</span>
            <span className="faq-arrow">▼</span>
          </button>
          <div className="faq-answer"><p>{item.a}</p></div>
        </div>
      ))}
    </div>
  )
}
