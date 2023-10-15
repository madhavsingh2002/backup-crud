import { IconButton, SvgIcon, Tooltip,Badge } from '@mui/material'
import React from 'react'
import BellIcon from '@heroicons/react/24/solid/BellIcon';

function NotificationIcon() {
  return (
    <div>
        <Tooltip title="Notifications">
              <IconButton>
                <Badge
                  badgeContent={4}
                  color="success"
                  variant="dot"
                >
                  <SvgIcon fontSize="small">
                    <BellIcon />
                  </SvgIcon>
                </Badge>
              </IconButton>
            </Tooltip>
    </div>
  )
}

export default NotificationIcon