import stylesUtility from '../styles/Utility.module.scss'
import stylesCard from '../styles/Card.module.scss'

const AboutContent = () => {
  return (
      <div className={`
        ${stylesUtility["flex"]} 
        ${stylesUtility["is_jus_spbetween"]}
        ${stylesUtility["gap_20"]}
      `}>
        <div className={`
          ${stylesUtility["flex_item_12"]} 
          ${stylesUtility["flex_item_sm_6"]}
          ${stylesUtility["flex_item_md_8"]}
        `}>
          <p className={stylesUtility.font_medium}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
          Aenean commodo ligula eget dolor. Aenean massa. 
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. 
          Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. 
          In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. 
          Nullam dictum felis eu pede mollis pretium. Integer tincidunt.</p>
        </div>

        <div className={`
          ${stylesUtility["flex_item_12"]} 
          ${stylesUtility["flex_item_sm_6"]}
          ${stylesUtility["flex_item_md_4"]}
        `}>
          <p className={stylesUtility.font_medium}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
          Aenean commodo ligula eget dolor. Aenean massa. 
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. 
          Nulla consequat massa quis enim.</p>
        </div>
      </div>
  )
}

export default AboutContent