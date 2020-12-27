"use strict"

import React from "react"

import {
  Link,
  Element,
  scroller
} from "react-scroll"

class Section extends React.Component {
  scrollTo(offset) {
    scroller.scrollTo("scroll-to-element", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: offset
    })
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <div
              className="collapse navbar-collapse"
              id="bs-example-navbar-collapse-1"
            >
              <ul className="nav navbar-nav">
                <li>
                  <Link
                    activeClass="active"
                    className="test1"
                    to="test1"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={50}
                  >
                    Test 1
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div style={{height:"200vh"}}/>
        <div>
          <Element name="test1" className="element">
            test 1
          </Element>
        </div>
      </div>
    );
  }
}
export default Section
