const withLoading = (Component) => {
  return function WithLoadingComponents({isLoading, ...props}) {
    if(isLoading){
        return <div className="loader4"></div>
    }
    return <Component {...props}/>
  }
}

export default withLoading