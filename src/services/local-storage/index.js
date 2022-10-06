const LocalStorageManager = () => {

    const saveToken = (token) => {
      const tokenStr = JSON.stringify({ token })
      localStorage.setItem('token', tokenStr)
    }
  
    const getToken = () => {
      const tokenStr = localStorage.getItem('token')
      return tokenStr ? JSON.parse(tokenStr).token : null
    }

    const getUserId = () => {
      const tokenStr = localStorage.getItem('token')
      const token = tokenStr ? JSON.parse(tokenStr).token : null
      return atob(token.split('.')[1])
    }
  
    return {
      saveToken,
      getToken,
      getUserId
    }
  }
  
  export default LocalStorageManager()