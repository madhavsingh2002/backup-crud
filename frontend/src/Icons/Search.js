import { IconButton, SvgIcon, Tooltip } from '@mui/material'
import React from 'react'
import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon';
function SearchIcon() {
  return (
    <div>
        <Tooltip title="Search">
              <IconButton>
                <SvgIcon fontSize="small">
                  <MagnifyingGlassIcon />
                </SvgIcon>
              </IconButton>
            </Tooltip>
    </div>
  )
}

export default SearchIcon