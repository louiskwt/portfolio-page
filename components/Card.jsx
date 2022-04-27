import React from 'react'
import { UilJavaScript, UilReact, UilHtml5, UilBoltAlt, UilGithub } from '@iconscout/react-unicons'

const Card = ({link, repo, technologies, title}) => {
    let iconList = []
    technologies.map((technology) => {
        if (technology.includes('html')) {
            iconList.push(<UilHtml5 size={30} />)
        }
        if (technology.includes('javascript')) {
            iconList.push(<UilJavaScript size={30} />)
        }
        if(technology.includes('react')) {
            iconList.push(<UilReact size={30} />)
        }
    })

    return (
        <div className="card__content">
            <div>
                {iconList}
                <h3 className='card__title'>
                    {title}
                </h3>
                <div className="card__buttons">
                    <a href={link} className="button__small button__flex card__button">
                        Demo <UilBoltAlt className="card__icon" />
                    </a>
                    <a href={repo} className="button__small button__flex card__button">
                        Repo <UilGithub className="card__icon" />
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Card