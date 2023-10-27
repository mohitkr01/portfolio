import React from 'react';
import './index.scss';

const SocialLinks = () => {
    return (
        <div className="social">
            <SocialLinks.Link
                url={'https://github.com/mohitkr01'}
                type={'github'}
            />
            <SocialLinks.Link
                url={'https://www.linkedin.com/in/mohit-kumar-13a77253/'}
                type={'linkedin'}
            />
            {/* <SocialLinks.Link
                url={''}
                type={'skype'}
            /> */}
            {/* <SocialLinks.Link
                url={''}
                type={'telegram'}
            /> */}
            <SocialLinks.Link
                url={'https://www.facebook.com/mohitbarawal/'}
                type={'facebook'}
            />
            <SocialLinks.Link
                url={'https://www.instagram.com/mohit_krmk/'}
                type={'instagram'}
            /> 
        </div>
    );
};



SocialLinks.Link = ({url, type}) => <a href={url} target="_blank" ><span className={`fab fa-${type}`} /></a>
;

export default SocialLinks;
