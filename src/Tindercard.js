import React, { useEffect, useState }  from 'react'
import TinderCard from 'react-tinder-card';
import './Tindercard.css'
import database from './Firebase'
function Tindercard() {

    const [Person, setPerson] = useState([])

    useEffect(() => {
        database.collection('people').onSnapshot(snapshot => {
            setPerson(snapshot.docs.map(doc => doc.data()))
        })
    },[]);
    console.log(Person)
    return (
        <div>
            {Person.map(per  => (
                <div className = 'tinderCards__cardContainers'>

                <TinderCard
                className = 'Swipe'
                preventSwipe={['up','down']}
                key={per.name}>
                    <div className='Cards'
                    style = {{backgroundImage: `url(${per.url})`}}>
                        <h3>{per.Name}</h3>
                    </div>
                </TinderCard>
                </div>
            ))}
        </div>
    )
}

export default Tindercard
