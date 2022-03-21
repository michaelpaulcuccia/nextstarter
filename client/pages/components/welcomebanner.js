import React from 'react';
import { useRouter } from 'next/router';
import { Container } from 'react-bootstrap';

export default function Welcomebanner() {

    const router = useRouter();
    let URL_PATH = router.pathname;
    
    if (URL_PATH === '/') {
      URL_PATH = 'home';
    } else {
      URL_PATH = URL_PATH.slice(1);
    }

  return (
    <>
        <Container className='py-3'>
            <h1>welcome to {URL_PATH}</h1>
        </Container>
    </>
  )
}
