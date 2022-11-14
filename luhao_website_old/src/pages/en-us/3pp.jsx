import React, { Component } from 'react'
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Opening from "../../components/Index/opening"
import styles from "./3pp.module.scss"

import Img from "../../images/fifth/fifth_3.png"

export default class Threepp extends Component {
  render() {
    return (
      <Layout>
        <SEO title="3pp" keywords={[`3pp`, `陸豪`, `吸粉服務`]} />
        <Opening
          number="3pp"
          left={
            <div className={styles["lefttext"]}>
              <h1>Integrate third party payments</h1>
              <p>WINPRO cloud integrates the major third-party payment systems in various countries,and the merchant market will be able to cross consumers at domestic and abroad,and the revenue will be greatly improved.</p>
              <div>
                <a href="https://ipickpro.cloudprogrammingonline.com/index">
                  查看更多 >
                </a>
              </div>
            </div>
          }
          right={
            <div className={styles["rightimage"]}>
              <div className={styles["ofFlex"]}>
              </div>
            </div>
          }
        />
        <article className={styles["body"]}>
          <div>
            <h1>Integrate third party payments</h1>
            <p>WINPRO cloud integrates the major third-party payment systems in various countries,and the merchant market will be able to cross consumers at domestic and abroad,and the revenue will be greatly improved.</p>
          </div>
          <div>
            <img src={Img} alt=''/>
          </div>
        </article>
      </Layout>
    )
  }
}
