import React from 'react'

const NotesEntry = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} id={props.id} style={{ padding: '25px', minHeight: '100px'/*, borderTop: '1px solid black'*/ }}>
            {props.children}
        </div>
    )
})

export default NotesEntry