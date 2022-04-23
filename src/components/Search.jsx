import React, {useState} from 'react'

export const Search = () => {


    const [searchValue, setSearchValue] = useState('');

    

  return (
    <label>
        <span >
            <svg style={{height: '20px'}} viewBox="0 0 19 19">
                <path
                d="M8 16C9.846 16 11.543 15.365 12.897 14.312L17.293 18.708L18.707 17.294L14.311 12.898C15.365 11.543 16 9.846 16 8C16 3.589 12.411 2.57666e-08 8 1.66089e-08C3.589 7.45115e-09 1.03521e-08 3.589 2.30753e-08 8C3.57984e-08 12.411 3.589 16 8 16ZM8 2C11.309 2 14 4.691 14 8C14 11.309 11.309 14 8 14C4.691 14 2 11.309 2 8C2 4.691 4.691 2 8 2Z"
                fill="#A5A8B3"
                />
            </svg>
        </span>
        <input
        placeholder="Buscar"
        type="search"
        name="search"
        onChange={(e) => {
            setSearchValue(e.target.value)
        }}
        />
    </label>
  )
}
