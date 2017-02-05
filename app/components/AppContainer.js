import React from 'react'

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '3vh 0',
  }
}

const AppContainer = ({children}) => {
  return (
    <div style={styles.container}>
      {children}
    </div>
  )
}

export default AppContainer;
