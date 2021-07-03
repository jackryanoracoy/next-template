import stylesUtility from '../styles/Utility.module.scss'
import stylesCard from '../styles/Card.module.scss'

const AboutContent = () => {
  return (
      <div className={`
        ${stylesCard["card"]} 
        ${stylesUtility["block"]}
        ${stylesUtility["height_100"]}
      `}>
        <div className={stylesCard.card_content}>
          <p className={stylesUtility.font_medium}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
          Aenean commodo ligula eget dolor. Aenean massa. 
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. 
          Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. 
          In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. 
          Nullam dictum felis eu pede mollis pretium. Integer tincidunt.</p>
        </div>
      </div>
  )
}

export default AboutContent