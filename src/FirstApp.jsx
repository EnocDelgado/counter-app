import PropsTypes from 'prop-types'

/**
 * 
 * @param {title, subtitle, name} param0 
 * @returns default values
 */

export const FirstApp = ({title, subtitle, name}) => {
    // props are objects {key: value}
  return (
    <>
        <h1>{ title }</h1>
        
        <p>{ subtitle }</p>
        <p>{ name }</p>
        <></>
    </>
  )
}

// PropTypes allow us to define a value type
FirstApp.propTypes = {
    title: PropsTypes.string.isRequired,
    subtitle: PropsTypes.string,
}

FirstApp.defaultProps ={
    title: 'Title does not exist',
    subtitle: 'Subtitle does not exist',
    name: 'Enoc',
}
