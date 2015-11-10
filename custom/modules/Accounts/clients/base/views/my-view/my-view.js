/**
 * Created by hrios on 27/08/15.
 */

({
    //tagName: 'article',
    className: 'row-fluid well well-small',

    events: {
        'click [data-action=mail]': 'sendMail',
        'click [data-action=todo]': 'setTodo',
        'click [data-action=tag]' : 'tagRecord',
        'click [data-action=playback]': 'doPlayback'
    },

    loadData: function () {
        debugger;
        console.log('Inside my loadData() function before calling render()');
        this.render();
        console.log('I just called render()...');
    },

    icons: {
        envelope: 'fa fa-envelope',
        favorite: 'fa fa-tag',
        calendar: 'fa fa-calendar',
        youtube: 'fa fa-youtube-play'
    },

    senderEmail: 'admin@sugarcrm.com',

    singleValueForTemplate: 'Hope this helps.',

    sendMail: function () {
        console.log('Send Mail was clicked');
        return "sendMail";
    },

    setTodo: function () {
        console.log('Set todo was clicked');
    },

    tagRecord: function () {
        console.log('Tag record was clicked');
    },

    doPlayback: function () {
        console.log('Do Playback was clicked');
    }



})

