import React from 'react'
import styled from 'styled-components'

export default class Resume extends React.Component {
  render() {
    return (
      <ResumeContainer>
        <section>
          <h2>hello world!</h2>
        </section>

        <section>
          <article>
            <p>{`My name is Dan and I am a software developer. JavaScript and web security is my current passion. There is little else that I enjoy more than to sit down, and grok new ideas. I'll be updating this website in my spare time, so be sure to check back occasioanlly for new content!`}</p>
          </article>
        </section>

        <section>
          <h2>skills</h2>
        </section>

        <section>
          <article>
            <p>
              <strong>Working Knowledge</strong><br />
              JavaScript, PostgreSQL, React Native, React, Android, CSS3, Git, HTML5, Java, Node.js, T-SQL, Angular
            </p>
          </article>
          <article>
            <p>
              <strong>Basic Knowledge</strong><br />
              AWS, Agile, C, C++, C#, Code Igniter, JIRA, jQuery, Linux, MySQL, PHP, SVN, Mocha, Jasmine, JUnit, Tableau, Power BI, Rust, RxJS, GraphQL, A-Frame, Three.js
            </p>
          </article>
        </section>

        <section>
          <h2>education</h2>
        </section>
        
        <section>
          <article>
            <p>
              <strong>British Columbia Institute of Technology</strong><br />
              Diploma - Computer Systems Technology<br />
              Graduated with Distinction<br />
              2014 – 2016
            </p>
          </article>
          <article>
            <p>
              <strong>Simon Fraser University</strong><br />
              Bachelor of Arts - English<br />
              2008 – 2012
            </p>
          </article>
        </section>
      </ResumeContainer>
    )
  }
}

const ResumeContainer = styled.section`
  margin: 0;
  max-width: 540px;
  padding-top: 32px;
  padding-left: 16px;
  padding-right: 16px;
  color: rgba(0,0,0,0.8);

  strong {
    line-height: 2;
  }
`