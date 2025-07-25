import React from "react";
import { NavLink } from "react-router-dom";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBFooter
      bgColor="none"
      className="text-center text-lg-start text-white bg-gray-800"
    >
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="facebook-f" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="twitter" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="google" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="instagram" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="linkedin" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="github" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon color="secondary" icon="gem" className="me-3" />
                Bitcoin Bros
              </h6>
              <p>
                Are you ready to revolutionize the way you think about money?
                Say goodbye to traditional banking and hello to a limitless,
                decentralized financial world with Bitcoin Bros — the
                cutting-edge Bitcoin company that's shaking up the game!
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="#!" className="text-reset">
                  Money
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Money
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Money
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Money
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <NavLink
                  to="/"
                  className="text-blue-500 underline! hover:text-blue-300!"
                >
                  Home
                </NavLink>
              </p>
              <p>
                <NavLink
                  to="/calc"
                  className="text-blue-500 underline! hover:text-blue-300!"
                >
                  Calculate savings
                </NavLink>
              </p>
              <p>
                <NavLink
                  to="/about"
                  className="text-blue-500 underline! hover:text-blue-300!"
                >
                  About us
                </NavLink>
              </p>
              <p>
                <NavLink
                  to="/about/contact"
                  className="text-blue-500 underline! hover:text-blue-300!"
                >
                  Contact
                </NavLink>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon color="secondary" icon="home" className="me-2" />
                On the Moon, Space 0000, Space
              </p>
              <p>
                <MDBIcon color="secondary" icon="envelope" className="me-3" />
                info@bitcoinbros.com
              </p>
              <p>
                <MDBIcon color="secondary" icon="phone" className="me-3" /> + 01
                234 567 88
              </p>
              <p>
                <MDBIcon color="secondary" icon="print" className="me-3" /> + 01
                234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2025 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          Bitcoin bros inc
        </a>
      </div>
    </MDBFooter>
  );
}
