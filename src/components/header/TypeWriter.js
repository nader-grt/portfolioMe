import { Typewriter } from 'react-simple-typewriter'

function TypeWriter() {

 
  return (
    <>
    <Typewriter 
    words={['Developer web', 'Front end', 'Back end']}
    loop={2}
    cursor
    cursorStyle='|'
    typeSpeed={220}
    deleteSpeed={350}
    delaySpeed={500}
    
    />

   
    </>
  )
}

export default TypeWriter