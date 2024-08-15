

export function ContactForm() {
  return (
    <form method="POST">
      <div>
        <label>Namn</label>
        <input type="text" />
      </div>
      <div>
        <label>Telefonnr</label>
        <input type="text" />
      </div>
      <div>
        <label>Meddelande</label>
        <input type="text" />
      </div>
      <button>Skicka</button>
    </form>
  )
}