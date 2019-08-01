import CSS_CLASS from './cssClass';

export default {
    
    /*
     * Title will be showed in left of topbar
     * @option {String}
     */
    title: 'M\'s Email Editor',
    
    /*
     * Enable nested container or not
     * @option {Boolean}
     */
    nestedContainerEnabled: true,
    
    /*
     * containerForQuickAddComponent The container snippet which will be added automatically in content are when you adding a component. Note: component will be added in first container content of container
     * @option {String}
     */
    containerForQuickAddComponent: `
        <div class="row">
            <div class="col-sm-12" data-type="container-content">
            </div>
        </div>
    `,
    
    /*
     * Extra settings in sidebar
     * @option {Object<String, Object>}
     * @format:
     * {
     *     settingName: {
     *         title,
     *         content,
     *         trigger
     *         settingShowFunction
     *     }
     * }
     * @settingName.option {String} title
     * @settingName.option {jQuery|Function} trigger If pass as function, argument will be current extra setting. This function must return a jQuery object
     * @settingName.option {Function} settingInitFunction Same arguments with "containerSettingInitFunction"
     * @settingName.option {Function} settingShowFunction Same arguments with "containerSettingShowFunction"
     * @example:
     * {
     *     settingName1: {
     *         title: 'Page Settings',
     *         trigger: $('.btn-page-setting'),
     *         settingInitFunction: function (form, meditor) {
     *             form.append('<div>This is content of page settings</div>');
     *         },
     *         settingShowFunction: function (form, trigger, meditor) {
     *             // Do something
     *         }
     *     },
     *     settingName2: {
     *         title: 'Page Settings 2',
     *         triggerSelector: '.btn-page-settings',
     *         trigger: function (extraSetting) {
     *             return $(extraSetting.triggerSelector);
     *         },
     *         settingInitFunction: function (form, meditor) {
     *             form.append('<div>This is content of page settings 2</div>');
     *         },
     *         settingShowFunction: function (form, trigger, meditor) {
     *             // Do something
     *         }
     *     }
     * }
     */
    extraSettings: null,
    
    locale: {
        /*
         * Text title for devices switcher
         * @option {String}
         */
        viewOnMobile: 'View on mobile',
        viewOnTablet: 'View on tablet',
        viewOnLaptop: 'View on laptop',
        viewOnDesktop: 'View on desktop',
    
        /*
         * Text title for preview mode
         * @option {String}
         */
        previewOn: 'Preview ON',
        previewOff: 'Preview OFF',
    
        /*
         * Text title for fullscreen mode
         * @option {String}
         */
        fullscreenOn: 'Fullscreen ON',
        fullscreenOff: 'Fullscreen Off',
    
        /*
         * Text title for save button
         * @option {String}
         */
        save: 'Save',
    
        /*
         * Text title for add content button
         * @option {String}
         */
        addContent: 'Add content',
    
        /*
         * Text title for add content button below sub-container and component
         * @option {String}
         */
        addContentBelow: 'Add Content Below',
    
        /*
         * Text title for container setting
         * @option {String}
         */
        containerSetting: 'Container Settings',
        
        /*
         * Text content for confirm dialog when deleting container
         * @option {String}
         */
        confirmDeleteContainerText: 'Are you sure that you want to delete this container? This action can not be undone!',
    
        /*
         * Text content for confirm dialog when deleting container
         * @option {String}
         */
        confirmDeleteComponentText: 'Are you sure that you want to delete this component? This action can not be undone!',
    },
    
    /*
     * Width of mobile device
     * @option {Number}
     */
    widthMobile: 480,
    
    /*
     * Width of tablet device
     * @option {Number}
     */
    widthTablet: 820,
    
    /*
     * Width of laptop device
     * @option {Number}
     */
    widthLaptop: 1050,
    
    /*
     * Min width of desktop device
     * @option {Number}
     */
    minWidthDesktop: 1200,
    
    /*
     * Default component type of component. If type of component does not exist in MEditor.components, will be used "defaultComponentType" as type of this component. If is function, argument is component
     * @option {String|Function}
     * @param {jQuery} component
     */
    defaultComponentType: 'blank',
    
    /*
     * Url to snippets file
     * @option {String}
     */
    snippetsUrl: 'snippets/snippets.html',
    
    /*
     * The separator character between each categories
     * @option {String}
     */
    snippetsCategoriesSeparator: ';',
    
    /*
     * Content styles for iframe mode. Beside of this option, MEditor will add all elements which have 'data-type=meditor-style' for iframe stylesheet. These elements can be 'link', 'style' or any tags. If these elements have 'href' attribute, will create link tag with href. If these elements do not have 'href' attribute, will create style tag with css rule is html code inside element
     * @option {Array<Object>}
     * @example:
     * [
     *     {
     *         href: '/path/to/style/file'
     *     }, {
     *         content: 'a { color: red; }'
     *     }
     * ]
     */
    contentStyles: [],
    
    /*
     * Selector of content areas. If is null or selector does not match any elements, will create default content area and wrap all content inside it.
     * @option {String}
     */
    contentAreasSelector: null,
    
    /*
     * The wrapper element for all contents inside iframe or new div which will contains content of textarea. It's just for displaying purpose. If you want all contents inside iframe are appended into body tag, just leave it as blank
     * @option {String}
     */
    contentAreasWrapper: `<div class="${CSS_CLASS.UI} ${CSS_CLASS.CONTENT_AREAS_WRAPPER}"></div>`,
    
    /*
     * Enable setting panel for container
     * @option {Boolean}
     */
    containerSettingEnabled: false,
    
    /*
     * Method will be called when initializing setting panel for container
     * @option {Function}
     * @param {jQuery} container
     * @param {MEditor} meditorInstance
     */
    containerSettingInitFunction: null,
    
    /*
     * Method will be called when setting panel for container is showed
     * @option {Function}
     * @param {jQuery} settingForm
     * @param {jQuery} container
     * @param {MEditor} keditorInstance
     */
    containerSettingShowFunction: null,
    
    /*
     * Method will be called when setting panel for container is hidden
     * @option {Function}
     * @param {jQuery} settingForm
     * @param {MEditor} keditorInstance
     */
    containerSettingHideFunction: null,
    
    /*
     * Callback will be called after meditor instance is ready
     * @option {Function}
     */
    onReady: function () {
    },
    
    /*
     * Callback will be called after clicking on "Save" button in topbar
     * @option {Function}
     * @param {String} content
     */
    onSave: function (content) {
    },
    
    /*
     * Callback will be called after snippets are loaded. If you want to modify snippets content, please return modified
     * @option {Function}
     * @param {String} resp
     * @return {String}
     */
    onSnippetsLoaded: function (resp) {
    
    },
    
    /*
     * Callback will be called when error in loading snippets
     * @option {Function}
     * @param {jqXHR} jqXHR
     */
    onSnippetsError: function (jqXHR) {
    
    },
    
    /*
     * Callback will be called after iframe and content areas wrapper inside it are created
     * @option {Function}
     * @param {jQuery} iframe
     * @param {jQuery} iframeHead
     * @param {jQuery} iframeBody
     */
    onInitIframe: function (iframe, iframeHead, iframeBody) {
    },
    
    /*
     * Callback will be called when content is changed. Includes add, delete, duplicate container or component. Or content of a component is changed
     * @option {Function}
     * @param {Event} event
     * @param {jQuery} contentArea
     */
    onContentChanged: function (event, contentArea) {
    },
    
    /*
     * Callback will be called before initializing container
     * @option {Function}
     * @param {jQuery} contentArea
     */
    onBeforeInitContentArea: function (contentArea) {
    },
    
    /*
     * Callback will be called when initializing content area. It can return array of jQuery objects which will be initialized as container in content area. By default, all first level sections under content area will be initialized
     * @option {Function}
     * @param {jQuery} contentArea
     */
    onInitContentArea: function (contentArea) {
    },
    
    /*
     * Callback will be called before initializing container
     * @option {Function}
     * @param {jQuery} container
     * @param {jQuery} contentArea
     */
    onBeforeInitContainer: function (container, contentArea) {
    },
    
    /*
     * Callback will be called when initializing container. It can return array of jQuery objects which will be initialized as editable components in container content (NOTE: these objects MUST be under elements which have attribute data-type=`container-content"). By default, all first level sections under container content will be initialized
     * @option {Function}
     * @param {jQuery} container
     * @param {jQuery} contentArea
     */
    onInitContainer: function (container, contentArea) {
    },
    
    /*
     * Callback will be called before container is deleted
     * @option {Function}
     * @param {Event} event
     * @param {jQuery} selectedContainer
     * @param {jQuery} contentArea
     */
    onBeforeContainerDeleted: function (event, selectedContainer, contentArea) {
    },
    
    /*
     * Callback will be called after container and its components are already deleted
     * @option {Function}
     * @param {Event} event
     * @param {jQuery} selectedContainer
     * @param {jQuery} contentArea
     */
    onContainerDeleted: function (event, selectedContainer, contentArea) {
    },
    
    /*
     * Callback will be called when content of container is changed. It can be when container received new component from snippet or from other container. Or content of any components are changed or any components are deleted or duplicated
     * @option {Function}
     * @param {Event} event
     * @param {jQuery} changedContainer
     * @param {jQuery} contentArea
     */
    onContainerChanged: function (event, changedContainer, contentArea) {
    },
    
    /*
     * Callback will be called when a container is duplicated
     * @option {Function}
     * @param {Event} event
     * @param {jQuery} originalContainer
     * @param {jQuery} newContainer
     * @param {jQuery} contentArea
     */
    onContainerDuplicated: function (event, originalContainer, newContainer, contentArea) {
    },
    
    /*
     * Callback will be called when a container is selected
     * @option {Function}
     * @param {Event} event
     * @param {jQuery} selectedContainer
     * @param {jQuery} contentArea
     */
    onContainerSelected: function (event, selectedContainer, contentArea) {
    },
    
    /*
     * Callback will be called when a container snippet is added in a content area
     * @option {Function}
     * @param {Event} event
     * @param {jQuery} newContainer
     * @param {jQuery} selectedSnippet
     * @param {jQuery} contentArea
     */
    onContainerSnippetAdded: function (event, newContainer, selectedSnippet, contentArea) {
    },
    
    /*
     * Callback will be called after component is initialized. This callback is available or not is depend on component type handler.
     * @option {Function}
     * @param {jQuery} component
     */
    onComponentReady: function (component) {
    },
    
    /*
     * Callback will be called before initializing component
     * @option {Function}
     * @param {jQuery} component
     * @param {jQuery} contentArea
     */
    onBeforeInitComponent: function (component, contentArea) {
    },
    
    /*
     * Callback will be called when initializing component
     * @option {Function}
     * @param {jQuery} component
     * @param {jQuery} contentArea
     */
    onInitComponent: function (component, contentArea) {
    },
    
    /*
     * Callback will be called before a component is deleted
     * @option {Function}
     * @param {Event} event
     * @param {jQuery} selectedComponent
     * @param {jQuery} contentArea
     */
    onBeforeComponentDeleted: function (event, selectedComponent, contentArea) {
    },
    
    /*
     * Callback will be called after a component is deleted
     * @option {Function}
     * @param {Event} event
     * @param {jQuery} selectedComponent
     * @param {jQuery} contentArea
     */
    onComponentDeleted: function (event, selectedComponent, contentArea) {
    },
    
    /*
     * Callback will be called when content of a component is changed
     * @option {Function}
     * @param {Event} event
     * @param {jQuery} changedComponent
     * @param {jQuery} contentArea
     */
    onComponentChanged: function (event, changedComponent, contentArea) {
    },
    
    /*
     * Callback will be called when a component is duplicated
     * @option {Function}
     * @param {Event} event
     * @param {jQuery} originalComponent
     * @param {jQuery} newComponent
     * @param {jQuery} contentArea
     */
    onComponentDuplicated: function (event, originalComponent, newComponent, contentArea) {
    },
    
    /*
     * Callback will be called when a component is selected
     * @option {Function}
     * @param {Event} event
     * @param {jQuery} selectedComponent
     * @param {jQuery} contentArea
     */
    onComponentSelected: function (event, selectedComponent, contentArea) {
    },
    
    /*
     * Callback will be called after a component snippet is added in a container
     * @option {Function}
     * @param {Event} event
     * @param {jQuery} newComponent
     * @param {jQuery} selectedSnippet
     * @param {jQuery} contentArea
     */
    onComponentSnippetAdded: function (event, newComponent, selectedSnippet, contentArea) {
    },
    
    /*
     * Callback will be called before loading dynamic content
     * @option {Function}
     * @param {jQuery} dynamicElement
     * @param {jQuery} component
     * @param {jQuery} contentArea Can be null if preview is ON
     */
    onBeforeDynamicContentLoad: function (dynamicElement, component, contentArea) {
    },
    
    /*
     * Callback will be called after dynamic content is loaded
     * @option {Function}
     * @param {jQuery} dynamicElement
     * @param {jqXHR} , jqXHR
     * @param {jQuery} contentArea Can be null if preview is ON
     */
    onDynamicContentLoaded: function (dynamicElement, jqXHR, contentArea) {
    },
    
    /*
     * Callback will be called if loading dynamic content is error, abort or timeout
     * @option {Function}
     * @param {jQuery} dynamicElement
     * @param {jqXHR} , jqXHR
     * @param {jQuery} contentArea Can be null if preview is ON
     */
    onDynamicContentError: function (dynamicElement, jqXHR, contentArea) {
    }
};

