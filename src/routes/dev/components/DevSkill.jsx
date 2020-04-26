import React, { Component } from 'react';
import '../devSkill.css'
import SkillComponent from './SkillComponent';
class DevSkill extends Component{
  render(){
      return (
          <div className="skill">
              <h2>Skill</h2>
              <SkillComponent/>
              <SkillComponent/>

          </div>
      );
  };
};

export default DevSkill;

