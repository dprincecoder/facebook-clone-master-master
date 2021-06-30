import React from 'react';
import Story from './Story';
import './StoryReel.css'
import braid from './asset/braid.jpg'
import makeup from './asset/makeup2.jpg'
import plane from './asset/plane.jpg'
import vacation from './asset/vacation.jpg'


const StoryReel = () => {
    return (
        <div className="storyReel">
            <Story image={braid} title="Mhiz Sonia"  profileSrc={braid}/>
            <Story image={plane} title="Jane Jaya"  profileSrc={plane}/>
            <Story image={makeup} title="Its Victory"  profileSrc={makeup}/>
            <Story image={vacation} title="Sonny Junior"  profileSrc={vacation}/>
        </div>
    )
}

export default StoryReel;
