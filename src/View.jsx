const View = ({bgColor, children}) => {
    return(
        <main style={{background: bgColor, transitionDuration: .5}}>
            {children}
        </main>
    )
}

export default View