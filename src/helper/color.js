const color = (types) => {
  if (types.includes('grass')) {
    return '#48D0B0'
  } else if (types.includes('fire')) {
    return '#FB6C6C'
  } else if (types.includes('water')) {
    return '#77BDFE'
  } else if (types.includes('electric')) {
    return '#FFCE4B'
  } else if (types.includes('bug')) {
    return '#6BD048'
  } else {
    return '#C4C4C4'
  }
}

export default color