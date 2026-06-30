import React, { useEffect, useState } from 'react';
import './index.scss';

const scrollToTop = () => {
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    requestAnimationFrame(() => {
        document.documentElement.style.scrollBehavior = '';
    });
};

const BackToTop = () => {
    const [visible, setVisible] = useState('');
    useEffect(() => {
        function handleScroll(e) {
            if (window.scrollY > 0) {
                setVisible('show')
            } else {
                setVisible('hide')
            }
        }
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);


    return (
        <div onClick={scrollToTop} className={`back-to-top ${visible}`}>
            <i className="fas fa-arrow-circle-up"></i>
        </div>
    );
};

export default BackToTop;
