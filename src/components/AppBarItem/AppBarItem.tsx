import React from 'react'
import { createUseStyles } from 'react-jss'
import { CustomTheme } from '../../theme'

const useStyles = createUseStyles((theme: CustomTheme) => ({
  mainContainer: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: theme.fontProperties.textFontSize,
    fontWeight: 'bold',
    cursor: 'pointer',
    justifyContent: 'space-between',
    color: theme.colors.white,
    '&:hover': {
      color: theme.colors.secondaryColor,
      borderBottom: `2px solid ${theme.colors.secondaryColor}`,
      transition: 'borderBottom 1s',
    },
  },
  title: {
    marginLeft: theme.spacing(1.25),
  },
}))

interface AppBarItemProps {
  icon: JSX.Element
}

const AppBarItem: React.FC<AppBarItemProps> = ({ icon, children }) => {
  const classes: Record<'mainContainer' | 'title', string> = useStyles()
  return (
    <div className={classes.mainContainer}>
      {icon}
      <div className={classes.title}>{children}</div>
    </div>
  )
}

export { AppBarItem }
