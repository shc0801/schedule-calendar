import * as React from "react"

const SearchIcon = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
      <path
        d="M18.853 17.438l-3.604-3.604a.613.613 0 00-.267-.156A5.457 5.457 0 0016 10.5a5.5 5.5 0 10-5.5 5.5 5.468 5.468 0 003.18-1.018c.028.101.08.191.155.267l3.604 3.604c.301.301.858.227 1.249-.165.391-.391.465-.949.165-1.25zM10.5 14C8.568 14 7 12.432 7 10.5S8.568 7 10.5 7 14 8.568 14 10.5 12.432 14 10.5 14z"
        opacity={0.75}
      />
    </svg>
  )
}

export default SearchIcon;