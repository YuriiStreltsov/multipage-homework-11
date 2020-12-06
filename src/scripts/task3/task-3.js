import '../../styles.css';

import CountdownTimer from './CountdownTimer';

const Timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jan 01, 2021'),
});

Timer.start();
