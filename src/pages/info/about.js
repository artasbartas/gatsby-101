import React from "react";
import { Link } from "gatsby";
import { graphql } from "gatsby";

import Layout from "../../components/layout2";
import Greeting from "../../components/greeting";
import styled from 'styled-components';
import gatsbyAstronaut from "../../images/gatsby-astronaut.png";
import hillaryImage from "../../images/hillary.jpg";

const UserWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 0, auto, 12px, auto;
`
const Avatar = styled.img`
    flex: 0 0 96px;
    width: 96px;
    margin: 0;
`
const Description = styled.div`
    flex: 1;
    margin-left: 18px;
    padding: 12px;
`
const Username = styled.div`
    margin: 0 0 12px 0;
`
const Excerpt = styled.p`
    margin: 0;
`

/*
const User = props => (
    <div className={styles.user}>
        <img src={props.avatar} className={styles.avatar} alt="" />
        <div className={styles.description}>
            <h2 className={styles.username}>{props.username}</h2>
            <p className={styles.excerpt}>{props.excerpt}</p>
        </div>
    </div>
)
*/

const User = props => (
    <UserWrapper>
        <Avatar src={props.avatar} alt="" />
        <Description>
            <Username>{props.username}</Username>
            <Excerpt>{props.excerpt}</Excerpt>
        </Description>
    </UserWrapper>
)

const AboutPage = ({data}) => (
    <Layout>
        <div>
            <h1>About Page</h1>
            
            <User
                username={data.site.siteMetadata.author}
                avatar={hillaryImage}
                excerpt="Super awesome dude who climbed the Mount Everest Commodo Magna qt Lorem occaecat veniam ipsum anim.">
            </User>
            <br/>
            <br/>
            <p>Amet magna sunt proident tempor ea dolor nisi do voluptate ad sint proident. Fugiat incididunt non quis ipsum ut consectetur sit officia veniam. Commodo voluptate minim elit consequat. Reprehenderit pariatur sit labore irure sint sunt ad ea nisi Lorem eu. Velit ullamco qui laboris nisi commodo aute reprehenderit. Aliquip ullamco labore veniam nisi dolor deserunt id.</p>
            <Greeting greeting="Hi" name="Artas"/>
            <img style={{width: "150px"}} src={gatsbyAstronaut} alt="Gatsby Astronaut" />
            <br/>
            <Link to="/">Go back to home</Link>
        </div>
        <br/>
    </Layout>
)

export const query = graphql`
    query {
        site {
          siteMetadata {
            author
          }
        }
    }
`

export default AboutPage;