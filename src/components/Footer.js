import React from 'react';
import ContainerFluid from './ContainerFluid';
import Container from './Container';
import Column from './Column';
import Logo from './Logo';
import Card from './Card';
import Form from './Form';
const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Column modifier="1-of-2">
                    <div className="footer__credits">
                      <Logo/>
                      <a href="tel:2155363800">Phone: 215.536.3800</a>
                      <a href="mailto:Gavin@LaboskiLaw.com">Email: Gavin@LaboskiLaw.com</a>
                    </div>
                    <div className="footer__credits">
                      <h5>Locations</h5>
                      <p>Find us in the historic Free Press Building in the heart of Quakertown.</p>

                      <h6>Laboski Law</h6>
                      <p>314 West Broad Street, Suite 124<br/>
                      Quakertown PA 18951</p>

                      <h6>Laboski Law</h6>
                      <p>The Mellon Building<br/>
                      107 North Broad Street, Suite 303<br/>
                      Doylestown, PA 18901</p>
                    </div>
                </Column>
                <Column modifier="1-of-2">
                  <h4>Let's Connect</h4>
                  <Form/>
                </Column>
            </Container>
        </footer>
    );
};

export default Footer;