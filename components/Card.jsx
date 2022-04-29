import React from 'react'
import { UilJavaScript, UilReact, UilHtml5, UilBoltAlt, UilGithub } from '@iconscout/react-unicons'
import styles from '../styles/Card.module.css'

const Card = ({link, repo, technologies, title}) => {
    // Generate icons for each projects based on technologies used
    let iconList = []
    technologies.map((technology, index) => {
        if (technology.includes('html')) {
            iconList.push(<UilHtml5 className={styles.card__icon} size={30} key={index} />)
        }
        if (technology.includes('javascript')) {
            iconList.push(<UilJavaScript className={styles.card__icon} size={30} key={index} />)
        }
        if(technology.includes('react')) {
            iconList.push(<UilReact className={styles.card__icon} size={30} key={index} />)
        }
    })

    return (
        <div className={styles.card__content}>
            <div>
                {/* Icon for technolgies used for each project */}
                {iconList}
                <h3 className={styles.card__title}>
                    {title}
                </h3>
                <div className={styles.card__buttons}>
                    <a href={link} target="_blank" className={"button__flex button__link " + `${styles.card__button}`}>
                        Demo <UilBoltAlt className={styles.card__icon} />
                    </a>
                    <a href={repo} target="_blank" className={"button__flex button__link " + `${styles.card__button}`}>
                        Repo <UilGithub className={styles.card__icon} />
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Card