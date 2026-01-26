import './404.css';

import FuzzyText from '../../Components/Buttons/404/FuzzyText';

export default function Page404() {
    return (
        <div className="Page404-style">
            <FuzzyText baseIntensity={0.1}>
                404 - Page Not Found
            </FuzzyText>
            <a href="/"><p>Go back home ↗</p></a>
        </div>
    );
}