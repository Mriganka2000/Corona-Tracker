import React from 'react';
import styles from './advice.module.css';
import { Link } from 'react-router-dom';

class Advice extends React.Component {
    render() {
        const advices = [
            '',
            'Wash your hands regularly for 20 seconds, with soap and water or alcohol-based hand rub.',
            'Cover your nose and mouth with a disposable tissue or flexed elbow when you cough or sneeze.',
            'Throw used tissues into closed bins immediately after use.',
            'Avoid close contact (1 meter or 3 feet) with people who are unwell.',
            'Stay home and self-isolate from others in the household if you feel unwell.',
            'Touch your eyes, nose, or mouth if your hands are not clean.',
            'Remember that some people without symptoms may be able to spread virus.',
            'Keeping distance from others is especially important for people who are at higher risk of getting very sick.',
            'Clean AND disinfect frequently touched surfaces daily. Like tables, doorknobs, handles, desks, phones etc.',
            'Do NOT use a facemask meant for a healthcare worker.',
        ]
    
        let index = Math.floor((Math.random() * 10) + 1);
        return (
            <div>
                <div className={styles.app}>
                    <div className={styles.card}>
                        <h1>Follow to Stay safe :-</h1>
                        <h2 className={styles.heading}>{advices[index]}</h2>
                        <button className={styles.button} onClick={() => window.location.reload(false)}>
                            <span>GIVE ME ADVICE!</span>
                        </button>
                        <Link to={`data`}>
                            <button className={styles.button} type="submit">
                                <span>Show the data of COVID-19</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Advice;