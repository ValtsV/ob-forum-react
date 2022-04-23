import React from 'react'
import { Link } from 'react-router-dom'

export const PopupMenu = ({linkData, buttonData}) => {


  return (
    <div data-testid='popup-menu'>
      <ul>
        {linkData ?
        linkData.map((link, id) => <li key={id} >
              <Link to={link.path}>
              {link.name}
              </Link>
            }
          </li>) :
          null
          }
          {buttonData ? 
          buttonData.map((button, id) => <li key={id} >
            <button onClick={button.function}>
                {button.name}
            </button>
          </li>) :
        null }
      </ul>
    </div>
  )
}

