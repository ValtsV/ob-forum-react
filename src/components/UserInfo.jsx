import React from 'react'

export const UserInfo = ({user, onClickHandler}) => {

  return (
    <button onClick={onClickHandler}>
        <span>{user.avatar}</span>
        <span>{user.username}</span>
        <svg
                width="10"
                height="7"
                viewBox="0 0 10 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.57747 0.744141L4.99997 4.32164L1.42247 0.744141L0.244141 1.92247L4.99997 6.67831L9.75581 1.92247L8.57747 0.744141Z"
                  fill="#A5A8B3"
                />
              </svg>
    </button>
  )
}
