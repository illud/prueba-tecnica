export function getFormatedStringFromDays(date) {
    let diffTime = new Date().valueOf() - new Date(date).valueOf();
    let days = diffTime / (24 * 60 * 60 * 1000);
    let hours = (days % 1) * 24;
    let minutes = (hours % 1) * 60;
    let secs = (minutes % 1) * 60;
    [days, hours, minutes, secs] = [Math.floor(days), Math.floor(hours), Math.floor(minutes), Math.floor(secs)]



    var years = Math.floor(Math.abs(days) / 365);
    var months = Math.floor(Math.abs(days) % 365 / 30);
    var dayss = Math.floor(Math.abs(days) % 365 % 30);

    var yearsDisplay = years > 0 ? years + (years == 1 ? " año, " : " años, ") : "";
    var monthsDisplay = months > 0 ? months + (months == 1 ? " mes, " : " meses, ") : "";
    var daysDisplay = dayss > 0 ? Math.abs(days) + (dayss == 1 ? " día," : " días,") : "";
    return yearsDisplay + monthsDisplay + daysDisplay + ' ' + Math.abs(hours) + 'h' + ', ' + Math.abs(minutes) + 'm' + ', ' + Math.abs(secs) + 's';
}