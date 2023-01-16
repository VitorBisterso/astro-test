import React, { useState } from 'react'

export default function Showcase() {
   const [name, setName] = useState('Vitor')

   return (
      <div>Hello {name}</div>
   )
}
