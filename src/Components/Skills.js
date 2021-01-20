import React, { Component } from 'react'
import Title from './Title'
import '../Scss/Skills.scss';
import SkillBar from './SkillBar';
class Skills extends Component {
    render() {
        return (
            <section id='Skills' className='Skills max-width'>
            <Title title='My Skills' mycontent='' color='black' bgColor='black' afterColor='crimson' afterBgColor='white' />
            <p className='heading'>My creative skills & experience</p>
            <div className='SkillBars'>
                <SkillBar id='HTML5' name='HTML5' percent={90} percentage='90%'/>
                <SkillBar id='CSS3' name='CSS3' percent={80} percentage='80%'/>
                <SkillBar id='JavaScript' name='JavaScript' percent={80} percentage='80%'/>
                <SkillBar id='React' name='React.js' percent={90} percentage='90%'/>
                <SkillBar id='Redux' name='Redux' percent={70} percentage='70%'/>
                <SkillBar id='Node' name='Node' percent={60} percentage='60%'/>
                <SkillBar id='Express' name='Express.js' percent={70} percentage='70%'/>
                <SkillBar id='MongoDB' name='MongoDB' percent={60} percentage='60%'/>
                <SkillBar id='MySQL' name='MySQL' percent={60} percentage='60%'/>
                <SkillBar id='Material-UI' name='Material-UI' percent={50} percentage='50%'/>
                <SkillBar id='ReactStrap' name='ReactStrap' percent={50} percentage='50%'/>
                <SkillBar id='Jest' name='Jest' percent={50} percentage='50%'/>
                <SkillBar id='Webpack' name='Webpack' percent={40} percentage='40%'/>
                
            </div>
            </section>
        );
    }
}

export default Skills;