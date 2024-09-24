import { useState, useRef, MouseEvent } from "react"

import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
//import styles from "./DropdownMenu.module.css"
import { useNavigate } from "react-router-dom"

export const DropdownMenu = () => {
  const menuButtonRef = useRef<HTMLDivElement>(null)

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const navigate = useNavigate()

  const handleAgentsButton = () => {
    handleClose()
    navigate("/agents")
  }

  const handleMapsButton = () => {
    handleClose()
    navigate("/maps")
  }

  const handleWeaponsButton = () => {
    handleClose()
    navigate("/weapons")
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <i
        ref={menuButtonRef}
        className="fa-solid fa-bars"
        onClick={handleClick}
      ></i>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleAgentsButton}>Agentes</MenuItem>
        <MenuItem onClick={handleMapsButton}>Mapas</MenuItem>
        <MenuItem onClick={handleWeaponsButton}>Armas</MenuItem>
      </Menu>
    </div>
  )
}
