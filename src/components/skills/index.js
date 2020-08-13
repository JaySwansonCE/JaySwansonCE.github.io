import React from 'react'
import { intro, intro2, skills, languages } from './text'

const Skills = () => (
  <div className="row skill">
    <div className="two columns header-col">
      <h1>
        <span>Skills</span>
      </h1>
    </div>

    <div className="ten columns main-col">
      {intro}

      <div className="bars">
        <ul className="skills">
        {/* below will now sort lists by skill level instead of just by order entered */}
        {skills.sort((a, b) => b.value - a.value).map(skill => (
            <li key={skill.name}>
              <span
                className="bar-expand"
                style={{ width: skill.value + '%' }}
              />
              <em>{skill.name}</em>
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* <div className="row skill"> */}
    <div className="two columns header-col">
      <h1>
        <span>Languages</span>
      </h1>
    </div>

    <div className="ten columns main-col">
      {intro2}

      <div className="bars">
        <ul className="languages">
        {/* below will now sort lists by skill level instead of just by order entered */}
        {languages.sort((a, b) => b.value - a.value).map(language => (
            <li key={language.name}>
              {/* <span
                className="bar-expand"
                style={{ width: language.value + '%' }}
              /> */}
              <em>{language.name}</em>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>

)

export default Skills
