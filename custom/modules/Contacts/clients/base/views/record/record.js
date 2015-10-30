/**
 * Created by hrios on 19/10/15.
 */

({
    extendsFrom: 'ContactsRecordView',

    zipJSON: {},

    initialize: function(options) {

        this._super('initialize', [options]);

        //add listener for custom button
        this.context.on('button:validate_postal_code:click', this.clickHandler, this);

    },

    clickHandler: function() {
        console.log('Entering validatePostalCode');
        //Enter Logic here

        var currentCity = this.model.get('primary_address_city');
        var currentZip = this.model.get('primary_address_postalcode');

        if (currentCity && currentZip) {

            //jQuery AJAX call to Zippopotamus REST API
            $.ajax({
                url: 'http://api.zippopotam.us/us/' + currentZip,
                success: function(data) {
                    this.zipJSON = data;
                    var city = this.zipJSON.places[0]['place name'];

                    if (city === currentCity)
                    {
                        app.alert.show('address-ok', {
                            level: 'success',
                            messages: 'City and Zipcode match.',
                            autoClose: true
                        });
                    }
                    else
                    {
                        app.alert.show('address-ok', {
                            level: 'error',
                            messages: 'City and Zipcode do not match.',
                            autoClose: false
                        });
                    }
                }
            });
        } else {
            app.alert.show('address-ok', {
                level: 'error',
                messages: 'City and PostalCode must be defined before validation can be performed.',
                autoClose: false
            });
        }
    }
})
