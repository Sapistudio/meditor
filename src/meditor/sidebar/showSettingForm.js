import CSS_CLASS from '../constants/cssClass';
import SETTING_CATEGORY from '../constants/settingCategory';
import closeSidebar from './closeSidebar';

let currentSidebar;

export default function (target, settingType, settingCategory, settingTitle, initFunction, showFunction, functionContext) {
    let self = this;
    let sidebar = self.sidebar;
    let sidebarTitle = self.sidebarTitle;
    let sidebarBody = self.sidebarBody;
    
    let settingForm = sidebarBody.children(`.${CSS_CLASS.SETTING_FORM}[data-setting-type="${settingType}"][data-setting-category="${settingCategory}"]`);

    if (settingForm.length === 0) {
        // if no setting form for component then return without doing anything
        if(typeof initFunction === 'undefined') {
            if (typeof currentSidebar !== 'undefined')
                closeSidebar.call(currentSidebar);
            return;
        }

        if (typeof initFunction === 'function') {

            currentSidebar = self;
            settingForm = $(`
                <div
                    data-setting-type="${settingType}"
                    data-setting-category="${settingCategory}"
                    class="${CSS_CLASS.UI} ${CSS_CLASS.SETTING_FORM}"
                ></div>
            `);
            let loadingText = $(`<span class="${CSS_CLASS.SETTING_FORM_LOADING}" />`).html('Loading...');
            sidebarBody.append(settingForm);
            settingForm.append(loadingText);
            
            $.when(initFunction.call(functionContext, settingForm, self)).done(function () {
                setTimeout(function () {
                    loadingText.remove();
                    
                    if (typeof showFunction === 'function') {
                        showFunction.call(functionContext, settingForm, target, self);
                    }
                }, 100);
            });
        }
    } else {
            if (typeof showFunction === 'function') {           
                showFunction.call(functionContext, settingForm, target, self);
                currentSidebar = self;
            }
    }
    
    self.settingComponent = null;
    self.settingContainer = null;
    
    switch (settingCategory) {
        case SETTING_CATEGORY.COMPONENT:
            self.settingComponent = target;
            break;
        
        case SETTING_CATEGORY.CONTAINER:
            self.settingContainer = target;
            break;
        
        default:
        // Do nothing
    }
    
    sidebarBody.children(`.${CSS_CLASS.STATE_ACTIVE}`).removeClass(CSS_CLASS.STATE_ACTIVE);
    sidebarTitle.html(settingTitle);
    settingForm.addClass(CSS_CLASS.STATE_ACTIVE);
    sidebar.addClass(CSS_CLASS.STATE_OPENED);
}