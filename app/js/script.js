$(document).ready(function() {
    $('#fullpage').fullpage({
        menu: '#menu',
        lockAnchors: true,
        anchors:['firstPage', 'secondPage'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['1', '2', '3', '4', '5'],
        showActiveTooltip: false,
        slidesNavigation: false,
        slidesNavPosition: 'bottom',
        verticalCentered: true
    });
});