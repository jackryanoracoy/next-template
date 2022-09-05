import Image from 'next/image'
import stylesUtility from '../styles/Utility.module.scss'

const AboutContent = ({ about }) => {
  return (
    <div className={`
      ${stylesUtility["flex"]}
      ${stylesUtility["is_jus_spbetween"]}
      ${stylesUtility["gap_20"]}
    `}>
      <div className={`
        ${stylesUtility["flex_item_12"]}
        ${stylesUtility["flex_item_xs_6"]}
        ${stylesUtility["flex_item_md_9"]}
      `}>
        <p className={stylesUtility.font_medium}>{about.body}</p>
      </div>

      <div className={`
        ${stylesUtility["flex_item_12"]}
        ${stylesUtility["flex_item_xs_6"]}
        ${stylesUtility["flex_item_md_3"]}
      `}>
        <Image
          src="/images/icon-384x384.png"
          alt="Icon"
          width={384}
          height={384}
        />
      </div>
    </div>
  )
}

export default AboutContent
