import propTypes from 'prop-types';
import css from './Statistics.module.css';


export const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => 
{
    console.log(positiveFeedback)
    return (<ul className={css.StaticsList}>
        <li  className={ css.StaticsItem}>Good: {good}</li>
        <li  className={css.StaticsItem}>Neutral: {neutral}</li>
        <li  className={css.StaticsItem}>Bad: {bad}</li>
        <li  className={css.StaticsItem}>Total: {total}</li>
        <li  className={css.StaticsItem}>Positive Feedback: {positiveFeedback}%</li>
        
    </ul>)

}

 Statistics.propTypes = {
    good: propTypes.number.isRequired,
    neutral: propTypes.number.isRequired,
    bad: propTypes.number.isRequired,
    total: propTypes.number.isRequired,
    positiveFeedback: propTypes.number.isRequired
}
 export default Statistics;
