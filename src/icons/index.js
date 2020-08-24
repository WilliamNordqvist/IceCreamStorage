import React from "react";

const Icon = ({ type, size = "25px", color = "black" }) => {
  let returnIcon;

  switch (type) {
    case "chair":
      returnIcon = (
        
          <svg
            height={size}
            width={size}
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            fill={color}
          >
            <path d="m400 272h-24v-128h16a8 8 0 0 0 8-8v-120a8 8 0 0 0 -8-8h-272a8 8 0 0 0 -8 8v120a8 8 0 0 0 8 8h16v128h-24a8 8 0 0 0 -8 8v40a8 8 0 0 0 8 8v168a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8v-48h192v48a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8v-168a8 8 0 0 0 8-8v-40a8 8 0 0 0 -8-8zm-272-144v-104h256v104zm232 16v128h-16v-128zm-32 0v128h-144v-128zm-160 0v128h-16v-128zm-24 344h-16v-160h16zm208-56h-192v-8h192zm0-24h-192v-80h192zm32 80h-16v-160h16zm8-176h-272v-24h272z" />
            <circle cx="144" cy="40" r="8" />
            <circle cx="144" cy="112" r="8" />
            <circle cx="368" cy="40" r="8" />
            <circle cx="368" cy="112" r="8" />
          </svg>
        
      );
      break;

    case "table":
      returnIcon = (
          <svg
            height={size}
            width={size}
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            fill={color}
          >
            <path
              d="M504,72H8c-4.418,0-8,3.582-8,8v48c0,4.418,3.582,8,8,8h24v296c0,4.418,3.582,8,8,8h32c4.418,0,8-3.582,8-8V136h352v296
			c0,4.418,3.582,8,8,8h32c4.418,0,8-3.582,8-8V136h24c4.418,0,8-3.582,8-8V80C512,75.582,508.418,72,504,72z M496,120h-24
			c-4.418,0-8,3.582-8,8v296h-16V128c0-4.418-3.582-8-8-8H72c-4.418,0-8,3.582-8,8v296H48V128c0-4.418-3.582-8-8-8H16V88h480V120z"
            />
          </svg>
      );
      break;

    default:
      returnIcon = null;
  }

  return (
    <div className='icon'>{returnIcon}</div>
    )
};

export default Icon;
