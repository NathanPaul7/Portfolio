import React from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';


export default class NavBar extends React.Component {
  render(){
    return(
      <div className="Navigate">
      <div style={{height: '300px', position: 'relative'}}>
    <Layout style={{background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}>
        <Header transparent title="Nathan Paul" style={{color: 'yellow'}}>
            <Navigation>
                <a href="./Home">Home</a>
                <a href="./Resume">Resume</a>
                <a href="./Projects">Projects</a>
                <a href="./AboutMe">About Me</a>
            </Navigation>
        </Header>
        <Drawer title="Portfolio">
            <Navigation>
                <a href="./Resume">Resume</a>
                <a href="./Projects">Projects</a>
                <a href="https://github.com/NathanPaul7" target="_blank">GitHub</a>
                <a href="https://nathanpaultech.wordpress.com" target="_blank">Blog</a>
            </Navigation>
        </Drawer>
        <Content />
    </Layout>
</div>
      </div>
      );
  }

}

// import React from 'react';
// // import { Link } from 'react-router-dom';

// export default function Nav() {
//   return (
//     <div className="Header">
//         <span>
//           <ul>
//             <li className="NavBar">Home</li>
//             <li className="NavBar">Resume</li>
//             <li className="NavBar">Projects</li>
//             <li className="NavBar">About Me</li>
//           </ul>
//         </span>
//     </div>
//   );
// }
