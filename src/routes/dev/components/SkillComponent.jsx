import React, { Component } from 'react';
import '../devSkill.css'
class SkillComponent extends Component{
  render(){
      return (
          <div className="skill-component">
              <h3>{this.props.skill.name}</h3>
              <div>
                <p>{this.props.skill.keyword}</p>
                <p>{this.props.skill.explain}</p>
              </div>
          </div>
      );
  };
};

export default SkillComponent;

