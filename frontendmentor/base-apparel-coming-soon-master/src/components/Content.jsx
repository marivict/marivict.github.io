import React from 'react'
import Input from './Input'

const Content = () => {
    return(
        <div className='coming-soon__content'>
            <div className='coming-soon__content__h1'>
            <h1 className='coming-soon__content__h1--light'>We're </h1>
            <h1 className='coming-soon__content__h1--bold'>Coming</h1>
            <h1 className='coming-soon__content__h1--bold'>Soon</h1>
            </div>
            <div className="coming-soon__content__text">
                <p>Hello fellow shoppers! We're currently building our new fashion store. Add your email below 
                    to stay up-to-date with announcements and our launch deals.
                </p>
                <Input />
            </div>
        </div>
    )
}

export default Content