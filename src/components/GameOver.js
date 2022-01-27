import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import CountUp from 'react-countup';

const GameOver = ({ score, length, reset }) => {
    const percentage = (score / length) * 100
    const [positiveReaction, setPositiveReaction] = useState(false)
    const [negativeReaction, setNegativeReaction] = useState(false)

    useEffect(() => {
        percentage < 10 ? setNegativeReaction(true) : setPositiveReaction(true)
    })

    return (
        <div className="game-over">
            {positiveReaction &&
                <>
                    <div className="reaction__img reaction__img--positive"></div>
                    <div className="pyro">
                        <div className="before"></div>
                        <div className="after"></div>
                    </div>
                </>
            }
            {negativeReaction &&
                <div className="reaction__img reaction__img--negative"></div>
            }
            <CountUp start={0} end={percentage} delay={0}>
                {({ countUpRef }) => (
                    <div className='score'>
                        <span ref={countUpRef} /><span>%</span>
                    </div>
                )}
            </CountUp>
            <Button variant="outlined" size="large" onClick={reset}>Play again</Button>
        </div>
    );
}

export default GameOver;