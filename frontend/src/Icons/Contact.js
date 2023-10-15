import { IconButton, SvgIcon, Tooltip } from '@mui/material'
import React from 'react'
import UsersIcon from '@heroicons/react/24/solid/UsersIcon';
function ContactIcon() {
  return (
    <div>
        <Tooltip title="Contacts">
              <IconButton>
                <SvgIcon fontSize="small">
                  <UsersIcon />
                </SvgIcon>
              </IconButton>
            </Tooltip>
    </div>
  )
}

export default ContactIcon