import nuri from '../assets/Img/nuri.jpg';
import { useEffect } from 'react'

const Nuri = () => {
  useEffect(() => {
    console.log('Mounted the box!')
    return () => {
      console.log('Unmounted the box => Cleaned up any side effects')
    }
  }, [])

  return (
    // <iframe
    //   width="560"
    //   height="315"
    //   src="https://www.youtube.com/embed/VwCyii5GJk&t=1925s"
    //   title="YouTube video player"
    //   frameBorder="0"
    //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    //   allowFullScreen
    // ></iframe>
  <div>
    <img src={nuri} style={{ width: '300px', height: '250px' }}/>
  </div>
  )
}

export default Nuri;