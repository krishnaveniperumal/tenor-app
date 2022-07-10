export const  handleScrollCalculation =()=> {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
  }

export const Loader = ()=>{
    return(
        <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    )
}
