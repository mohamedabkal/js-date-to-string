/**
 * @param date {Date}
 */

function jsDateToString(date) {

    const minuteInMs = 60000;
    const hourInMs = 3600000;
    const oneDayInMs = 86400000;
    const weekInMs = 604800000;
    const monthInMs = 2629746000;
    const yearInMs = 31556952000;

    const nowInMs = Date.now();
    const dateToConvertInMs = date?.getTime();
    const diffInMs = nowInMs - dateToConvertInMs;

    // lest than a minute = now
    if (diffInMs < minuteInMs) {
        return 'now';
    }

    // greater than 1 minute and less than 1 hour
    else if (diffInMs >= minuteInMs && diffInMs < hourInMs) {
        const numOfMinutes = Math.floor((diffInMs / minuteInMs));
        return `${numOfMinutes}m`;
    }

    // greater than 1 hour and less than 1 day
    else if (diffInMs >= hourInMs && diffInMs < oneDayInMs) {
        const numOfHours = Math.floor((diffInMs / hourInMs));
        return `${numOfHours}h`;
    }

    // greater than 1 day && less than 1 week
    else if (diffInMs >= oneDayInMs && diffInMs < weekInMs) {
        const numOfDays = Math.floor((diffInMs / oneDayInMs));
        return `${numOfDays}d`;
    }

    // greater than 1 week && less than 1 month
    else if (diffInMs >= weekInMs && diffInMs < monthInMs) {
        const numOfWeeks = Math.floor((diffInMs / weekInMs));
        return `${numOfWeeks}w`;
    }

    // greater than 1 month && less than 1 year
    else if (diffInMs >= monthInMs && diffInMs < yearInMs) {
        const numOfMonths = Math.floor((diffInMs / monthInMs));
        return `${numOfMonths}m`;
    }

    // greater than 1 year
    else if (diffInMs >= yearInMs) {
        const numOfYears = Math.floor((diffInMs / yearInMs));
        return `${numOfYears}y`;
    }

}

module.exports = jsDateToString;