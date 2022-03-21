import React from 'react';
import {Card } from 'react-bootstrap';
import Image from 'next/image';
import bruno from '../../data/images/bruno.jpg'
import gigi from '../../data/images/gigi.jpg'
import frankie from '../../data/images/frankie.jpg'

export default function Cards({name, age, isMale, breed}) {

  return (
    <>
    <Card style={{ width: '18rem', margin: '5px' }}>
        {
          name && name === 'Bruno' ? <Image src={bruno} height={200} width={100} /> :
          name === 'Gigi' ? <Image src={gigi} height={200} width={100} /> :
          name === 'Frankie' ? <Image src={frankie} height={200} width={100} /> : 
          null
        }
        <Card.Body>
            <Card.Title>{name}</Card.Title>
                <Card.Text>
                    I am a {isMale === true ? 'boy' : 'girl'}, I am {age} years old and I am a {breed}.
                </Card.Text>
        </Card.Body>
    </Card>
    </>
  )
}
