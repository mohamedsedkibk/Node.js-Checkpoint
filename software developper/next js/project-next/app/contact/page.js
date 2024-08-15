import React from 'react'

const contact = () => {
  return (
    <div>
        <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h1>Contact Me</h1>
      <p>If you have any questions or would like to get in touch, please use the form below:</p>
      
      <form style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <label>
          Name:
          <input type="text" name="name" required style={{ padding: '8px', fontSize: '16px', width: '100%' }} />
        </label>
        
        <label>
          Email:
          <input type="email" name="email" required style={{ padding: '8px', fontSize: '16px', width: '100%' }} />
        </label>
        
        <label>
          Message:
          <textarea name="message" rows="5" required style={{ padding: '8px', fontSize: '16px', width: '100%' }}></textarea>
        </label>
        
        <button type="submit" style={{ padding: '10px', fontSize: '16px', cursor: 'pointer' }}>Send</button>
      </form>
    </div>
    </div>
  )
}

export default contact