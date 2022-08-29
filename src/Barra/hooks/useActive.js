import React, { useState } from 'react'

const useActive = () => {
    const [active, setActive] = useState(true)
    const act = () => {
        setActive(!active)
    }
  return {
    active,
    act
}
}

export default useActive