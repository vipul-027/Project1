import React from 'react'

const Contact = () => {
  return (
    <div class="contact">
      <main>
        <h1>Contact Us</h1>
        <form>
       <div>
        <label>Name</label>
        <input type="text" required placeholder="abc"/>
       </div>
       
       <div>
        <label>Email</label>
        <input type="email" required placeholder="ABC@gmail.com"/>
       </div>

       <div>
        <label>Message</label>
        <input type="text"  required placeholder="tell us about your query"/>
       </div>

          <button type="Submit">Send</button>

       </form>

      </main>
    </div>
  )
}

export default Contact;