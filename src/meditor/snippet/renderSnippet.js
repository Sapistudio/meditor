import CSS_CLASS from '../constants/cssClass';
import ICON from '../constants/icon';
import generateId from '../utils/generateId';

export default function (type, title, previewUrl, categories, content, extraData) {
    let self = this;
    let options = self.options;
    let snippetId = generateId();
    let snippetPreviewHtml = `
        <section
            class="${CSS_CLASS.UI} ${CSS_CLASS.SNIPPET} ${type === 'container' ? CSS_CLASS.SNIPPET_CONTAINER : CSS_CLASS.SNIPPET_COMPONENT}"
            data-snippet="#${snippetId}"
            data-type="${type}"
            data-meditor-title="${title}"
            data-meditor-categories="${categories}"
        >
            <span class="${CSS_CLASS.SNIPPET_INNER}">
                <span class="${CSS_CLASS.SNIPPET_PREVIEW}" style="background-image: url('${previewUrl}')"></span>
                <span class="${CSS_CLASS.SNIPPET_TITLE}" title="${title}">${title}</span>
                <span class="${CSS_CLASS.SNIPPET_ADD} ${CSS_CLASS.BTN} ${CSS_CLASS.BTN_PRIMARY}" title="${title}">${ICON.ADD} Add</span>
            </span>
        </section>
    `;
    let snippetContentHtml = `<script id="${snippetId}" type="text/html" ${extraData.join(' ')}>${content}</script>`;
    
    categories = categories.split(options.snippetsCategoriesSeparator);
    
    if (type === 'container') {
        self.categoryContainer = self.categoryContainer.concat(categories);
    } else if (type.indexOf('component') !== -1) {
        self.categoryComponent = self.categoryComponent.concat(categories);
    }
    
    return [
        snippetPreviewHtml,
        snippetContentHtml
    ];
};
