import Vue from 'vue';

import DocsExternalLink from '~/common/DocsExternalLink';
import DocsInternalLink from '~/common/DocsInternalLink';
import DocsAnchorTarget from '~/common/DocsAnchorTarget';
import DocsPageSection from '~/common/DocsPageSection';
import DocsPageTemplate from '~/common/DocsPageTemplate';
import ComponentDocs from '~/common/ComponentDocs';
import DocsDoNot from '~/common/DocsDoNot';
import DocsShow from '~/common/DocsShow';

Vue.component('ComponentDocs', ComponentDocs);
Vue.component('DocsPageTemplate', DocsPageTemplate);
Vue.component('DocsPageSection', DocsPageSection);
Vue.component('DocsInternalLink', DocsInternalLink);
Vue.component('DocsAnchorTarget', DocsAnchorTarget);
Vue.component('DocsExternalLink', DocsExternalLink);
Vue.component('DocsShow', DocsShow);
Vue.component('DocsDoNot', DocsDoNot);
