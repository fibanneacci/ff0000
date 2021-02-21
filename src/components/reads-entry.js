import React from 'react'

const ReadsEntry = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} id={props.id} style={{ padding: '25px', minHeight: '100px', height: props.words / 15 + 'px'/*, borderTop: '1px solid black'*/, textAlign: 'center' }}>
            {props.book === 'true' &&
                <i><a href={props.url} target='_blank' rel='noreferrer'>{props.title}</a></i>
            }
            {props.book === 'false' &&
                <a href={props.url} target='_blank' rel='noreferrer'>"{props.title}"</a>
            }
            <br />
            {props.author} {props.publication !== '' && <p style={{ display: 'inline' }}>for <i>{props.publication}</i></p>}
        </div>
    )
})

export default ReadsEntry