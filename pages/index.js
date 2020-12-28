import Navbar from '../components/navbar';
import styled from 'styled-components';
import Action from '../components/callToAction';

const StyledIndex = styled.div`
  @media only screen and (min-width: 1024px) {
    .mob-nav {
      display: none;
    }
    .container {
      display: flex;
      align-items: center;
      flex-direction: row-reverse;
    }
    .mob-img {
      display: none;
    }
    main {
      max-width: 30%;
      margin: 0 auto;
    }
    .desk-img {
     width: 50%;
     max-width: 50%;
     height: 100vh;
    }
 }
 @media only screen and (max-width: 1024px) {
    .desk-nav { 
      display: none;
    }
    .desk-img {
      display: none;
    }
 }
`;

export default function Home() {
  return (
    <StyledIndex>
      <div className="mob-nav">
         <Navbar />
      </div>
      <div className="container">
        <div className="mob-img">
           <img src="/hero-mobile.jpg" alt="hero-img" width="100%" height="auto" />
        </div>
        <div className="desk-img">
           <img src="/hero-desktop.jpg" alt="hero-img" width="100%" height="100%" />
        </div>
        <main>
        <Action />  
        </main>
      </div>
    </StyledIndex>
  )
}
