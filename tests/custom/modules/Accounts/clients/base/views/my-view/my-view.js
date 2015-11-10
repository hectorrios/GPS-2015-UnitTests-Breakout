/**
 * Created by hrios on 20/10/15.
 */

/*
 * Basic Jasmine test template for any Sugar 7 view
 */
ddescribe("Jasmine template for Sugar 7 views", function () {
    /*
     * Some useful constants for our tests.
     * We use them to keep track of the module, layout, and view we are testing
     */
    var moduleName = 'Accounts';    //TODO CHANGE TO AN APPROPRIATE MODULE
    var viewName = "my-view";     //TODO CHANGE TO YOUR VIEW NAME
    var layoutName = "record"; //TODO CHANGE TO YOUR PARENT LAYOUT NAME

    /*
     * Variables shared by all tests
     */
    var app;
    var view;
    var layout;

    /**
     * Called before each test below.  We use this function to setup (or mock up) the necessary pieces
     * in order to test our Sidecar controller properly.
     *
     * Typically, we need to define Sugar view metadata and ensure that our controller JS file has been loaded
     * by the Sidecar framework.  We utilize some SugarTest utility functions to accomplish this.
     */
    beforeEach(function() {
        // Proxy for our typical Sidecar `app` object
        app = SugarTest.app;
        //Ensure test metadata is initialized
        SugarTest.testMetadata.init();

        /**
         * TODO LOAD ANY ADDITIONAL DEPENDENCIES USING SugarTest.load FUNCTIONS HERE
         */

            //Load custom Handlebars template
        SugarTest.loadCustomHandlebarsTemplate(viewName, 'view', 'base', null, moduleName);
        //Load custom component JS
        SugarTest.loadCustomComponent('base', 'view', viewName , moduleName);


        //Mock view metadata for our custom view
        SugarTest.testMetadata.addViewDefinition(
            viewName,
            //TODO SETUP YOUR FAKE VIEW METADATA HERE
            {
                'panels': [
                    {
                        fields: []
                    }
                ]
            },
            moduleName
        );
        //Commit custom metadata into Sidecar
        SugarTest.testMetadata.set();

        //Mock the Sidecar context object
        var context = app.context.getContext();
        context.set({
            module: moduleName,
            layout: layoutName
        });
        context.prepare();

        //Create parent layout for our view using fake context
        layout = app.view.createLayout({
            name: layoutName,
            context: context
        });

        //Create our View before each test

        view = app.view.createView({
            name : viewName,
            context : context,
            module : moduleName,
            layout: layout,
            platform: 'base'
        });

    });

    /**
     * Perform cleanup after each test.
     */
    afterEach(function() {
        //Delete test metadata
        SugarTest.testMetadata.dispose();
        //Delete list of declared components
        app.view.reset();
        //Dispose of our view
        view.dispose();
    });


    /**
     * Make sure that our view object exists
     */
    it('should exist.', function() {
        expect(view).toBeTruthy();
    });

    /**
     * TODO ADD YOUR TESTS HERE WITHIN DESCRIBE() AND IT() FUNCTIONS
     */

    it('should render 4 icons', function() {

        view.render();
        expect(view.$el.html()).toContain('fa fa-envelope');
        expect(view.$el.html()).toContain('fa fa-tag');
        expect(view.$el.html()).toContain('fa fa-calendar');
        expect(view.$el.html()).toContain('fa fa-youtube-play');

    });

    it('should contain a dataObjForTemplate property', function() {
        expect(view.senderEmail).toBeDefined();
        expect(view.senderEmail).toEqual('admin@sugarcrm.com');
    });

});